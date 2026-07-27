# Japan First Move — Launch Monitoring

## Purpose

Use this page when checking the site after launch or investigating a payment problem.

## Owner and timing

Owner: Site operator (project owner)

Check Cloudflare and Stripe:

1. Immediately after the production deployment and real-payment test.
2. One hour after launch.
3. At the end of the launch day.
4. The next morning.

## Before the production deployment

Record the deployment that is currently working:

- Last known-good commit:
- Cloudflare production deployment URL or ID:
- Verified at (JST):

## If the payment page does not open

Check Cloudflare first.

1. Open **Workers & Pages** in the Cloudflare Dashboard.
2. Select the Japan First Move Pages project.
3. Open the production deployment, then **View details → Functions**.
4. Start the live log view.
5. Look for repeated failures on:
   - `/api/create-checkout-session`
   - `/api/verify-checkout-session`

What the main responses mean:

- `400`: Invalid or incomplete request. An isolated occurrence does not necessarily mean the site is broken.
- `500`: A required production environment setting may be missing.
- `502`: The site could not complete its request to Stripe.

Cloudflare Pages Function logs are live and are not retained, so open them during the launch checks.

## If Stripe Checkout opens but payment fails

Check Stripe next.

1. Confirm the Stripe Dashboard is showing **live mode**.
2. Open **Payments** and check for failed, incomplete, or duplicate payments.
3. Confirm successful Custom Food Card payments are **USD $7.99**.
4. Open **Workbench → Logs** to inspect recent API errors.
5. Filter by status, error type, or the Checkout Sessions endpoint when needed.

A single customer card decline can be normal. Repeated API errors, unexpected amounts, or duplicate charges require investigation.

## What to record

Record only:

- Date and time in Japan time.
- What the customer or operator saw.
- Which page or step failed.
- HTTP status or Stripe error category.
- Whether the problem affected one attempt or multiple attempts.
- What action was taken.

Do not copy secret keys, full Stripe session IDs, card details, customer personal information, or full log payloads into Git or shared notes.

## When to restore the previous deployment

Consider restoring the last known-good production deployment when:

- Multiple attempts cannot open Stripe Checkout.
- Successful Stripe payments repeatedly fail verification on the site.
- Production Function errors repeat after configuration has been checked.

Do not change Stripe keys or payment settings blindly. First confirm whether the failure is in Cloudflare, Stripe, or the current deployment.

To restore the recorded deployment:

1. Open **Workers & Pages** in the Cloudflare Dashboard.
2. Select the Japan First Move Pages project, then open **Deployments**.
3. In **All deployments**, open the actions menu for the recorded production deployment.
4. Select **Rollback to this deployment** and confirm.
5. Verify the production site and payment flow again.

Only a successful production deployment can be used as a rollback target. Do not select a preview deployment.

## Launch check result

- [ ] Cloudflare production Function logs can be opened.
- [ ] Stripe live-mode Payments and Workbench logs can be opened.
- [ ] The site operator knows where to check both services.
