<script lang="ts">
    import {localizeHref} from "$lib/paraglide/runtime";

    import {LinkButton, type MeritEntryItem, ProjectCard, TechStackIcon} from "$lib";
    import * as m from "$lib/paraglide/messages";
    import Icon from "@iconify/svelte";
    import MeritGroup from "$lib/components/MeritGroup.svelte";
    import {resolve} from "$app/paths";

    // The property values are the keys for the translation JSON. For actual value, see translations/en.json or
    // translations/se.json
    const experienceItems: MeritEntryItem[] = [
        {
            title: 'homePage_experienceSection_resumeItems_item2_title',
            date: 'Nov 2021 - Jan 2024',
            description: 'homePage_experienceSection_resumeItems_item2_description',
        },
        {
            title: 'homePage_experienceSection_resumeItems_item3_title',
            date: 'Nov 2021 - Jan 2024',

            description: 'homePage_experienceSection_resumeItems_item3_description',
            muted: true
        },
        {
            title: 'homePage_experienceSection_resumeItems_item4_title',
            date: 'Nov 2021 - Jan 2024',

            description: 'homePage_experienceSection_resumeItems_item4_description',
            muted: true
        },
        {
            title: 'homePage_experienceSection_resumeItems_item8_title',
            date: 'Nov 2021 - Jan 2024',

            description: 'homePage_experienceSection_resumeItems_item8_description',
            muted: true
        }
    ]

    const educationItems: MeritEntryItem[] = [
        {
            title: 'homePage_experienceSection_resumeItems_item1_title',
            date: 'Nov 2021 - Jan 2024',

            description: 'homePage_experienceSection_resumeItems_item1_description',
        },
        {
            title: 'homePage_experienceSection_resumeItems_item5_title',
            date: 'Nov 2021 - Jan 2024',

            description: 'homePage_experienceSection_resumeItems_item5_description',
        },
        {
            title: 'homePage_experienceSection_resumeItems_item6_title',
            date: 'Nov 2021 - Jan 2024',

            description: 'homePage_experienceSection_resumeItems_item6_description',
            muted: true
        },
        {
            title: 'homePage_experienceSection_resumeItems_item7_title',
            date: 'Nov 2021 - Jan 2024',

            description: 'homePage_experienceSection_resumeItems_item7_description',
            muted: true
        },
        {
            title: 'homePage_experienceSection_resumeItems_item9_title',
            date: 'Nov 2021 - Jan 2024',

            description: 'homePage_experienceSection_resumeItems_item9_description',
            muted: true
        }
    ]

    let innerWidth = 0;

    const t = (key: string) => (m as unknown as Record<string, () => string>)[key]?.() ?? key;

</script>

<svelte:window bind:innerWidth/>

<section class="heroSection animatedElement">
    <div class="color-overlay"></div>
    <div class="bg-image"></div>
    <div class="container">
        <div class="split">
            <div class="stack" data-gap="md">
                <div class="stack title">
                    <h1>{t('homePage_heroSection_homeTitle')}</h1>
                    <h3>
                        <span class="jobtitle">{t('homePage_heroSection_homeJobtitle')}</span>
                        <span>{t('homePage_heroSection_homeSubtitle')}</span>
                    </h3>
                </div>

                <p>{t('homePage_heroSection_homeIntroduction')}</p>

                <div class="cluster">
                    <LinkButton link={localizeHref('/projects')}
                                btnLabel={t('button_projects')}
                                buttonProps="btnPrimary"/>
                    <LinkButton link="mailto:jonatan.ljung@hotmail.com"
                                btnLabel={t('button_contact')}
                                buttonProps="btnSecondary"/>
                </div>
            </div>

            <div class="imgContainer">
                <img src="./resources/images/me_1_cropped.webp"
                     alt="Me smiling at the camera"/>
            </div>

        </div>
    </div>

    {#if innerWidth >= 768}
        <div class="arrowContainer">
            <Icon icon="fa7-solid:chevron-down" width="96" height="96"/>
        </div>
    {/if}
</section>
<section class="flex flex-col bg-base gap-l justify-start animatedElement">
    <div class="container">
        <h2 class="mb-l">{t('homePage_aboutSection_aboutTitle')}</h2>
        <div class="grid gap-l">
            <div>
                <h3 class="text-accent-dark">{t('homePage_aboutSection_item1_title')}</h3>
                <p>{t('homePage_aboutSection_item1_description')}</p>
            </div>
            <div>
                <h3 class="text-accent-dark">{t('homePage_aboutSection_item2_title')}</h3>
                <p>{t('homePage_aboutSection_item2_description')}</p>
            </div>
            <div>
                <h3 class="text-accent-dark">{t('homePage_aboutSection_item3_title')}</h3>
                <p>{t('homePage_aboutSection_item3_description')}</p>
            </div>
        </div>
    </div>
</section>
<section class="animatedElement">
    <div class="container">
        <h2 class="mb-l">{t('homePage_experienceSection_title')}</h2>
        <div class="split">
            <div class="h-100">
                <MeritGroup groupTitle="Experience" meritEntryItems={experienceItems}/>
            </div>
            <div class="h-100">
                <MeritGroup groupTitle="Education" meritEntryItems={educationItems}/>
            </div>
        </div>
    </div>
</section>
<section class="flex flex-col bg-base justify-start animatedElement">

    <div class="container">
        <h2>{t('homePage_techSection_title')}</h2>
        <p class="mt-xs text-muted mb-l">{t('homePage_techSection_subtitle')}</p>
        <div class="techStackCategory">
            <div class="stack mb-l" data-gap="md">
                <h3 class="text-accent-dark">Frontend</h3>
                <div class="flex gap-xl pb-l border-bottom">
                    <TechStackIcon
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                            title="Html"/>
                    <TechStackIcon
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                            title="Css"/>
                    <TechStackIcon
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                            title="JavaScript"/>
                    <TechStackIcon
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                            title="TypeScript"/>
                    <TechStackIcon
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
                            title="Angular"/>
                    <TechStackIcon
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                            title="React"/>
                </div>

            </div>
        </div>
        <div class="techStackCategory mt-4">
            <div class="stack mb-l" data-gap="md">
                <h3 class="text-accent-dark">Backend & Database</h3>
                <div class="flex gap-xl pb-l border-bottom">
                    <TechStackIcon
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                            title="Java"/>
                    <TechStackIcon
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                            title="C#"/>
                    <TechStackIcon
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                            title="PostgreSQL"/>
                    <TechStackIcon
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                            title="MySQL"/>
                    <TechStackIcon
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                            title="MongoDB"/>
                </div>
            </div>
        </div>
        <div class="techStackCategory mt-4">
            <div class="stack" data-gap="md">
                <h3 class="text-accent-dark">{t('homePage_techSection_tools')}</h3>
                <div class="flex gap-xl pb-l border-bottom">
                    <TechStackIcon
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg"
                            title="Jira"/>
                    <TechStackIcon
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                            title="Git"/>
                    <TechStackIcon
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
                            title="Docker"/>
                    <TechStackIcon
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                            title="Postman"/>
                    <TechStackIcon
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                            title="Figma"/>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="animatedElement">
    <div class="container">
        <h2>{t('homePage_projectSection_title')}</h2>
        <p class="mt-2">{t('homePage_projectSection_subtitle')}</p>

        <div class="grid gap-l mt-l mb-l">
            <ProjectCard
                    title="Personal economy"
                    techStack={['Svelte', 'TypeScript', 'HTML/CSS']}
                    description={t('projectPage_projectItems_item2_description')}
                    link="https://github.com/jonlju95/personalEconomyApp"/>
            <ProjectCard
                    title="Customer Product Website"
                    techStack={['Java', 'Html', 'Css']}
                    description={t('projectPage_projectItems_item3_description')}
                    link="https://github.com/jonlju95/Personal_Project_Customer_Product_Website"/>
            <ProjectCard
                    title="Rock, Paper, Scissors"
                    techStack={['JavaScript', 'Html', 'Css', 'React']}
                    description={t('projectPage_projectItems_item4_description')}
                    link="https://github.com/jonlju95/Rock-Paper-Scissors"/>
        </div>
    </div>
    <div class="flex justify-center">
        <LinkButton link="{resolve('/projects')}" btnLabel="{t('homePage_projectSection_moreProjects')}"
                    newTab={false} buttonProps="btnPrimary"/>
    </div>
</section>

<style lang="scss">
  section {
    position: relative;
    max-width: 100%;

    padding: 4rem 0 6rem;

    @media screen and (max-width: 767px) {
      padding: 3rem 1rem 5rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1200px) {
      padding: 3rem 2rem 5rem;
    }
  }

  .heroSection {
    height: 100vh;
    overflow: hidden;
    margin-top: -5rem;
    color: var(--text-light);

    .title * {
      color: var(--text-light);
    }

    .bg-image {
      position: absolute;
      inset: 0;
      background-image: url('/resources/background-new.webp');
      background-size: cover;
      background-position: center;
      z-index: 1;
      height: inherit;
      width: inherit;
    }

    .color-overlay {
      position: absolute;
      inset: 0;
      background-color: var(--bg-emphasis);
      mix-blend-mode: hard-light;
      z-index: 2;
      height: inherit;
      width: inherit;
    }

    .container {
      position: relative;
      z-index: 3;
      height: 100%;

      // Override container padding for hero since it's full-bleed
      padding-block: var(--space-2xl);
    }

    .jobtitle {
      color: var(--accent);
      font-weight: 700;
    }

    .imgContainer {
      img {
        border-radius: 50%;
        border: 2px solid var(--accent);
        object-fit: cover;
        aspect-ratio: 1 / 1;
        margin-inline: auto;
      }
    }

    .arrowContainer {
      position: absolute;
      bottom: var(--space-xs);
      left: 0;
      right: 0;
      z-index: 4;
      display: flex;
      justify-content: center;
      color: var(--accent);
    }
  }

  .techStackCategory {
    border-bottom: 1px solid var(--border-muted);

    @media screen and (max-width: 1200px) {
      .row {
        margin-left: auto;
      }
    }
  }

  .projectSection * {
    position: relative;
    z-index: 1;
  }

</style>
