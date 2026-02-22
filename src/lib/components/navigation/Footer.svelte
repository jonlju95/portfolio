<script lang="ts">
    import Icon from "@iconify/svelte";
    import {t} from '$lib/i18n'
    import {footer_credits} from "$lib/paraglide/messages/se";

    let innerWidth = $state(0);
</script>

<svelte:window bind:innerWidth/>

<footer class="footer border-accent-top bg-surface">
    <section class="container flex justify-between">
        <div class="flex flex-col">
            <h4>{new Date(Date.now()).getFullYear()}</h4>
            <p class="text-small">{t('footer.credits')}</p>
        </div>
        <div class="contactSection flex justify-between align-center">
            <div class="flex flex-col border-right pe-s">
                <a class="flex justify-end" href="tel:+46733950015" aria-labelledby="phone">
                    <Icon class="me-s" icon="fa7-solid:phone" width="32" height="32"/>
                    {#if innerWidth > 767}
                        (+46) 073-395 00 15
                    {/if}
                </a>
                <a class="flex" href="mailto:jonatan.ljung@hotmail.com"
                   aria-labelledby="mail">
                    <Icon class="me-s" icon="fa7-solid:envelope" width="32" height="32"/>
                    {#if innerWidth > 767}
                        jonatan.ljung@hotmail.com
                    {/if}
                </a>
            </div>
            <div class="flex gap-s ps-s">
                <a class="" href="https://www.linkedin.com/in/jonatan-ljung/"
                   target="_blank"
                   aria-labelledby="devicon-linkedin-plain">
                    <Icon icon="fa7-brands:linkedin" width="32" height="32"/>
                </a>
                <a class="" href="https://github.com/jonlju95" target="_blank"
                   aria-labelledby="devicon-github-original">
                    <Icon icon="fa7-brands:github" width="32" height="32"/>
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
                max-width: 10rem;

                * {
                    flex-direction: row;
                }
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