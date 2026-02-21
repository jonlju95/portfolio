<script lang="ts">
    import {localizeHref} from "$lib/paraglide/runtime";
    import {Button, type MeritEntryItem, ProjectCard, TechStackIcon} from "$lib";
    import * as m from "$lib/paraglide/messages";
    import MeritGroup from "$lib/components/MeritGroup.svelte";

    const t = (key: string) => (m as unknown as Record<string, () => string>)[key]?.() ?? key;

    let innerWidth = $state(0);

    const experienceItems: MeritEntryItem[] = [
        {
            title: 'homePage_experienceSection_resumeItems_item2_title',
            date: 'Nov 2021 - Jan 2024',
            description: 'homePage_experienceSection_resumeItems_item2_description'
        },
        {
            title: 'homePage_experienceSection_resumeItems_item3_title',
            date: 'May - Aug 2019',
            description: 'homePage_experienceSection_resumeItems_item3_description',
            muted: true
        },
        {
            title: 'homePage_experienceSection_resumeItems_item4_title',
            date: 'Aug - Sep 2018',
            description: 'homePage_experienceSection_resumeItems_item4_description',
            muted: true
        },
        {
            title: 'homePage_experienceSection_resumeItems_item8_title',
            date: 'May 2015 - Jun 2018',
            description: 'homePage_experienceSection_resumeItems_item8_description',
            muted: true
        }
    ];

    const educationItems: MeritEntryItem[] = [
        {
            title: 'homePage_experienceSection_resumeItems_item1_title',
            date: 'Jul 2025 - Apr 2026',
            description: 'homePage_experienceSection_resumeItems_item1_description'
        },
        {
            title: 'homePage_experienceSection_resumeItems_item5_title',
            date: 'Aug 2019 - May 2021',
            description: 'homePage_experienceSection_resumeItems_item5_description'
        },
        {
            title: 'homePage_experienceSection_resumeItems_item6_title',
            date: 'Sep 2018 - Discontinued',
            description: 'homePage_experienceSection_resumeItems_item6_description',
            muted: true
        },
        {
            title: 'homePage_experienceSection_resumeItems_item7_title',
            date: 'Sep 2017 - Jun 2018',
            description: 'homePage_experienceSection_resumeItems_item7_description',
            muted: true
        },
        {
            title: 'homePage_experienceSection_resumeItems_item9_title',
            date: 'Aug 2011 - Jun 2014',
            description: 'homePage_experienceSection_resumeItems_item9_description',
            muted: true
        }
    ];

    const frontendIcons = [
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', title: 'HTML'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', title: 'CSS'},
        {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
            title: 'JavaScript'
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
            title: 'TypeScript'
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
            title: 'Angular'
        },
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', title: 'React'},
    ];

    const backendIcons = [
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', title: 'Java'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', title: 'C#'},
        {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
            title: 'PostgreSQL'
        },
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', title: 'MySQL'},
        {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
            title: 'MongoDB'
        },
    ];

    const toolIcons = [
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg', title: 'Jira'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', title: 'Git'},
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg', title: 'Docker'},
        {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
            title: 'Postman'
        },
        {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', title: 'Figma'},
    ];

    const featuredProjects = [
        {
            title: 'Personal economy',
            techStack: ['Svelte', 'TypeScript', 'HTML/CSS'],
            descriptionKey: 'projectPage_projectItems_item2_description',
            link: 'https://github.com/jonlju95/personalEconomyApp'
        },
        {
            title: 'Customer Product Website',
            techStack: ['Java', 'HTML', 'CSS'],
            descriptionKey: 'projectPage_projectItems_item3_description',
            link: 'https://github.com/jonlju95/Personal_Project_Customer_Product_Website'
        },
        {
            title: 'Rock, Paper, Scissors',
            techStack: ['JavaScript', 'HTML', 'CSS', 'React'],
            descriptionKey: 'projectPage_projectItems_item4_description',
            link: 'https://github.com/jonlju95/Rock-Paper-Scissors'
        },
    ];
</script>

<svelte:window bind:innerWidth/>

<!-- Hero -->
<section class="heroSection">
    <div class="color-overlay"></div>
    <div class="bg-image"></div>
    <div class="container">
        <div class="split justify-items-center">
            <div class="stack" data-gap="lg">
                <div class="stack title" data-gap="sm">
                    <h1>{t('homePage_heroSection_homeTitle')}</h1>
                    <h3>
                        <span class="jobtitle">{t('homePage_heroSection_homeJobtitle')}</span>
                        <span>{t('homePage_heroSection_homeSubtitle')}</span>
                    </h3>
                </div>
                <p>{t('homePage_heroSection_homeIntroduction')}</p>
                <div class="cluster">
                    <Button link={localizeHref('/projects')} btnLabel={t('button_projects')} buttonProps="btnPrimary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="20" viewBox="0 0 448 512"
                             aria-hidden="true">
                            <path fill="currentColor"
                                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                        </svg>
                    </Button>
                    <Button link="mailto:jonatan.ljung@hotmail.com" btnLabel={t('button_contact')}
                            buttonProps="btnSecondary outline text-light"/>
                </div>
            </div>

            <div class="imgContainer">
                <img src="./resources/images/me_1_cropped.webp" alt="Me smiling at the camera"/>
            </div>
        </div>
    </div>

    {#if innerWidth >= 768}
        <div class="arrowContainer" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 512 512">
                <path fill="currentColor"
                      d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7L86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </div>
    {/if}
</section>

<!-- About -->
<section class="section bg-base">
    <div class="container">
        <h2 class="mb-l">{t('homePage_aboutSection_aboutTitle')}</h2>
        <div class="grid gap-l">
            <div class="stack" data-gap="sm">
                <h3 class="text-accent-dark">{t('homePage_aboutSection_item1_title')}</h3>
                <p>{t('homePage_aboutSection_item1_description')}</p>
            </div>
            <div class="stack" data-gap="sm">
                <h3 class="text-accent-dark">{t('homePage_aboutSection_item2_title')}</h3>
                <p>{t('homePage_aboutSection_item2_description')}</p>
            </div>
            <div class="stack" data-gap="sm">
                <h3 class="text-accent-dark">{t('homePage_aboutSection_item3_title')}</h3>
                <p>{t('homePage_aboutSection_item3_description')}</p>
            </div>
        </div>
    </div>
</section>

<!-- Experience & Education -->
<section class="section bg-base">
    <div class="container">
        <h2 class="mb-l">{t('homePage_experienceSection_title')}</h2>
        <div class="split h-100">
            <MeritGroup groupTitle="Experience" meritEntryItems={experienceItems}/>
            <MeritGroup groupTitle="Education" meritEntryItems={educationItems}/>
        </div>
    </div>
</section>

<!-- Tech Stack -->
<section class="section bg-base">
    <div class="container">
        <h2>{t('homePage_techSection_title')}</h2>
        <p class="mt-xs text-muted mb-l">{t('homePage_techSection_subtitle')}</p>

        {#each [
            { label: 'Frontend', icons: frontendIcons },
            { label: t('homePage_techSection_backendAndDb'), icons: backendIcons },
            { label: t('homePage_techSection_tools'), icons: toolIcons }
        ] as category}
            <div class="techCategory mb-l">
                <h3 class="text-accent-dark mb-m">{category.label}</h3>
                <div class="cluster pb-l border-bottom">
                    {#each category.icons as icon}
                        <TechStackIcon src={icon.src} title={icon.title}/>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</section>

<!-- Projects -->
<section class="section bg-base">
    <div class="container">
        <h2>{t('homePage_projectSection_title')}</h2>
        <p class="mt-xs text-muted">{t('homePage_projectSection_subtitle')}</p>
        <div class="grid gap-l mt-l mb-l">
            {#each featuredProjects as project}
                <ProjectCard
                        title={project.title}
                        techStack={project.techStack}
                        description={t(project.descriptionKey)}
                        link={project.link}
                />
            {/each}
        </div>
        <div class="cluster" style="justify-content: center;">
            <Button link={localizeHref('/projects')} btnLabel={t('homePage_projectSection_moreProjects')}
                    buttonProps="btnSecondary outline"/>
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

  .heroSection {
    min-height: 100vh;
    overflow: hidden;
    margin-top: calc(var(--space-2xl) * -1);
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

      @media (max-width: 1279px) {
        order: -1; // moves image above text
        max-width: 350px;
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

  .techCategory:last-child .border-bottom {
    border-bottom: none;
  }
</style>