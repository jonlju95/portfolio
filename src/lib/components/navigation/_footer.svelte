<script lang="ts">
    import {t} from 'svelte-i18n';
</script>

<footer class="footer px-4 py-3">
    <section class="d-flex flex-col justify-between pt-1">
        <h3>2025</h3>
        <p>{$t('footer.credits')}</p>
    </section>
    <section class="contactSection d-flex justify-between align-center">
        <a class="w-fit d-flex flex-col items-center" href="tel:+46733950015" aria-labelledby="phone">
            <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    id="phone"
                    xmlns="http://www.w3.org/2000/svg">
                <path
                        d="m 1.0015158,4.055744 c 0,10.462712 8.4804066,18.944446 18.9415082,18.944446 0.471949,0 0.939866,-0.01723 1.40326,-0.05121 0.531707,-0.03899 0.797499,-0.05842 1.039584,-0.197755 0.200413,-0.115378 0.390439,-0.319978 0.49089,-0.528367 0.121348,-0.251533 0.121348,-0.544989 0.121348,-1.131778 v -3.443367 c 0,-0.493533 0,-0.7403 -0.08126,-0.951744 -0.07162,-0.18688 -0.188198,-0.353224 -0.339241,-0.484491 C 22.406642,16.062856 22.1747,15.978522 21.711061,15.809856 L 17.792246,14.384622 C 17.252719,14.188456 16.982894,14.090311 16.727,14.106933 c -0.225709,0.01467 -0.442864,0.09179 -0.627391,0.222567 -0.209212,0.148256 -0.356834,0.394411 -0.652199,0.886845 l -1.003533,1.672733 C 11.205612,15.422289 8.580441,12.793289 7.1116798,9.5557443 L 8.7841906,8.5520798 C 9.2764498,8.2566809 9.5225794,8.1089753 9.6708609,7.8997064 9.8016184,7.7151753 9.8787287,7.4979742 9.8933931,7.2722664 9.9100127,7.0162964 9.8118835,6.746503 9.6157472,6.2069163 L 8.1907225,2.2874449 C 8.0220942,1.8236727 7.9377862,1.5917805 7.7891992,1.4207549 7.6579407,1.269676 7.4915976,1.1531493 7.3047854,1.0814049 7.0933004,1.0001882 6.8465964,1.0001882 6.3531885,1.0001882 H 2.9103433 c -0.5867347,0 -0.8801081,0 -1.1316391,0.1213056 C 1.5703721,1.2219727 1.3658527,1.4120893 1.2504439,1.6125582 1.1111077,1.8546071 1.0916407,2.1205016 1.0527068,2.6523027 1.0187831,3.1156839 1.0015158,3.5836973 1.0015158,4.055744 Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        id="path1"/>
            </svg>
            {$t('footer.phone')}
        </a>
        <a class="w-fit d-flex flex-col items-center" href="mailto:jonatan.ljung@hotmail.com"
           aria-labelledby="mail">
            <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    id="mail"
                    xmlns="http://www.w3.org/2000/svg">
                <path
                        d="m 1.0023351,7.0867285 6.6595995,4.4628475 c 1.5678149,1.05058 2.3517654,1.575932 3.1989524,1.780078 0.748818,0.180317 1.529408,0.180317 2.278227,0 0.847187,-0.204146 1.631198,-0.729498 3.198976,-1.780078 L 22.997665,7.0867285 M 4.9126161,20.598225 H 19.087385 c 1.36872,0 2.053141,0 2.575897,-0.267773 0.459825,-0.235468 0.833745,-0.611334 1.067996,-1.07355 0.266387,-0.525474 0.266387,-1.213455 0.266387,-2.589294 V 7.3323921 c 0,-1.3758389 0,-2.0637706 -0.266387,-2.5892696 C 22.497027,4.2808696 22.123107,3.9050535 21.663282,3.6695358 21.140526,3.4017748 20.456105,3.4017748 19.087385,3.4017748 H 4.9126161 c -1.3687206,0 -2.0530931,0 -2.5758732,0.267761 C 1.8768817,3.9050535 1.5030099,4.2808696 1.2687108,4.7431225 1.0023351,5.2686215 1.0023351,5.9565409 1.0023351,7.3323921 v 9.3352159 c 0,1.375839 0,2.06382 0.2663757,2.589294 0.2342991,0.462216 0.6081709,0.838082 1.0680321,1.07355 0.5227801,0.267773 1.2071404,0.267773 2.5758732,0.267773 z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        id="path1"/>
            </svg>
            Mail
        </a>
        <a class="w-fit d-flex flex-col items-center" href="https://www.linkedin.com/in/jonatan-ljung/"
           target="_blank"
           aria-labelledby="devicon-linkedin-plain">
            <i class="devicon-linkedin-plain"></i>
            LinkedIn
        </a>
        <a class="w-fit d-flex flex-col items-center" href="https://github.com/jonlju95" target="_blank"
           aria-labelledby="devicon-github-original">
            <i class="devicon-github-original"></i>
            Github
        </a>
    </section>
</footer>

<style>
    footer {
        position: relative;
        width: 100%;
        height: fit-content;
        min-height: 8rem;

        background-color: var(--bg-bright);
        color: var(--text);
        border-top: 1px solid var(--highlight);

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
                min-width: 60px;
                height: 100%;
                display: flex;
                align-items: center;
                vertical-align: center;
                color: var(--text-muted);

                text-decoration: none;

                svg {
                    color: var(--text-muted);
                    fill: none;
                    height: 1.5rem;
                    width: 100%;
                    max-width: 1.5rem;
                }

                i {
                    font-size: 1.5rem;
                }
            }
        }
    }
</style>