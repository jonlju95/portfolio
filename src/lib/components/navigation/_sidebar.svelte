<script lang="ts">
    import {base} from "$app/paths";
    import {page} from "$app/state";
    import {locale, t} from 'svelte-i18n';
    import {browser} from "$app/environment";
    import {onMount} from "svelte";
    import {writable} from "svelte/store";

    let currentTheme: string | null;

    let sidebarOpen: boolean = false;

    export const scrolled = writable(false);

    onMount(() => {
        const sentinel = document.querySelector('#scroll-sentinel');
        const observer = new IntersectionObserver(
            ([entry]) => {
                scrolled.set(!entry.isIntersecting);
            },
            {threshold: 0.01}
        );
        if (sentinel) observer.observe(sentinel);
    });

    if (browser) {
        currentTheme = document.documentElement.getAttribute('data-theme') ? document.documentElement.getAttribute('data-theme') : 'light';
    }

    const toggleLanguage = () => {
        let lang = $locale === 'en' ? 'sv' : 'en';
        locale.set(lang);
        localStorage.setItem('lang', lang);
    };

    const toggleTheme = () => {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            currentTheme = 'light';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            currentTheme = 'dark';
        }
    };

    const toggleSidebar = () => {
        sidebarOpen = !sidebarOpen;
    };

</script>

<div id="scroll-sentinel" style="position: absolute; top: 100vh; height: 1px;"></div>

<button onclick={toggleSidebar} class="menuButton" class:scrolled={$scrolled} aria-labelledby="menu">
    <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            id="menu"
            xmlns="http://www.w3.org/2000/svg">
        <path
                d="M 1,3.6666667 H 23 M 1,12 H 23 M 1,20.333333 h 22"
                stroke="currentColor"
                stroke-width="1.99999"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                id="path1"/>
    </svg>
</button>

<aside class="animatedElement d-flex flex-col" class:sidebarOpen="{sidebarOpen}">
    <div class="d-flex justify-between align-center my-3 mx-4">
        <h2 class="navbarIcon d-flex align-center justify-center textPrimary">jL</h2>
        <button onclick={toggleSidebar} class="closeButton" aria-labelledby="chevronRight">
            <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    id="chevronRight"
                    xmlns="http://www.w3.org/2000/svg">
                <path
                        d="M 6.1428817,1.0000087 17.857157,12 6.1428817,22.999991"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        id="path1"/>
            </svg>
        </button>
    </div>
    <nav>
        <a href="{ base }/" class="mb-3 d-flex align-center"
           class:isActive={page.url.pathname === base+"/"}>{$t('navbar.home')}</a>
        <a href="{ base }/about" class="mb-3 d-flex align-center"
           class:isActive={page.url.pathname === base+"/about"}>{$t('navbar.about')}</a>
        <a href="{ base }/projects" class="d-flex align-center"
           class:isActive={page.url.pathname === base+"/projects"}>{$t('navbar.projects')}</a>
    </nav>
    <div class="optionsContainer d-flex flex-col py-3">
        <button class="ps-4" onclick={toggleLanguage} aria-labelledby="{$locale === 'en' ?
                'uk-flag' : 'se-flag'}">
            {#if $locale === 'en'}
                <div class="iconContainer">
                    <img src="{base}/resources/images/united-kingdom-flag-icon.webp" alt="United kingdom flag"/>
                </div>
            {:else}
                <div class="iconContainer">
                    <img src="{base}/resources/images/sweden-flag-icon.webp" alt="Swedish flag"/>
                </div>
            {/if}
            {$t('navbar.language')}
        </button>
        <button class="ps-4" onclick={toggleTheme} aria-labelledby="moon">
            {#if currentTheme === 'dark'}
                <div class="iconContainer">
                    <svg
                            width="800px"
                            height="800px"
                            viewBox="0 0 24 24"
                            id="sun"
                            xmlns="http://www.w3.org/2000/svg">
                        <path
                                d="M 12,0.9999999 V 2.2222221 M 12,21.777777 V 23 M 2.2222221,12 H 0.9999999 M 5.0505909,5.0505909 4.0555554,4.0555554 M 18.949433,5.0505909 19.944444,4.0555554 M 5.0505909,18.954444 4.0555554,19.944566 m 14.8938776,-0.990122 0.995011,0.990122 M 23,12 h -1.222223 m -4.888889,0 c 0,2.700011 -2.188877,4.888888 -4.888888,4.888888 -2.7000603,0 -4.8888891,-2.188877 -4.8888891,-4.888888 0,-2.7000603 2.1888288,-4.8888891 4.8888891,-4.8888891 2.700011,0 4.888888,2.1888288 4.888888,4.8888891 z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"/>
                    </svg>
                </div>
            {:else}
                <div class="iconContainer">
                    <svg
                            width="800px"
                            height="800px"
                            viewBox="0 0 24 24"
                            id="moon"
                            xmlns="http://www.w3.org/2000/svg">
                        <path
                                d="m 1.0034675,11.597194 c 0,6.297637 5.1051896,11.402795 11.4027395,11.402795 4.798279,0 8.904283,-2.963713 10.587456,-7.160322 -1.313344,0.527823 -2.750471,0.825309 -4.252593,0.825309 -6.297614,0 -11.40274,-5.105158 -11.40274,-11.4027694 0,-1.4950838 0.2931014,-2.9404387 0.816209,-4.2487574 C 3.9627858,2.6989343 1.0034675,6.8024707 1.0034675,11.597194 Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                style="stroke-width:2.00001;stroke-dasharray:none"/>
                    </svg>
                </div>
            {/if}
            {$t('navbar.theme')}
        </button>
    </div>
</aside>

<style lang="scss">
  .menuButton,
  .closeButton {
    background-color: transparent;
    border: none;
    line-height: 0;
    color: var(--text);
  }

  .menuButton {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 9999;
    padding: 0.5rem;
    border-radius: 50%;

    &.scrolled {
      background-color: var(--bg-bright);
      box-shadow: var(--shadow);
    }
  }

  aside {
    position: fixed;
    z-index: 9999;
    inset: 0 0 0 auto;
    background-color: var(--bg);
    border-radius: 12px 0 0 12px;
    border: var(--border);
    max-width: 70%;
    min-width: 250px;
    animation: 0.5s ease-out forwards closeSidebar;

    &.sidebarOpen {
      animation: 0.5s ease-out forwards openSidebar;
    }
  }

  svg {
    height: 24px;
    width: 24px;
  }

  nav {
    margin: 3rem 0.75rem auto;

    a {
      text-decoration: none;
      color: var(--text);
      padding: 1rem 0.75rem;
      border-radius: 12px;

      &.isActive {
        background-color: var(--border);
      }
    }
  }

  .optionsContainer {
    position: absolute;
    bottom: 0;
    width: 100%;

    button {
      background: transparent;
      border: none;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      display: flex;
      align-items: center;
      color: var(--text);

      .iconContainer {
        width: 24px;
        height: 24px;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 0.75rem;

        img {
          position: absolute;
          width: 36px;
          height: 24px;
          left: -6px;
          top: 0;
        }
      }

      svg {
        fill: var(--text);
        color: var(--text);
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }

  @keyframes openSidebar {
    0% {
      transform: translate(250px);
    }
    100% {
      transform: translate(0);
    }
  }

  @keyframes closeSidebar {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translate(250px);
    }
  }
</style>