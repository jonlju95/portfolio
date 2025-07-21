<script lang="ts">
    import {LinkButton} from "$lib/index";

    let {title, techStack, description, link}: {
        title: string,
        techStack: string[],
        description: string,
        link?: string
    } = $props();
</script>

<div class="projectCard w-100 h-100 p-4 d-flex flex-col">
    <h3 class="textPrimary">{title}</h3>
    <p class="techStacks d-flex font-bold textMuted">
        {#each techStack as tech, i}
            <span>{tech}</span>
            {#if i < techStack.length - 1}
                <span class="mx-1">|</span>
            {/if}
        {/each}
    </p>
    <p class="h-100 mt-4">{description}</p>
    {#if link}
        <div class="w-100 d-flex justify-end">
            <LinkButton buttonProps="btnSecondary outline" {link} btnLabel="Github Repo" newTab={true}/>
        </div>
    {/if}
</div>

<style>
    .projectCard {
        min-width: 20rem;
        min-height: 20rem;
        background-color: var(--bg-bright);
        border: 1px solid var(--border-muted);
        border-radius: 12px;
        box-shadow: var(--shadow);
        display: flex;
        flex-direction: column;

        .techStacks {
            letter-spacing: 1px;
        }
    }
</style>