<script lang="ts">
    let {src, title} = $props();
</script>

<div class="techStackIcon my-4 me-5">
    <img {src} alt="{title}"/>
    <p>{title}</p>
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
            font-family: 'Nunito', sans-serif;
            font-weight: bold;
            letter-spacing: 1px;
            margin: 0.5rem 0 0;
        }
    }
</style>