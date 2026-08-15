# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

The marketing site for *codeplain (codeplain.ai) — Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Breaking-changes warning

This project pins `next@16.2.10`, which is newer than this model's training data and has breaking API/convention changes. Before writing App Router code (routing, metadata, config, data fetching), check `node_modules/next/dist/docs/01-app/` for the current API rather than relying on prior knowledge.

## Architecture

- `src/app/` — one route per page. Route structure mirrors the nav tree documented in `docs/codeplain-website-copy.md` (Solutions, Learn, Company, Legal sub-trees, etc).
- `src/components/` — shared building blocks.
- `src/components/sections/` — homepage-specific sections composed in `src/app/page.tsx`.
- `src/app/globals.css` — Tailwind v4 theme via `@theme` (brand colors, `PP Neue Montreal` font faces).
- `docs/codeplain-website-copy.md` — the copy deck / source of truth for content, nav structure, and brand vocabulary (e.g. always write "*codeplain" with the mark in body copy, except in URLs/emails/handles). Check it before writing or changing on-page copy.

### Theme: site-wide dark tokens, homepage overrides to light

`globals.css` sets a dark theme by default (`body` background `--color-black`, white text, lowercase text-transform) — this is still the live theme for most sub-pages. The homepage (`src/app/page.tsx`) overrides this locally with `bg-white text-ink` on `<main>`, and components like `Header` are already built white/light-themed. When editing a page, check whether it inherits the old dark body theme or has been migrated to the light v2 theme (see recent commits like "v2 - light theme across the rest of the homepage") — don't assume one or the other.

### Hero visual variants

`src/components/HeroVisualToggle.tsx` renders whichever component is in its `VARIANTS` array (currently `HeroVisual`, `HeroVisualLoop`, `HeroVisualSourceOfTruth`) with a dev-only toggle switcher beneath it. These are parallel explorations of the same hero animation concept, not a versioned history — add a new variant by dropping a component in `src/components/` and adding an entry to `VARIANTS`; don't touch `Hero.tsx` itself. `src/app/dev/hero-visual/page.tsx` is a standalone route for iterating on these in isolation.

## Styling conventions

- **Color tokens over raw hex.** `globals.css`'s `@theme` block defines the light-theme text scale (`--color-ink`, `--color-ink-muted`, `--color-ink-faint`, darkest to lightest) and brand blue (`--color-brand-blue`, `--color-brand-blue-dark`), alongside the older dark-theme tokens (`--color-black`, `--color-accent`, etc). Use `text-ink`, `bg-brand-blue`, and so on instead of hardcoding `#1a1a1a` / `#0A1FD4` — add a token to `@theme` first if a color doesn't have one yet.
- **Breakpoints: Tailwind's standard scale, not arbitrary values.** Use `sm:`/`md:`/`max-md:`/`lg:`/`max-lg:` etc. Don't introduce one-off `min-[761px]:`/`max-[900px]:`-style arbitrary breakpoints — the whole site was normalized onto the default scale (640/768/1024) specifically to avoid a different magic-number cutoff in every file.
- **CSS variable arbitrary values use the `(--token)` syntax** (e.g. `max-w-(--container-content)`), not bracket-with-var (`max-w-[--container-content]`) — the two look similar but only the former actually resolves. If a class referencing a custom property ever silently stops working (e.g. reads as `max-content` instead of the intended token), check for exactly this kind of corruption before assuming the design changed.

### Buttons

`src/components/Buttons.tsx` exports `PrimaryButton`, `SecondaryButton`, `TertiaryButton` — the only button components in the app (there is no generic `Button`). All three share one signature: pass `href` for navigation, or omit it and pass `onClick`/`type` for a real action button.

- **Links vs. actions render completely differently.** An `href` renders a plain Next `Link`/`<a>`. No `href` renders Base UI's `Button` (`@base-ui/react/button`). This split is deliberate, not incidental: Base UI's `Button` forces `role="button"` and button-style keyboard handling onto whatever it renders, which is the wrong a11y semantics for a real navigational link (screen readers should hear "link", not "button"). Don't wrap a `Link` in Base UI's `Button` to get a shared style — style the plain `Link` case directly, as `renderButton` already does.
- **`onDark`** flips `Secondary`/`Tertiary` to a light-on-dark treatment for pages still on the site-wide dark body theme (see above). `Primary` looks the same either way, so it ignores the prop.
- Use Base UI (`@base-ui/react/*`) as the base for any other component that needs real interactive behavior (disclosure, dialogs, menus, etc.) and style it with Tailwind — that's the established pattern here, not a one-off for buttons.

### Partner/customer logos

`src/components/logos/` holds one component per third-party logo (`DevRevLogo`, `IncodeLogo`, `ShovelsLogo`, `HycuLogo`, …), each a small `.tsx` wrapper — not a raw `.svg` file — matching `Logo.tsx`'s pattern: `height`/`className` props, no hardcoded size classes baked into the markup. Fill is `currentColor` (even for logos with their own multi-color brand palette) so the color can be set uniformly from the consuming context — see `Logos.tsx`, which tints every logo brand-blue via `text-brand-blue` on the wrapping tile rather than each mark's real branding. When adding a new one, convert whatever's dropped into `src/components/logos/` to this shape rather than using the file as-is (editor/export cruft — Inkscape namespaces, hardcoded fills, undefined CSS-variable references — is common in exported logo SVGs and won't match the rest of the site otherwise).

