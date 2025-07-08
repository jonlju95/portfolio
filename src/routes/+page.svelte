<script lang="ts">
    import {base} from '$app/paths';
    import {_} from 'svelte-i18n';
</script>

<section class="heroSection animated-element">
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
<section class="aboutSection animated-element">
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
<section class="experienceSection animated-element">
    <h2>Experience</h2>
    <div>
        <p>Experience section</p>
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

    .aboutSection {
        height: fit-content;
        padding: 4rem 10rem 6rem;
        background-color: var(--bg);
        margin-top: 4rem;

        p {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

    .experienceSection {
        height: fit-content;
        padding: 4rem 10rem 6rem;
        background-color: var(--bg-light);
    }
</style>