<script lang="ts">
    import Icon from "@iconify/svelte";
    import {getLocale, setLocale} from '$lib/paraglide/runtime';

    const toggleLanguage = () => {
        const next = getLocale();
        setLocale(next === 'en' ? 'se' : 'en');
        localStorage.setItem("locale", next);
    };
</script>

<button onclick={toggleLanguage}
        aria-label={getLocale() === 'en' ? 'Byt till Svenska' : 'Switch to English'}>
    <Icon icon="fa7-solid:globe" width="16" height="16"/>
    <span class="text-small font-bold">{getLocale().toUpperCase()}</span>
</button>

<style lang="scss">
  button {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    background: transparent;
    border: 2px solid var(--accent-mid);
    border-radius: 0.75rem;
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    color: inherit;
  }
</style>