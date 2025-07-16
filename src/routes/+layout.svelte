<script lang="ts">
    import '$lib/styles/app.scss';

    import {Footer, Navbar} from '$lib';
    import {browser} from '$app/environment';

    let {children} = $props();

    if (browser) {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
        }
    }
</script>

<Navbar></Navbar>

<main>
    <article class="animatedElement">
        {@render children()}
    </article>
</main>

<Footer></Footer>

<style lang="scss">
  /* Makes the main container fill the entire screen minus the height of the footer and navbar, and moves it down "below" the navbar */
  article {
    width: 100vw;
    min-height: calc(100vh - 12rem);
  }
</style>

