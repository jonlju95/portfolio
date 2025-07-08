<script lang="ts">
</script>

<section class="heroSection animated-element">
    <div class="imgContainer">
        <img src="/assets/images/3V6A4207_cropped.png" alt="Me"/>
    </div>
    <div class="infoContainer">
        <div class="header">
            <h1>Jonatan Ljung</h1>
            <p>Web developer</p>
        </div>
        <p class="introduction">Introduction</p>
    </div>

</section>

<style>
    .heroSection {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: calc(100vh - 10rem);
        margin: 0 10rem;
        padding: 4rem;

        background-color: var(--bg-light);
        border: 1px solid var(--border-muted);
        border-top: 1px solid var(--highlight);
        border-radius: 1rem;

        box-shadow: var(--shadow);

        overflow: hidden;

        .infoContainer {
            width: 100%;
            height: 100%;
            margin-left: var(--spacing-xxl);
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            align-items: baseline;

            .header {
                margin-bottom: var(--spacing-xxl);
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: end;

                h1 {
                    color: var(--primary);
                }

                p {
                    font-style: italic;
                    font-weight: bold;
                    color: var(--text-muted);
                }
            }

            .introduction {
                height: 100%;
            }
        }

        .imgContainer {
            width: 100%;
            height: 100%;
            overflow: hidden;

            display: flex;
            justify-content: center;

            img {
                border-radius: 12px;
                border: 2px solid var(--border-muted);
            }
        }

    }
</style>