<script lang="ts">
    import {base} from "$app/paths";
</script>

<section class="aboutContainer">
    <h2>About</h2>
    <div class="container px-4">
        <div class="row mb-3">
            <div class="col-xl-4 d-flex flex-col">
                <span>I'm Jonatan Ljung, a web developer with roughly two years of experience in
                building modern and responsive websites. Over the past years I've worked primarily with Angular,
                TypeScripts, Java and PostgreSQL - both maintaining existing systems, but also developed new features
                from the ground up. During my time at INBooks, I gained hands-on experience in everything from UI
                development to backend integration, eventually getting responsibility to check design before release
                to make sure everything was uniform across products and pages.</span>
                <span>Im currently expanding my skills into new areas, focusing on C# and Flutter
                to broaden my capabilities across platforms and tech stacks. I've also started working more actively with
                Docker and backend architecture, aiming to strengthen my fullstack profile.</span>
            </div>

            <img class="col-xl-4" height="400px" src="{base}/resources/images/3V6A8787.JPG" alt="Me"/>
        </div>
        <div class="row">

        </div>
        <div class="row"> <span class="col-xl-6 mb-3">Outside of work I have a strong interest in design, user experience and how
            technical decisions shape the usability of a product. I enjoy creating things that are both functional
            and maintainable, with focus on clean structure and attention to detail.</span></div>
        <div class="row">
           <span class="col-xl-6 mb-3">When I'm not coding, I spend a lot of time on personal projects, learning new
            frameworks or tools, but I also enjoy cooking, baking and being outside in nature. When I have time to
            unwind, I'm often gaming or exploring new topics just out of curiosity. One subject I keep coming back to
            is animal behaviour, with hyenas being a big area of interest.</span>
        </div>
        <div class="row">
            <span class="col-xl-6 mb-3">At the moment I live in Växjö, Småland, but I'm open to opportunities across
            southern Sweden - especially in teams that value collaboration, clear communication, continuous learning
            and the occasional friday fika. Whether the role is focused on frontend, backend or fullstack, I'm always
            looking to contribute, improve and build meaningful digital experiences.</span>
        </div>

    </div>

</section>

<style>
    .aboutContainer {
        padding: 2rem 4rem 6rem;
        margin: 4rem 10rem 0;
        background-color: var(--bg);
        min-height: calc(100vh - 12rem);

        img {
            object-fit: cover;
            object-position: -5rem 0;
        }

        span {
            margin-bottom: 2rem;
        }
    }
</style>