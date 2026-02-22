<script lang="ts">
    import type {MeritEntryItem} from "$lib";
    import MeritEntry from "$lib/components/MeritEntry.svelte";
    import {t} from '$lib/i18n'

    let {groupTitle, meritEntryItems}: { groupTitle?: string; meritEntryItems: MeritEntryItem[] } = $props();

</script>

<div class="h-100">
    {#if groupTitle}
        <h2 class="text-label text-accent font-bold mb-m">{groupTitle}</h2>
    {/if}
    <div class="entries">
        {#each meritEntryItems as item}
            <MeritEntry date={t(item.date)} title={t(item.title)} description={t(item.description)}
                        muted={item.muted}/>
        {/each}
    </div>
</div>

<style lang="scss">
  .wrapper {
    height: 100%;
  }

  .entries {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>