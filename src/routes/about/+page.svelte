<script lang="ts">
    import {base} from "$app/paths";
    import {t} from 'svelte-i18n';
    import {Button, Timeline, type TimelineItem} from "$lib";

    // The property values are the keys for the translation json. For actual value, see translations/en.json or
    // translations/se.json
    export const timelineItems: TimelineItem[] = [
        {
            title: 'aboutPage.journeySection.resumeItems.item1.title',
            years: '2021 - 2024',
            description: 'aboutPage.journeySection.resumeItems.item1.description'
        }, {
            title: 'aboutPage.journeySection.resumeItems.item2.title',
            years: 'aboutPage.journeySection.resumeItems.item2.years',
            description: 'aboutPage.journeySection.resumeItems.item2.description'
        }, {
            title: 'aboutPage.journeySection.resumeItems.item3.title',
            years: 'aboutPage.journeySection.resumeItems.item3.years',
            description: 'aboutPage.journeySection.resumeItems.item3.description'
        }
    ]
</script>

<section class="aboutContainer d-flex align-center">
    <div class="w-50">
        <h1>{$t('aboutPage.heroSection.title')}</h1>
        <p class="mt-5 ms-5">{$t('aboutPage.heroSection.description')}</p>
    </div>
    <div class="imgContainer">
        <img width="877px" height="400px" src="{base}/resources/images/3V6A8787.JPG" alt="Me"/>
    </div>
</section>
<section class="d-flex ">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <h2>{$t('aboutPage.journeySection.title')}</h2>
                <p class="d-flex flex-col mt-5 ms-5">
                    <span>{$t('aboutPage.journeySection.description.span1')}</span>
                    <span class="mt-4">{$t('aboutPage.journeySection.description.span2')}</span>
                </p>
            </div>
            <div class="col-lg-8">
                <Timeline {timelineItems}/>
            </div>
        </div>
    </div>
</section>
<section>
    <h2>My approach to development</h2>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-6 ps-5">
                <ul>
                    <li>
                        <div class="d-flex align-center">
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
                            <h5 class="ms-2">Clean Code</h5>
                        </div>
                    </li>
                    <li class="mt-4">
                        <div class="d-flex align-center">
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
                            <h5 class="ms-2">Attention to Detail</h5>
                        </div>
                    </li>
                    <li class="mt-4">
                        <div class="d-flex align-center">
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
                            <h5 class="ms-2">User-Centric Design</h5>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-lg-6 pe-5 d-flex align-center">
                <p>I enjoy creating clean, functional, and maintainable solutions with a strong focus on user
                    experience. I believe that good design and solid technical choices go hand-in-hand, shaping how
                    users experience a product.</p>
            </div>
        </div>
    </div>
</section>
<section>
    <h2>Beyond code</h2>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-6 ps-5 pt-4">
                <p>I enjoy working on personal projects, learning new frameworks, and exploring usability. I also have a
                    strong interest in cooking, baking, gaming, and the odd fascination with animal behavior —
                    especially hyenas.</p>
            </div>
            <div class="col-lg-6 pe-5 d-flex align-center justify-end">
                <div class="funFactCard">
                    <h3 class="textPrimary text-bold">Fun facts about me</h3>
                    <ul>
                        <li class="mt-3">
                            <h5>Cooking & baking experiments</h5>
                        </li>
                        <li class="ms-2">
                            <p>I love making sourdough and trying new dishes.</p>
                        </li>
                        <li class="mt-3">
                            <h5>Cycling & nature</h5>
                        </li>
                        <li class="ms-2">
                            <p>Spending time outdoors keeps me balanced.</p>
                        </li>
                        <li class="mt-3">
                            <h5>Gaming & curiosity</h5>
                        </li>
                        <li class="ms-2">
                            <p>Always exploring new topics, from RPGs to animal behaviour.</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
</section>
<section>
    <h2>Where I'm headed</h2>
    <div class="w-100 d-flex align-center justify-end relative">
        <img class="swedenImg" width="373.24px" height="373.24px" src="{base}/resources/images/sweden.png"
             alt="Silhouette of Sweden"/>
        <div class="w-50 futureSection pe-5"><p>I’m currently living in Växjö, Småland, but I’m open to opportunities
            across southern
            Sweden. I’m drawn to teams that value collaboration, clear communication, and continuous learning - with the
            occasional friday fika, of course.</p></div>
    </div>
</section>
<section>
    <h2 class="textCenter">Contact</h2>
    <p class="mt-5 textCenter">Want to know more about my work or collaborate? I'd love to hear from you!</p>
    <div class="w-100 d-flex align-center justify-center mt-5 relative callToAction">
        <Button buttonProps="btnPrimary me-5" label="Get in touch"/>
        <Button buttonProps="btnSecondary outline" label="Download CV"/>
    </div>
</section>

<style lang="scss">
  section {
    max-width: 100%;

    padding: 4rem 9rem 6rem;

    position: relative;

    &:after {
      content: "";
      position: absolute;
      inset: 0;
      background-image: var(--background-img);
      opacity: 2%;
    }

    /* Give the sections after the first one alternating background colors */

    &:not(:first-child) {
      background-color: var(--bg-dim);
    }

    &:nth-child(even) {
      background-color: var(--bg);
    }
  }

  .aboutContainer {
    padding-top: 9rem;
    padding-bottom: 6rem;
    background-color: var(--bg);

    width: 100%;
    aspect-ratio: 1 / 0.456;

    :first-child {
      z-index: 1;
    }

    .imgContainer {
      position: absolute;
      inset: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0 10%;
        mask-image: linear-gradient(75deg, transparent 35%, var(--text) 80%, var(--text) 100%);
        mask-mode: alpha;
      }
    }
  }

  ul {
    list-style: none;
  }

  .funFactCard {
    width: fit-content;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    background-color: var(--bg-bright);
    border: 1px solid var(--border-muted);
    box-shadow: var(--shadow);

    ul {
      margin: 1rem 2rem;
      list-style: disc;
    }
  }

  .futureSection {
    min-height: calc(400px - 14rem);
  }

  .swedenImg {
    width: auto;
    height: auto;
    position: absolute;
    left: 10%;
    top: -73px;
  }

  .callToAction {
    z-index: 1;
  }
</style>