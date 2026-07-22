# Démarrage — starter-frontend-svelte

## Prérequis

- Node 22 ou 24 (LTS)
- npm 10+

## Premier lancement

```bash
git clone git@github.com:skilluv-community/starter-frontend-svelte.git
cd starter-frontend-svelte
cp .env.example .env
npm install
npm run dev
```

Vite sert l'app sur <http://localhost:5173> avec HMR.

## Scripts disponibles

| Commande | Ce qu'elle fait |
|---|---|
| `npm run dev` | Serveur Vite dev, HMR activé |
| `npm run build` | Build statique sous `build/` |
| `npm run preview` | Sert le build de prod sur :4173 |
| `npm run check` | Type-check via `svelte-check` |
| `npm run lint` | ESLint + Prettier |
| `npm run format` | Auto-fix Prettier |
| `npm run test:unit` | Vitest |
| `npm run test:e2e` | Playwright (build → preview → tests) |
| `npm run test` | unit + e2e |

## Déploiement

`@sveltejs/adapter-static` produit un site statique dans `build/`, déployable sur n'importe quel hébergeur statique :

- **Netlify / Cloudflare Pages / Vercel** — pointer sur le repo, build `npm run build`, output `build/`.
- **Self-hosted** — copier `build/` derrière Caddy / nginx.

## Variables d'environnement

Vite n'expose au client que les variables préfixées par `PUBLIC_`. Voir `.env.example`.
