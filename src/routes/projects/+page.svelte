<script lang="ts">
    import {ProjectCard} from "$lib";
    import {t} from "$lib/i18n";

</script>

<section class="section bg-base">
    <div class="container">
        <div class="stack pb-m" data-gap="sm">
            <h2>{t('projects.title')}</h2>
            <p class="text-muted">{t('projects.subtitle')}</p>
        </div>
        <div class="grid mt-lg gap-l">
            {#each projects as project}
                <ProjectCard
                        title={project.title}
                        techStack={project.techStack}
                        description={t(project.descriptionKey)}
                        link={project.link}
                />
            {/each}
        </div>
    </div>
</section>

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