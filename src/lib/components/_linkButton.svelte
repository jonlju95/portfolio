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

<a class="btn {buttonProps}" href="{link}" target="{linkTarget}" role="button"
   {...(download ? { download: '' } : {})}>{btnLabel}</a>

<style>
    a {
        text-decoration: none;
    }

</style>