<script lang="ts">
import Icon from "@iconify/svelte";
</script>

<footer class="footer border-accent-top bg-base">
    <section class="container flex justify-between">
        <div class="flex flex-col">
            <h4>{new Date(Date.now()).getFullYear()}</h4>
            <p>Made with SvelteKit, design by me</p>
        </div>
        <div class="contactSection flex justify-between align-center">
            <div class="flex flex-col border-right pe-s">
                <a class="flex justify-end" href="tel:+46733950015" aria-labelledby="phone">
                    <Icon class="me-s" icon="fa7-solid:phone" width="20" height="20" />
                    (+46) 073-395 00 15
                </a>
                <a class="flex" href="mailto:jonatan.ljung@hotmail.com"
                   aria-labelledby="mail">
                    <Icon class="me-s" icon="fa7-solid:envelope" width="20" height="20" />
                    jonatan.ljung@hotmail.com
                </a>
            </div>
            <div class="flex gap-s ps-s">
                <a class="" href="https://www.linkedin.com/in/jonatan-ljung/"
                   target="_blank"
                   aria-labelledby="devicon-linkedin-plain">
                    <Icon icon="fa7-brands:linkedin" width="32" height="32" />
                </a>
                <a class="" href="https://github.com/jonlju95" target="_blank"
                   aria-labelledby="devicon-github-original">
                    <Icon icon="fa7-brands:github" width="32" height="32" />
                </a>
            </div>
        </div>
    </section>
</footer>

<style>
    footer {
        position: relative;
        width: 100%;
        height: fit-content;
        min-height: 8rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width: 576px) {
            flex-direction: column-reverse;
            align-items: start;
        }

        .contactSection {
            @media screen and (max-width: 576px) {
                width: 100%;
            }

            a {
                height: 100%;
                display: flex;
                align-items: center;
                vertical-align: center;
                color: var(--text-muted);
                text-decoration: none;
                transition: color 0.1s;

                &:hover {
                    color: var(--text-primary);
                }
            }
        }
    }
</style>