# Japan First Move — Production Launch Checklist

## Must complete before accepting real payments

- [ ] Merge the tested `preview-stripe-test` changes into the production branch and record the last known-good deployment for rollback.
- [ ] Configure the production environment:
  - [ ] `SITE_ORIGIN=https://japanfirstmove.com`
  - [ ] A Stripe **live-mode** secret key in `STRIPE_SECRET_KEY` (never commit it to Git).
  - [ ] The matching Stripe **live-mode** Price ID in `STRIPE_PRICE_ID`.
- [ ] Update Stripe’s public business URLs before accepting live payments:
  - [ ] Support URL: `https://japanfirstmove.com/faq`
  - [ ] Business website: `https://japanfirstmove.com`
  - [ ] Privacy Policy URL: `https://japanfirstmove.com/privacy`
- [x] Confirm the Stripe account is activated for live payments and that business details, payout bank account, statement descriptor, customer receipts, refund handling, and support contact are ready.
- [ ] Complete one small real-payment test on `https://japanfirstmove.com`, then refund it, and confirm both actions in the Stripe Dashboard.
- [ ] Confirm the payment succeeds and the Custom Food Card is displayed.
- [ ] Confirm the Stripe `session_id` is removed from the visible URL.
- [ ] Confirm the production success page cannot be indexed by search engines.
- [x] Test a declined payment and a cancelled checkout, and confirm neither produces a card or a `purchase` event.

## Legal and customer support

- [ ] Confirm the legally required seller identity and mail-order disclosures with a qualified professional. A site/brand name alone may not be sufficient as the seller’s legal name.
- [x] If address and telephone number remain omitted, confirm they can actually be supplied without delay when requested before purchase.
- [x] Confirm `support@japanfirstmove.com` forwards incoming mail successfully and that replies can be sent from `japanfirstmove@gmail.com` with the Japan First Move Support signature.
- [x] Confirm Cloudflare Email Routing’s SPF record and a DMARC monitoring record (`p=none`) are published. DKIM will be required only if outbound mail is later sent from `@japanfirstmove.com`.
- [ ] Review the Terms, Privacy Policy, Legal Notice, Disclaimer, refund wording, price, currency, and product-delivery description one final time.
- [ ] Update every legal page’s “Last updated” date after the final wording is approved.

## Search visibility and domain

- [ ] Remove the temporary `noindex, nofollow` directives from all public content pages and from the page generator.
- [x] Keep preview deployments and `/food-card/custom/success` excluded from search results.
- [ ] Confirm `https://www.japanfirstmove.com` redirects to `https://japanfirstmove.com`.
- [ ] Confirm the apex domain and `www` redirect both use HTTPS with no certificate or mixed-content errors.
- [ ] Confirm `robots.txt`, `sitemap.xml`, canonical URLs, and social-share URLs all use `https://japanfirstmove.com`.
- [ ] Decide whether the dynamic legal routes should have route-specific title/canonical metadata or remain `noindex`.
- [ ] Add and test a useful custom `404.html` page.
- [ ] Verify a Google Search Console domain property, submit `sitemap.xml`, and inspect the homepage plus the Custom Food Card page after launch.

## GA4 and consent

- [ ] Confirm the internal-traffic filter test result after 24–36 hours, then change it from **Testing** to **Active** only after validation.
- [ ] Confirm the GA4 analytics consent signal becomes active after processing (allow up to 48 hours). Advertising consent signals should remain disabled unless advertising is introduced.
- [ ] Confirm the production site shows the compact cookie notice with **Decline** and **Accept cookies**.
- [ ] Confirm GA4 does not load before consent, loads after acceptance, and can be disabled later through **Cookie Settings**.
- [ ] Confirm these events on the production domain:
  - [ ] `begin_checkout` appears in GA4 Realtime.
  - [ ] `purchase` appears once in GA4 Realtime.
  - [ ] `food_card_save` and `food_card_share` appear when used.
- [ ] Confirm `stripe.com` remains in GA4’s unwanted-referrals list.
- [ ] Confirm the GA4 stream URL is `https://japanfirstmove.com`, timezone is Japan, currency is USD, and event-data retention is 14 months.

## Security, privacy, and reliability

- [ ] Add and verify production security headers, including a practical Content Security Policy, clickjacking protection, and Permissions Policy.
- [ ] Self-host the Google font and `html2canvas`, or document and secure the external dependencies appropriately.
- [ ] Confirm no secret keys, test keys, personal data, or Stripe session IDs appear in Git, page source, browser storage longer than required, or analytics reports.
- [ ] Confirm API errors show a useful customer-facing message and do not expose internal details.
- [ ] Confirm Cloudflare deployment and Stripe failures can be identified from logs, and document who will check them after launch.

## Final device and content check

- [ ] Test the complete flow on iPhone Safari, Android Chrome, and a desktop browser.
- [ ] Test language switching, navigation, payment, card generation, download/save, and share.
- [ ] Test keyboard navigation, visible focus, readable contrast, text zoom, and screen-reader labels on the purchase flow.
- [ ] Run a final broken-link and missing-image check after merging to production.
- [ ] Check page speed and Core Web Vitals on the production domain.
- [ ] Proofread the highest-traffic English and Japanese pages, including prices, support email, and external emergency-information links.

## Immediately after launch

- [ ] Confirm the production deployment, apex redirect, cookie choices, checkout, card generation, and analytics one more time.
- [ ] Monitor Stripe payments/failures, Cloudflare errors, 404s, and GA4 events during the first 24 hours.
- [ ] Confirm Search Console can fetch the homepage and sitemap after `noindex` is removed.
