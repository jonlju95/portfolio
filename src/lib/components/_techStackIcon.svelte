<script lang="ts">
    let {src, title} = $props();
</script>

<div class="techStackIcon">
    <img {src} alt="{title}"/>
    <p>{title}</p>
</div>

<style>
    .techStackIcon {
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;

        &:nth-child(n+2) {
            margin-left: 4rem;
        }

        img {
            height: 5rem;
        }

        p {
            font-weight: bold;
            margin: 0.5rem 0 0;
        }
    }
</style>