<script lang="ts">
    import type {TimelineItem} from "$lib";
    import {t} from 'svelte-i18n';

    let {timelineItems}: { timelineItems: TimelineItem[] } = $props();
</script>

<div class="container relative mt-5">
    <div class="lineContainer absolute">
        <svg width="6" height="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="3" y1="3" x2="3" y2="99%" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
        </svg>
    </div>
    {#each timelineItems as timelineItem}
        <div class="row timelineItem relative">
            <div class="col-xl-4 d-flex flex-col align-end">
                {#if timelineItem.months && timelineItem.years}
                    <h4 class="textPrimary">{$t(timelineItem.months)}</h4>
                    <h3 class="textMuted">{$t(timelineItem.years)}</h3>
                {:else}
                    <h4 class="textMuted">{$t(timelineItem.years)}</h4>
                {/if}
            </div>
            <div class="col-xl-1 d-flex justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="4"/>
                </svg>
            </div>
            <div class="col-xl-7">
                <h4 class="textPrimary">{$t(timelineItem.title)}</h4>
                <p>{$t(timelineItem.description)}</p>
            </div>
        </div>
    {/each}
</div>

<style>
    .lineContainer {
        top: 0;
        left: calc(calc(100% * 1 / 12 * 4) + (15px * 4) + 1px);

        height: calc(100% + 3rem);

        svg {
            color: var(--secondary);
        }
    }

    .timelineItem {
        margin-bottom: 3rem;
        padding-top: 1rem;
    }

    svg {
        margin-top: 0.5rem;
        fill: var(--bg-bright);
        color: var(--primary);
    }
</style>