<script lang="ts">
    import {base} from '$app/paths';
    import {_} from 'svelte-i18n';

    import {LinkButton, ProjectItem, ResumeItem, TechStackIcon} from "$lib";
</script>

<section class="heroSection animatedElement">
    <div class="imgContainer">
        <img src="{base}/resources/images/3V6A4207_cropped.png" alt="Me"/>
    </div>
    <div class="infoContainer">
        <div class="header">
            <h1>Jonatan Ljung</h1>
            <p>{$_('homePage.heroSection.homeTitle')}</p>
        </div>
        <p class="introduction">{$_('homePage.heroSection.homeIntroduction')}</p>
    </div>
</section>
<section class="homePageSections aboutSection animatedElement">
    <h2>About me</h2>
    <div>
        <p>
            <span>Hi! I’m Jonatan Ljung — a web developer with just over two years of experience at INBooks. I'm currently
            looking for new opportunities where I can contribute with both technical skill and creative thinking, while
            continuing to grow in my career.</span>
            <span>My background is in full-stack web development, with hands-on experience in Java, HTML/CSS, JavaScript,
                TypeScript, and PostgreSQL. I’ve worked extensively with Angular and AngularJS to build user-friendly,
                dynamic applications. More recently, I’ve started diving into C# and Flutter to broaden my skill set and
                explore new areas of development.</span>
            <span>I’m based in Växjö but open to roles across southern Sweden — or remote! I'm known for being creative,
                detail-oriented, and solution-focused, which led to me taking on additional responsibility for UI
                quality assurance in my previous role. That also meant close collaboration with designers, product owners, and
                business analysts, which I genuinely enjoyed.</span>
            <span>If you're looking for someone with a mix of technical know-how, creativity, and a friendly team spirit —
                let’s talk!</span>
        </p>
    </div>
</section>
<section class="homePageSections experienceSection animatedElement">
    <h2>Experience & education</h2>
    <div class="timeline animatedElement">
        <div class="timelineContainer left">
            <ResumeItem title="Lexicon - IT extension course" subtitle="July 2025 - April 2026"
                        description="Labour market training course focusing on C#, but also React, database design and some
                        AI engineering. In addition to this there's also a roughly three month long internship towards the end." icon="education"/>
        </div>
        <div class="timelineContainer right">
            <ResumeItem title="INBooks AB - Web Developer" subtitle="November 2021 – January 2024"
                        description="Focused on full-stack development and database management. Initially developed an
                        accounting program and later a property management system. Emphasized meeting specific market
                        needs as well as user-friendliness." icon="job"/>
        </div>
        <div class="timelineContainer left">
            <ResumeItem title="Maxkompetens - Consultant" subtitle="May 2019 – August 2019"
                        description="Assigned to ATEA, where I worked on computer formatting from various companies and authorities."
                        icon="job"/>
        </div>
        <div class="timelineContainer right">
            <ResumeItem title="Inpeople - Consultant" subtitle="August 2018 – September 2018"
                        description="Assigned to ATEA, where I worked on reconditioning mobile phones and tablets from various companies and authorities."
                        icon="job"/>
        </div>
        <div class="timelineContainer left">
            <ResumeItem title="Ec Utbildning - Java Developer" subtitle="August 2019 - May 2021"
                        description="Vocational education in programming, mainly Java, but also some HTML, CSS, JavaScript, SQL, among others.
                        Also had some courses on agile methods."
                        icon="education"/>
        </div>
        <div class="timelineContainer right">
            <ResumeItem title="Linnéuniversitetet - Bachelor of Engineering" subtitle="September 2018 - Discontinued"
                        description="University education in computer science, including programming, electronics, and typical engineering courses such as physics and mathematics.
                        Later chose to discontinue the education due to mismatched quality and relevance to expectations."
                        icon="education"/>
        </div>
        <div class="timelineContainer left">
            <ResumeItem title="Linnéuniversitetet - Technical Preparatory Year" subtitle="September 2017 – June 2018"
                        description="Supplementary education with various high school courses to achieve eligibility for further education."
                        icon="education"/>
        </div>
        <div class="timelineContainer right">
            <ResumeItem title="Various companies" subtitle="May 2015 - July 2018"
                        description="Previously worked as a metal-CNC machine operator, cleaner at Växjö Lasarett, responsible
                        for furniture assembly and work in wood-CNC. Also, experienced in grocery retail with focus on stocking and fronting,
                        and worked as a mattress assembler on a semi-automated line."
                        icon="job"/>
        </div>
        <div class="timelineContainer left">
            <ResumeItem title="Kungsmadskolan - Carpentry" subtitle="August 2011 – June 2014"
                        description="High school education in cabinetmaking and interior design, including a significant amount of design work,
                        primarily in furniture design but also in graphic design."
                        icon="education"/>
        </div>
    </div>
</section>
<section class="homePageSections animatedElement">
    <h2>My tech stack</h2>
    <p>Languages, frameworks and tools I've worked with before</p>
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
            <h4>Database</h4>
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
            <h4>Tools</h4>
            <div>
                <TechStackIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg"
                               title="Jira"/>
                <TechStackIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                               title="Git"/>
                <TechStackIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                               title="Postman"/>
                <TechStackIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                               title="Figma"/>
            </div>
        </div>
    </div>
</section>
<section class="homePageSections animatedElement">
    <h2>Projects</h2>
    <p>Some of the projects I've done during my education, as well as some later projects to maintain my skills</p>
    <div class="projectContainer">
        <ProjectItem title="Personal economy" techStack="{['Svelte', 'TypeScript', 'HTML/CSS']}"
                     description="Personal project comprised of an app where you could insert expenses and income to get an overview of your economy.
                     Was gonna contain tables with diverse filters for specific entries etc."
                     link="https://github.com/jonlju95/personalEconomyApp"/>
        <ProjectItem title="Customer Product Website" techStack="{['Java', 'Html', 'Css']}"
                     description="Personal project to maintain my skills. Was going to function like a service where you buy and register products with an activation key.
                     The repository contains a readme with a rough first draft of the intended functionality."
                     link="https://github.com/jonlju95/Personal_Project_Customer_Product_Website"/>
        <ProjectItem title="Rock, Paper, Scissors" techStack="{['JavaScript', 'Html', 'Css', 'React']}"
                     description="Rock, Paper, Scissors game created with React and made as part of my education."
                     link="https://github.com/jonlju95/Rock-Paper-Scissors"/>
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
        margin-left: var(--spacing-xxl);
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: baseline;
    }

    .heroSection .infoContainer .header {
        margin-bottom: var(--spacing-xxl);
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