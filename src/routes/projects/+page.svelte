<script lang="ts">
    import {t} from 'svelte-i18n';

    import {ProjectItem} from "$lib";
</script>

<section class="content">
    <h2>{$t('projectPage.title')}</h2>
    <p>{$t('projectPage.subtitle')}</p>
    <div class="container mt-4">
        <div class="row h-100 mb-3">
            <div class="col-4 col-md-12 col-xl-6">
                <ProjectItem title="Portfolio website" techStack="{['SvelteKit', 'TypeScript', 'HTML/CSS']}"
                             description={$t('projectPage.projectItems.item1.description')}
                             link="https://github.com/jonlju95/portfolio"/>
            </div>
            <div class="col-4 col-md-12 col-xl-6">
                <ProjectItem title="Personal economy" techStack="{['Svelte', 'TypeScript', 'HTML/CSS']}"
                             description={$t('projectPage.projectItems.item2.description')}
                             link="https://github.com/jonlju95/personalEconomyApp"/>
            </div>
            <div class="col-4 col-md-12 col-xl-6">
                <ProjectItem title="Customer Product Website" techStack="{['Java', 'Html', 'Css']}"
                             description={$t('projectPage.projectItems.item3.description')}
                             link="https://github.com/jonlju95/Personal_Project_Customer_Product_Website"/>
            </div>
        </div>
        <div class="row h-100 mb-4">
            <div class="col col-lg-6 col-xl-6">
                <ProjectItem title="Rock, Paper, Scissors" techStack="{['JavaScript', 'Html', 'Css', 'React']}"
                             description={$t('projectPage.projectItems.item4.description')}
                             link="https://github.com/jonlju95/Rock-Paper-Scissors"/>
            </div>
            <div class="col col-lg-6 col-xl-6">
                <ProjectItem title="Connect Four" techStack="{['Java', 'JUnit']}"
                             description={$t('projectPage.projectItems.item5.description')}
                             link="https://github.com/jonlju95/Four-in-a-row"/>
            </div>
            <div class="col col-lg-6 col-xl-6">
                <ProjectItem title="Library app" techStack="{['Java', 'MongoDB', 'Postman']}"
                             description={$t('projectPage.projectItems.item6.description')}
                             link="https://github.com/jonlju95/Library-App"/>
            </div>
        </div>
        <div class="row h-100">
            <div class="col-4 col-xl-4">
                <ProjectItem title="Recipe database" techStack="{['MySQL', 'Java']}"
                             description={$t('projectPage.projectItems.item7.description')}
                             link="https://github.com/jonlju95/Recipe-Database"/>
            </div>
        </div>
    </div>

</section>

<style>
    .content {
        padding: 6rem 4rem;
        margin: 0 10rem;
        background-color: var(--bg);

        p {
            margin: 0 2rem;
        }
    }
</style>