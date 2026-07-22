# Architecture — starter-frontend-svelte

## Opinionated choices

### 1. Svelte 5 runes only

We use `$state`, `$derived`, `$effect`, `$props` and avoid the legacy `writable/derived` store APIs. Runes are explicit about what is reactive and where, and are the recommended API going forward.

Files that hold module-level reactive state use the `.svelte.ts` extension so the Svelte compiler processes them (see `src/lib/stores/counter.svelte.ts` and `src/lib/i18n/index.svelte.ts`).

### 2. Tailwind v4 via the Vite plugin

Tailwind v4 uses a CSS-first pipeline: `@import "tailwindcss";` in `app.css` and `@tailwindcss/vite` plugin in `vite.config.ts`. No PostCSS config, no `tailwind.config.js` unless you need to extend the theme.

### 3. `adapter-static`

The default output is a fully prerendered static site. `+layout.ts` sets `prerender = true` and `ssr = false`. Swap in `adapter-node` or `adapter-auto` if you later need server-side rendering.

### 4. ESLint 9 flat config

Single `eslint.config.js`. No `.eslintrc.*`. Latest recommended presets for JS + TS + Svelte + Prettier.

### 5. Tests: Vitest for units, Playwright for e2e

- Vitest gives near-instant feedback on runes stores and pure logic.
- Playwright runs against the production build (via `preview`), so what CI tests is close to what users see.

## What's out of scope

- Server actions / `+page.server.ts` handlers (this is a static-first starter).
- Auth (add `lucia-auth` or an external IdP).
- i18n library (the runes-backed dictionary is deliberately minimal — swap in `svelte-i18n` if you outgrow it).
- Component library (this starter ships two example components; use `bits-ui` or `shadcn-svelte` for a real system).

## Suggested first extensions

- Add `mdsvex` for markdown routes.
- Add a route group `(app)` with layout for authenticated screens.
- Switch to `adapter-node` and add API routes (`+server.ts`) if you need server logic.
