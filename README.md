# Maverick

> **A Tashkent services brand. We bring the wash to your driveway.**

The official site for **Maverick** — a Tashkent-based brand that's launching with *Maverick Detailing*, a fully mobile car-wash service that comes to you, anywhere in the city. Same crew, same equipment, no waiting in queues. Soon, the Maverick name moves into a Gaming Club and a restaurant — the page tells that story.

[![Live](https://img.shields.io/badge/live-maverick.uz-000?style=flat-square)](https://maverick.uz)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

---

## What you see when you open it

A one-page scrollable story, four chapters:

1. 🏁 **Hero** — full-viewport intro with the brand mark, animated headline, and a CTA that smooth-scrolls you into the pitch.
2. 🚗 **Detailing** — *Maverick Detailing* explained: in-app booking, a virtual garage of your cars, citywide pickup, professional gear.
3. 🎮 **Coming next** — teasers for the Gaming Club and restaurant.
4. ✉️ **Footer** — contact + socials.

Three languages — **Russian, Uzbek (Cyrillic), English** — all first-class. Russian is the default at `/` because it's the primary audience; the other locales live at `/en` and `/uz`. Switch with the picker in the header.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, standalone) |
| Language | TypeScript 5 |
| UI | React 19, Tailwind CSS 3 |
| i18n | `next-intl` 4 |
| Motion | Framer Motion 12 |
| Icons | `lucide-react` |

## Quick start

```bash
git clone https://github.com/kamronbekbatirov/maverick.git
cd maverick
npm install
npm run dev
```

Then visit <http://localhost:3000>. Edit any string in `messages/<locale>.json` and the page hot-reloads with the new copy.

## Add a new language

1. Drop `messages/<locale>.json` with the same key structure.
2. Add the locale to `locales` in `src/i18n/request.ts`.
3. Update the `matcher` regex in `src/middleware.ts`.

## Production

`npm run build && npm start`. The `postbuild` step pins the standalone server to `127.0.0.1` — production runs behind a reverse proxy that handles HTTPS, security headers, and rate limiting centrally:

```caddy
maverick.uz, www.maverick.uz {
    header Strict-Transport-Security "max-age=31536000; includeSubDomains"
    reverse_proxy 127.0.0.1:3020
}
```

## Project layout

```
src/
├── app/
│   ├── [locale]/                Per-locale layout + page.tsx (composes all sections)
│   │   ├── layout.tsx           Sets <html lang> + provides next-intl context
│   │   ├── page.tsx             Header → Hero → Detailing → FutureServices → Footer
│   │   └── globals.css          Tailwind directives + project tokens
│   ├── layout.tsx               Root layout (just renders {children})
│   └── not-found.tsx
├── components/                  All sections live here as flat .tsx files
│   ├── Header.tsx               Sticky nav + locale switcher
│   ├── Hero.tsx                 Animated hero, CTA, soft-red blobs
│   ├── DetailingSection.tsx     Maverick Detailing pitch
│   ├── FutureServices.tsx       Gaming Club + restaurant teasers
│   └── Footer.tsx
├── i18n/request.ts              next-intl server config · locales = ['en','ru','uz']
└── middleware.ts                Locale routing + asset bypass
messages/                        en.json · ru.json (default) · uz.json (Cyrillic)
public/                          logo.png · logo-hero.png · favicons
```

---

## For contributors / AI agents

> A short technical orientation for anyone (human or AI) being handed this repo for the first time.

### Mental model
A **single-page marketing site** for the Maverick brand. Pure storytelling — no DB, no auth, no API routes, no client-side state beyond the locale switcher. Every section is a plain server component. All copy is loaded from JSON dictionaries at build time via `next-intl`.

### Where things live

| You want to … | Open … |
| --- | --- |
| Edit body copy | `messages/<locale>.json` — keys are namespaced per section |
| Add a new visual section | Create `src/components/<Name>.tsx`, import it into `src/app/[locale]/page.tsx` |
| Tweak motion / animation | The component itself — every section uses Framer Motion locally |
| Change the locale switcher | `Header.tsx` |
| Add a new language | (1) `messages/<code>.json`, (2) extend `locales` in `src/i18n/request.ts`, (3) update the `matcher` regex in `src/middleware.ts` |
| Brand assets (logos, hero image) | `public/` |
| Locale routing rules | `src/middleware.ts` |
| Production deployment hardening | `next.config.ts` (`output: 'standalone'`) + the `postbuild` script in `package.json` |

### Conventions and gotchas

- ⚠️ **Russian is the default locale, served at `/`** — *not* `/ru`. Anything assuming "default = English" or "all locales prefixed" is wrong. The middleware explicitly disables `Accept-Language` auto-detection so a visitor from a `.com` IP still lands on Russian; they switch manually if they want.
- ⚠️ **`postbuild` rewrites the bind address.** After `next build`, the script edits `.next/standalone/server.js` to swap `0.0.0.0` for `127.0.0.1`. This is intentional — production *must* sit behind a reverse proxy. Don't "fix" it.
- ⚠️ **Next.js 16 is in use.** Server Components, async params, and `output: 'standalone'` are all enabled. Code patterns valid in Next 13/14 may not be valid here — when in doubt, check the version-specific docs in `node_modules/next/dist/docs/`.
- **No client-side state library.** If a section needs interactivity beyond Framer Motion + `next-intl`, default to plain `useState`. Don't introduce Zustand / Redux / Jotai.
- **Tailwind 4 + CSS-first config.** There is no `tailwind.config.ts` — tokens live in the `@theme` block of `globals.css`. Don't try to "add" a JS config file.
- **Strings are never hard-coded.** Every visible word lives in `messages/<locale>.json`. If you find yourself typing user-facing copy directly into JSX, stop and add a translation key first.
- **`tw-animate-css` is loaded but used sparingly** — most animation goes through Framer Motion. Don't reach for `tw-animate-css` reflexively.

### Run / build / deploy

```bash
npm install
npm run dev           # http://localhost:3000  (Russian at /, English at /en, Uzbek at /uz)
npm run build         # next build + the 127.0.0.1 postbuild rewrite
npm start             # serves from .next/standalone (port 3000 by default)
```

Production runs as a systemd unit binding `127.0.0.1:3020` behind Caddy. The reference Caddy block is in the *Production* section above.

## License

[MIT](LICENSE)
