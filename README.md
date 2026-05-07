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
│   ├── [locale]/                Per-locale layout + page.tsx
│   ├── layout.tsx               Root layout
│   └── not-found.tsx
├── components/                  Header · Hero · DetailingSection
│                                FutureServices · Footer
├── i18n/request.ts              Locales: ['en','ru','uz']
└── middleware.ts                Locale routing
messages/                        en.json · ru.json · uz.json
public/                          Brand assets
```

## License

[MIT](LICENSE)
