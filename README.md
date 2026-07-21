# codeplain.ai

The *codeplain marketing site — Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/` — one route per page, matching the sitemap in `docs/codeplain-website-copy.md`
- `src/components/` — shared building blocks (`Header`, `Footer`, `Button`, `Container`, `SectionHead`, `PageHero`, `Terminal`, `NumberedCard`, `Logo`)
- `src/app/globals.css` — Tailwind theme tokens (brand colors, fonts) via `@theme`
- `docs/codeplain-website-copy.md` — copy deck / content source for every page

### Fonts

Neue Montreal is a licensed commercial font and isn't checked in. Drop the `.woff2` files into `public/fonts/` (see `@font-face` rules in `globals.css` for exact filenames) and the site will pick them up automatically. Until then, pages fall back to the system sans/mono stack.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — ESLint
