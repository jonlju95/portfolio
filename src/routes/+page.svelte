<script lang="ts">
    import {getLocale, localizeHref} from "$lib/paraglide/runtime";
    import {Button,} from "$lib";
    import MeritGroup from "$lib/components/MeritGroup.svelte";
    import {t} from '$lib/i18n';
    import Card from "$lib/components/Card.svelte";
    import TechCard from "$lib/components/TechCard.svelte";
    import experienceItems from "$lib/data/experience";
    import educationItems from "$lib/data/education";
    import {featuredProjects} from "$lib/data/projects";
    import {backendStack, frontendStack, toolStack} from '$lib/data/techStack';
    import Section from "$lib/components/Section.svelte";

    let innerWidth = $state(0);

    const resumeVersion = $derived(getLocale() === 'en' ? 'Jonatan_Ljung_Resume_2026.pdf' :
        'Jonatan_Ljung_CV_2026.pdf');

</script>

<svelte:window bind:innerWidth/>

<!-- Hero -->
<Section>
    <div class="split justify-items-center">
        <div class="stack">
            <div class="flex items-center gap-xs radius-full border bg-surface mb-m heroTag">
                <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4"/>
                </svg>
                <span class="text-muted">{t('home.hero.tag')}</span>
            </div>
            <div class="stack title">
                <h1>{t('home.hero.title')}</h1>
                <h3 class="text-accent-dark mt-s mb-m">
                    {t('home.hero.jobtitle') + ' ' + t('home.hero.subtitle')}
                </h3>
            </div>
            <p class="text-muted mb-l">{t('home.hero.introduction')}</p>
            <div class="cluster">
                <Button link={'/projects'} btnLabel={t('button.projects')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="20" viewBox="0 0 448 512"
                         aria-hidden="true">
                        <path fill="currentColor"
                              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                    </svg>
                </Button>
                <Button link="mailto:jonatan.ljung@hotmail.com" btnLabel={t('button.contact')}
                        variant="secondary"/>
            </div>
        </div>
        <div class="imgContainer">
            <img src="./resources/images/me_1_cropped.webp" alt="Me smiling at the camera"/>
        </div>
    </div>
</Section>

<!-- About -->
<Section title={t('home.about.title')} chapter={t('home.chapter1')} tone="surface">
    <div class="grid gap-m">
        <Card title={t('home.about.item1.title')} variant="base"><p>{t('home.about.item1.description')}</p></Card>
        <Card title={t('home.about.item2.title')} variant="base"><p>{t('home.about.item2.description')}</p></Card>
        <Card title={t('home.about.item3.title')} variant="base"><p>{t('home.about.item3.description')}</p></Card>
    </div>
</Section>

<!-- Experience & Education -->
<Section title={t('home.experience.title')} chapter={t('home.chapter2')}>
    <div class="split h-100">
        <MeritGroup groupTitle={t('home.experience.subtitle1')} meritEntryItems={experienceItems}/>
        <MeritGroup groupTitle={t('home.experience.subtitle2')} meritEntryItems={educationItems}/>
    </div>
</Section>

<!-- Tech Stack -->
<Section title={t('home.tech.title')} subtitle={t('home.tech.subtitle')} chapter={t('home.chapter3')} tone="surface">
    <div class="grid gap-m">
        {#each [
            {label: 'Frontend', techList: frontendStack},
            {label: t('home.tech.backendAndDb'), techList: backendStack},
            {label: t('home.tech.tools'), techList: toolStack}
        ] as category}
            <TechCard title={category.label} content={category.techList}/>
        {/each}
    </div>

</Section>

<!-- Projects -->
<Section title={t('home.projects.title')} subtitle={t('home.projects.subtitle')} chapter={t('home.chapter4')}>
    <div class="grid gap-l mt-l mb-l">
        {#each featuredProjects as project}
            <Card
                    title={project.title}
                    tags={project.techStack}
                    link={project.link}
            ><p>{t(project.descriptionKey)}</p></Card>
        {/each}
    </div>
    <div class="cluster">
        <Button link={localizeHref('/projects')} btnLabel={t('home.projects.more')}
                variant="secondary"/>
    </div>
</Section>

<style lang="scss">
  .heroTag {
    width: fit-content;
    padding: 0.5rem 1rem;

    svg {
      color: var(--accent-dark);
    }
  }

  .imgContainer {
    img {
      width: 420px;
      height: 525px;
      border-radius: 1.5rem;
      box-shadow: 1rem 1rem var(--accent-dark);
      object-fit: cover;
    }

    @media (max-width: 1279px) {
      order: -1; // moves image above text
      max-width: 350px;
    }
  }
</style>