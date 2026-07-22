<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { counter } from '$lib/stores/counter.svelte';
  import { lang } from '$lib/i18n/index.svelte';
</script>

<h1 class="text-2xl font-bold mb-6">{lang.t.counter_title}</h1>

<div class="rounded border border-slate-800 p-6 space-y-4">
  <p>
    <span class="text-slate-400">{lang.t.counter_current}:</span>
    <span class="text-2xl font-mono ml-2" data-testid="counter-value">{counter.value}</span>
  </p>
  <p class="text-sm text-slate-400">
    {lang.t.counter_doubled}: <span class="font-mono">{counter.doubled}</span>
  </p>
  <div class="flex gap-2">
    <Button variant="primary" onclick={() => counter.increment()}>
      {lang.t.counter_inc}
    </Button>
    <Button variant="secondary" onclick={() => counter.decrement()}>
      {lang.t.counter_dec}
    </Button>
    <Button variant="ghost" onclick={() => counter.reset()}>{lang.t.counter_reset}</Button>
  </div>
</div>
