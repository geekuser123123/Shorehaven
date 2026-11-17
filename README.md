# Shorehaven: Website

A one-page site for Shorehaven, which provides Solo and self-directed 401(k) plan support from an
office in Dallas, Texas. It's static with no dependencies, built with Node and hosted on
**Cloudflare** (Workers static assets via `wrangler.jsonc`, or Pages).

## Quick start

```bash
node build.mjs          # builds ./dist; checks internal links; lists missing info
STRICT=1 node build.mjs # pre-launch check (fails while placeholders remain)
```

## Deploy to Cloudflare

**Workers (current setup):** Workers & Pages → Create → Import a repository → this repo.
Build command `npm run build`, deploy command `npx wrangler deploy`. `wrangler.jsonc` serves `./dist`.
Every push to the branch redeploys automatically.

**Pages (alternative):** Build command `node build.mjs`, output directory `dist`.

Security headers and redirects live in `src/static/_headers` and `src/static/_redirects`, which
are copied into `dist/` and applied by Cloudflare. After the first deploy, set `site.url` in
`site.config.mjs` to the live address (or custom domain) so canonicals, the sitemap and the form's
thank-you redirect are correct.

## Contact form (n8n)

The meeting form posts to an **n8n Webhook**, and the n8n workflow routes each submission
(email, sheet, CRM) and redirects the visitor to `/thank-you/`. Put the webhook's production URL
in `form.webhookUrl` in `site.config.mjs`. Until then the form shows a "not connected yet" notice
and won't send. Setup steps: `docs/N8N-FORM-SETUP.md`.

## Office

**8360 Lyndon B Johnson Fwy, Dallas, TX 75243** (storefront office). Phone: placeholder until provided.

## Structure

The homepage (`/`) holds every section, each reachable from the menu and the sticky section bar:
Services · How it works · Who does what · 401(k) basics · FAQ · About · Visit & contact (meeting form).
`/privacy-policy/`, `/terms/` and `/disclosures/` are separate pages under Texas law,
plus `/thank-you/` and `404.html`.

## Design

- **Palette:** deep lake `#15283A`, lake teal `#237A8A`, sand `#E9C88F`, sunset pink `#F4B9A0`, shell white `#FBF9F5`
- **Type:** Crimson Pro (display) and Onest (text), both self-hosted
- **Logo:** a pill-shaped "shore stone" with a sand sun setting into calm water (`src/brand.mjs`)
- **Hero:** background video of the Dallas skyline at golden hour (desktop only; phones get the poster image)

See `docs/` for the launch checklist, media sources, Search Console and Google Business Profile steps.
