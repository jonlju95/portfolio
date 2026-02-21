<script lang="ts">
    import Icon from "@iconify/svelte";
    import { getLocale, setLocale,  } from '$lib/paraglide/runtime';

    const toggleLanguage = () => {
        const next = getLocale();
        setLocale(next === 'en' ? 'se' : 'en');
        localStorage.setItem("locale", next);
    };
</script>

<button
        onclick={toggleLanguage}
        aria-label={getLocale() === 'en' ? 'Byt till Svenska' : 'Switch to English'}
>
    <!-- TODO: replace with dropdown component -->
    <div class="iconContainer">
        {#if getLocale() === 'en'}
            <span>EN</span>
            <Icon icon="fluent:chevron-down-20-regular" width="20" height="20" />
        {:else}
            <span>SE</span>
            <Icon icon="fluent:chevron-down-20-regular" width="20" height="20" color="gray" />
        {/if}
        <Icon icon="mdi:chevron-down-20-regular" width="20" height="20" />
    </div>
</button>

<style lang="scss">
  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    color: var(--text);
  }

  .iconContainer {
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    flex-shrink: 0;

    img {
      position: absolute;
      width: 36px;
      height: 24px;
      left: -6px;
      top: 0;
    }
  }

  .label {
    font-size: 0.875rem;
  }
</style>