<script lang="ts">

    import {ProjectItem} from "$lib";
</script>

<section class="projectContainer">
    <h2>Projects</h2>
    <p>Past projects I've done as part of an education or to keep up with my skills. Most of the older repos contain a readme with the project's intended functionality etc.</p>
    <div class="projectContent">
        <ProjectItem title="Portfolio website" techStack="{['SvelteKit', 'TypeScript', 'HTML/CSS']}"
                     description="Sourcecode for this website project. Remade from a similar project I made in 2024 which used Angular instead."
                     link="https://github.com/jonlju95/portfolio"/>
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
        <ProjectItem title="Connect Four" techStack="{['Java', 'JUnit']}"
                     description="Game created with a focus on testing, as it was developed in a unit testing-oriented course."
                     link="https://github.com/jonlju95/Four-in-a-row"/>
        <ProjectItem title="Library app" techStack="{['Java', 'MongoDB', 'Postman']}"
                     description="Library manager with login and connection to MongoDB. Made as part of my education and was tested with Postman."
                     link="https://github.com/jonlju95/Library-App"/>
        <ProjectItem title="Recipe database" techStack="{['MySQL', 'Java']}"
                     description="Part of my education, focusing on database design and setting up simple CRUD-operations."
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
    }
</style>