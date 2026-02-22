<script lang="ts">
    import {localizeHref} from "$lib/paraglide/runtime";
    import {Button, type MeritEntryItem, ProjectCard, TechStackIcon} from "$lib";
    import MeritGroup from "$lib/components/MeritGroup.svelte";
    import {t} from "$lib/i18n";

    let innerWidth = $state(0);

    const experienceItems: MeritEntryItem[] = [
        {
            title: 'home.experience.items.item10.title',
            date: 'home.experience.items.item10.subtitle',
            description: 'home.experience.items.item10.description',
        }, {
            title: 'home.experience.items.item2.title',
            date: 'home.experience.items.item2.subtitle',
            description: 'home.experience.items.item2.description',
        },
        {
            title: 'home.experience.items.item3.title',
            date: 'home.experience.items.item3.subtitle',
            description: 'home.experience.items.item3.description',
            muted: true
        },
        {
            title: 'home.experience.items.item4.title',
            date: 'home.experience.items.item4.subtitle',
            description: 'home.experience.items.item4.description',
            muted: true
        },
        {
            title: 'home.experience.items.item8.title',
            date: 'home.experience.items.item8.subtitle',
            description: 'home.experience.items.item8.description',
            muted: true
        }
    ];

    const educationItems: MeritEntryItem[] = [
        {
            title: 'home.experience.items.item1.title',
            date: 'home.experience.items.item1.subtitle',
            description: 'home.experience.items.item1.description'
        },
        {
            title: 'home.experience.items.item5.title',
            date: 'home.experience.items.item5.subtitle',
            description: 'home.experience.items.item5.description'
        },
        {
            title: 'home.experience.items.item6.title',
            date: 'home.experience.items.item6.subtitle',
            description: 'home.experience.items.item6.description',
            muted: true
        },
        {
            title: 'home.experience.items.item7.title',
            date: 'home.experience.items.item7.subtitle',
            description: 'home.experience.items.item7.description',
            muted: true
        },
        {
            title: 'home.experience.items.item9.title',
            date: 'home.experience.items.item9.subtitle',
            description: 'home.experience.items.item9.description',
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
            descriptionKey: 'projects.items.item2.description',
            link: 'https://github.com/jonlju95/personalEconomyApp'
        },
        {
            title: 'Customer Product Website',
            techStack: ['Java', 'HTML', 'CSS'],
            descriptionKey: 'projects.items.item3.description',
            link: 'https://github.com/jonlju95/Personal_Project_Customer_Product_Website'
        },
        {
            title: 'Rock, Paper, Scissors',
            techStack: ['JavaScript', 'HTML', 'CSS', 'React'],
            descriptionKey: 'projects.items.item4.description',
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
                    <h1>{t('home.hero.title')}</h1>
                    <h3>
                        <span class="jobtitle">{t('home.hero.jobtitle')}</span>
                        <span>{t('home.hero.subtitle')}</span>
                    </h3>
                </div>
                <p>{t('home.hero.introduction')}</p>
                <div class="cluster">
                    <Button link={localizeHref('/projects')} btnLabel={t('button.projects')} buttonProps="btnPrimary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="20" viewBox="0 0 448 512"
                             aria-hidden="true">
                            <path fill="currentColor"
                                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                        </svg>
                    </Button>
                    <Button link="mailto:jonatan.ljung@hotmail.com" btnLabel={t('button.contact')}
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
        <h2 class="mb-l">{t('home.about.title')}</h2>
        <div class="grid gap-l">
            <div class="stack" data-gap="sm">
                <h3 class="text-accent-mid">{t('home.about.item1.title')}</h3>
                <p>{t('home.about.item1.description')}</p>
            </div>
            <div class="stack" data-gap="sm">
                <h3 class="text-accent-mid">{t('home.about.item2.title')}</h3>
                <p>{t('home.about.item2.description')}</p>
            </div>
            <div class="stack" data-gap="sm">
                <h3 class="text-accent-mid">{t('home.about.item3.title')}</h3>
                <p>{t('home.about.item3.description')}</p>
            </div>
        </div>
    </div>
</section>

<!-- Experience & Education -->
<section class="section bg-base">
    <div class="container">
        <h2 class="mb-l">{t('home.experience.title')}</h2>
        <div class="split h-100">
            <MeritGroup groupTitle={t('home.experience.subtitle1')} meritEntryItems={experienceItems}/>
            <MeritGroup groupTitle={t('home.experience.subtitle2')} meritEntryItems={educationItems}/>
        </div>
    </div>
</section>

<!-- Tech Stack -->
<section class="section bg-base">
    <div class="container">
        <h2>{t('home.tech.title')}</h2>
        <p class="mt-xs text-muted mb-l">{t('home.tech.subtitle')}</p>

        {#each [
            { label: 'Frontend', icons: frontendIcons },
            { label: t('home.tech.backendAndDb'), icons: backendIcons },
            { label: t('home.tech.tools'), icons: toolIcons }
        ] as category}
            <div class="techCategory mb-l">
                <h3 class="text-accent-mid mb-m">{category.label}</h3>
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
        <h2>{t('home.projects.title')}</h2>
        <p class="mt-xs text-muted">{t('home.projects.subtitle')}</p>
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
            <Button link={localizeHref('/projects')} btnLabel={t('home.projects.more')}
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