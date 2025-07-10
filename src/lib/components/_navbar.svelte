<script lang="ts">
    import {page} from '$app/state';
    import {base} from '$app/paths';
    import {locale} from 'svelte-i18n';

    let currentTheme = 'light';

    const toggleLanguage = () => {
        locale.set($locale === 'en' ? 'sv' : 'en');
    };

    const toggleTheme = () => {
        if (document.querySelector('body')?.classList.contains('dark')) {
            document.querySelector('body')?.classList.remove('dark');
            currentTheme = 'light';
        } else {
            document.querySelector('body')?.classList.add('dark');
            currentTheme = 'dark';
        }
    };
</script>

<nav class="navbar">
    <section>
        <p class="navbar-header">JL</p>
        <a href="{ base }/" class="clickable" class:isActive={page.url.pathname === base+"/"}>Home</a>
        <a href="{ base }/about" class="clickable" class:isActive={page.url.pathname === base+"/about"}>About me</a>
        <a href="{ base }/experience" class="clickable" class:isActive={page.url.pathname === base+"/experience"}>Experience</a>
        <a href="{ base }/projects" class="clickable"
           class:isActive={page.url.pathname === base+"/projects"}>Projects</a>
    </section>
    <section>
        {#if $locale === 'en'}
            <button class="toggles clickable" onclick={toggleLanguage} aria-labelledby="uk-flag">
                <div class="iconContainer">
                    <img src="{base}/resources/icons/united-kingdom-flag-icon.svg" alt="United kingdom flag"/>
                </div>
            </button>
        {:else}
            <button class="toggles clickable" onclick={toggleLanguage} aria-labelledby="se-flag">
                <div class="iconContainer">
                    <img src="{base}/resources/icons/sweden-flag-icon.svg" alt="Swedish flag"/>
                </div>
            </button>
        {/if}
        <button class="toggles clickable" onclick={toggleTheme} aria-labelledby="moon">
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
    </section>
</nav>

<style>
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 4rem;

        padding: 0 1.5rem;

        border-radius: 0 0 12px 12px;
        border: 1px solid var(--border-muted);
        border-top: none;
        background-color: var(--bg-light);

        box-shadow: var(--shadow);

        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: space-between;

        z-index: 9999;

        section {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;

            a {
                color: var(--text);
                text-decoration: none;
                height: 100%;
                min-width: 7rem;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                &:hover,
                &.isActive {
                    background-color: var(--bg-dark);
                    font-weight: bold;
                }
            }
        }

        .toggles {
            padding: 1rem;
            background: none;
            border: none;
            display: flex;
            height: 100%;
            aspect-ratio: 1 / 1;
            justify-content: center;
            align-items: center;

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

        .navbar-header {
            font-family: 'Nunito', sans-serif;
            font-size: 2rem;
            margin: 0 3rem 0 0;
            color: var(--primary);
        }
    }
</style>