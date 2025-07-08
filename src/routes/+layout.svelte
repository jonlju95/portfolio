<script lang="ts">
	// import { Navbar, Footer } from '$lib';

	let { children } = $props();

</script>

<!--<Navbar></Navbar>-->

<article class="container animated-element">
	{@render children()}
</article>

<!--<Footer></Footer>-->

<style>
    .container {
        height: fit-content;
				min-height: calc(100vh - 6rem);
				padding: 6rem 0 4rem;
    }

</style>

