<script lang="ts">
    let {title, subtitle, description, icon}: {
        title: string,
        subtitle: string,
        description: string,
        icon?: string
    } = $props();
</script>

<div class="resumeItem">
    <h4>{title}</h4>
    {#if icon === "job"}
        <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                xmlns="http://www.w3.org/2000/svg">
            <path
                    id="portfolio"
                    stroke="currentColor"
                    style="display:inline;stroke-width:0.75"
                    d="m 2.5147246,17.560359 c -0.5912932,0 -1.084959,-0.164921 -1.4810102,-0.494843 C 0.63766508,16.735593 0.43963997,16.324294 0.43963997,15.831698 V 5.3784409 c 0,-0.4925723 0.19802511,-0.9038316 0.59407443,-1.233762 0.3960512,-0.3299303 0.889717,-0.4948995 1.4810102,-0.4948995 h 5.631822 V 2.168034 c 0,-0.4924036 0.1980291,-0.9035667 0.5940774,-1.23349698 0.3960482,-0.32993115 0.8897142,-0.49489719 1.481007,-0.49489719 h 3.556738 c 0.591312,0 1.08494,0.16496604 1.480978,0.49489719 0.396039,0.32993028 0.594106,0.74109338 0.594106,1.23349698 v 1.4817454 h 5.631823 c 0.591312,0 1.084939,0.1649692 1.480978,0.4948995 0.396038,0.3299304 0.594106,0.7411897 0.594106,1.233762 V 15.831698 c 0,0.492596 -0.198068,0.903895 -0.594106,1.233818 -0.396039,0.329923 -0.889666,0.494844 -1.480978,0.494844 z M 9.4310279,3.6497794 H 14.569001 V 2.168034 c 0,-0.164608 -0.08237,-0.3154847 -0.247006,-0.45263 C 14.157356,1.5782588 13.976148,1.5096901 13.778369,1.5096901 h -3.556738 c -0.197807,0 -0.3790254,0.068569 -0.5436546,0.2057139 -0.1646291,0.1371453 -0.2469485,0.288022 -0.2469485,0.45263 z m -1.2844813,0 h 1.2844813 z m 6.4224544,0 h 1.284452 z"/>
        </svg>
    {:else if icon === "education"}
        <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                xmlns="http://www.w3.org/2000/svg">
            <path
                    id="school"
                    stroke="currentColor"
                    style="stroke-width:0.75;stroke-linejoin:round"
                    d="M 23.360513,13.594881 V 6.9807408 Z m -0.637342,-0.064 V 6.9167408 Z m -0.680468,0 V 6.9167408 Z m -0.520222,-6.3545702 2.116113,-1.05584 z m -2.116111,1.05583 -2.116113,1.00783 z m -14.8127856,0 2.1161122,1.00783 z m 7.4063926,9.4064602 -7.4063926,-3.6474 V 8.2321408 l -4.23222448,-2.11167 11.63861708,-5.75907 11.638617,5.75907 V 13.799231 H 21.522481 V 7.1763108 l -2.116111,1.05583 v 5.7590602 z m 5.29028,-8.3986302 -5.29028,2.6395702 -5.2902804,-2.6395702 5.2902804,2.6395702 z"/>
        </svg>
    {/if}
    <p class="dateText">{subtitle}</p>
    <p>{description}</p>
</div>

<style>
    .resumeItem {
        border: 1px solid var(--border-muted);
        border-top: var(--highlight);
        border-radius: 12px;
        box-shadow: var(--shadow);
        padding: 2rem;
        background: var(--gradient);
        position: relative;
    }

    .dateText {
        font-style: italic;
        color: var(--text);
        margin-bottom: 1rem;
    }

    svg {
        position: absolute;
        top: 1rem;
        right: 1.5rem;
        width: 2rem;
        height: 2rem;

        path {
            fill: var(--text-muted);
            stroke: var(--text);
        }
    }
</style>