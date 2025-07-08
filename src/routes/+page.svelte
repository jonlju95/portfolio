<script lang="ts">
    import {base} from '$app/paths';
    import {_} from 'svelte-i18n';

    import {ProjectCard, TechStackIcon} from "$lib";
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
    <h2>Experience</h2>
    <div class="experienceContainer">
        <div>
            <h4>INBooks AB - Web Developer</h4>
            <p class="dateText">November 2021 – January 2024</p>
            <p>Focused on full-stack development and database management. Initially developed an accounting program
                and later a property management system. Emphasized meeting specific market needs as well as user-
                friendliness.</p>
        </div>
        <div>
            <h4>Maxkompetens - Consultant</h4>
            <p class="dateText">May 2019 – August 2019</p>
            <p>Assigned to ATEA, where I worked on computer formatting from various companies and authorities.</p>
        </div>
        <div>
            <h4>Inpeople - Consultant</h4>
            <p class="dateText">August 2018 – September 2018</p>
            <p>Assigned to ATEA, where I worked on reconditioning mobile phones and tablets from various companies and
                authorities.</p>
        </div>
        <div>
            <h4>Various companies</h4>
            <p class="dateText">May 2015 - July 2018</p>
            <p>Previously worked as a metal-CNC machine operator, cleaner at Växjö Lasarett, responsible for furniture
                assembly and work in wood-CNC. Also, experienced in grocery retail with focus on stocking and fronting,
                and worked as a mattress assembler on a semi-automated line.</p>
        </div>
    </div>
</section>
<section class="homePageSections educationSection animatedElement">
    <h2>Education</h2>
    <div class="educationContainer">
        <div>
            <h4>Ec Utbildning - Java Developer</h4>
            <p class="dateText">August 2019 - May 2021</p>
            <p>Vocational education in programming, mainly Java, but also some HTML, CSS, JavaScript, SQL, among others.
                Also had some courses on agile methods.</p>
        </div>
        <div>
            <h4>Linnéuniversitetet - Bachelor of Engineering</h4>
            <p class="dateText">September 2018 - Discontinued</p>
            <p>University education in computer science, including programming, electronics, and typical engineering
                courses such as physics and mathematics. Later chose to discontinue the education due to mismatched
                quality and relevance to expectations.</p>
        </div>
        <div>
            <h4>Linnéuniversitetet - Technical Preparatory Year</h4>
            <p class="dateText">September 2017 – June 2018</p>
            <p>Supplementary education with various high school courses to achieve eligibility for further
                education.</p>
        </div>
        <div>
            <h4>Kungsmadskolan - Carpentry</h4>
            <p class="dateText">August 2011 – June 2014</p>
            <p>High school education in cabinetmaking and interior design, including a significant amount of design
                work,
                primarily in furniture design but also in graphic design.</p>
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
        <ProjectCard title="Connect Four" techStack="{['Java', 'JUnit']}"
                     description="Game created with a focus on testing, as it was developed in a unit testing-oriented course."
                     link="https://github.com/jonlju95/Four-in-a-row"/>
        <ProjectCard title="Customer Product Website" techStack="{['Java', 'Html', 'Css']}"
                     description="Personal project to maintain my skills."
                     link="https://github.com/jonlju95/Personal_Project_Customer_Product_Website"/>
        <ProjectCard title="Rock, Paper, Scissors" techStack="{['JavaScript', 'Html', 'Css', 'React']}"
                     description="Rock, Paper, Scissors game created with React."
                     link="https://github.com/jonlju95/Rock_Paper_Scissors"/>
    </div>
</section>

<style>
    .heroSection {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        height: calc(100vh - 10rem);
        margin: 0 10rem;
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

    .experienceSection,
    .educationSection {
        .experienceContainer,
        .educationContainer {
            width: 100%;
            display: flex;
            flex-wrap: wrap;

            :nth-child(2n) {
                flex-basis: calc(50% - 4rem);
            }

            div {
                width: calc(50% - 4rem);
                border: 1px solid var(--border-muted);
                border-top: var(--highlight);
                border-radius: 12px;
                box-shadow: var(--shadow);
                padding: 2rem;
                margin: 2rem;
                min-height: 18rem;
                background: var(--gradient)
            }
        }

        .dateText {
            font-style: italic;
            color: var(--text);
            margin-bottom: 1rem;
        }
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
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

</style>