<script lang="ts">
    import type {Snippet} from "svelte";

    let {title, as = 'h3', subtitle, variant = 'surface', tags, link, children}: {
        title: string,
        as?: 'h3' | 'h4' | 'h5';
        subtitle?: string,
        variant?: 'surface' | 'base',
        tags?: string[],
        link?: string,
        children?: Snippet,
    } = $props();
</script>

<div class="card radius border" data-variant="{variant}">
    {#if tags?.length}
        <ul class="tags">
            {#each tags as tag}
                <li class="radius-full text-small font-medium">{tag}</li>
            {/each}
        </ul>
    {/if}

    {#if subtitle}
        <p class="text-label mb-xs">{subtitle}</p>
    {/if}
    <svelte:element this={as} class="title">{title}</svelte:element>

    <div class="body">
        {@render children?.()}
    </div>

    {#if link}
        <a href={link} class="text-accent-dark font-bold" target="_blank">GitHub repo</a>
    {/if}
</div>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    padding: var(--space-md);
    border-radius: var(--radius);
    background-color: var(--bg-base);
  }

  .title {
    color: var(--card-title);
  }

  .body {
    flex: 1; // pushes the link to the bottom so links line up across a grid row
    color: var(--text-muted);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    list-style: none;

    li {
      padding: 3px 8px;
      background: var(--accent-tint);
      color: var(--accent-tint-text);
    }
  }

  [data-variant='surface'] {
    background-color: var(--bg-surface);
  }
</style>