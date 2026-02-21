<script lang="ts">
    import '$lib/styles/app.scss';
    import {Footer, Nav} from '$lib';

    let {children} = $props();

    export const prerender = true;

</script>

<Nav/>
<main>
    <article class="animatedElement">
        {@render children()}
    </article>
</main>
<Footer/>

<style lang="scss">
  article {
    margin-top: -5rem;
  }
</style>

