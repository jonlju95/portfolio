<script lang="ts">
    import type { Snippet } from 'svelte';

    let {
        link,
        btnLabel,
        variant = 'primary',
        newTab = false,
        download = false,
        children
    }: {
        link: string;
        btnLabel: string;
        variant?: 'primary' | 'secondary' | 'emphasis' | 'accent';
        newTab?: boolean;
        download?: boolean;
        children?: Snippet;
    } = $props();
</script>

<a class="btn"
   data-variant={variant}
   href={link}
   target={newTab ? '_blank' : undefined}
   rel={newTab ? 'noopener noreferrer' : undefined}
   download={download ? '' : undefined}>
    {btnLabel}{@render children?.()}
</a>

<style lang="scss">
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    height: 3rem;
    padding-inline: 1rem;
    border: 2px solid transparent;
    border-radius: 9999px;
    font-size: 0.8125rem;
    font-weight: 700;
    transition: background-color 50ms, color 50ms, border-color 50ms;
  }

  [data-variant='primary'] {
    background-color: var(--bg-emphasis);
    color: var(--text-light);
  }

  [data-variant='secondary'] {
    border-color: var(--text-primary);
    color: var(--text-primary);

    &:hover {
      background-color: var(--text-muted);
      border-color: var(--text-muted);
      color: var(--text-light);
    }
  }

  [data-variant='emphasis'] {
    border-color: var(--text-muted);
    color: var(--text-light);

    &:hover {
      background-color: var(--text-muted);
    }
  }

  [data-variant='accent'] {
    background-color: var(--accent-dark);
    color: var(--text-light);

    &:hover {
      background-color: var(--accent-mid);
    }
  }
</style>
