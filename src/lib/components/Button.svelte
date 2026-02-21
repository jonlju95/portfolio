<script lang="ts">
    let {label, icon, buttonProps = 'btnPrimary'}: { label: string, icon?: string, buttonProps?: string } = $props();
</script>

<button class="btn clickable {buttonProps}" onclick="{(e) => e.preventDefault()}">
    {#if icon}
        <img class="me-2" src="{icon}" alt="Icon" style="color: violet"/>
    {/if}

    {label}
</button>

<style lang="scss">
      img {
        height: 1rem;
      }
</style>