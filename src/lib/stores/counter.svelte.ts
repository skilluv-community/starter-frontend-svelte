// A tiny state container using Svelte 5 runes. Exported as a singleton so
// components can import { counter } from '$lib/stores/counter.svelte' and
// share the same value across pages. Swap for per-component `$state` if you
// don't need cross-page sharing.

class CounterState {
  value = $state(0);
  doubled = $derived(this.value * 2);

  increment() {
    this.value += 1;
  }

  decrement() {
    this.value -= 1;
  }

  reset() {
    this.value = 0;
  }
}

export const counter = new CounterState();
