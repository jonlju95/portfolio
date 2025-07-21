<script lang="ts">
    let {link, btnLabel, newTab = false, buttonProps = 'btnPrimary'}: { link: string, btnLabel: string, newTab?:
            boolean, buttonProps?: string } = $props();

    const linkTarget = newTab ? "_blank" : "";
</script>

<a class="btn {buttonProps}" href="{link}" target="{linkTarget}" role="button">{btnLabel}</a>

<style>
    a {
        text-decoration: none;
    }

</style>