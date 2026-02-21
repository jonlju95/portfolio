<script lang="ts">

    let {link, btnLabel, newTab = false, buttonProps = 'btnPrimary', download = false}: {
        link: string,
        btnLabel: string,
        newTab?: boolean,
        buttonProps?: string,
        download?: boolean,
    } = $props();

    const linkTarget = newTab ? "_blank" : "";
</script>

<a class="btn text-small {buttonProps}" href="{link}" target="{linkTarget}" role="button"
   {...(download ? { download: '' } : {})}>{btnLabel}</a>

<style>
    .btn {
        padding: 0.75rem 1.5rem;
        border-radius: var(--radius);
        box-shadow: var(--shadow);

        &.btnPrimary {
            background-color: var(--accent);
            color: var(--accent-dark);
        }

        &.btnSecondary {
            outline: var(--accent) 1px solid;
            color: var(--accent);
        }
    }

</style>