# Information Required Before Launch

Run `node build.mjs` to see what's still missing. Nothing on the site has been invented.

## Already set

- [x] Name: **Shorehaven**
- [x] Site URL: `https://shorehaven.pages.dev`
- [x] Hours: **Monday–Friday, 9:00 AM – 5:00 PM (Central Time)**, office meetings by appointment
- [x] Business type: **storefront office** at **8360 Lyndon B Johnson Fwy, Dallas, TX 75243** (Google Business Profile "Local store")
- [x] Services confirmed: plan setup, records and valuations, Form 5500-EZ preparation, ongoing
      support, Self-Directed and Solo 401(k) education, and office meetings
- [x] Role: administrative support alongside the client's plan provider, at the sponsor's
      direction. The business is not a fiduciary, trustee, custodian, registered investment
      adviser or broker-dealer.
- [x] Format: a one-page site, with separate Privacy, Terms and Disclosures pages

## Required

| Item | Notes |
|---|---|
| **Business phone** | `business.phone` and `business.phoneE164`. Currently a visible placeholder. |
| **Contact form key** | The site runs on Cloudflare Pages, so the form uses **Web3Forms**. Sign up free at web3forms.com with the inbox that should receive requests, then paste the access key into `form.accessKey` in `site.config.mjs`. Until then the form shows a notice and doesn't send. |
| **Register the business name** | Texas assumed name certificate: Form 503 with the Texas Secretary of State (LLC or corporation), or with the Dallas County Clerk (sole proprietor). Then set `business.publicNameConfirmed: true`. Check SOSDirect, the USPTO and Google Maps for "Shorehaven" conflicts first. |

Optional: `business.geo` with the office's real coordinates.

## Recommended before going public

- [ ] An attorney has reviewed the Privacy Policy, Terms and Disclosures (Texas law, administrative-services wording).
- [ ] An ERISA attorney has confirmed the administrative-services role.
- [ ] Web3Forms: a test submission from the live site arrived in the inbox.
- [ ] Cloudflare Pages: the site is deployed. Then add the Search Console verification code to `site.googleSiteVerification`.

## Optional (hidden until set)

Business email, owner name, company history and credentials.
