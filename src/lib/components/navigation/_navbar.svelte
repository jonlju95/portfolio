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
    <h2 class="navbarIcon d-flex align-center justify-center">jL</h2>
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
                            <img src="{base}/resources/images/united-kingdom-flag-icon.webp" alt="United kingdom flag"/>
                        </div>
                    {:else}
                        <div class="iconContainer">
                            <img src="{base}/resources/images/sweden-flag-icon.webp" alt="Swedish flag"/>
                        </div>
                    {/if}
                </button>
            </li>
            <li class="d-flex align-center">
                <button class="clickable p-2" onclick={toggleTheme} aria-labelledby="moon">
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
                                        style="stroke-width:2.00001;stroke-dasharray:none" />
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