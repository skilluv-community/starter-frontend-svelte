import { describe, expect, it, beforeEach } from 'vitest';
import { counter } from '$lib/stores/counter.svelte';

describe('counter store', () => {
  beforeEach(() => {
    counter.reset();
  });

  it('starts at 0', () => {
    expect(counter.value).toBe(0);
    expect(counter.doubled).toBe(0);
  });

  it('increments and derives doubled', () => {
    counter.increment();
    counter.increment();
    expect(counter.value).toBe(2);
    expect(counter.doubled).toBe(4);
  });

  it('decrements below zero', () => {
    counter.decrement();
    expect(counter.value).toBe(-1);
    expect(counter.doubled).toBe(-2);
  });

  it('resets to 0', () => {
    counter.increment();
    counter.increment();
    counter.reset();
    expect(counter.value).toBe(0);
  });
});
