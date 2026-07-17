const jsonHeaders = {
  "Content-Type": "application/json; charset=utf-8",
};

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: jsonHeaders,
  });
}

function validCheckoutSessionId(value) {
  return typeof value === "string" && /^cs_[a-zA-Z0-9_]{8,240}$/.test(value);
}

async function stripeGet(path, env) {
  const response = await fetch(`https://api.stripe.com${path}`, {
    headers: {
      Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
    },
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(body?.error?.message || "Stripe request failed.");
  }
  return body;
}

export async function onRequestGet({ request, env }) {
  if (!env.STRIPE_SECRET_KEY || !env.STRIPE_PRICE_ID) {
    return jsonResponse({ error: "Stripe is not configured." }, 500);
  }

  const sessionId = new URL(request.url).searchParams.get("session_id") || "";
  if (!validCheckoutSessionId(sessionId)) {
    return jsonResponse({ error: "Invalid checkout session." }, 400);
  }

  try {
    const session = await stripeGet(`/v1/checkout/sessions/${encodeURIComponent(sessionId)}`, env);
    const lineItems = await stripeGet(`/v1/checkout/sessions/${encodeURIComponent(sessionId)}/line_items?limit=10`, env);
    const priceOk = Array.isArray(lineItems.data)
      && lineItems.data.some((item) => item?.price?.id === env.STRIPE_PRICE_ID);
    const paid = session.status === "complete" && session.payment_status === "paid" && priceOk;

    return jsonResponse({
      paid,
      price_ok: priceOk,
      status: session.status || "",
      payment_status: session.payment_status || "",
      client_reference_id: session.client_reference_id || "",
    });
  } catch {
    return jsonResponse({ error: "Payment could not be verified." }, 502);
  }
}
