<script lang="ts">
    import {t} from 'svelte-i18n';
</script>

<footer class="footer px-5">
    <section>
        <h3>2025</h3>
        <p>{$t('footer.credits')}</p>
    </section>
    <section class="contactSection d-flex flex-col justify-center">
        <p class="p-2">
            <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    id="phone"
                    xmlns="http://www.w3.org/2000/svg">
                <g
                        id="Phone"
                        style="fill-opacity:1;stroke-width:0.75;stroke-dasharray:none"
                        transform="matrix(0.94117646,0,0,0.94117646,0.70588239,0.70588239)">
                    <path
                            id="Vector"
                            d="M 8.7564322,1.9451401 C 8.3620162,0.95907872 7.4070312,0.3125 6.3450435,0.3125 H 2.7729621 C 1.4140814,0.3125 0.3125,1.4138521 0.3125,2.7727579 0.3125,14.323476 9.676265,23.6875 21.2267,23.6875 c 1.35883,0 2.460151,-1.101741 2.460151,-2.460607 l 6.49e-4,-3.572739 c 0,-1.062133 -0.64643,-2.016873 -1.63244,-2.41139 l -3.423693,-1.368997 c -0.885628,-0.35426 -1.894101,-0.194799 -2.627017,0.415943 l -0.883551,0.736964 c -1.031846,0.85994 -2.550269,0.791503 -3.500048,-0.1583 L 9.1327073,12.378026 C 8.1828906,11.428093 8.1126906,9.9109258 8.9726405,8.8790224 L 9.7093872,7.9954723 C 10.320107,7.2626023 10.481,6.2538522 10.12675,5.3681088 Z"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            style="fill-opacity:1;stroke-width:0.75;stroke-dasharray:none"/>
                </g>
            </svg>
            <span>(+46) 073-395 00 15</span>
        </p>
        <p class="p-2">
            <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    id="email"
                    xmlns="http://www.w3.org/2000/svg">
                <g
                        id="email">
                    <rect
                            style="fill-opacity:1;fill-rule:nonzero;stroke-width:0.75;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none"
                            stroke="currentColor"
                            id="body"
                            width="22.941668"
                            height="16.94166"
                            x="0.52916664"
                            y="0.52916664"/>
                    <path
                            style="fill:none;fill-rule:evenodd;stroke-width:0.75;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none"
                            stroke="currentColor"
                            d="M 0.52916852,0.52916693 12.000003,8.3739801 23.470835,0.52916693"
                            id="flap"/>
                </g>
            </svg>
            <span>jonatan.ljung@hotmail.com</span></p>
    </section>
</footer>

<style>
    footer {
        position: relative;
        width: 100%;
        height: 8rem;

        background-color: var(--bg-bright);
        color: var(--text);
        border-top: 1px solid var(--highlight);

        display: flex;
        align-items: center;
        justify-content: space-between;

        .contactSection {
            height: 100%;
            min-width: 15rem;

            p {
                display: flex;
                align-items: center;

                svg {
                    margin-right: 1rem;
                    color: var(--text);
                    fill: none;
                    stroke-width: 1px;
                }
            }
        }
    }
</style>