<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { locale } from 'svelte-i18n';

	const toggleLanguage = () => {
		locale.set($locale === 'en' ? 'sv' : 'en');
	};

	const toggleTheme = () => {
		if (document.querySelector('body')?.classList.contains('dark')) {
			document.querySelector('body')?.classList.remove('dark');
		} else {
			document.querySelector('body')?.classList.add('dark');
		}
	};
</script>

<nav class="navbar">
	<section>
		<p class="navbar-header">JL</p>
		<a href="{ base }/" class="clickable" class:isActive={page.url.pathname === "/"}>Home</a>
		<a href="{ base }/about" class="clickable" class:isActive={page.url.pathname === "/about"}>About me</a>
<!--		<a href="/experience" class="clickable" class:isActive={page.url.pathname === "/experience"}>Experience</a>-->
<!--		<a href="/projects" class="clickable" class:isActive={page.url.pathname === "/projects"}>Projects</a>-->
	</section>
	<section>
		{#if $locale === 'sv'}
			<button class="toggles clickable" onclick={toggleLanguage} aria-labelledby="uk-flag">
				<svg
					id="uk-flag"
					width="100%"
					height="100%"
					x="0px"
					y="0px"
					viewBox="0 0 38.400002 23.999999"
					xml:space="preserve"
					xmlns="http://www.w3.org/2000/svg">
  <style
		type="text/css"
		id="style1">.st0 {
      fill: #FEFEFE;
  }

  .st1 {
      fill: #C8102E;
  }

  .st2 {
      fill: #012169;
  }</style>
					<g
						id="g12"
						transform="scale(0.6956522,0.625)">
    <path
			class="st0"
			d="m 2.87,38.4 h 49.46 c 1.59,-0.09 2.87,-1.42 2.87,-3.03 V 3.03 C 55.2,1.37 53.85,0.01 52.19,0 H 3.01 C 1.35,0.01 0,1.37 0,3.03 v 32.33 c 0,1.62 1.28,2.95 2.87,3.04 z"
			id="path1" />
						<polygon
							class="st1"
							points="31.42,0 23.74,0 23.74,15.35 0,15.35 0,23.03 23.74,23.03 23.74,38.4 31.42,38.4 31.42,23.03 55.2,23.03 55.2,15.35 31.42,15.35 "
							id="polygon1" />
						<path
							class="st2"
							d="M 33.98,12.43 V 0 h 18.23 c 1.26,0.02 2.34,0.81 2.78,1.92 z"
							id="path2" />
						<path
							class="st2"
							d="M 33.98,25.97 V 38.4 h 18.35 c 1.21,-0.07 2.23,-0.85 2.66,-1.92 z"
							id="path3" />
						<path
							class="st2"
							d="M 21.18,25.97 V 38.4 H 2.87 C 1.66,38.33 0.63,37.55 0.21,36.46 Z"
							id="path4" />
						<path
							class="st2"
							d="M 21.18,12.43 V 0 H 2.99 C 1.73,0.02 0.64,0.82 0.21,1.94 Z"
							id="path5" />
						<polygon
							class="st2"
							points="7.65,12.8 0,8.97 0,12.8 "
							id="polygon5" />
						<polygon
							class="st2"
							points="47.51,12.8 55.2,8.95 55.2,12.8 "
							id="polygon6" />
						<polygon
							class="st2"
							points="47.51,25.6 55.2,29.45 55.2,25.6 "
							id="polygon7" />
						<polygon
							class="st2"
							points="7.65,25.6 0,29.43 0,25.6 "
							id="polygon8" />
						<polygon
							class="st1"
							points="55.2,5.4 55.2,3.25 36.15,12.8 40.41,12.8 "
							id="polygon9" />
						<polygon
							class="st1"
							points="0,32.98 0,35.13 19.05,25.6 19.01,25.6 14.75,25.6 "
							id="polygon10" />
						<polygon
							class="st1"
							points="0,7.55 10.52,12.81 14.78,12.81 0,5.41 "
							id="polygon11" />
						<polygon
							class="st1"
							points="55.2,30.88 44.63,25.59 40.37,25.59 55.2,33.02 "
							id="polygon12" />
  </g>
</svg>
			</button>
		{:else}
			<button class="toggles clickable" onclick={toggleLanguage} aria-labelledby="se-flag">
				<svg
					id="se-flag" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
					image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
					viewBox="0 0 203.55 141.6" width="100%"
					height="100%"
					x="0px"
					y="0px">
					<g fill-rule="nonzero">
						<path fill="#006AA7"
									d="M11.19 0h181.17c6.15 0 11.19 5.03 11.19 11.19v119.22c0 6.16-5.04 11.19-11.19 11.19H11.19C5.03 141.6 0 136.57 0 130.41V11.19C0 5.03 5.03 0 11.19 0z" />
						<path fill="#FECC00" d="M0 56.51h58.9V0h28.58v56.51h116.07v28.58H87.48v56.51H58.9V85.09H0z" />
					</g>
				</svg>
			</button>
		{/if}
		<button class="toggles clickable" onclick={toggleTheme} aria-labelledby="moon">
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M 23.687621,13.034642 A 9.6858591,9.6982941 0 0 1 14.853088,18.827112 9.6858591,9.6982941 0 0 1 5.1666554,9.1282414 9.6858591,9.6982941 0 0 1 10.87755,0.31237747 11.713618,11.728658 0 0 0 0.31239596,11.958922 11.713618,11.728658 0 0 0 12.026038,23.687604 11.713618,11.728658 0 0 0 23.687621,13.034642 Z"
					style="stroke-width:0.624792;stroke-linejoin:round"
					stroke="currentColor"
					id="moon" />
			</svg>
		</button>
	</section>
</nav>

<style>
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
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