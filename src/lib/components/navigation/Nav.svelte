<script>
    import { navLinks } from '$lib/config/nav';
    import { t } from 'svelte-i18n';
    import { page } from '$app/state'
    import { LangToggle, ThemeToggle } from "$lib";

    let navScrolled = $state(false); // Trigger navbar background (25vh)
    let btnScrolled = $state(false); // Trigger hamburger background (100vh)
    let sidebarOpen = $state(false);

    $effect(() => {
        const navSentinel = document.querySelector('#navSentinel');
        const btnSentinel = document.querySelector('#btnSentinel');

        const navObserver = new IntersectionObserver(
            ([entry]) => {
                navScrolled = !entry.isIntersecting
            },
            { threshold: 0.01 },
        );

        const btnObserver = new IntersectionObserver(
            ([entry]) => {
                btnScrolled = !entry.isIntersecting
            },
            { threshold: 0.01 }
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
</script>

<!-- Sentinels -->
<div id="navSentinel" style="position:absolute; top:25vh; height:1px; pointer-events:none;" aria-hidden="true"></div>
<div id="btnSentinel" style="position:absolute; top:100vh; height:1px; pointer-events:none;" aria-hidden="true"></div>

<!-- Hamburger button - mobile only -->
<button class="hamburger {btnScrolled ? 'scrolled' : ''}"
        onclick={toggleSidebar}
        aria-label="Open navigation menu"
        aria-expanded={sidebarOpen}
        aria-controls="sidebar">
    <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg">
        <path
                d="M 1,3.6666667 H 23 M 1,12 H 23 M 1,20.333333 h 22"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>
</button>

<!-- Sidebar - mobile only -->
<aside id="sidebar"
       class={['animatedElement', sidebarOpen && 'sidebarOpen'].filter(Boolean).join(' ')}
       aria-hidden={!sidebarOpen}>
    <div class="sidebarHeader">
        <h2 class="navbarIcon">jL</h2>
        <button onclick={closeSidebar} aria-label="Close navigation menu">
            <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path d="M 6.1428817,1.0000087 17.857157,12 6.1428817,22.999991"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      fill="none"/>
            </svg>
        </button>
    </div>

    <nav aria-label="Mobile navigation">
        <ul>
            {#each navLinks as link}
                <li>
                    <a href="{link.href}"
                       class={{isActive: page.url.pathname === link.href}}
                       onclick={closeSidebar}>
                        <!-- TODO: add icon per link -->
                        {$t(link.labelKey)}
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
<header class={['animatedElement', navScrolled && 'scrolled'].filter(Boolean).join(' ')}>
    <h2 class="navbarIcon">jL</h2>

    <nav aria-label="Main navigation">
        <ul class="linkList">
            {#each navLinks as link}
                <li>
                    <a href="{link.href}"
                       class={{isActive: page.url.pathname === link.href}}>
                        {$t(link.labelKey)}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>

    <div class="navbarControls">
        <LangToggle/>
        <ThemeToggle/>
    </div>
</header>

<style lang="scss">
  @use '$lib/styles/mixins/breakpoints' as *;

  // Shared
  .navbarIcon {
    background-color: var(--bg-bright);
    color: var(--primary);
    padding: 0 0.75rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    box-shadow: var(--shadow);
    display: flex;
    align-items: center;
    justify-content: center;
  }

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
    color: var(--text);

    &.scrolled {
      background-color: var(--bg-bright);
      box-shadow: var(--shadow);
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }

  // Sidebar
  aside {
    display: none;
    position: fixed;
    z-index: 9999;
    inset: 0 0 0 auto;
    background-color: var(--bg);
    border-radius: 12px 0 0 12px;
    border: var(--border);
    max-width: 70%;
    min-width: 250px;

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
    margin: 0.75rem 1rem;

    button {
      background: transparent;
      border: none;
      cursor: pointer;
      line-height: 0;
      color: var(--text);

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }

  .sidebarFooter {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.75rem 0;
  }

  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  aside nav {
    margin: 3rem 0.75rem auto;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: var(--text);
      padding: 1rem 0.75rem;
      border-radius: 12px;
      margin-bottom: 0.75rem;

      // TODO: add gap here once icons are added
      &.isActive {
        background-color: var(--border);
      }
    }
  }

  // Navbar
  header {
    display: none; // shown via media query below
    position: sticky;
    inset: 0;
    z-index: 9999;
    height: 5rem;
    width: 100vw;
    padding: 0.75rem 1.25rem 0.75rem 1rem;
    border-radius: 0 0 12px 12px;
    background-color: transparent;
    align-items: center;

    &.scrolled {
      background-color: var(--bg-bright);
      box-shadow: var(--shadow);

      .navbarIcon {
        background-color: transparent;
        box-shadow: none;
      }
    }
  }

  .linkList {
    display: flex;
    height: 100%;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 6rem;
      height: 100%;
      font-family: 'Nunito', sans-serif;
      font-weight: 600;
      font-size: 0.75rem;
      letter-spacing: 1px;
      text-decoration: none;
      color: var(--text);

      &:hover,
      &.isActive {
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
  @include media-breakpoint-down(md) {
    aside {
      display: flex;
      flex-direction: column;
      transform: translateX(100%);
      transition:
              transform 0.5s ease-out,
              background-color 0.3s ease-in-out,
              color 0.3s ease-in-out,
              border-color 0.3s ease-in-out !important;

      &.sidebarOpen {
        transform: translateX(0);
      }
    }

    .hamburger { display: block; }
  }

  @include media-breakpoint-up(md) {
    header {
      display: flex;
    }
  }
</style>