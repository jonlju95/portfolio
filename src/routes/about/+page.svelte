<script lang="ts">
    import {base} from "$app/paths";
    import {Button, type MeritEntryItem} from "$lib";
    import MeritGroup from "$lib/components/MeritGroup.svelte";
    import Icon from "@iconify/svelte";
    import {getLocale} from "$lib/paraglide/runtime";
    import {t} from "$lib/i18n";

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
            <h1>{t('about.hero.title')}</h1>
            <p class="w-50">{t('about.hero.description')}</p>
        </div>
    </div>
</section>

<!-- Journey -->
<section class="section bg-base">
    <div class="container">
        <h2>{t('about.journey.title')}</h2>
        <div class="split mt-l">
            <div class="stack h-100" data-gap="lg">
                <p>{t('about.journey.description1')}</p>
                <p>{t('about.journey.description2')}</p>
            </div>
            <MeritGroup {meritEntryItems}/>
        </div>
    </div>
</section>

<!-- Approach -->
<section class="section bg-emphasis">
    <div class="container">
        <h2 class="text-accent">{t('about.approach.title')}</h2>
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
    </div>
</section>

<!-- Personal -->
<section class="section bg-base">
    <div class="container">
        <h2>{t('about.personal.title')}</h2>
        <p class="mt-l">{t('about.personal.description')}</p>
    </div>
</section>

<!-- Where I'm headed -->
<section class="section bg-base">
    <div class="container">
        <h2>{t('about.future.title')}</h2>
        <h4 class="mt-l border-top border-bottom text-center font-regular pt-s pb-s">
            {t('about.future.description')}
        </h4>
    </div>
</section>

<!-- Contact -->
<section class="section bg-emphasis">
    <div class="container">
        <div class="stack text-center" data-gap="md">
            <h2 class="text-light">{t('about.contact.title')}</h2>
            <p class="text-light">{t('about.contact.description')}</p>
            <div class="cluster" style="justify-content: center;">
                <Button buttonProps="btnPrimary"
                        btnLabel={t('about.contact.cta')}
                        link="mailto:jonatan.ljung@hotmail.com"/>
                <Button buttonProps="btnSecondary outline text-light"
                        btnLabel={t('about.contact.cv')}
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