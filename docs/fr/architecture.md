# Architecture — starter-frontend-svelte

## Choix opinionated

### 1. Runes Svelte 5 uniquement

On utilise `$state`, `$derived`, `$effect`, `$props` et on évite les stores legacy `writable/derived`. Les runes sont explicites sur ce qui est réactif, et c'est l'API recommandée pour la suite.

Les fichiers qui contiennent de l'état réactif au niveau module portent l'extension `.svelte.ts` pour être traités par le compilateur Svelte (voir `src/lib/stores/counter.svelte.ts` et `src/lib/i18n/index.svelte.ts`).

### 2. Tailwind v4 via le plugin Vite

Pipeline CSS-first : `@import "tailwindcss";` dans `app.css` et plugin `@tailwindcss/vite` dans `vite.config.ts`. Pas de config PostCSS, pas de `tailwind.config.js` sauf pour étendre le thème.

### 3. `adapter-static`

Par défaut, output prérendu statique. `+layout.ts` définit `prerender = true` et `ssr = false`. Passer à `adapter-node` ou `adapter-auto` si SSR nécessaire.

### 4. ESLint 9 flat config

Un seul `eslint.config.js`. Pas de `.eslintrc.*`. Presets recommandés JS + TS + Svelte + Prettier.

### 5. Tests : Vitest pour l'unité, Playwright pour l'e2e

- Vitest = feedback quasi-instantané sur les runes stores et la logique pure.
- Playwright tourne contre le build de prod (via `preview`), donc la CI teste ce que voient les users.

## Hors scope

- Server actions / handlers `+page.server.ts` (starter statique).
- Auth (ajouter `lucia-auth` ou un IdP externe).
- Librairie i18n (le dictionnaire runes est volontairement minimal ; migrer vers `svelte-i18n` si besoin).
- Component library (ce starter n'en fournit que 2 exemples ; utiliser `bits-ui` ou `shadcn-svelte` pour un vrai système).

## Extensions suggérées

- Ajouter `mdsvex` pour les routes markdown.
- Ajouter un route group `(app)` avec layout pour écrans authentifiés.
- Passer à `adapter-node` et ajouter des routes API (`+server.ts`) si logique serveur.
