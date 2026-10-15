<script lang="ts">

    let {link, btnLabel, newTab = false, buttonProps = 'btnPrimary', download = false, children}: {
        link: string,
        btnLabel: string,
        newTab?: boolean,
        buttonProps?: string,
        download?: boolean,
        children?: any,
    } = $props();

    const linkTarget = () => {
        return newTab ? "_blank" : "";
    };
</script>

<a class="btn text-small font-bold text-primary radius-full {buttonProps}" href="{link}" target="{linkTarget()}"
   role="button"
   {...(download ? {download: ''} : {})}>{btnLabel}{@render children?.()}</a>

<style>
    .btn {
        height: 3rem;
        min-height: 3rem;
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.75rem 1rem;
        transition: background-color 50ms;
        border: transparent 2px solid;

        &.btnPrimary {
            background-color: var(--text-primary) !important;
            color: var(--text-light) !important;
        }

        &.btnSecondary {
            border: 1px solid var(--text-primary);
            color: var(--text-primary) !important;

            &:hover {
                background-color: var(--text-primary) !important;
                color: var(--text-light) !important;
            }
        }

        &.btnLink {
            background-color: var(--accent-dark) !important;
            color: var(--text-light) !important;

            &:hover {
                background-color: var(--accent-mid) !important;
            }
        }
    }

</style>