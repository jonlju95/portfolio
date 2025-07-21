<script lang="ts">
    let {src, title} = $props();
</script>

<div class="techStackIcon">
    <img {src} alt="{title}"/>
    <p>{title}</p>
</div>

<style>
    .techStackIcon {
        max-width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;

        &:nth-child(n+2) {
            margin-left: 3rem;
        }

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