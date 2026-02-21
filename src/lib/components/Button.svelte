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

<a class="btn text-small font-bold text-primary {buttonProps}" href="{link}" target="{linkTarget()}" role="button"
   {...(download ? { download: '' } : {})}>{btnLabel}{@render children?.()}</a>

<style>
    .btn {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.75rem 1.5rem;
        border-radius: var(--radius);
        transition: background-color 50ms;
        border: transparent 2px solid;

        &.btnPrimary {
            background-color: var(--accent);
            color: var(--accent-dark);
            box-shadow: var(--shadow);

            &.outline {
                border-color: var(--accent);
                background-color: transparent;

                &:hover {
                    background-color: var(--accent);
                }
            }

            &:hover {
                background-color: var(--accent-mid);
            }
        }

        &.btnSecondary {


            &.outline {
                border-color: var(--accent);
            }

            &:hover {
                background-color: var(--accent);
            }
        }
    }

</style>