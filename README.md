# Maverick

The official marketing site for **Maverick**, a Tashkent-based services brand. The site introduces the brand, showcases the launch product — *Maverick Detailing*, a fully mobile car-wash service — and previews the upcoming Gaming Club and restaurant ventures.

A static-first Next.js single-page experience with full trilingual support (Russian, Uzbek, English), motion-driven storytelling, and a deliberately fast first paint.

[![Live](https://img.shields.io/badge/live-maverick.uz-000?style=flat-square)](https://maverick.uz)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

## What's on the page

The landing page is a single scrollable narrative composed of four hand-built sections:

| Section | Component | What it does |
| --- | --- | --- |
| Header | `Header.tsx` | Sticky navigation with the locale switcher (RU / UZ / EN). |
| Hero | `Hero.tsx` | Full-viewport hero with the brand logo, animated headline, subtitle, and a call-to-action that smooth-scrolls into the next section. Background gradient + soft red accent blobs, fade-in via Framer Motion. |
| Detailing | `DetailingSection.tsx` | Pitches Maverick Detailing — the mobile car-wash flagship — with feature bullets (in-app booking, virtual garage, anywhere-in-the-city pickup, professional equipment). |
| Future Services | `FutureServices.tsx` | Teasers for the upcoming Gaming Club and restaurant, plus a "more to come" placeholder card. |
| Footer | `Footer.tsx` | Copyright, contact prompt, social handles. |

Hero's logo and the section copy are loaded from JSON dictionaries — no string is hard-coded inside the React components.

## Internationalisation

Three languages, all first-class:

- **Russian** (`messages/ru.json`) — default; what the site falls back to when no locale matches.
- **Uzbek** (`messages/uz.json`) — Cyrillic script.
- **English** (`messages/en.json`).

Routing is handled by `next-intl` middleware (`src/middleware.ts`):

- The default locale (Russian) is served at `/` — no `/ru` prefix.
- Other locales live at `/en/...` and `/uz/...`.
- `Accept-Language` auto-detection is **disabled** on purpose — visitors from international IPs still land on Russian (the primary audience), and switch manually if they want.
- All app routes flow through the `[locale]` dynamic segment defined in `src/app/[locale]/`.

To add a new language:
1. Drop `messages/<locale>.json` with the same key structure.
2. Add the locale to `locales` in `src/i18n/request.ts`.
3. Update the `matcher` regex in `src/middleware.ts`.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16, App Router, `output: 'standalone'` |
| Language | TypeScript 5 |
| UI | React 19 |
| Styling | Tailwind CSS 3 + autoprefixer + a small custom `test-styles.css` |
| Internationalisation | `next-intl` 4 (server + client providers) |
| Motion | Framer Motion 12 |
| Icons | `lucide-react` |
| Type check | TypeScript strict, `eslint-config-next` |

## Getting started

Prerequisites: Node.js 20+ and npm (pnpm and Yarn work too).

```bash
git clone https://github.com/kamronbekbatirov/maverick.git
cd maverick
npm install
npm run dev
```

The dev server runs at <http://localhost:3000>. Hot-reload is on by default — saving any of the JSON dictionaries reloads the relevant locale instantly.

## Build & production

```bash
npm run build   # next build && a postbuild step that pins the standalone server to 127.0.0.1
npm start
```

The `postbuild` script rewrites the binding inside `.next/standalone/server.js` from `0.0.0.0` to `127.0.0.1`. This is intentional — the production server **must** sit behind a reverse proxy (Caddy, Nginx, Cloudflare Tunnel, etc.) so HTTPS, security headers, and rate limiting are handled centrally.

A typical reverse-proxy snippet:

```caddy
maverick.uz, www.maverick.uz {
    header X-Content-Type-Options nosniff
    header X-Frame-Options DENY
    header Strict-Transport-Security "max-age=31536000; includeSubDomains"
    reverse_proxy 127.0.0.1:3020 {
        header_up X-Forwarded-Proto http
    }
}
```

## Project layout

```
src/
├── app/
│   ├── [locale]/
│   │   ├── globals.css
│   │   ├── layout.tsx        # Per-locale layout (provides next-intl context)
│   │   └── page.tsx          # Composes Header → Hero → Detailing → Future → Footer
│   ├── layout.tsx            # Root layout
│   ├── not-found.tsx         # 404 page
│   ├── favicon.ico
│   └── test-styles.css
├── components/                # Header, Hero, DetailingSection, FutureServices, Footer
├── i18n/
│   └── request.ts            # next-intl server config (locales = ['en','ru','uz'])
└── middleware.ts             # locale routing + asset bypass
messages/
├── en.json
├── ru.json                   # default fallback
└── uz.json                   # Cyrillic
public/
├── logo.png, logo-hero.png   # brand assets
└── (boilerplate Next.js SVGs)
```

## License

Released under the [MIT License](LICENSE).
