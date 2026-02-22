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

<button onclick={toggleTheme} aria-label={currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
    {#if currentTheme === 'dark'}
        <Icon icon="fa7-solid:sun" width="16" height="16" />
    {:else}
        <Icon icon="fa7-solid:moon" width="16" height="16" />
    {/if}
</button>

<style lang="scss">
  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: 2px solid var(--accent-mid);
    border-radius: 0.75rem;
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    color: inherit;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--text);
    color: var(--text);
  }
</style>