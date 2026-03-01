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
  article {
    margin-top: -5rem;
  }
</style>

