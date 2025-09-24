<script lang="ts">
    import '$lib/styles/app.scss';

    import {Footer, Navbar, Sidebar} from '$lib';
    import {onMount} from 'svelte';

    let {children} = $props();

    let innerWidth = $state(0);
    let mounted = $state(false);

    onMount(() => {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
        }

        mounted = true;
    })
</script>

<svelte:window bind:innerWidth/>

{#if mounted}
    {#if innerWidth < 768}
        <Sidebar></Sidebar>
    {:else}
        <Navbar></Navbar>
    {/if}


    <main>
        <article class="animatedElement">
            {@render children()}
        </article>
    </main>

    <Footer></Footer>
{/if}

<style lang="scss">
  /* Makes the main container fill the entire screen minus the height of the footer and navbar, and moves it down "below" the navbar */
  article {
    width: 100vw;
    min-height: calc(100vh - 12rem);
  }
</style>

