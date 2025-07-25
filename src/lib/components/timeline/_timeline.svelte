<script lang="ts">
    import type {TimelineItem} from "$lib";
    import {t} from 'svelte-i18n';

    let {timelineItems}: { timelineItems: TimelineItem[] } = $props();
</script>

<div class="container relative mt-5">
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
            <div class="col-xl-1 d-flex justify-center relative svgContainer">
                <svg class="lineContainer absolute" width="6" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <line x1="3" y1="3" x2="3" y2="97%" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                </svg>
                <svg class="absolute" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
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
    .timelineItem {
        .svgContainer > .lineContainer {
            height: 250%;
        }

        &:last-child .svgContainer > .lineContainer {
            height: 150%;
        }
    }

    .lineContainer {
        top: -1rem;
        color: var(--secondary);
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