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
