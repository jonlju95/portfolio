<script lang="ts">
    import { base } from "$app/paths";
    import { Button, type MeritEntryItem } from "$lib";
    import * as m from "$lib/paraglide/messages";
    import MeritGroup from "$lib/components/MeritGroup.svelte";
    import Icon from "@iconify/svelte";
    import { getLocale } from "$lib/paraglide/runtime";

    const meritEntryItems: MeritEntryItem[] = [
        {
            title: 'aboutPage_journeySection_resumeItems_item1_title',
            date: '2021 - 2024',
            description: 'aboutPage_journeySection_resumeItems_item1_description'
        },
        {
            title: 'aboutPage_journeySection_resumeItems_item2_title',
            date: 'aboutPage_journeySection_resumeItems_item2_years',
            description: 'aboutPage_journeySection_resumeItems_item2_description'
        },
        {
            title: 'aboutPage_journeySection_resumeItems_item3_title',
            date: 'aboutPage_journeySection_resumeItems_item3_years',
            description: 'aboutPage_journeySection_resumeItems_item3_description'
        }
    ];

    const resumeVersion = $derived(getLocale() === 'en' ? 'Resume.pdf' : 'CV.pdf');

    const t = (key: string) => (m as unknown as Record<string, () => string>)[key]?.() ?? key;
</script>

<!-- Hero -->
<section class="aboutHero">
    <div class="aboutHero__image">
        <img src="{base}/resources/images/me_2.webp" alt="Jonatan Ljung" />
        <div class="aboutHero__overlay"></div>
        <div class="aboutHero__gradient"></div>
    </div>
    <div class="container">
        <div class="stack" data-gap="sm">
            <h1>{t('aboutPage_heroSection_title')}</h1>
            <p class="w-50">{t('aboutPage_heroSection_description')}</p>
        </div>
    </div>
</section>

<!-- Journey -->
<section class="section bg-base">
    <div class="container">
        <h2>{t('aboutPage_journeySection_title')}</h2>
        <div class="split mt-l">
            <div class="stack h-100" data-gap="lg">
                <p>{t('aboutPage_journeySection_description_span1')}</p>
                <p>{t('aboutPage_journeySection_description_span2')}</p>
            </div>
            <MeritGroup {meritEntryItems} />
        </div>
    </div>
</section>

<!-- Approach -->
<section class="section bg-emphasis">
    <div class="container">
        <h2 class="text-accent">{t('aboutPage_skillsSection_title')}</h2>
        <div class="grid mt-l gap-l" data-cols="3">
            <div class="stack" data-gap="sm">
                <Icon icon="fa6-solid:code" width="24" height="24" color="var(--accent)" />
                <h5 class="text-accent">{t('aboutPage_skillsSection_bulletPoint1')}</h5>
                <p class="text-light">{t('aboutPage_skillsSection_description1')}</p>
            </div>
            <div class="stack" data-gap="sm">
                <Icon icon="fa6-solid:magnifying-glass" width="24" height="24" color="var(--accent)" />
                <h5 class="text-accent">{t('aboutPage_skillsSection_bulletPoint2')}</h5>
                <p class="text-light">{t('aboutPage_skillsSection_description2')}</p>
            </div>
            <div class="stack" data-gap="sm">
                <Icon icon="fa6-solid:paintbrush" width="24" height="24" color="var(--accent)" />
                <h5 class="text-accent">{t('aboutPage_skillsSection_bulletPoint3')}</h5>
                <p class="text-light">{t('aboutPage_skillsSection_description3')}</p>
            </div>
        </div>
    </div>
</section>

<!-- Personal -->
<section class="section bg-base">
    <div class="container">
        <h2>{t('aboutPage_personalSection_title')}</h2>
        <p class="mt-l">{t('aboutPage_personalSection_description')}</p>
    </div>
</section>

<!-- Where I'm headed -->
<section class="section">
    <div class="container">
        <h2>{t('aboutPage_futureSection_title')}</h2>
        <h4 class="mt-l border-top border-bottom text-center font-regular pt-s pb-s">
            {t('aboutPage_futureSection_description')}
        </h4>
    </div>
</section>

<!-- Contact -->
<section class="section bg-emphasis">
    <div class="container">
        <div class="stack text-center" data-gap="md">
            <h2 class="text-light">{t('aboutPage_contactSection_title')}</h2>
            <p class="text-light">{t('aboutPage_contactSection_description')}</p>
            <div class="cluster" style="justify-content: center;">
                <Button buttonProps="btnPrimary"
                        btnLabel={t('aboutPage_contactSection_button1')}
                        link="mailto:jonatan.ljung@hotmail.com" />
                <Button buttonProps="btnSecondary outline text-light"
                        btnLabel={t('aboutPage_contactSection_button2')}
                        link="{base}/resources/resume/{resumeVersion}"
                        download={true} />
            </div>
        </div>
    </div>
</section>

<style lang="scss">
  .aboutHero {
    position: relative;
    min-height: 40rem;
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color: var(--bg-base);

    &__image {
      position: absolute;
      inset: 0;
      top: -17.5rem;
      z-index: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
        filter: grayscale(100%);
      }
    }

    &__overlay {
      position: absolute;
      inset: 0;
      background-color: var(--bg-emphasis);
      opacity: 0.2;
      z-index: 1;
    }

    &__gradient {
      position: absolute;
      inset: 0;
      background: linear-gradient(to right, var(--bg-base) 35%, transparent 65%);
      z-index: 2;
    }

    .container {
      position: relative;
      z-index: 3;
      padding-block: var(--space-2xl);
    }
  }
</style>