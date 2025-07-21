<script lang="ts">
    import {base} from '$app/paths';
    import {t} from 'svelte-i18n';

    import {Button, LinkButton, ProjectItem, TechStackIcon, Timeline} from '$lib';
</script>

<section class="heroSection animatedElement">
    <!-- The divs color-overlay and bg-image only makes the bg appear like it should -->
    <div class="color-overlay"></div>
    <div class="bg-image"></div>
    <div class="container">
        <div class="row h-100 d-flex justify-between align-center">
            <div class="d-flex flex-col justify-center infoContainer col-md-12 col-lg-6">
                <div class="header d-flex flex-col h-100">
                    <h1>{$t('homePage.heroSection.homeTitle')}</h1>
                    <h4>
                        <span class="jobtitle">{$t('homePage.heroSection.homeJobtitle')}</span>
                        <span>{$t('homePage.heroSection.homeSubtitle')}</span>
                    </h4>
                </div>
                <p class="h-100 my-5">{$t('homePage.heroSection.homeIntroduction')}</p>
                <div class="d-flex">
                    <Button label="{$t('button.contact')}" buttonProps="btnPrimary fontBold me-5"></Button>
                    <LinkButton link="{base}/projects" btnLabel="{$t('button.projects')}"
                                buttonProps="btnSecondary outline fontBold"></LinkButton>
                </div>
            </div>
            <div class="d-flex justify-center imgContainer col-lg-6 col-xl-5">
                <img height="100%" width="100%"
                     src="{base}/resources/images/3V6A4207_cropped.png"
                     alt="Me smiling at the camera"/>
            </div>
        </div>
    </div>
    <div class="arrowContainer">
        <svg
                width="48"
                height="24"
                viewBox="0 0 48 24"
                id="arrow"
                xmlns="http://www.w3.org/2000/svg">
            <path
                    d="M 46.5,1.5 24.468525,22.351655 c -0.2739,0.259267 -0.66315,0.259267 -0.93705,0 L 1.5,1.5"
                    stroke-width="2.82307"
                    stroke-linecap="round"
                    stroke="currentColor"
                    style="fill-opacity: 0"
                    id="path1"/>
        </svg>
    </div>
</section>
<section class="animatedElement">
    <h2>{$t('homePage.aboutSection.aboutTitle')}</h2>
    <div class="container mt-5">
        <div class="row">
            <div class="col-xl-4">
                <h4 class="textPrimary">{$t('homePage.aboutSection.item1.title')}</h4>
                <p class="textMuted">{$t('homePage.aboutSection.item1.description')}</p>
            </div>
            <div class="col-xl-4">
                <h4 class="textPrimary">{$t('homePage.aboutSection.item2.title')}</h4>
                <p class="textMuted">{$t('homePage.aboutSection.item2.description')}</p>
            </div>
            <div class="col-xl-4">
                <h4 class="textPrimary">{$t('homePage.aboutSection.item3.title')}</h4>
                <p class="textMuted">{$t('homePage.aboutSection.item3.description')}</p>
            </div>
        </div>
    </div>
</section>
<section class="animatedElement">
    <h2>{$t('homePage.experienceSection.title')}</h2>
    <Timeline/>
</section>
<section class="animatedElement">
    <h2>{$t('homePage.techSection.title')}</h2>
    <p>{$t('homePage.techSection.subtitle')}</p>
    <div class="container techStackContainer mt-5">
        <div class="techStackCategory">
            <h4 class="textPrimary">Frontend</h4>
            <div class="row ms-5 py-4">
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
        <div class="techStackCategory mt-4">
            <h4 class="textPrimary">Backend</h4>
            <div class="row ms-5 py-4">
                <TechStackIcon
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                        title="Java"/>
                <TechStackIcon
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                        title="C#"/>
            </div>
        </div>
        <div class="techStackCategory mt-4">
            <h4 class="textPrimary">{$t('homePage.techSection.db')}</h4>
            <div class="row ms-5 py-4">
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
        <div class="techStackCategory mt-4">
            <h4 class="textPrimary">{$t('homePage.techSection.tools')}</h4>
            <div class="row ms-5 py-4">
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
</section>
<section class="animatedElement">
    <h2>{$t('homePage.projectSection.title')}</h2>
    <div class="container">
        <p class="ms-3">{$t('homePage.projectSection.subtitle')}</p>
        <div class="row d-flex ms-3 mb-4 mt-4 justify-between">
            <div class="col-lg-6 col-xl-4">
                <ProjectItem
                        title="Personal economy"
                        techStack={['Svelte', 'TypeScript', 'HTML/CSS']}
                        description={$t('projectPage.projectItems.item2.description')}
                        link="https://github.com/jonlju95/personalEconomyApp"/>
            </div>
            <div class="col-lg-6 col-xl-4">
                <ProjectItem
                        title="Customer Product Website"
                        techStack={['Java', 'Html', 'Css']}
                        description={$t('projectPage.projectItems.item3.description')}
                        link="https://github.com/jonlju95/Personal_Project_Customer_Product_Website"/>
            </div>
            <div class="col-lg-6 col-xl-4">
                <ProjectItem
                        title="Rock, Paper, Scissors"
                        techStack={['JavaScript', 'Html', 'Css', 'React']}
                        description={$t('projectPage.projectItems.item4.description')}
                        link="https://github.com/jonlju95/Rock-Paper-Scissors"/>
            </div>

        </div>
        <div class="d-flex justify-end mt-3">
            <LinkButton link="{base}/projects" btnLabel="{$t('homePage.projectSection.moreProjects')}"
                        newTab={false}/>
        </div>
    </div>
</section>

<style>
    section {
        max-width: 100%;

        padding: 4rem 9rem 6rem;

        /* Give the sections after the first one alternating background colors */
        &:not(:first-child) {
            background-color: var(--bg-dim);
        }

        &:nth-child(even) {
            background-color: var(--bg);
        }
    }

    .heroSection {
        /* This height makes the first section of the home page fill the entire view, for design purposes */
        height: 100vh;
        overflow: hidden;
        position: relative;

        .bg-image {
            position: absolute;
            inset: 0;
            background-image: url('/resources/background-new.png');
            background-size: cover;
            background-position: center;

            z-index: 1;
            height: inherit;
            width: inherit;
        }

        .color-overlay {
            position: absolute;
            inset: 0;
            background-color: var(--primary-bg);
            mix-blend-mode: hard-light;
            z-index: 2;
            height: inherit;
            width: inherit;
        }

        .container {
            position: absolute;
            inset: 4rem 9rem 6rem;
            z-index: 3;
            height: calc(100vh - 4rem);
            width: inherit;
        }

        .jobtitle {
            color: var(--primary);
            font-weight: bolder;
        }

        .imgContainer {
            img {
                border-radius: 50%;
                border: 2px solid var(--primary);
                object-fit: cover;
                aspect-ratio: 1/1;
            }
        }

        .arrowContainer {
            position: absolute;
            bottom: 1.5rem;
            left: 50%;
            z-index: 3;

            svg {
                color: var(--border-muted);
            }
        }
    }

    .techStackCategory {
        border-bottom: 1px solid var(--border-muted);
    }

</style>
