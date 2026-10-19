<script lang="ts">
    import {base} from "$app/paths";
    import {Button, type MeritEntryItem} from "$lib";
    import MeritGroup from "$lib/components/MeritGroup.svelte";
    import Icon from "@iconify/svelte";
    import {getLocale} from "$lib/paraglide/runtime";
    import {t} from "$lib/i18n";
    import Section from "$lib/components/Section.svelte";
    import Card from "$lib/components/Card.svelte";

    const meritEntryItems: MeritEntryItem[] = [
        {
            title: 'about.journey.items.item1.title',
            date: '2021 - 2024',
            description: 'about.journey.items.item1.description',
        },
        {
            title: 'about.journey.items.item2.title',
            date: 'about.journey.items.item2.years',
            description: 'about.journey.items.item2.description',
        },
        {
            title: 'about.journey.items.item3.title',
            date: 'about.journey.items.item3.years',
            description: 'about.journey.items.item3.description',
        }
    ];

    const resumeVersion = $derived(getLocale() === 'en' ? 'Jonatan_Ljung_Resume_2026.pdf' :
        'Jonatan_Ljung_CV_2026.pdf');

</script>

<!-- Hero -->
<Section>
    <div class="split justify-items-center">
        <div>
            <p class="text-label">{t('about.hero.label')}</p>
            <h2 class="mb-xs">{t('about.hero.title')}</h2>
            <p class="text-muted">{t('about.hero.description')}</p>
        </div>
        <div class="imgContainer">
            <img src="./resources/images/me_2.webp" alt="Me smiling at the camera"/>
        </div>
    </div>
</Section>

<!-- Journey -->
<Section title={t('about.journey.title')} chapter={t('about.chapter1')} tone="surface">
    <div class="split mt-l">
        <div class="stack h-100" data-gap="lg">
            <p>{t('about.journey.description1')}</p>
            <p>{t('about.journey.description2')}</p>
        </div>
        <MeritGroup {meritEntryItems}/>
    </div>
</Section>

<!-- Approach -->
<Section title={t('about.approach.title')} chapter={t('about.chapter2')} tone="emphasis">
    <div class="grid mt-l gap-l" data-cols="3">
        <div class="stack" data-gap="sm">
            <Icon icon="fa6-solid:code" width="24" height="24" color="var(--accent)"/>
            <h5 class="text-accent">{t('about.approach.item1.title')}</h5>
            <p class="text-light">{t('about.approach.item1.description')}</p>
        </div>
        <div class="stack" data-gap="sm">
            <Icon icon="fa6-solid:magnifying-glass" width="24" height="24" color="var(--accent)"/>
            <h5 class="text-accent">{t('about.approach.item2.title')}</h5>
            <p class="text-light">{t('about.approach.item2.description')}</p>
        </div>
        <div class="stack" data-gap="sm">
            <Icon icon="fa6-solid:paintbrush" width="24" height="24" color="var(--accent)"/>
            <h5 class="text-accent">{t('about.approach.item3.title')}</h5>
            <p class="text-light">{t('about.approach.item3.description')}</p>
        </div>
    </div>
</Section>

<!-- Personal -->
<Section tone="surface">
    <div class="split justify-items-center items-start">
        <Card title={t('about.personal.title')} subtitle={t('about.chapter3')}
              ><p>{t('about.personal.description')}</p></Card>
        <Card title={t('about.future.title')} subtitle={t('about.chapter4')}
        ><p>{t('about.future.description')}</p></Card>
    </div>
</Section>

<style lang="scss">
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