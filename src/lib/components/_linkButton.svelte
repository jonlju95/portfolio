<script lang="ts">
    let {link, btnLabel, newTab}: { link: string, btnLabel: string, newTab: boolean } = $props();

    const linkTarget = newTab ? "_blank" : "";
</script>

<a class="cardLink" href="{link}" target="{linkTarget}">{btnLabel}</a>

<style>
    .cardLink {
        align-self: end;
        color: var(--bg);
        padding: 1rem;
        background-color: var(--primary);
        border-radius: 12px;
        text-decoration: none;
        font-weight: bold;
        box-shadow: var(--shadow);

        &:hover {
            background-color: oklch(from var(--primary) 0.5 c h);
        }
    }
</style>