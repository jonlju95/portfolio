<script lang="ts">
    import {Navbar, Footer} from '$lib';
    import { browser } from '$app/environment';

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

<article class="container animatedElement">
    {@render children()}
</article>

<Footer></Footer>

<style>
    .container {
        min-height: calc(100vh - 12rem);
        margin-top: 4rem;
    }
</style>

