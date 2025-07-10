<script lang="ts">
    import {Navbar, Footer} from '$lib';

    let {children} = $props();

</script>

<Navbar></Navbar>

<article class="container animatedElement">
    {@render children()}
</article>

<Footer></Footer>

<style>
    .container {
        min-height: calc(100vh - 8rem);
        margin-top: 4rem;
    }
</style>

