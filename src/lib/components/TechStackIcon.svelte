<script lang="ts">
    let {src, title} = $props();
</script>

<div class="techStackIcon my-4 me-5">
    <img {src} alt="{title}"/>
    <p class="text-label">{title}</p>
</div>

<style>
    .techStackIcon {
        width: fit-content;
        max-width: 120px;
        min-width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            height: 5rem;
        }

        p {
            margin: 0.5rem 0 0;
        }
    }
</style>