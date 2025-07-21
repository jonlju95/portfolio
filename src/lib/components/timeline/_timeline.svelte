<script lang="ts">
    import {timelineItems} from "$lib/data/timelineItem";
    import {TimelineItem} from "$lib/index.js";

    import {t} from 'svelte-i18n';
</script>

<div class="container relative mt-5">
    <div class="lineContainer absolute">
        <svg width="6" height="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="3" y1="3" x2="3" y2="99%" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
        </svg>
    </div>
    {#each timelineItems as timelineItem}
        <TimelineItem
                title={$t(timelineItem.title)}
                months={$t(timelineItem.months)}
                years={timelineItem.years}
                description={$t(timelineItem.description)}
                icon={timelineItem.icon}/>
    {/each}
</div>

<style>
    .lineContainer {
        top: 0;
        left: calc(calc(100% * 1/12 * 4) + (15px * 4) + 1px);

        height: calc(100% + 3rem);

        svg {
            color: var(--secondary);
        }
    }
</style>