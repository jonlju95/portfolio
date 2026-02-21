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
    <span>{getLocale().toUpperCase()}</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...$$props}>
        <path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z" />
    </svg>
</button>

<style lang="scss">
  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }
</style>