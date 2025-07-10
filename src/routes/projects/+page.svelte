<script lang="ts">
    import {t} from 'svelte-i18n';

    import {ProjectItem} from "$lib";
</script>

<section class="projectContainer">
    <h2>{$t('projectPage.title')}</h2>
    <p>{$t('projectPage.subtitle')}</p>
    <div class="projectContent">
        <ProjectItem title="Portfolio website" techStack="{['SvelteKit', 'TypeScript', 'HTML/CSS']}"
                     description={$t('projectPage.projectItems.item1.description')}
                     link="https://github.com/jonlju95/portfolio"/>
        <ProjectItem title="Personal economy" techStack="{['Svelte', 'TypeScript', 'HTML/CSS']}"
                     description={$t('projectPage.projectItems.item2.description')}
                     link="https://github.com/jonlju95/personalEconomyApp"/>
        <ProjectItem title="Customer Product Website" techStack="{['Java', 'Html', 'Css']}"
                     description={$t('projectPage.projectItems.item3.description')}
                     link="https://github.com/jonlju95/Personal_Project_Customer_Product_Website"/>
        <ProjectItem title="Rock, Paper, Scissors" techStack="{['JavaScript', 'Html', 'Css', 'React']}"
                     description={$t('projectPage.projectItems.item4.description')}
                     link="https://github.com/jonlju95/Rock-Paper-Scissors"/>
        <ProjectItem title="Connect Four" techStack="{['Java', 'JUnit']}"
                     description={$t('projectPage.projectItems.item5.description')}
                     link="https://github.com/jonlju95/Four-in-a-row"/>
        <ProjectItem title="Library app" techStack="{['Java', 'MongoDB', 'Postman']}"
                     description={$t('projectPage.projectItems.item6.description')}
                     link="https://github.com/jonlju95/Library-App"/>
        <ProjectItem title="Recipe database" techStack="{['MySQL', 'Java']}"
                     description={$t('projectPage.projectItems.item7.description')}
                     link="https://github.com/jonlju95/Recipe-Database"/>
    </div>

</section>

<style>
    .projectContainer {
        padding: 2rem 4rem 6rem;
        margin: 0 10rem;
        background-color: var(--bg);

        p {
            margin: 0 2rem;
        }
    }

    .projectContent {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 4rem;
        margin-top: 1rem;
        padding-top: 2rem;
        border-top: 2px solid var(--border);

        @media screen and (max-width: 1600px) {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>