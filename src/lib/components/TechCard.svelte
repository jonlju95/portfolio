<script lang="ts">
    let {title, content, cardProps = 'bg-base'}: {
        title: string,
        content: string[],
        cardProps?: string
    } = $props();
</script>

<div class="{cardProps} card radius border">
    <h3 class="mb-s">{title}</h3>
    <div class="flex gap-xs flex-wrap">
        {#each content as tech}
            <p class="techPill text-label text-primary border radius-full bg-surface">{tech}</p>
        {/each}
    </div>
</div>

<style lang="scss">
  .card {
    padding: 1.5rem;
  }

  .techPill {
    padding: 0.5rem 1rem;
    width: fit-content;
  }
</style>