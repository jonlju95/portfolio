<script lang="ts">
    import {t} from "$lib/i18n";
    import {featuredProjects, projects} from "$lib/data/projects";
    import Card from "$lib/components/Card.svelte";
    import Section from "$lib/components/Section.svelte";
</script>

<Section title={t('projects.title')} subtitle={t('projects.subtitle')}>
    <h3>Featured</h3>
    <div class="grid mt-l gap-l">
        {#each featuredProjects as project}
            <Card
                    title={project.title}
                    tags={project.techStack}
                    link={project.link}
            ><p>{t(project.descriptionKey)}</p></Card>
        {/each}
    </div>
</Section>

<Section tone="surface">
    <h3>Other projects</h3>

    <div class="grid mt-l gap-l">
        {#each projects as project}
            <Card
                    title={project.title}
                    variant="base"
                    tags={project.techStack}
                    link={project.link}
            ><p>{t(project.descriptionKey)}</p></Card>
        {/each}
    </div>
</Section>
<!--<section class="section bg-base">-->
<!--    <div class="container">-->
<!--        <div class="stack pb-m" data-gap="sm">-->
<!--            <h2>{t('projects.title')}</h2>-->
<!--            <p class="text-muted">{t('projects.subtitle')}</p>-->
<!--        </div>-->
<!--        <div class="grid mt-lg gap-l">-->
<!--            {#each projects as project}-->
<!--                <Card-->
<!--                        title={project.title}-->
<!--                        tags={project.techStack}-->
<!--                        link={project.link}-->
<!--                ><p>{t(project.descriptionKey)}</p></Card>-->
<!--            {/each}-->
<!--        </div>-->
<!--    </div>-->
<!--</section>-->

<style lang="scss">
  section {
    position: relative;
    max-width: 100%;
    padding: var(--space-2xl) 0;

    @media (max-width: 767px) {
      padding: var(--space-3xl) 0;
    }
  }
</style>