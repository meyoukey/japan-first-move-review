const jsonHeaders = {
  "Content-Type": "application/json; charset=utf-8",
};

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: jsonHeaders,
  });
}

function siteOrigin(request, env) {
  const configuredOrigin = typeof env.SITE_ORIGIN === "string" ? env.SITE_ORIGIN.trim() : "";
  const origin = configuredOrigin || new URL(request.url).origin;
  return origin.replace(/\/+$/, "");
}

function validPurchaseAttemptId(value) {
  return typeof value === "string" && /^[a-zA-Z0-9_-]{8,120}$/.test(value);
}

const attributionMetadataKeys = {
  utm_source: "jfm_utm_source",
  utm_medium: "jfm_utm_medium",
  utm_campaign: "jfm_utm_campaign",
  utm_content: "jfm_utm_content",
};

function normalizedAttribution(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }

  return Object.fromEntries(
    Object.keys(attributionMetadataKeys)
      .map((name) => [name, typeof value[name] === "string" ? value[name].trim().toLowerCase() : ""])
      .filter(([, attributionValue]) => (
        attributionValue.length > 0
        && attributionValue.length <= 80
        && /^[a-zA-Z0-9._~-]+$/.test(attributionValue)
      )),
  );
}

export async function onRequestPost({ request, env }) {
  if (!env.STRIPE_SECRET_KEY || !env.STRIPE_PRICE_ID) {
    return jsonResponse({ error: "Stripe is not configured." }, 500);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid request." }, 400);
  }

  const purchaseAttemptId = payload?.purchase_attempt_id;
  if (!validPurchaseAttemptId(purchaseAttemptId)) {
    return jsonResponse({ error: "Invalid checkout request." }, 400);
  }

  const origin = siteOrigin(request, env);
  const params = new URLSearchParams();
  params.set("mode", "payment");
  params.set("line_items[0][price]", env.STRIPE_PRICE_ID);
  params.set("line_items[0][quantity]", "1");
  params.set("success_url", `${origin}/food-card/custom/success?session_id={CHECKOUT_SESSION_ID}`);
  params.set("cancel_url", `${origin}/food-card/custom/?checkout=cancelled`);
  params.set("client_reference_id", purchaseAttemptId);
  const attribution = normalizedAttribution(payload?.attribution);
  Object.entries(attribution).forEach(([name, value]) => {
    params.set(`metadata[${attributionMetadataKeys[name]}]`, value);
  });

  const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  const stripeSession = await stripeResponse.json().catch(() => ({}));
  if (!stripeResponse.ok || !stripeSession.url) {
    return jsonResponse({ error: "Payment could not be started." }, 502);
  }

  return jsonResponse({ url: stripeSession.url });
}
