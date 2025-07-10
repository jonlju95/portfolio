<script lang="ts">
    import {base} from '$app/paths';
    import { innerWidth } from 'svelte/reactivity/window';
    import {t} from 'svelte-i18n';

    import {LinkButton, ProjectItem, ResumeItem, TechStackIcon} from "$lib";
</script>

<section class="heroSection animatedElement">
    <div class="imgContainer">
        <img src="{base}/resources/images/3V6A4207_cropped.png" alt="Me"/>
    </div>
    <div class="infoContainer">
        <div class="header">
            <h1>Jonatan Ljung</h1>
            <p>{$t('homePage.heroSection.homeTitle')}</p>
        </div>
        <p class="introduction">{$t('homePage.heroSection.homeIntroduction')}</p>
    </div>
</section>
<section class="homePageSections aboutSection animatedElement">
    <h2>{$t('homePage.aboutSection.aboutTitle')}</h2>
    <div>
        <p>
            <span>{$t('homePage.aboutSection.aboutText.span1')}</span>
            <span>{$t('homePage.aboutSection.aboutText.span2')}</span>
            <span>{$t('homePage.aboutSection.aboutText.span3')}</span>
            <span>{$t('homePage.aboutSection.aboutText.span4')}</span>
        </p>
    </div>
</section>
<section class="homePageSections experienceSection animatedElement">
    <h2>{$t('homePage.experienceSection.title')}</h2>
    <div class="timeline animatedElement">
        <div class="timelineContainer left">
            <ResumeItem title={$t('homePage.experienceSection.resumeItems.item1.title')}
                        subtitle={$t('homePage.experienceSection.resumeItems.item1.subtitle')}
                        description={$t('homePage.experienceSection.resumeItems.item1.description')}
                        icon="education"/>
        </div>
        <div class="timelineContainer right">
            <ResumeItem title={$t('homePage.experienceSection.resumeItems.item2.title')}
                        subtitle={$t('homePage.experienceSection.resumeItems.item2.subtitle')}
                        description={$t('homePage.experienceSection.resumeItems.item2.description')}
                        icon="job"/>
        </div>
        <div class="timelineContainer left">
            <ResumeItem title={$t('homePage.experienceSection.resumeItems.item3.title')}
                        subtitle={$t('homePage.experienceSection.resumeItems.item3.subtitle')}
                        description={$t('homePage.experienceSection.resumeItems.item3.description')}
                        icon="job"/>
        </div>
        <div class="timelineContainer right">
            <ResumeItem title={$t('homePage.experienceSection.resumeItems.item4.title')}
                        subtitle={$t('homePage.experienceSection.resumeItems.item4.subtitle')}
                        description={$t('homePage.experienceSection.resumeItems.item4.description')}
                        icon="job"/>
        </div>
        <div class="timelineContainer left">
            <ResumeItem title={$t('homePage.experienceSection.resumeItems.item5.title')}
                        subtitle={$t('homePage.experienceSection.resumeItems.item5.subtitle')}
                        description={$t('homePage.experienceSection.resumeItems.item5.description')}
                        icon="education"/>
        </div>
        <div class="timelineContainer right">
            <ResumeItem title={$t('homePage.experienceSection.resumeItems.item6.title')}
                        subtitle={$t('homePage.experienceSection.resumeItems.item6.subtitle')}
                        description={$t('homePage.experienceSection.resumeItems.item6.description')}
                        icon="education"/>
        </div>
        <div class="timelineContainer left">
            <ResumeItem title={$t('homePage.experienceSection.resumeItems.item7.title')}
                        subtitle={$t('homePage.experienceSection.resumeItems.item7.subtitle')}
                        description={$t('homePage.experienceSection.resumeItems.item7.description')}
                        icon="education"/>
        </div>
        <div class="timelineContainer right">
            <ResumeItem title={$t('homePage.experienceSection.resumeItems.item8.title')}
                        subtitle={$t('homePage.experienceSection.resumeItems.item8.subtitle')}
                        description={$t('homePage.experienceSection.resumeItems.item8.description')}
                        icon="job"/>
        </div>
        <div class="timelineContainer left">
            <ResumeItem title={$t('homePage.experienceSection.resumeItems.item9.title')}
                        subtitle={$t('homePage.experienceSection.resumeItems.item9.subtitle')}
                        description={$t('homePage.experienceSection.resumeItems.item9.description')}
                        icon="education"/>
        </div>
    </div>
</section>
<section class="homePageSections animatedElement">
    <h2>{$t('homePage.techSection.title')}</h2>
    <p>{$t('homePage.techSection.subtitle')}</p>
    <div class="techStackContainer">
        <div class="techStackCategory">
            <h4>Frontend</h4>
            <div>
                <TechStackIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                               title="Html"/>
                <TechStackIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
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
                <TechStackIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                               title="React"/>
            </div>
        </div>
        <div class="techStackCategory">
            <h4>Backend</h4>
            <div>
                <TechStackIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                               title="Java"/>
                <TechStackIcon
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                        title="C#"/>
            </div>
        </div>
        <div class="techStackCategory">
            <h4>{$t('homePage.techSection.db')}</h4>
            <div>
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
        <div class="techStackCategory">
            <h4>{$t('homePage.techSection.tools')}</h4>
            <div>
                <TechStackIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg"
                               title="Jira"/>
                <TechStackIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                               title="Git"/>
                <TechStackIcon
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                        title="Postman"/>
                <TechStackIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                               title="Figma"/>
            </div>
        </div>
    </div>
</section>
<section class="homePageSections animatedElement">
    <h2>{$t('homePage.projectSection.title')}</h2>
    <p>{$t('homePage.projectSection.subtitle')}</p>
    <div class="projectContainer">
        <ProjectItem title="Personal economy" techStack="{['Svelte', 'TypeScript', 'HTML/CSS']}"
                     description={$t('projectPage.projectItems.item2.description')}
                     link="https://github.com/jonlju95/personalEconomyApp"/>
        <ProjectItem title="Customer Product Website" techStack="{['Java', 'Html', 'Css']}"
                     description={$t('projectPage.projectItems.item3.description')}
                     link="https://github.com/jonlju95/Personal_Project_Customer_Product_Website"/>
        {#if innerWidth.current && innerWidth.current > 1600}
            <ProjectItem title="Rock, Paper, Scissors" techStack="{['JavaScript', 'Html', 'Css', 'React']}"
                         description={$t('projectPage.projectItems.item4.description')}
                         link="https://github.com/jonlju95/Rock-Paper-Scissors"/>
        {/if}
    </div>
    <div class="linkContainer">
        <LinkButton link="{base}/projects" btnLabel="More projects" newTab="{false}"/>
    </div>
</section>

<style>
    .heroSection {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        height: calc(100vh - 10rem);
        margin: 6rem 10rem 0;
        padding: 4rem;

        background-color: var(--bg-light);
        border: 1px solid var(--border-muted);
        border-top-color: var(--highlight); /* simpler override */
        border-radius: 1rem;

        box-shadow: var(--shadow);
        overflow: hidden;
    }

    .heroSection .infoContainer,
    .heroSection .imgContainer {
        width: 100%;
        height: 100%;
        display: flex;
    }

    .heroSection .infoContainer {
        margin-left: 2.5rem;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: baseline;
    }

    .heroSection .infoContainer .header {
        margin-bottom: 2.5rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: end;
    }

    .heroSection .infoContainer .header h1 {
        color: var(--primary);
    }

    .heroSection .infoContainer .header p {
        font-style: italic;
        font-weight: bold;
        color: var(--text-muted);
    }

    .heroSection .infoContainer .introduction {
        height: 100%;
    }

    .heroSection .imgContainer {
        justify-content: center;
        overflow: hidden;
    }

    .heroSection .imgContainer img {
        border-radius: 12px;
        border: 2px solid var(--border-muted);
    }

    .homePageSections {
        height: fit-content;
        padding: 4rem 10rem 6rem;
        background-color: var(--bg-dark);

        &:nth-child(even) {
            background-color: var(--bg);
        }

        p {
            margin-left: 2rem;
        }
    }

    .aboutSection {
        margin-top: 4rem;

        p {
            margin: 0 2rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

    .timeline {
        position: relative;
        width: 100%;
        margin: 8rem auto 0;
    }

    .timeline::after {
        content: "";
        position: absolute;
        top: -6rem;
        bottom: 0;
        left: 50%;
        width: 3px;
        margin-left: -3px;
        background-color: var(--secondary);
        border-radius: 3px;
    }

    /* Container around content */
    .timelineContainer {
        padding: 10px 40px;
        position: relative;
        background-color: inherit;
        width: 50%;
        margin-top: -6rem
    }

    /* The circles on the timeline */
    .timelineContainer::after {
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        right: -8px;
        background-color: var(--bg);
        border: 2px solid var(--primary);
        top: 22px;
        border-radius: 50%;
        z-index: 1;
    }

    /* Place the container to the left */
    .left {
        left: 0;
    }

    /* Place the container to the right */
    .right {
        left: 50%;
    }

    /* Add arrows to the left container (pointing right) */
    .left::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        right: 31px;
        border: medium solid var(--primary);
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent var(--bg);
    }

    /* Add arrows to the right container (pointing left) */
    .right::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        left: 31px;
        border: medium solid var(--primary);
        border-width: 10px 10px 10px 0;
        border-color: transparent var(--bg) transparent transparent;
    }

    /* Fix the circle for containers on the right side */
    .right::after {
        left: -11px;
    }

    .experienceSection {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

    }

    .techStackContainer {
        width: 100%;
        display: flex;
        flex-direction: column;

        .techStackCategory {
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid var(--border-muted);
            margin: 1rem 0 0 1rem;

            & > div {
                display: flex;
            }
        }
    }

    .projectContainer {
        display: flex;
        justify-content: space-evenly;
        margin: 2rem 0 2rem 2rem;
        gap: 4rem;
    }

    .linkContainer {
        margin-top: 1rem;
        display: flex;
        justify-content: end;
    }

</style>