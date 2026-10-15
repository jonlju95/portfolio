<script lang="ts">
    let {title, subtitle, content, cardProps = 'bg-base'}: {
        title: string,
        subtitle?: string,
        content: string,
        cardProps?: string
    } = $props();
</script>

<div class="{cardProps} radius border">
    {#if subtitle}
        <p class="text-label mb-xs">{subtitle}</p>
        <h2 class="mb-s">{title}</h2>
    {:else}
        <h3 class="mb-xs">{title}</h3>
    {/if}
    <p class="text-muted">{content}</p>
</div>

<style lang="scss">
    div {
      padding: 1.5rem;
    }
</style>