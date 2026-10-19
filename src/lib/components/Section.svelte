<script lang="ts">
    import type {Snippet} from 'svelte';

    let {title, subtitle, chapter, tone = 'base', children}: {
        title?: string,
        subtitle?: string,
        chapter?: string,
        tone?: 'base' | 'surface' | 'emphasis',
        children?: Snippet
    } = $props();

</script>

<section class="section border-top" data-tone={tone}>
    <div class="container">
        {#if title}
            <header>
                {#if chapter}
                    <p class="text-label">{chapter}</p>
                {/if}
                <h2>{title}</h2>
                {#if subtitle}
                    <p class="text-muted">{subtitle}</p>
                {/if}
            </header>
        {/if}
        {@render children?.()}
    </div>
</section>

<style lang="scss">
  .section {
    position: relative;
    padding-block: var(--space-2xl);
    background-color: var(--bg-base);

    @media (max-width: 767px) {
      padding-block: var(--space-xl);
    }
  }

  header {
    margin-bottom: var(--space-lg);

    h2 {
      margin-top: var(--space-xs);
    }

    p {
      margin-bottom: var(--space-xs);
    }
  }

  [data-tone='surface'] {
    background-color: var(--bg-surface);
  }

  [data-tone='emphasis'] {
    background-color: var(--bg-emphasis);
    color: var(--text-light);

    :global(h2) { color: var(--accent); }
    :global(p) { color: var(--text-light); }
  }
</style>