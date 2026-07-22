<script lang="ts">
  import { lang } from '$lib/i18n/index.svelte';
</script>

<h1 class="text-3xl font-bold mb-2">{lang.t.title}</h1>
<p class="text-slate-400 mb-8">{lang.t.tagline}</p>

<section class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <a href="/counter" class="rounded border border-slate-800 p-4 hover:border-emerald-600 transition-colors">
    <h2 class="font-semibold mb-1">{lang.t.nav_counter}</h2>
    <p class="text-sm text-slate-400">
      $state, $derived, cross-page shared store — the smallest useful runes demo.
    </p>
  </a>
  <a href="/api-demo" class="rounded border border-slate-800 p-4 hover:border-emerald-600 transition-colors">
    <h2 class="font-semibold mb-1">{lang.t.nav_api}</h2>
    <p class="text-sm text-slate-400">
      Public API fetch with loading / error handling.
    </p>
  </a>
</section>
