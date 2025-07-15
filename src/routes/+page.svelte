<script lang="ts">
    import {base} from '$app/paths';
    import {t} from 'svelte-i18n';

    import {LinkButton, ProjectItem, TechStackIcon, Timeline} from '$lib';
</script>

<section class="heroSection mt-7 mb-7 ms-10 me-10 p-6 animatedElement">
    <div class="container">
        <div class="row h-100 d-flex align-center">
            <div class="d-flex imgContainer col-lg-6">
                <img class="h-fit w-100" src="{base}/resources/images/3V6A4207_cropped.png" alt="Me"/>
            </div>
            <div class="d-flex flex-col justify-center infoContainer col-lg-6">
                <div class="header d-flex flex-col justify-end h-100 mb-4">
                    <h1>Jonatan Ljung</h1>
                    <p>{$t('homePage.heroSection.homeTitle')}</p>
                </div>
                <p class="h-100">{$t('homePage.heroSection.homeIntroduction')}</p>
            </div>
        </div>
    </div>
</section>
<section class="animatedElement">
    <h2>{$t('homePage.aboutSection.aboutTitle')}</h2>
    <div class="container">
        <p class="d-flex flex-col ms-3">
            <span class="mb-3">{$t('homePage.aboutSection.aboutText.span1')}</span>
            <span class="mb-3">{$t('homePage.aboutSection.aboutText.span2')}</span>
            <span class="mb-3">{$t('homePage.aboutSection.aboutText.span3')}</span>
            <span class="mb-3">{$t('homePage.aboutSection.aboutText.span4')}</span>
        </p>
    </div>
</section>
<section class="animatedElement">
    <h2>{$t('homePage.experienceSection.title')}</h2>
    <Timeline/>
</section>
<section class="animatedElement">
    <h2>{$t('homePage.techSection.title')}</h2>
    <div class="container techStackContainer">
        <p class="ms-3">{$t('homePage.techSection.subtitle')}</p>
        <div class="mt-3 ms-3 techStackCategory">
            <h4>Frontend</h4>
            <div class="row">
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
        <div class="mt-3 ms-3 techStackCategory">
            <h4>Backend</h4>
            <div class="row">
                <TechStackIcon
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                        title="Java"/>
                <TechStackIcon
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                        title="C#"/>
            </div>
        </div>
        <div class="mt-3 ms-3 techStackCategory">
            <h4>{$t('homePage.techSection.db')}</h4>
            <div class="row">
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
        <div class="mt-3 ms-3 techStackCategory">
            <h4>{$t('homePage.techSection.tools')}</h4>
            <div class="row">
                <TechStackIcon
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg"
                        title="Jira"/>
                <TechStackIcon
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                        title="Git"/>
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

        padding: 4rem 10rem 6rem;

        /* Give the sections after the first one alternating background colors */
        &:not(:first-child) {
            background-color: var(--bg-dark);
        }

        &:nth-child(even) {
            background-color: var(--bg);
        }
    }

    .heroSection {
        /* This height makes the first section of the home page fill the entire view, for design purposes */
        height: calc(100vh - 12rem);

        background-color: var(--bg-light);
        border: 1px solid var(--border-muted);
        border-top-color: var(--highlight);
        border-radius: 12px;

        box-shadow: var(--shadow);
        overflow: hidden;

        .imgContainer {
            img {
                border-radius: 12px;
                border: 2px solid var(--border-muted);
                object-fit: cover;
                max-width: 35rem;
                aspect-ratio: 1/1;
            }
        }

        .infoContainer .header h1 {
            color: var(--primary);
        }

        .infoContainer .header p {
            font-style: italic;
            font-weight: bold;
            color: var(--text-muted);
        }
    }

    .techStackCategory {
        border-bottom: 1px solid var(--border-muted);
    }

</style>
