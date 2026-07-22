<script lang="ts">
  import { lang } from '$lib/i18n/index.svelte';
</script>

<button
  type="button"
  class="rounded border border-slate-700 px-2 py-1 text-xs hover:bg-slate-800"
  onclick={() => lang.toggle()}
  aria-label="Switch language"
>
  {lang.t.lang_switch}
</button>
