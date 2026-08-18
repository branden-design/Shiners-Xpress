# Shiner's Express Car Wash — Website

Redesign of shinerscarwash.com: a more visual, 3D-forward marketing site with a
Flexwash-powered membership portal.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- react-three-fiber / drei / three.js for the 3D hero scene
- Framer Motion for 3D tilt cards and page motion

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing real business content

A few things are intentionally placeholders and should be updated before launch:

- **Locations** — `src/lib/locations.ts`. Replace the sample entries with your
  real addresses, cities, and hours.
- **Phone / email** — `src/lib/site.ts` (`siteConfig`).
- **Pricing** — `src/lib/pricing.ts` already reflects the current drive-thru
  menu board (Regular/Plus/Premium Ceramic/Premium Graphene). Update here if
  prices change — it drives both the homepage teaser and the `/membership`
  page.

## Flexwash membership portal

The `/membership` page embeds Flexwash's hosted member portal via iframe:

```
src/components/FlexwashPortal.tsx
```

It points at `siteConfig.flexwashUrl` in `src/lib/site.ts`
(`https://app.flexwash.com/member-portal?organizationId=334`). An "Open in New
Tab" link is included alongside the embed in case Flexwash's own security
headers ever block iframing in a given browser.

## Fonts

The brand guide specifies **Manifold Extended** (display) and **Darker
Grotesque** (display/body). Darker Grotesque is a free Google Font and is
wired up directly via `next/font/google`. Manifold Extended is a commercial
foundry font not available on Google Fonts — the site currently substitutes
**Unbounded** (a similarly wide, geometric Google Font) as a close visual
stand-in for headings.

To use the real Manifold Extended once you have licensed font files:

1. Add the font files under `src/app/fonts/`.
2. Replace the `Unbounded` import in `src/app/layout.tsx` with `next/font/local`
   pointed at those files, keeping the `variable: "--font-display-family"` name
   so the rest of the site picks it up automatically.

## Brand tokens

Colors and font variables live in `src/app/globals.css` under `@theme inline`,
sourced from the brand guide:

- `shiner-blue` `#3f76bb`
- `shiner-navy` `#18242c`
- `shiner-gray` `#a8a8aa`
