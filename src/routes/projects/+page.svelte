<script lang="ts">
    import {ProjectCard} from "$lib";
    import {t} from "$lib/i18n";

    const projects = [
        {
            title: 'Radio scheduler frontend',
            techStack: ['React', 'TypeScript', 'HTML/CSS'],
            descriptionKey: 'projects_items_item8_description',
            link: 'https://github.com/jonlju95/radio_scheduler_frontend'
        }, {
            title: 'Radio scheduler',
            techStack: ['C#/.NET', 'EF Core', 'SQLite'],
            descriptionKey: 'projects_items_item9_description',
            link: 'https://github.com/jonlju95/radio_scheduler'
        }, {
            title: 'Sokoban game',
            techStack: ['React', 'JavaScript'],
            descriptionKey: 'projects_items_item10_description',
            link: 'https://github.com/jonlju95/sokoban-game'
        }, {
            title: 'Portfolio website',
            techStack: ['SvelteKit', 'TypeScript', 'HTML/CSS'],
            descriptionKey: 'projects_items_item1_description',
            link: 'https://github.com/jonlju95/portfolio'
        }, {
            title: 'Personal economy',
            techStack: ['Svelte', 'TypeScript', 'HTML/CSS'],
            descriptionKey: 'projects_items_item2_description',
            link: 'https://github.com/jonlju95/personalEconomyApp'
        }, {
            title: 'Customer Product Website',
            techStack: ['Java', 'HTML', 'CSS'],
            descriptionKey: 'projects_items_item3_description',
            link: 'https://github.com/jonlju95/Personal_Project_Customer_Product_Website'
        }, {
            title: 'Rock, Paper, Scissors',
            techStack: ['JavaScript', 'HTML', 'CSS', 'React'],
            descriptionKey: 'projects_items_item4_description',
            link: 'https://github.com/jonlju95/Rock-Paper-Scissors'
        }, {
            title: 'Connect Four',
            techStack: ['Java', 'JUnit'],
            descriptionKey: 'projects_items_item5_description',
            link: 'https://github.com/jonlju95/Four-in-a-row'
        }, {
            title: 'Library app',
            techStack: ['Java', 'MongoDB', 'Postman'],
            descriptionKey: 'projects_items_item6_description',
            link: 'https://github.com/jonlju95/Library-App'
        }, {
            title: 'Recipe database',
            techStack: ['MySQL', 'Java'],
            descriptionKey: 'projects_items_item7_description',
            link: 'https://github.com/jonlju95/Recipe-Database'
        }
    ];
</script>

<section class="section bg-base">
    <div class="container">
        <div class="stack pb-m" data-gap="sm">
            <h2>{t('projects_title')}</h2>
            <p class="text-muted">{t('projects_subtitle')}</p>
        </div>
        <div class="grid mt-lg gap-l">
            {#each projects as project}
                <ProjectCard
                        title={project.title}
                        techStack={project.techStack}
                        description={t(project.descriptionKey)}
                        link={project.link}
                />
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
  section {
    position: relative;
    max-width: 100%;
    padding: var(--space-2xl) 0;

    @media (max-width: 767px) {
      padding: var(--space-3xl) 0;
    }
  }
</style>