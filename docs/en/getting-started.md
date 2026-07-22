# Getting started — starter-frontend-svelte

## Prerequisites

- Node 22 or 24 (LTS)
- npm 10+

## First run

```bash
git clone git@github.com:skilluv-community/starter-frontend-svelte.git
cd starter-frontend-svelte
cp .env.example .env
npm install
npm run dev
```

Vite serves the app at <http://localhost:5173> with HMR.

## Available scripts

| Command | What it does |
|---|---|
| `npm run dev` | Vite dev server, HMR enabled |
| `npm run build` | Static production build under `build/` |
| `npm run preview` | Serve the production build at :4173 |
| `npm run check` | Type-check with `svelte-check` |
| `npm run lint` | ESLint + Prettier |
| `npm run format` | Prettier auto-fix |
| `npm run test:unit` | Vitest |
| `npm run test:e2e` | Playwright (builds then previews then hits :4173) |
| `npm run test` | unit + e2e |

## Deploying

Because we use `@sveltejs/adapter-static`, the output under `build/` can go to any static host:

- **Netlify / Cloudflare Pages / Vercel** — point at the repo, build command `npm run build`, output `build/`.
- **Self-hosted** — copy `build/` behind Caddy / nginx.

## Environment variables

Vite exposes only variables prefixed with `PUBLIC_` to the client. See `.env.example`.
