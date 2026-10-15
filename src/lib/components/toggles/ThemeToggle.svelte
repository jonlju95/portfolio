<script lang="ts">
    import {browser} from "$app/environment";
    import Icon from "@iconify/svelte";

    let currentTheme = $state(
        browser ? (document.documentElement.getAttribute("data-theme") ?? 'light') : 'light'
    );

    const toggleTheme = () => {
        const next = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem('theme', next);
        currentTheme = next;
    }
</script>

<button onclick={toggleTheme} aria-label={currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        class="radius-full flex items-center justify-center">
    {#if currentTheme === 'dark'}
        <Icon icon="fa7-solid:sun" width="18" height="18"/>
    {:else}
        <Icon icon="fa7-solid:moon" width="18" height="18"/>
    {/if}
</button>

<style lang="scss">
  button {
    min-height: 48px;
    min-width: 48px;
    background: transparent;
    border: 1px solid var(--border);
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    color: inherit;
  }
</style>