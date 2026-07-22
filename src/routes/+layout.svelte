<script lang="ts">
  import '../app.css';
  import LangSwitcher from '$lib/components/LangSwitcher.svelte';
  import { lang } from '$lib/i18n/index.svelte';

  let { children } = $props();
</script>

<header class="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
  <a href="/" class="font-bold text-lg">Skilluv · Svelte</a>
  <nav class="flex gap-4 items-center">
    <a href="/" class="hover:underline">{lang.t.nav_home}</a>
    <a href="/counter" class="hover:underline">{lang.t.nav_counter}</a>
    <a href="/api-demo" class="hover:underline">{lang.t.nav_api}</a>
    <LangSwitcher />
  </nav>
</header>

<main class="p-6 max-w-3xl mx-auto">
  {@render children()}
</main>

<footer class="mt-16 px-6 py-4 text-xs text-slate-500 border-t border-slate-800">
  MIT · <a href="https://skilluv.io" class="underline">skilluv.io</a>
</footer>
