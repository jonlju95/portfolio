<script lang="ts">
    let {date, title, description, muted}: { date: string, title: string, description: string, muted?: boolean
    } = $props();
</script>

<div class="border-bottom pb-m">
    <p class="text-label text-muted">{date}</p>
    <h5 class="mt-xs mb-xs">{title}</h5>
    <p class="text-muted">{description}</p>
</div>
