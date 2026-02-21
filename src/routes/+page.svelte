<!--<script lang="ts">-->
<!--    import {base} from '$app/paths';-->

<!--    import type {TimelineItem} from "$lib";-->
<!--    import {Button, LinkButton, ProjectItem, TechStackIcon} from '$lib';-->

<!--    // The property values are the keys for the translation json. For actual value, see translations/en.json or-->
<!--    // translations/se.json-->
<!--    export const timelineItems: TimelineItem[] = [-->
<!--        {-->
<!--            title: 'homePage.experienceSection.resumeItems.item1.title',-->
<!--            months: 'homePage.experienceSection.resumeItems.item1.months',-->
<!--            years: '2025 - 2026',-->
<!--            description: 'homePage.experienceSection.resumeItems.item1.description',-->
<!--            icon: 'education'-->
<!--        }, {-->
<!--            title: 'homePage.experienceSection.resumeItems.item2.title',-->
<!--            months: 'homePage.experienceSection.resumeItems.item2.months',-->
<!--            years: '2021 - 2024',-->
<!--            description: 'homePage.experienceSection.resumeItems.item2.description',-->
<!--            icon: 'job'-->
<!--        }, {-->
<!--            title: 'homePage.experienceSection.resumeItems.item5.title',-->
<!--            months: 'homePage.experienceSection.resumeItems.item5.months',-->
<!--            years: '2019 - 2021',-->
<!--            description: 'homePage.experienceSection.resumeItems.item5.description',-->
<!--            icon: 'education'-->
<!--        }, {-->
<!--            title: 'homePage.experienceSection.resumeItems.item3.title',-->
<!--            months: 'homePage.experienceSection.resumeItems.item3.months',-->
<!--            years: '2019',-->
<!--            description: 'homePage.experienceSection.resumeItems.item3.description',-->
<!--            icon: 'job'-->
<!--        }, {-->
<!--            title: 'homePage.experienceSection.resumeItems.item4.title',-->
<!--            months: 'homePage.experienceSection.resumeItems.item4.months',-->
<!--            years: '2018',-->
<!--            description: 'homePage.experienceSection.resumeItems.item4.description',-->
<!--            icon: 'job'-->
<!--        }, {-->
<!--            title: 'homePage.experienceSection.resumeItems.item6.title',-->
<!--            months: 'homePage.experienceSection.resumeItems.item6.months',-->
<!--            years: '2018',-->
<!--            description: 'homePage.experienceSection.resumeItems.item6.description',-->
<!--            icon: 'education'-->
<!--        }, {-->
<!--            title: 'homePage.experienceSection.resumeItems.item7.title',-->
<!--            months: 'homePage.experienceSection.resumeItems.item7.months',-->
<!--            years: '2017 - 2018',-->
<!--            description: 'homePage.experienceSection.resumeItems.item7.description',-->
<!--            icon: 'education'-->
<!--        }, {-->
<!--            title: 'homePage.experienceSection.resumeItems.item8.title',-->
<!--            months: 'homePage.experienceSection.resumeItems.item8.months',-->
<!--            years: '2015 - 2018',-->
<!--            description: 'homePage.experienceSection.resumeItems.item8.description',-->
<!--            icon: 'job'-->
<!--        }, {-->
<!--            title: 'homePage.experienceSection.resumeItems.item9.title',-->
<!--            months: 'homePage.experienceSection.resumeItems.item9.months',-->
<!--            years: '2011 - 2014',-->
<!--            description: 'homePage.experienceSection.resumeItems.item9.description',-->
<!--            icon: 'education'-->
<!--        },-->
<!--    ]-->

<!--    let innerWidth = 0;-->
<!--</script>-->

<!--<svelte:window bind:innerWidth/>-->

<!--<section class="heroSection animatedElement">-->
<!--    &lt;!&ndash; The divs color-overlay and bg-image only makes the bg appear like it should &ndash;&gt;-->
<!--    <div class="color-overlay"></div>-->
<!--    <div class="bg-image"></div>-->
<!--    <div class="container">-->
<!--        <div class="row h-100 d-flex justify-between align-center">-->
<!--            <div class="d-flex flex-col justify-center infoContainer col-lg-8 col-xl-6">-->
<!--                <div class="header d-flex flex-col h-100">-->
<!--                    <h1>{$t('homePage.heroSection.homeTitle')}</h1>-->
<!--                    <h3>-->
<!--                        <span class="jobtitle">{$t('homePage.heroSection.homeJobtitle')}</span>-->
<!--                        <span>{$t('homePage.heroSection.homeSubtitle')}</span>-->
<!--                    </h3>-->
<!--                </div>-->
<!--                <p class="h-100 my-5">{$t('homePage.heroSection.homeIntroduction')}</p>-->
<!--                <div class="d-flex">-->
<!--                    <LinkButton buttonProps="btnPrimary fontBold me-5" btnLabel="{$t('button.contact')}"-->
<!--                                link="mailto:jonatan.ljung@hotmail.com"/>-->
<!--                    <LinkButton link="{base}/projects" btnLabel="{$t('button.projects')}"-->
<!--                                buttonProps="btnSecondary outline fontBold"></LinkButton>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="d-flex justify-center imgContainer col-8 col-lg-6 col-xl-5">-->
<!--                <img height="100%" width="100%"-->
<!--                     src="{base}/resources/images/me_1_cropped.webp"-->
<!--                     alt="Me smiling at the camera"/>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--    {#if innerWidth >= 768}-->
<!--        <div class="arrowContainer">-->
<!--            <svg-->
<!--                    width="48"-->
<!--                    height="24"-->
<!--                    viewBox="0 0 48 24"-->
<!--                    id="arrow"-->
<!--                    xmlns="http://www.w3.org/2000/svg">-->
<!--                <path-->
<!--                        d="M 46.5,1.5 24.468525,22.351655 c -0.2739,0.259267 -0.66315,0.259267 -0.93705,0 L 1.5,1.5"-->
<!--                        stroke-width="2.82307"-->
<!--                        stroke-linecap="round"-->
<!--                        stroke="currentColor"-->
<!--                        style="fill-opacity: 0"-->
<!--                        id="path1"/>-->
<!--            </svg>-->
<!--        </div>-->
<!--    {/if}-->
<!--</section>-->
<!--<section class="animatedElement">-->
<!--    <h2>{$t('homePage.aboutSection.aboutTitle')}</h2>-->
<!--    <div class="container">-->
<!--        <div class="row">-->
<!--            <div class="mt-5 col-lg-4">-->
<!--                <h3 class="textPrimary">{$t('homePage.aboutSection.item1.title')}</h3>-->
<!--                <p class="textMuted">{$t('homePage.aboutSection.item1.description')}</p>-->
<!--            </div>-->
<!--            <div class="mt-5 col-lg-4">-->
<!--                <h3 class="textPrimary">{$t('homePage.aboutSection.item2.title')}</h3>-->
<!--                <p class="textMuted">{$t('homePage.aboutSection.item2.description')}</p>-->
<!--            </div>-->
<!--            <div class="mt-5 col-lg-4">-->
<!--                <h3 class="textPrimary">{$t('homePage.aboutSection.item3.title')}</h3>-->
<!--                <p class="textMuted">{$t('homePage.aboutSection.item3.description')}</p>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</section>-->
<!--<section class="animatedElement">-->
<!--    <h2>{$t('homePage.experienceSection.title')}</h2>-->
<!--    <Timeline {timelineItems}/>-->
<!--</section>-->
<!--<section class="animatedElement">-->
<!--    <h2>{$t('homePage.techSection.title')}</h2>-->
<!--    <p class="mt-2">{$t('homePage.techSection.subtitle')}</p>-->
<!--    <div class="container techStackContainer mt-5">-->
<!--        <div class="techStackCategory">-->
<!--            <div class="row">-->
<!--                <h3 class="textPrimary">Frontend</h3>-->
<!--                <TechStackIcon-->
<!--                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"-->
<!--                        title="Html"/>-->
<!--                <TechStackIcon-->
<!--                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"-->
<!--                        title="Css"/>-->
<!--                <TechStackIcon-->
<!--                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"-->
<!--                        title="JavaScript"/>-->
<!--                <TechStackIcon-->
<!--                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"-->
<!--                        title="TypeScript"/>-->
<!--                <TechStackIcon-->
<!--                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"-->
<!--                        title="Angular"/>-->
<!--                <TechStackIcon-->
<!--                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"-->
<!--                        title="React"/>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="techStackCategory mt-4">-->
<!--            <div class="row">-->
<!--                <h3 class="textPrimary">Backend</h3>-->
<!--                <TechStackIcon-->
<!--                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"-->
<!--                        title="Java"/>-->
<!--                <TechStackIcon-->
<!--                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"-->
<!--                        title="C#"/>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="techStackCategory mt-4">-->
<!--            <div class="row">-->
<!--                <h3 class="textPrimary">{$t('homePage.techSection.db')}</h3>-->
<!--                <TechStackIcon-->
<!--                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"-->
<!--                        title="PostgreSQL"/>-->
<!--                <TechStackIcon-->
<!--                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"-->
<!--                        title="MySQL"/>-->
<!--                <TechStackIcon-->
<!--                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"-->
<!--                        title="MongoDB"/>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="techStackCategory mt-4">-->
<!--            <div class="row">-->
<!--                <h3 class="textPrimary">{$t('homePage.techSection.tools')}</h3>-->
<!--                <TechStackIcon-->
<!--                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg"-->
<!--                        title="Jira"/>-->
<!--                <TechStackIcon-->
<!--                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"-->
<!--                        title="Git"/>-->
<!--                <TechStackIcon-->
<!--                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"-->
<!--                        title="Docker"/>-->
<!--                <TechStackIcon-->
<!--                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"-->
<!--                        title="Postman"/>-->
<!--                <TechStackIcon-->
<!--                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"-->
<!--                        title="Figma"/>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</section>-->
<!--<section class="projectSection animatedElement">-->
<!--    <h2>{$t('homePage.projectSection.title')}</h2>-->
<!--    <p class="mt-2">{$t('homePage.projectSection.subtitle')}</p>-->
<!--    <div class="container">-->
<!--        <div class="row mb-4 mt-4">-->
<!--            <div class="col-md-12 col-lg-6 col-xxl-4 mb-5">-->
<!--                <ProjectItem-->
<!--                        title="Personal economy"-->
<!--                        techStack={['Svelte', 'TypeScript', 'HTML/CSS']}-->
<!--                        description={$t('projectPage.projectItems.item2.description')}-->
<!--                        link="https://github.com/jonlju95/personalEconomyApp"/>-->
<!--            </div>-->
<!--            <div class="col-md-12 col-lg-6 col-xxl-4 mb-5">-->
<!--                <ProjectItem-->
<!--                        title="Customer Product Website"-->
<!--                        techStack={['Java', 'Html', 'Css']}-->
<!--                        description={$t('projectPage.projectItems.item3.description')}-->
<!--                        link="https://github.com/jonlju95/Personal_Project_Customer_Product_Website"/>-->
<!--            </div>-->
<!--            <div class="col-md col-lg-6 col-xxl-4 mb-5">-->
<!--                <ProjectItem-->
<!--                        title="Rock, Paper, Scissors"-->
<!--                        techStack={['JavaScript', 'Html', 'Css', 'React']}-->
<!--                        description={$t('projectPage.projectItems.item4.description')}-->
<!--                        link="https://github.com/jonlju95/Rock-Paper-Scissors"/>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="w-100 d-flex justify-end mt-3">-->
<!--        <LinkButton link="{base}/projects" btnLabel="{$t('homePage.projectSection.moreProjects')}"-->
<!--                    newTab={false}/>-->
<!--    </div>-->
<!--</section>-->

<!--<style lang="scss">-->
<!--  section {-->
<!--    background-image: var(&#45;&#45;background-img);-->

<!--    position: relative;-->
<!--    max-width: 100%;-->

<!--    padding: 4rem 9rem 6rem;-->

<!--    @media screen and (max-width: 767px) {-->
<!--      padding: 3rem 1rem 5rem;-->
<!--    }-->

<!--    @media screen and (min-width: 768px) and (max-width: 1200px) {-->
<!--      padding: 3rem 2rem 5rem;-->
<!--    }-->


<!--    /* Give the sections after the first one alternating background colors */-->
<!--    &:not(:first-child) {-->
<!--      background-color: var(&#45;&#45;bg-dim);-->
<!--    }-->

<!--    &:nth-child(even) {-->
<!--      background-color: var(&#45;&#45;bg);-->
<!--    }-->
<!--  }-->

<!--  .heroSection {-->
<!--    /* This height makes the first section of the home page fill the entire view, for design purposes */-->
<!--    height: 100vh;-->
<!--    overflow: hidden;-->
<!--    position: relative;-->

<!--    .bg-image {-->
<!--      position: absolute;-->
<!--      inset: 0;-->
<!--      background-image: url('/resources/background-new.webp');-->
<!--      background-size: cover;-->
<!--      background-position: center;-->

<!--      z-index: 1;-->
<!--      height: inherit;-->
<!--      width: inherit;-->
<!--    }-->

<!--    .color-overlay {-->
<!--      position: absolute;-->
<!--      inset: 0;-->
<!--      background-color: var(&#45;&#45;primary-bg);-->
<!--      mix-blend-mode: hard-light;-->
<!--      z-index: 2;-->
<!--      height: inherit;-->
<!--      width: inherit;-->
<!--    }-->

<!--    .container {-->
<!--      position: relative;-->
<!--      z-index: 3;-->
<!--      width: inherit;-->
<!--      height: 100%;-->
<!--      padding: 0;-->

<!--      > .row {-->
<!--        @media screen and (max-width: 1200px) {-->
<!--          margin: 0 !important;-->
<!--          flex-direction: column-reverse !important;-->
<!--          flex-wrap: inherit;-->
<!--          justify-content: space-evenly !important;-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--    .jobtitle {-->
<!--      color: var(&#45;&#45;primary);-->
<!--      font-weight: bolder;-->
<!--    }-->

<!--    .imgContainer {-->
<!--      img {-->
<!--        border-radius: 50%;-->
<!--        border: 2px solid var(&#45;&#45;primary);-->
<!--        object-fit: cover;-->
<!--        aspect-ratio: 1/1;-->
<!--      }-->
<!--    }-->

<!--    .arrowContainer {-->
<!--      width: 100%;-->
<!--      position: absolute;-->
<!--      bottom: 1.5rem;-->
<!--      left: 0;-->
<!--      right: 0;-->
<!--      z-index: 3;-->

<!--      svg {-->
<!--        color: var(&#45;&#45;border-muted);-->
<!--        margin-left: calc(50% - 24px);-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  .techStackCategory {-->
<!--    border-bottom: 1px solid var(&#45;&#45;border-muted);-->

<!--    @media screen and (max-width: 1200px) {-->
<!--      .row {-->
<!--        margin-left: auto;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  .projectSection * {-->
<!--    position: relative;-->
<!--    z-index: 1;-->
<!--  }-->

<!--</style>-->
