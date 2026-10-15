<script lang="ts">
    import {navLinks} from '$lib/config/nav';
    import {page} from '$app/state'
    import {Button, LangToggle, ThemeToggle} from "$lib";
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
        const target = href.replace(/\/$/, '');
        return current === target;
    }

</script>

<!--&lt;!&ndash; Sentinels &ndash;&gt;-->
<!--<div id="navSentinel" style="position:absolute; top:25vh; height:1px; pointer-events:none;" aria-hidden="true"></div>-->
<!--<div id="btnSentinel" style="position:absolute; top:10vh; height:1px; pointer-events:none;" aria-hidden="true"></div>-->

<!--&lt;!&ndash; Hamburger button - mobile only &ndash;&gt;-->
<!--<button class="hamburger {[btnScrolled && 'scrolled', isHome && 'home'].filter(Boolean).join(' ')}"-->
<!--        onclick={toggleSidebar}-->
<!--        aria-label="Open navigation menu"-->
<!--        aria-expanded={sidebarOpen}-->
<!--        aria-controls="sidebar">-->
<!--    <Icon icon="fa7-solid:bars" width="32" height="32"/>-->
<!--</button>-->

<!--&lt;!&ndash; Sidebar - mobile only &ndash;&gt;-->
<!--<aside id="sidebar"-->
<!--       class={['animatedElement', sidebarOpen && 'sidebarOpen'].filter(Boolean).join(' ')}-->
<!--       aria-hidden={!sidebarOpen}>-->
<!--    <div class="sidebarHeader">-->
<!--        <h2 class="navbarIcon text-small">-->
<!--            <span>Jonatan</span>-->
<!--            <span class="text-muted">Ljung</span>-->
<!--        </h2>-->
<!--        <button onclick={closeSidebar} aria-label="Close navigation menu">-->
<!--            <Icon icon="fa7-solid:close" width="16" height="16"/>-->
<!--        </button>-->
<!--    </div>-->

<!--    <nav aria-label="Mobile navigation">-->
<!--        <ul>-->
<!--            {#each navLinks as link}-->
<!--                <li>-->
<!--                    <a href="{localizeHref(link.href)}"-->
<!--                       class={isActive(link.href) ? 'active' : ''}-->
<!--                       onclick={closeSidebar}>-->
<!--                        {#if link.icon}-->
<!--                            <Icon icon={link.icon} width={18} height={18}/>-->
<!--                        {/if}-->
<!--                        {t(link.labelKey)}-->
<!--                    </a>-->
<!--                </li>-->
<!--            {/each}-->
<!--        </ul>-->
<!--    </nav>-->

<!--    <div class="sidebarFooter">-->
<!--        <LangToggle/>-->
<!--        <ThemeToggle/>-->
<!--    </div>-->
<!--</aside>-->

<!-- Navbar - desktop only -->
<header class="site-header flex items-center justify-between">
    <div class="container flex items-center justify-between">
        <h4>Jonatan Ljung</h4>
        <nav aria-label="Main navigation">
            <ul class="linkList">
                {#each navLinks as link}
                    <li>
                        <a href="{link.href}"
                           class={'radius-full ' + (isActive(link.href) ? 'active' : '')}>
                            {t(link.labelKey)}
                        </a>
                    </li>
                {/each}
                <Button link="mailto:jonatan.ljung@hotmail.com" btnLabel={t('button.contact')}
                        buttonProps="btnLink"/>
                <LangToggle/>
                <ThemeToggle/>
            </ul>
        </nav>
    </div>

</header>

<style lang="scss">
  // Navbar
  .site-header {
    height: 6rem;
    width: 100%;
    position: sticky;
    top: 0;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    z-index: 10;
    background: color-mix(in srgb, var(--bg-base) 85%, transparent);
    backdrop-filter: blur(12px);

    @media (max-width: 767px) {
      position: static;
    }
  }

  //header {
  //  display: none;
  //  position: sticky;
  //  inset: 0;
  //  z-index: 9999;
  //  height: 5rem;
  //  width: 100vw;
  //  padding: 0.75rem 1.25rem 0.75rem 1rem;
  //  border-radius: 0 0 12px 12px;
  //  background-color: transparent;
  //  align-items: center;
  //
  //  &.home:not(.scrolled) {
  //    color: var(--text-light);
  //  }
  //
  //  &.scrolled {
  //    background-color: var(--bg-surface);
  //    box-shadow: var(--shadow);
  //    color: var(--text-primary);
  //  }
  //}
  //
  .linkList {
    display: flex;
    align-items: center;
    height: 3rem;
    min-height: 3rem;
    gap: 0.5rem;

    a {
      display: inline-block;
      padding: 0.75rem 1rem;
      height: 3rem;
      min-height: 3rem;
      font-weight: 500;
      font-size: 1rem;
      text-decoration: none;
      color: var(--text-primary);

      &:hover,
      &.active {
        background-color: #E8EAF0;
      }
    }
  }

  //
  //.navbarControls {
  //  display: flex;
  //  align-items: center;
  //  height: 100%;
  //  margin-left: auto;
  //}
  //
  //// Responsive
  //@media (max-width: 767px) {
  //  aside {
  //    display: flex;
  //    flex-direction: column;
  //    transform: translateX(100%);
  //    transition: transform 0.5s ease-out,
  //    background-color 0.3s ease-in-out,
  //    color 0.3s ease-in-out,
  //    border-color 0.3s ease-in-out;
  //
  //    &.sidebarOpen {
  //      transform: translateX(0);
  //    }
  //  }
  //
  //  .hamburger {
  //    display: block;
  //  }
  //}
  //
  //@media (min-width: 768px) {
  //  header {
  //    display: flex;
  //    justify-content: space-between;
  //  }
  //}
</style>