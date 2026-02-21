<script lang="ts">
    import {LinkButton} from "$lib/index";

    let {title, techStack, description, link}: {
        title: string,
        techStack: string[],
        description: string,
        link?: string
    } = $props();
</script>

<div class="card bg-surface">
    <div class="cardTags">
        {#each techStack as tech}
            <span class="tag">{tech}</span>
        {/each}
    </div>
    <h3 class="cardTitle">{title}</h3>
    <p class="cardDesc">{description}</p>
    {#if link}
        <div class="cardLink">
            <LinkButton buttonProps="btnSecondary text-primary" {link} btnLabel="Github Repo" newTab={true}/>
        </div>
    {/if}
</div>

<style>
    .card {
        background: #F6F6F6;
        border-radius: 8px;
        padding: 28px;
        border-top: 3px solid #B8CDEE;
        display: flex;
        flex-direction: column;
        gap: 16px;
        transition: border-top-color 0.2s, box-shadow 0.2s;
    }

    .card:hover {
        border-top-color: #37466D;
        box-shadow: 0 4px 20px rgba(55, 70, 109, 0.08);
    }

    .cardTags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    }

    .tag {
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #92A3C8;
        background: #EEF2F8;
        padding: 3px 8px;
        border-radius: 4px;
    }

    .cardTitle {
        font-size: 1.15rem;
        font-weight: 700;
        color: #37466D;
        line-height: 1.3;
    }

    .cardDesc {
        font-size: 0.875rem;
        color: #4a4a6a;
        line-height: 1.65;
        flex: 1;
    }

    .cardLink {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.8rem;
        font-weight: 600;
        color: #37466D;
        text-decoration: none;
        padding: 7px 14px;
        border-radius: 6px;
        align-self: flex-start;
        transition: background 0.2s, border-color 0.2s;
    }
</style>