<script lang="ts">
    import Icon from '@iconify/svelte';
    import { afterNavigate } from '$app/navigation';
    import { resolve } from '$app/paths';
    import { page } from '$app/state';
    import Button from '$lib/components/Button.svelte';
    import LangToggle from '$lib/components/toggles/LangToggle.svelte';
    import ThemeToggle from '$lib/components/toggles/ThemeToggle.svelte';
    import { navLinks } from '$lib/config/nav';
    import { contact } from '$lib/data/contact';
    import { t } from '$lib/i18n';

    let open = $state(false);
    const close = () => (open = false);

    const trim = (path: string) => path.replace(/\/$/, '');
    const isActive = (href: string) => trim(page.url.pathname) === trim(href);

    afterNavigate(close);
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && close()} />

<header class="site-header" class:open>
    <div class="container bar">
        <a class="brand" href={resolve('/')}>Jonatan Ljung</a>

        <button class="menu-button"
                aria-expanded={open}
                aria-controls="site-menu"
                aria-label={t('nav.menu')}
                onclick={() => (open = !open)}>
            <Icon icon={open ? 'fa7-solid:close' : 'fa7-solid:bars'} width="24" height="24"/>
        </button>

        <div id="site-menu" class="menu">
            <nav aria-label="Main navigation">
                <ul>
                    {#each navLinks as link}
                        <li>
                            <a href={link.href}
                               aria-current={isActive(link.href) ? 'page' : undefined}>
                                {t(link.labelKey)}
                            </a>
                        </li>
                    {/each}
                </ul>
            </nav>

            <div class="actions">
                <Button link="mailto:{contact.email}" btnLabel={t('button.contact')} variant="accent"/>
                <div class="flex gap-s">
                    <LangToggle/>
                    <ThemeToggle/>
                </div>
            </div>
        </div>
    </div>
</header>

{#if open}
    <button class="backdrop" tabindex="-1" aria-hidden="true" onclick={close}></button>
{/if}

<style lang="scss">
  .site-header {
    --header-height: 4.5rem;
    position: sticky;
    top: 0;
    z-index: 10;
    height: var(--header-height);

    // The blur lives on a pseudo-element, see the notes below
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background: color-mix(in srgb, var(--bg-base) 85%, transparent);
      backdrop-filter: blur(12px);
    }

    @media (min-width: 768px) {
      --header-height: 6rem;
    }
  }

  .bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .brand {
    font-size: 1.25rem;
    font-weight: 700;
  }

  .menu,
  nav ul,
  .actions {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }

  .menu {
    gap: var(--space-lg);
  }

  nav a {
    display: inline-block;
    padding: 0.75rem 1rem;
    border-radius: 9999px;
    font-weight: 500;

    &:hover,
    &[aria-current='page'] {
      background-color: var(--bg-surface);
      text-decoration: underline;
    }
  }

  .menu-button {
    display: none;
  }

  .backdrop {
    display: none;
  }

  @media (max-width: 767px) {
    .menu-button {
      display: inline-flex;
      padding: var(--space-xs);
      color: inherit;
    }

    .menu {
      position: fixed;
      inset: var(--header-height) 0 0 auto;
      flex-direction: column;
      align-items: stretch;
      width: min(18rem, 80vw);
      padding: var(--space-lg) var(--space-md);
      background-color: var(--bg-surface);
      box-shadow: var(--shadow);
      transform: translateX(100%);
      visibility: hidden; // closed links leave the Tab order and the accessibility tree
      transition: transform 0.3s ease-out, visibility 0s 0.3s;

      nav ul {
        flex-direction: column;
        align-items: stretch;
      }

      .actions {
        flex-wrap: wrap;
        flex-direction: column;
        align-items: start;
      }
    }

    .site-header.open .menu {
      transform: none;
      visibility: visible;
      transition-delay: 0s;
    }

    .backdrop {
      display: block;
      position: fixed;
      inset: 0;
      z-index: 9; // below the header (10), so the panel and button stay clickable
      background: rgb(0 0 0 / 0.4);
    }
  }
</style>