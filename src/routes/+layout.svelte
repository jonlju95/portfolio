<script lang="ts">
    import '$lib/styles/app.scss';
    import {Footer, Nav} from '$lib';
    import {page} from "$app/state";

    let {children} = $props();
</script>

<Nav/>
<main>
    <article class="animatedElement">{@render children()}</article>
</main>
<Footer variant={page.data.footer ?? 'default'}/>
