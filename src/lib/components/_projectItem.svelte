<script lang="ts">
    import {LinkButton} from "$lib/index";

    let {title, techStack, description, link}: {
        title: string,
        techStack: string[],
        description: string,
        link?: string
    } = $props();
</script>

<div class="projectCard">
    <h4>{title}</h4>
    <div>
        <p class="cardDescription">{description}</p>
        <ul class="cardList">
            {#each techStack as tech}
                <li><p>{tech}</p></li>
            {/each}
        </ul>
    </div>
    {#if link}
        <LinkButton {link} btnLabel="Github Repo" newTab={true}/>
    {/if}
</div>

<style>
    .projectCard {
        width: 100%;
        height: 100%;
        min-width: 20rem;
        min-height: 20rem;
        padding: 2rem;
        background: var(--gradient);
        border: 1px solid var(--border-muted);
        border-top-color: var(--highlight);
        border-radius: 12px;
        box-shadow: var(--shadow);
        display: flex;
        flex-direction: column;

        div {
            display: flex;
            height: 100%;
            margin: 1rem 0;
        }
    }

    .cardList {
        margin: 0;
        padding-left: 1.5rem;
        width: 100%;
        list-style: none;
        max-width: 6rem;
        font-weight: bold;
        font-style: italic;
    }

    .cardDescription {
        border-right: 1px solid var(--border-muted);
        width: 100%;
        padding-right: 1rem;
    }
</style>