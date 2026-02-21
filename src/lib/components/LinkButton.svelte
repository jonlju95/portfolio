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

<a class="btn text-small font-bold text-primary {buttonProps}" href="{link}" target="{linkTarget}" role="button"
   {...(download ? { download: '' } : {})}>{btnLabel}</a>

<style>
    .btn {
        padding: 0.75rem 1.5rem;
        border-radius: var(--radius);

        &.btnPrimary {
            background-color: var(--accent);
            color: var(--accent-dark);
            box-shadow: var(--shadow);
        }

        &.btnSecondary {
            border: var(--accent) 2px solid ;
        }
    }

</style>