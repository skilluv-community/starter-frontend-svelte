<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { lang } from '$lib/i18n/index.svelte';

  const REPO = 'sveltejs/svelte';
  let stars = $state<number | null>(null);
  let loading = $state(false);
  let error = $state<string | null>(null);

  async function fetchStars() {
    loading = true;
    error = null;
    stars = null;
    try {
      const r = await fetch(`https://api.github.com/repos/${REPO}`);
      if (!r.ok) throw new Error(`GitHub returned ${r.status}`);
      const body = (await r.json()) as { stargazers_count: number };
      stars = body.stargazers_count;
    } catch (e) {
      error = (e as Error).message;
    } finally {
      loading = false;
    }
  }
</script>

<h1 class="text-2xl font-bold mb-2">{lang.t.api_title}</h1>
<p class="text-slate-400 mb-6">{lang.t.api_intro}</p>

<div class="rounded border border-slate-800 p-6 space-y-4">
  <div class="flex items-center gap-3">
    <Button onclick={fetchStars} disabled={loading}>{lang.t.api_button}</Button>
    <code class="text-sm text-slate-500">github.com/{REPO}</code>
  </div>

  {#if loading}
    <p class="text-slate-400">{lang.t.api_loading}</p>
  {:else if error}
    <p class="text-red-400">{error}</p>
  {:else if stars !== null}
    <p>
      <span class="text-slate-400">{lang.t.api_repo_label}:</span>
      <span class="font-mono ml-2" data-testid="stars">{stars.toLocaleString('en-US')}</span>
    </p>
  {/if}
</div>
