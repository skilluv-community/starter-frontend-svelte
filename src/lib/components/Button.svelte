<script lang="ts">
  type Variant = 'primary' | 'secondary' | 'ghost';

  interface Props {
    variant?: Variant;
    disabled?: boolean;
    onclick?: (e: MouseEvent) => void;
    type?: 'button' | 'submit' | 'reset';
    children?: import('svelte').Snippet;
  }

  let {
    variant = 'primary',
    disabled = false,
    onclick,
    type = 'button',
    children
  }: Props = $props();

  const classes: Record<Variant, string> = {
    primary: 'bg-emerald-600 hover:bg-emerald-500 text-white',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-100',
    ghost: 'bg-transparent hover:bg-slate-800 text-slate-100 border border-slate-700'
  };
</script>

<button
  {type}
  {disabled}
  {onclick}
  class="rounded px-4 py-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors {classes[variant]}"
>
  {@render children?.()}
</button>
