# ملاذ للهدايا | Malaz Gifts

Arabic-first, responsive marketing site for Malaz Gifts. The site uses Next.js App Router with static export; there is no backend.

## Local development

```sh
nvm install
nvm use
npm install
cp .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local` to digits only, including the country code. Set `NEXT_PUBLIC_SITE_URL` to the canonical production URL.

## Build and checks

```sh
npm run lint
npm run typecheck
npm run build
```

The static site is generated in `out/`.

## Cloudflare Pages

Use these project settings:

- Framework preset: **Next.js (Static HTML Export)**
- Build command: `npm run build`
- Build output directory: `out`
- Environment variables:
  - `NODE_VERSION`: `26.13.0` (matches `.nvmrc`)
  - `NEXT_PUBLIC_WHATSAPP_NUMBER`: digits only, with country code
  - `NEXT_PUBLIC_SITE_URL`: canonical site URL

Deploy by connecting the Git repository in **Workers & Pages → Create → Pages → Connect to Git**, or upload the static export directly:

```sh
npx wrangler pages deploy out --project-name malaz-gifts
```

The `npm run deploy` script builds the site and runs that Wrangler command.

## Brand content

- Add the square brand logo (at least 800 × 800 px) as `public/logo.png`, then set `logoAvailable` to `true` in `lib/site.ts`.
- Update product names, prices, optional image paths, and contact placeholders in `lib/site.ts`.
- Set the WhatsApp number, email, and working hours before launch.
- Product and collection photos are intentionally placeholders until supplied.
