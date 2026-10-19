<script lang="ts">
    import {getLocale, setLocale} from '$lib/paraglide/runtime';

    const toggleLanguage = () => {
        const next = getLocale();
        setLocale(next === 'en' ? 'sv' : 'en');
        localStorage.setItem("locale", next);
    };
</script>

<button onclick={toggleLanguage}
        aria-label={getLocale() === 'en' ? 'Byt till Svenska' : 'Switch to English'}
        class="radius-full">
    {#if getLocale() === 'en'}
        <span class="text-small font-bold">SV</span>
    {:else}
        <span class="text-small font-bold">EN</span>
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

    &:hover {
      background-color: var(--bg-surface);
    }
  }
</style>