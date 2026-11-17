# Shorehaven: Website

A one-page site for Shorehaven, which provides Solo and self-directed 401(k) plan support from an
office in Dallas, Texas. It's static with no dependencies, built with Node and hosted on
**Cloudflare Pages** (currently `https://shorehaven.pages.dev`).

## Quick start

```bash
node build.mjs          # builds ./dist; checks internal links; lists missing info
STRICT=1 node build.mjs # pre-launch check (fails while placeholders remain)
```

## Deploy to Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**, then pick this repo.
2. Project name: `shorehaven`. Production branch: `claude/nifty-cray-89pvhk`.
3. Build command: `node build.mjs`. Build output directory: `dist`.
   (If the build image's Node is older than 18, add the environment variable `NODE_VERSION` = `22`.)
4. Save and deploy. Every push to the branch redeploys automatically.
5. Optional: **Custom domains** → add your domain, then update `site.url` in `site.config.mjs`.

Security headers and redirects live in `src/static/_headers` and `src/static/_redirects`, which
are copied into `dist/` and read by Cloudflare Pages.

## Contact form (Web3Forms)

Cloudflare Pages has no built-in form handling, so the meeting form posts to
[Web3Forms](https://web3forms.com), which emails each submission and then sends the visitor to
`/thank-you/`. Paste the free access key into `form.accessKey` in `site.config.mjs`. Until then
the form shows a "not connected yet" notice and won't send.

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
