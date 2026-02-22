<script lang="ts">
    import {base} from "$app/paths";
    import {Button, type MeritEntryItem} from "$lib";
    import MeritGroup from "$lib/components/MeritGroup.svelte";
    import Icon from "@iconify/svelte";
    import {getLocale} from "$lib/paraglide/runtime";
    import {t} from "$lib/i18n";

    const meritEntryItems: MeritEntryItem[] = [
        {
            title: 'about_journey_items_item1_title',
            date: '2021 - 2024',
            description: 'about_journey_items_item1_description',
        },
        {
            title: 'about_journey_items_item2_title',
            date: 'about_journey_items_item2_years',
            description: 'about_journey_items_item2_description',
        },
        {
            title: 'about_journey_items_item3_title',
            date: 'about_journey_items_item3_years',
            description: 'about_journey_items_item3_description',
        }
    ];

    const resumeVersion = $derived(getLocale() === 'en' ? 'Resume.pdf' : 'CV.pdf');

</script>

<!-- Hero -->
<section class="aboutHero">
    <div class="aboutHero__image">
        <img src="{base}/resources/images/me_2.webp" alt="Jonatan Ljung"/>
        <div class="aboutHero__overlay"></div>
        <div class="aboutHero__gradient"></div>
    </div>
    <div class="container">
        <div class="stack" data-gap="sm">
            <h1>{t('about_hero_title')}</h1>
            <p class="w-50">{t('about_hero_description')}</p>
        </div>
    </div>
</section>

<!-- Journey -->
<section class="section bg-base">
    <div class="container">
        <h2>{t('about_journey_title')}</h2>
        <div class="split mt-l">
            <div class="stack h-100" data-gap="lg">
                <p>{t('about_journey_description1')}</p>
                <p>{t('about_journey_description2')}</p>
            </div>
            <MeritGroup {meritEntryItems}/>
        </div>
    </div>
</section>

<!-- Approach -->
<section class="section bg-emphasis">
    <div class="container">
        <h2 class="text-accent">{t('about_approach_title')}</h2>
        <div class="grid mt-l gap-l" data-cols="3">
            <div class="stack" data-gap="sm">
                <Icon icon="fa6-solid:code" width="24" height="24" color="var(--accent)"/>
                <h5 class="text-accent">{t('about_approach_item1_title')}</h5>
                <p class="text-light">{t('about_approach_item1_description')}</p>
            </div>
            <div class="stack" data-gap="sm">
                <Icon icon="fa6-solid:magnifying-glass" width="24" height="24" color="var(--accent)"/>
                <h5 class="text-accent">{t('about_approach_item2_title')}</h5>
                <p class="text-light">{t('about_approach_item2_description')}</p>
            </div>
            <div class="stack" data-gap="sm">
                <Icon icon="fa6-solid:paintbrush" width="24" height="24" color="var(--accent)"/>
                <h5 class="text-accent">{t('about_approach_item3_title')}</h5>
                <p class="text-light">{t('about_approach_item3_description')}</p>
            </div>
        </div>
    </div>
</section>

<!-- Personal -->
<section class="section bg-base">
    <div class="container">
        <h2>{t('about_personal_title')}</h2>
        <p class="mt-l">{t('about_personal_description')}</p>
    </div>
</section>

<!-- Where I'm headed -->
<section class="section bg-base">
    <div class="container">
        <h2>{t('about_future_title')}</h2>
        <h4 class="mt-l border-top border-bottom text-center font-regular pt-s pb-s">
            {t('about_future_description')}
        </h4>
    </div>
</section>

<!-- Contact -->
<section class="section bg-emphasis">
    <div class="container">
        <div class="stack text-center" data-gap="md">
            <h2 class="text-light">{t('about_contact_title')}</h2>
            <p class="text-light">{t('about_contact_description')}</p>
            <div class="cluster" style="justify-content: center;">
                <Button buttonProps="btnPrimary"
                        btnLabel={t('about_contact_cta')}
                        link="mailto:jonatan.ljung@hotmail.com"/>
                <Button buttonProps="btnSecondary outline text-light"
                        btnLabel={t('about_contact_cv')}
                        link="{base}/resources/resume/{resumeVersion}"
                        download={true}/>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
  section {
    position: relative;
    max-width: 100%;
    padding: var(--space-2xl) 0;

    @media (max-width: 767px) {
      padding: var(--space-xl) 0;
    }
  }

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

      @media (max-width: 767px) {
        top: 5rem;
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        top: -5rem;
      }


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
      background: linear-gradient(80deg, var(--bg-base) 35%, transparent 65%);
      z-index: 2;
    }

    .container {
      position: relative;
      z-index: 3;
      padding-block: var(--space-2xl);
    }
  }
</style>