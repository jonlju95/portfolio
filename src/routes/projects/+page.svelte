<script lang="ts">
    import {ProjectCard} from "$lib";
    import {t} from "$lib/i18n";

    const projects = [
        {
            title: 'Radio scheduler frontend',
            techStack: ['React', 'TypeScript', 'HTML/CSS'],
            descriptionKey: 'projects.items.item8.description',
            link: 'https://github.com/jonlju95/radio_scheduler_frontend'
        }, {
            title: 'Radio scheduler',
            techStack: ['C#/.NET', 'EF Core', 'SQLite'],
            descriptionKey: 'projects.items.item9.description',
            link: 'https://github.com/jonlju95/radio_scheduler'
        }, {
            title: 'Sokoban game',
            techStack: ['React', 'JavaScript'],
            descriptionKey: 'projects.items.item10.description',
            link: 'https://github.com/jonlju95/sokoban-game'
        }, {
            title: 'Portfolio website',
            techStack: ['SvelteKit', 'TypeScript', 'HTML/CSS'],
            descriptionKey: 'projects.items.item1.description',
            link: 'https://github.com/jonlju95/portfolio'
        }, {
            title: 'Personal economy',
            techStack: ['Svelte', 'TypeScript', 'HTML/CSS'],
            descriptionKey: 'projects.items.item2.description',
            link: 'https://github.com/jonlju95/personalEconomyApp'
        }, {
            title: 'Customer Product Website',
            techStack: ['Java', 'HTML', 'CSS'],
            descriptionKey: 'projects.items.item3.description',
            link: 'https://github.com/jonlju95/Personal_Project_Customer_Product_Website'
        }, {
            title: 'Rock, Paper, Scissors',
            techStack: ['JavaScript', 'HTML', 'CSS', 'React'],
            descriptionKey: 'projects.items.item4.description',
            link: 'https://github.com/jonlju95/Rock-Paper-Scissors'
        }, {
            title: 'Connect Four',
            techStack: ['Java', 'JUnit'],
            descriptionKey: 'projects.items.item5.description',
            link: 'https://github.com/jonlju95/Four-in-a-row'
        }, {
            title: 'Library app',
            techStack: ['Java', 'MongoDB', 'Postman'],
            descriptionKey: 'projects.items.item6.description',
            link: 'https://github.com/jonlju95/Library-App'
        }, {
            title: 'Recipe database',
            techStack: ['MySQL', 'Java'],
            descriptionKey: 'projects.items.item7.description',
            link: 'https://github.com/jonlju95/Recipe-Database'
        }
    ];
</script>

<section class="section bg-base">
    <div class="container">
        <div class="stack pb-m" data-gap="sm">
            <h2>{t('projects.title')}</h2>
            <p class="text-muted">{t('projects.subtitle')}</p>
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