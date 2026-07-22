# starter-frontend-svelte

> A Skilluv starter template — SvelteKit 5 (runes) + Tailwind v4, static-deployable.

[![CI](https://github.com/skilluv-community/starter-frontend-svelte/actions/workflows/ci.yml/badge.svg)](https://github.com/skilluv-community/starter-frontend-svelte/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Skilluv](https://img.shields.io/badge/skilluv-community-emerald)](https://skilluv.io)

## English

### What this is

A production-ready SvelteKit 5 starter using only stable, current-generation APIs:

- **SvelteKit 5** with Svelte 5 **runes** (`$state`, `$derived`, `$effect`)
- **Tailwind v4** via the official Vite plugin
- **TypeScript strict**
- **Vitest** for unit tests, **Playwright** for end-to-end
- **ESLint 9 flat config** + Prettier
- `adapter-static` — deploy to any CDN or `preview` server

### Quickstart

```bash
git clone git@github.com:skilluv-community/starter-frontend-svelte.git
cd starter-frontend-svelte
cp .env.example .env
npm install
npm run dev
```

Open <http://localhost:5173>.

### Structure

```
src/
  app.html, app.css, app.d.ts
  routes/
    +layout.svelte, +layout.ts        Layout + prerender config
    +page.svelte                      Home
    counter/+page.svelte              $state/$derived demo
    api-demo/+page.svelte             fetch + loading/error
  lib/
    components/{Button, LangSwitcher}.svelte
    i18n/{en, fr, index.svelte}.ts    English default, FR toggle
    stores/counter.svelte.ts          Shared runes-backed store
tests/
  unit/                               Vitest
  e2e/                                Playwright
```

### Docs

- [`docs/en/getting-started.md`](./docs/en/getting-started.md)
- [`docs/en/architecture.md`](./docs/en/architecture.md)

---

## Français

### C'est quoi

Un starter SvelteKit 5 prêt-à-l'emploi utilisant uniquement les APIs stables actuelles :

- **SvelteKit 5** avec runes Svelte 5 (`$state`, `$derived`, `$effect`)
- **Tailwind v4** via le plugin Vite officiel
- **TypeScript strict**
- **Vitest** pour les unit tests, **Playwright** pour l'end-to-end
- **ESLint 9 flat config** + Prettier
- `adapter-static` — déployable sur n'importe quel CDN ou serveur `preview`

### Démarrage rapide

```bash
git clone git@github.com:skilluv-community/starter-frontend-svelte.git
cd starter-frontend-svelte
cp .env.example .env
npm install
npm run dev
```

Ouvrir <http://localhost:5173>.

### Docs

- [`docs/fr/getting-started.md`](./docs/fr/getting-started.md)
- [`docs/fr/architecture.md`](./docs/fr/architecture.md)

---

## License

MIT — see [LICENSE](./LICENSE).

## Related

- [Skilluv](https://skilluv.io)
- [Skilluv Community Charter](https://github.com/skilluv-community/community-charter)
- [Other starters](https://github.com/orgs/skilluv-community/repositories?q=starter)
