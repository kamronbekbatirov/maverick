# Maverick

The official marketing site for **Maverick**, a Tashkent-based services brand. The site introduces the brand, showcases the launch product — *Maverick Detailing*, a fully mobile car-wash service — and previews the upcoming Gaming Club and restaurant ventures.

Built as a static-first Next.js application with full trilingual support (English, Russian, and Uzbek in Cyrillic), thoughtful motion design, and a deliberately fast first paint.

[![Live](https://img.shields.io/badge/live-maverick.uz-000?style=flat-square)](https://maverick.uz)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

## Highlights

- **Trilingual by design** — every string is loaded through `next-intl`, with locale-prefixed routing (`/en`, `/ru`, `/uz`) and a sensible default fallback.
- **Cinematic feel, lightweight payload** — Framer Motion drives the hero and section transitions while the rest of the page stays as static HTML.
- **Mobile-first layout** — Tailwind CSS utility classes with custom breakpoints tuned for the Uzbek mobile market.
- **Type-safe everywhere** — full TypeScript coverage, strict ESLint configuration, and a typed translations bundle.
- **Production-ready output** — `next build` produces a self-contained `.next/standalone` server that runs behind any reverse proxy with zero additional dependencies.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| UI | React 19 |
| Styling | Tailwind CSS 3 |
| Internationalisation | next-intl 4 |
| Motion | Framer Motion 12 |
| Icons | lucide-react |

## Getting started

Prerequisites: Node.js 20+ and either npm, pnpm, or Yarn.

```bash
git clone https://github.com/kamronbekbatirov/maverick.git
cd maverick
npm install
npm run dev
```

The development server runs at <http://localhost:3000> and hot-reloads on every change.

## Project structure

```
src/
├── app/
│   ├── [locale]/          # Locale-prefixed routes (en, ru, uz)
│   │   ├── layout.tsx     # Per-locale layout with header & footer
│   │   └── page.tsx       # Marketing home page
│   ├── layout.tsx         # Root layout
│   └── not-found.tsx      # 404 page
├── components/            # Hero, DetailingSection, FutureServices, Footer, …
└── i18n/                  # next-intl configuration & helpers
messages/
├── en.json
├── ru.json
└── uz.json                # Uzbek (Cyrillic)
```

## Internationalisation

Translations live in `messages/<locale>.json`. To add a new language:

1. Create a new translation file, e.g. `messages/uz-latn.json`.
2. Register the locale inside `src/i18n/`.
3. Update `next.config.ts` if any routing tweaks are needed.

The site is fully statically rendered per locale at build time, so adding languages does not impact runtime cost.

## Production build

```bash
npm run build
npm start
```

The `postbuild` step pins the standalone server to `127.0.0.1` so it can be safely run behind a reverse proxy (Caddy, Nginx, Cloudflare Tunnel, etc.) without accidentally binding to a public interface.

## Deployment

Any Node 20+ environment that can run `node server.js` will do — Vercel, Fly.io, Railway, a plain VPS behind Caddy, or a Docker container. The `.next/standalone` output is self-contained and includes only the runtime files it actually needs.

## License

Released under the [MIT License](LICENSE).
