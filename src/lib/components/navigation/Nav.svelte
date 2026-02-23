<script lang="ts">
    import {navLinks} from '$lib/config/nav';
    import {page} from '$app/state'
    import {LangToggle, ThemeToggle} from "$lib";
    import Icon from "@iconify/svelte";
    import {localizeHref} from "$lib/paraglide/runtime";
    import {t} from '$lib/i18n'

    const isHome = $derived(page.url.pathname === '/' || page.url.pathname === '/se/' ||
        page.url.pathname === '/portfolio/' || page.url.pathname === '/portfolio/se/');

    let navScrolled = $state(false); // Trigger navbar background (25vh)
    let btnScrolled = $state(false); // Trigger hamburger background (10vh)
    let sidebarOpen = $state(false);

    $effect(() => {
        const navSentinel = document.querySelector('#navSentinel');
        const btnSentinel = document.querySelector('#btnSentinel');

        const navObserver = new IntersectionObserver(
            ([entry]) => {
                navScrolled = !entry.isIntersecting
            },
            {threshold: 0.01},
        );

        const btnObserver = new IntersectionObserver(
            ([entry]) => {
                btnScrolled = !entry.isIntersecting
            },
            {threshold: 0.01}
        );

        if (navSentinel) {
            navObserver.observe(navSentinel);
        }

        if (btnSentinel) {
            btnObserver.observe(btnSentinel);
        }

        return () => {
            navObserver.disconnect();
            btnObserver.disconnect();
        }
    });

    const closeSidebar = () => {
        sidebarOpen = false;
    }
    const toggleSidebar = () => {
        sidebarOpen = !sidebarOpen;
    }

    const isActive = (href: string) => {
        const current = page.url.pathname.replace(/\/$/, '');
        const target = localizeHref(href).replace(/\/$/, '');
        return current === target;
    }

</script>

<!-- Sentinels -->
<div id="navSentinel" style="position:absolute; top:25vh; height:1px; pointer-events:none;" aria-hidden="true"></div>
<div id="btnSentinel" style="position:absolute; top:10vh; height:1px; pointer-events:none;" aria-hidden="true"></div>

<!-- Hamburger button - mobile only -->
<button class="hamburger {[btnScrolled && 'scrolled', isHome && 'home'].filter(Boolean).join(' ')}"
        onclick={toggleSidebar}
        aria-label="Open navigation menu"
        aria-expanded={sidebarOpen}
        aria-controls="sidebar">
    <Icon icon="fa7-solid:bars" width="32" height="32"/>
</button>

<!-- Sidebar - mobile only -->
<aside id="sidebar"
       class={['animatedElement', sidebarOpen && 'sidebarOpen'].filter(Boolean).join(' ')}
       aria-hidden={!sidebarOpen}>
    <div class="sidebarHeader">
        <h2 class="navbarIcon text-small">
            <span>Jonatan</span>
            <span class="text-muted">Ljung</span>
        </h2>
        <button onclick={closeSidebar} aria-label="Close navigation menu">
            <Icon icon="fa7-solid:close" width="16" height="16"/>
        </button>
    </div>

    <nav aria-label="Mobile navigation">
        <ul>
            {#each navLinks as link}
                <li>
                    <a href="{localizeHref(link.href)}"
                       class={isActive(link.href) ? 'active' : ''}
                       onclick={closeSidebar}>
                        {#if link.icon}
                            <Icon icon={link.icon} width={18} height={18}/>
                        {/if}
                        {t(link.labelKey)}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>

    <div class="sidebarFooter">
        <LangToggle/>
        <ThemeToggle/>
    </div>
</aside>

<!-- Navbar - desktop only -->
<header class={[navScrolled && 'scrolled', isHome && 'home'].filter(Boolean).join(' ')}>
    <h5 class={['font-bold', navScrolled && 'scrolled', isHome && 'home'].filter(Boolean).join(' ')}>
        <span class={[navScrolled && 'text-primary', (isHome && !navScrolled) && 'text-light'].filter(Boolean).join(' ')}>Jonatan</span>
        <span class="{[(!isHome || navScrolled) && 'text-accent-dark', (isHome && !navScrolled) && 'text-accent'].filter(Boolean).join(' ')}">Ljung</span>
    </h5>

    <nav aria-label="Main navigation">
        <ul class="linkList">
            {#each navLinks as link}
                <li>
                    <a href="{localizeHref(link.href)}"
                       class={'text-small ' + (isActive(link.href) ? 'active' : '')}>
                        {t(link.labelKey)}
                    </a>
                </li>
            {/each}
            <LangToggle/>
            <ThemeToggle/>
        </ul>
    </nav>
</header>

<style lang="scss">
  // Hamburger button
  .hamburger {
    display: none; // shown via media query below
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 9999;
    padding: 0.5rem;
    border-radius: 50%;
    background: transparent;
    border: none;
    cursor: pointer;
    line-height: 0;
    color: var(--text-primary);

    &.home:not(.scrolled) {
      color: var(--text-light);
    }

    &.scrolled {
      background-color: var(--bg-surface);
      box-shadow: var(--shadow);
    }
  }

  // Sidebar
  aside {
    display: none;
    position: fixed;
    z-index: 9999;
    inset: 0 0 0 auto;
    background-color: var(--bg-surface);
    border-radius: 1rem 0 0 1rem;
    border-top: var(--border) 3px solid;
    max-width: 70%;
    min-width: 250px;
    min-height: 100svh;

    &.sidebarTouched {
      animation: 0.5s ease-out forwards closeSidebar;
    }

    &.sidebarOpen {
      animation: 0.5s ease-out forwards openSidebar;
    }
  }

  .sidebarHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1.25rem 1rem;
    border-bottom: 1px solid var(--accent);
  }

  .sidebarFooter {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1.25rem;
    gap: 1rem;
    border-top: 1px solid var(--accent);
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
    }
  }

  aside nav {
    margin: 1rem 0.75rem auto;

    a {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      text-decoration: none;
      color: var(--text);
      border-radius: 12px;
      margin-bottom: 0.75rem;

      &.active {
        background-color: var(--border);
      }
    }
  }

  // Navbar
  header {
    display: none;
    position: sticky;
    inset: 0;
    z-index: 9999;
    height: 5rem;
    width: 100vw;
    padding: 0.75rem 1.25rem 0.75rem 1rem;
    border-radius: 0 0 12px 12px;
    background-color: transparent;
    align-items: center;

    &.home:not(.scrolled) {
      color: var(--text-light);
    }

    &.scrolled {
      background-color: var(--bg-surface);
      box-shadow: var(--shadow);
      color: var(--text-primary);
    }
  }

  .linkList {
    display: flex;
    height: 100%;
    gap: 0.75rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 6rem;
      height: 100%;
      font-weight: 600;
      font-size: 0.75rem;
      letter-spacing: 1px;
      text-decoration: none;
      color: var(--text);

      &:hover,
      &.active {
        text-decoration: underline;
        font-weight: bold;
      }
    }
  }

  .navbarControls {
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: auto;
  }

  // Responsive
  @media (max-width: 767px) {
    aside {
      display: flex;
      flex-direction: column;
      transform: translateX(100%);
      transition: transform 0.5s ease-out,
      background-color 0.3s ease-in-out,
      color 0.3s ease-in-out,
      border-color 0.3s ease-in-out;

      &.sidebarOpen {
        transform: translateX(0);
      }
    }

    .hamburger {
      display: block;
    }
  }

  @media (min-width: 768px) {
    header {
      display: flex;
      justify-content: space-between;
    }
  }
</style>