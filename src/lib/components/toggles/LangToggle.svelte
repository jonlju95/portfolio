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
    <span class="text-small font-bold">{getLocale().toUpperCase()}</span>
</button>

<style lang="scss">
  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    color: inherit;
  }
</style>