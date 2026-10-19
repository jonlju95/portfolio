<script lang="ts">
    import type {MeritEntryItem} from "$lib";
    import {t} from '$lib/i18n'

    let {groupTitle, meritEntryItems}: { groupTitle?: string; meritEntryItems: MeritEntryItem[] } = $props();

</script>

<div class="h-100">
    {#if groupTitle}
        <h3 class="mb-m">{groupTitle}</h3>
    {/if}
    <div class="entries border-top pt-m">
        {#each meritEntryItems as item}
            <div class="border-bottom pb-m">
                <p class="text-label text-muted">{t(item.date)}</p>
                <h5 class="mt-xs mb-xs">{t(item.title)}</h5>
                <p class="text-muted">{t(item.description)}</p>
            </div>
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