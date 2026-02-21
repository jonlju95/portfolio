<script lang="ts">
    import '$lib/styles/app.scss';
    import {Footer, Nav} from '$lib';

    let {children} = $props();
</script>

<Nav/>
<main>
    <article class="animatedElement">
        {@render children()}
    </article>
</main>
<Footer/>

<style lang="scss">
  /* Makes the main container fill the entire screen minus the height of the footer and navbar, and moves it down "below" the navbar */
  article {
    width: 100vw;
    min-height: calc(100vh - 12rem);
  }
</style>

