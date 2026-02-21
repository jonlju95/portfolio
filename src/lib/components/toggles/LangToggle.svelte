<script lang="ts">
    import { locale, t } from 'svelte-i18n';
    import { base } from '$app/paths';

    const toggleLanguage = () => {
        const next = $locale === 'en' ? 'sv' : 'en';
        locale.set(next);
        localStorage.setItem('lang', next);
    };
</script>

<button
        onclick={toggleLanguage}
        aria-label={$locale === 'en' ? 'Byt till Svenska' : 'Switch to English'}
>
    <!-- TODO: replace with dropdown component -->
    <div class="iconContainer">
        {#if $locale === 'en'}
            <img src="{base}/resources/images/united-kingdom-flag-icon.webp" alt="United Kingdom flag" />
        {:else}
            <img src="{base}/resources/images/sweden-flag-icon.webp" alt="Swedish flag" />
        {/if}
    </div>
    <span class="label">{$t('navbar.language')}</span>
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