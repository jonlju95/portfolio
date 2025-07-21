<script lang="ts">
    import {page} from '$app/state';
    import {base} from '$app/paths';
    import {locale, t} from 'svelte-i18n';

    import {browser} from '$app/environment';

    import {onMount} from "svelte";
    import {writable} from "svelte/store";

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

    let currentTheme: string | null;

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


</script>

<div id="scroll-sentinel" style="position: absolute; top: 25vh; height: 1px;"></div>

<header class:scrolled={$scrolled} class="ps-4 pe-5">
    <h3 class="navbarIcon d-flex align-center justify-center">jL</h3>
    <nav class="h-100 w-100 px-4">
        <ul class="linkList h-100">
            <li class="h-100"><a href="{ base }/" class="h-100 clickable d-flex align-center justify-center"
                                 class:isActive={page.url.pathname === base+"/"}>{$t('navbar.home')}</a>
            </li>
            <li class="h-100"><a href="{ base }/about" class="h-100 clickable d-flex align-center justify-center"
                                 class:isActive={page.url.pathname === base+"/about"}>{$t('navbar.about')}</a></li>
            <li class="h-100"><a href="{ base }/projects" class="h-100 clickable d-flex align-center justify-center"
                                 class:isActive={page.url.pathname === base+"/projects"}>{$t('navbar.projects')}</a>
            </li>
        </ul>
    </nav>
    <section class="h-100">
        <ul class="settingList h-100">
            <li class="d-flex align-center me-3">
                <button class="clickable p-2" onclick={toggleLanguage} aria-labelledby="{$locale === 'en' ?
                'uk-flag' : 'se-flag'}">
                    {#if $locale === 'en'}
                        <div class="iconContainer">
                            <img src="{base}/resources/icons/united-kingdom-flag-icon.svg" alt="United kingdom flag"/>
                        </div>
                    {:else}
                        <div class="iconContainer">
                            <img src="{base}/resources/icons/sweden-flag-icon.svg" alt="Swedish flag"/>
                        </div>
                    {/if}
                </button>
            </li>
            <li class="d-flex align-center">
                <button class="clickable p-2" onclick={toggleTheme} aria-labelledby="moon">
                    {#if currentTheme === 'dark'}
                        <div class="iconContainer">
                            <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    id="sun"
                                    xmlns="http://www.w3.org/2000/svg">
                                <g
                                        id="layer1">
                                    <ellipse
                                            id="path1"
                                            cx="12.000001"
                                            cy="12"
                                            rx="8.4710007"
                                            ry="8.4709997"
                                            style="stroke-opacity:1;fill-opacity:1"
                                            stroke="currentColor"/>
                                    <path
                                            style="stroke-width:0.460411;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none"
                                            stroke="currentColor"
                                            id="path9"
                                            d="M 6.8506711,2.2206145 7.5391118,3.6463521 6.0007482,4.0206723 5.7196809,5.5787736 4.2550987,4.9773776 3.1118815,6.0727007 2.2805013,4.7253013 0.71180436,4.9394702 0.83118516,3.3607281 -0.56380261,2.6119374 0.46073979,1.4048786 -0.22770092,-0.02085905 1.3106627,-0.39517928 1.59173,-1.9532805 3.0563122,-1.3518845 4.1995294,-2.4472077 5.0309096,-1.0998083 6.5996065,-1.3139771 6.4802257,0.26476494 7.8752135,1.0135556 Z"
                                            transform="matrix(2.7562957,-0.34196365,0.35841485,2.6297828,1.2740813,8.4829887)"/>
                                </g>
                            </svg>
                        </div>
                    {:else}
                        <div class="iconContainer">
                            <svg
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                <path
                                        d="M 23.687621,13.034642 A 9.6858591,9.6982941 0 0 1 14.853088,18.827112 9.6858591,9.6982941 0 0 1 5.1666554,9.1282414 9.6858591,9.6982941 0 0 1 10.87755,0.31237747 11.713618,11.728658 0 0 0 0.31239596,11.958922 11.713618,11.728658 0 0 0 12.026038,23.687604 11.713618,11.728658 0 0 0 23.687621,13.034642 Z"
                                        style="stroke-width:0.624792;stroke-linejoin:round"
                                        stroke="currentColor"
                                        id="moon"/>
                            </svg>
                        </div>
                    {/if}
                </button>
            </li>
        </ul>
    </section>
</header>

<style lang="scss">
  header {
    display: flex;
    height: 5rem;
    width: 100vw;
    position: sticky;
    inset: 0;
    border-radius: 0 0 12px 12px;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;

    background-color: transparent;

    /* To ensure the nav bar is always on top */
    z-index: 9999;

    &.scrolled {
      transition: none !important;
      background-color: var(--bg-bright);
      box-shadow: var(--shadow);

      .navbarIcon {
        background-color: transparent;
        box-shadow: none;
        transition: none !important;
      }
    }

    .navbarIcon {
      background-color: var(--bg-bright);
      color: var(--primary);
      padding: 0 0.75rem;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      box-shadow: var(--shadow);
    }

    .linkList {
      display: flex;
      list-style: none;

      li > :hover,
      a.isActive {
        text-decoration: underline;
        font-weight: bold;
      }

      li > a {
        min-width: 6rem;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        font-size: 0.75rem;
        letter-spacing: 1px;
        text-decoration: none;
        color: var(--text);
      }
    }

    .settingList {
      display: flex;
      list-style: none;

      li > button {
        background: transparent;
        border: none;

        .iconContainer {
          width: 24px;
          height: 24px;
          position: relative;
          overflow: hidden;
          border-radius: 50%;

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
  }
</style>