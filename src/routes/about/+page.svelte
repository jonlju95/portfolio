<script lang="ts">
    import {base} from "$app/paths";
    import {locale, t} from 'svelte-i18n';
    import {LinkButton, Timeline, type TimelineItem} from "$lib";

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

    let resumeVersion: string = "";

    $: resumeVersion = $locale === 'en' ? 'Resume.pdf' : 'CV.pdf';
</script>

<section class="aboutContainer d-flex">
    <div class="imgContainer">
        <img width="877px" height="400px" src="{base}/resources/images/me_2.webp" alt="Me"/>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h1>{$t('aboutPage.heroSection.title')}</h1>
                <p class="mt-5 mx-5">{$t('aboutPage.heroSection.description')}</p>
            </div>
        </div>
    </div>
</section>
<section class="d-flex ">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h2>{$t('aboutPage.journeySection.title')}</h2>
                <p class="d-flex flex-col mt-5 ms-lg-5">
                    <span>{$t('aboutPage.journeySection.description.span1')}</span>
                    <span class="mt-4">{$t('aboutPage.journeySection.description.span2')}</span>
                </p>
            </div>
            <div class="col-md-8">
                <Timeline {timelineItems}/>
            </div>
        </div>
    </div>
</section>
<section>
    <h2>{$t('aboutPage.skillsSection.title')}</h2>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-6 ps-5">
                <ul>
                    <li>
                        <div class="d-flex align-center">
                            <svg
                                    width="800px"
                                    height="800px"
                                    viewBox="0 0 24 24"
                                    id="brackets"
                                    xmlns="http://www.w3.org/2000/svg">
                                <path
                                        d="m 8.314287,22.999995 c -1.3570426,0 -2.4571418,-1.094377 -2.4571418,-2.444443 v -4.491054 c 0,-0.597911 0,-0.896866 -0.067891,-1.178222 C 5.7290667,14.636943 5.6297859,14.398488 5.4950608,14.17971 5.3431111,13.933066 5.1306052,13.721621 4.7056548,13.298855 L 3.4000034,12 4.7056548,10.701145 C 5.1306175,10.278378 5.3431111,10.066934 5.4950608,9.8202897 5.6297859,9.601512 5.7290667,9.3631055 5.7892544,9.1136745 5.8571452,8.8323557 5.8571452,8.5334125 5.8571452,7.9355261 V 3.444448 c 0,-1.3500294 1.1000992,-2.4444434 2.4571418,-2.4444434 m 7.371425,21.9999904 c 1.35708,0 2.457142,-1.094377 2.457142,-2.444443 v -4.491054 c 0,-0.597911 0,-0.896866 0.06794,-1.178222 0.0602,-0.249333 0.159469,-0.487788 0.29412,-0.706566 0.151974,-0.246644 0.364517,-0.458089 0.78948,-0.880855 L 20.599996,12 19.294394,10.701145 C 18.869431,10.278378 18.656888,10.066934 18.504914,9.8202897 18.370263,9.601512 18.270994,9.3631055 18.210794,9.1136745 18.142854,8.8323557 18.142854,8.5334125 18.142854,7.9355261 V 3.444448 c 0,-1.3500294 -1.100062,-2.4444434 -2.457142,-2.4444434"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill="none"
                                        id="path1"/>
                            </svg>
                            <h5 class="ms-2 font-bold">{$t('aboutPage.skillsSection.bulletPoint1')}</h5>
                        </div>
                    </li>
                    <li class="mt-4">
                        <div class="d-flex align-center">
                            <svg
                                    width="800px"
                                    height="800px"
                                    viewBox="0 0 24 24"
                                    id="paintbrush"
                                    xmlns="http://www.w3.org/2000/svg">
                                <path
                                        d="m 11.751318,10.612755 9.820474,-8.3209619 c 0.345599,-0.2928662 0.857767,-0.2716004 1.178098,0.048894 0.320218,0.3205286 0.341408,0.8332655 0.04884,1.179245 l -8.313204,9.8295829 m -2.734205,-2.73676 -2.4992529,2.117615 c -0.9876789,0.836906 -1.0499775,2.339912 -0.1349539,3.255757 0.9150468,0.915844 2.4166488,0.853578 3.2526608,-0.13508 l 2.115751,-2.501532 m -2.734205,-2.73676 2.734205,2.73676 m -4.381413,5.153228 c 0,2.035727 -1.6487147,3.686062 -3.6825752,3.686062 H 1.2207224 L 1.4590162,22.069491 C 2.6329111,21.481989 3.2181306,20.13754 2.8486334,18.876907 2.7758648,18.62875 2.7322399,18.370499 2.7592307,18.113268 c 0.1943517,-1.852671 1.7598622,-3.296587 3.6623041,-3.296587 2.0338605,0 3.6825752,1.650222 3.6825752,3.686062 z"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill="none"
                                        id="path1"/>
                            </svg>
                            <h5 class="ms-2 font-bold">{$t('aboutPage.skillsSection.bulletPoint2')}</h5>
                        </div>
                    </li>
                    <li class="mt-4">
                        <div class="d-flex align-center">
                            <svg
                                    width="800px"
                                    height="800px"
                                    viewBox="0 0 24 24"
                                    id="ruler"
                                    xmlns="http://www.w3.org/2000/svg">
                                <path
                                        d="m 4.3845943,14.540958 1.6923199,1.692296 M 7.7692221,11.156247 9.46153,12.848662 m 1.69232,-5.0769956 1.692296,1.6923199 m 1.692296,-5.076936 1.692296,1.692308 M 0.99997856,17.92555 6.0769142,23.002439 23.000041,6.0793583 17.923153,1.0024223 Z"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill="none"
                                        id="path1"/>
                            </svg>
                            <h5 class="ms-2 font-bold">{$t('aboutPage.skillsSection.bulletPoint3')}</h5>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-lg-6 pe-5 mt-5 mt-lg-0 d-flex align-center">
                <p>{$t('aboutPage.skillsSection.description')}</p>
            </div>
        </div>
    </div>
</section>
<section>
    <h2>{$t('aboutPage.personalSection.title')}</h2>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6 ps-lg-5 pt-md-4">
                <p>{$t('aboutPage.personalSection.description')}</p>
            </div>
            <div class="col-md-6 pe-5 mt-5 mt-md-0 d-flex align-center justify-end">
                <div class="funFactCard">
                    <h3 class="textPrimary text-bold">{$t('aboutPage.personalSection.funFacts.title')}</h3>
                    <ul>
                        <li class="mt-3">
                            <h5>{$t('aboutPage.personalSection.funFacts.subtitle1')}</h5>
                        </li>
                        <li class="ms-3">
                            <p>{$t('aboutPage.personalSection.funFacts.description1')}</p>
                        </li>
                        <li class="mt-3">
                            <h5>{$t('aboutPage.personalSection.funFacts.subtitle2')}</h5>
                        </li>
                        <li class="ms-3">
                            <p>{$t('aboutPage.personalSection.funFacts.description2')}</p>
                        </li>
                        <li class="mt-3">
                            <h5>{$t('aboutPage.personalSection.funFacts.subtitle3')}</h5>
                        </li>
                        <li class="ms-3">
                            <p>{$t('aboutPage.personalSection.funFacts.description3')}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<section>
    <h2>{$t('aboutPage.futureSection.title')}</h2>
    <div class="container d-flex align-center justify-end relative">
        <img class="swedenImg" width="373.24px" height="373.24px" src="{base}/resources/images/sweden_silhouette.webp"
             alt="Silhouette of Sweden"/>
        <div class="row futureSection px-5 mt-5">
            <p class="col-md-6">{$t('aboutPage.futureSection.description')}</p></div>
    </div>
</section>
<section>
    <h2 class="textCenter">{$t('aboutPage.contactSection.title')}</h2>
    <p class="mt-5 textCenter">{$t('aboutPage.contactSection.description')}</p>
    <div class="w-100 d-flex align-center justify-center mt-5 relative callToAction">
        <LinkButton buttonProps="btnPrimary me-5" btnLabel="{$t('aboutPage.contactSection.button1')}"
                    link="mailto:jonatan.ljung@hotmail.com"/>
        <LinkButton buttonProps="btnSecondary outline" btnLabel="{$t('aboutPage.contactSection.button2')}"
                    link="{base}/resources/resume/{resumeVersion}" download="{true}"/>
    </div>
</section>

<style lang="scss">
  section {
    background-image: var(--background-img);

    position: relative;
    max-width: 100%;

    padding: 4rem 9rem 6rem;

    @media screen and (max-width: 767px) {
      padding: 3rem 1rem 5rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1200px) {
      padding: 3rem 2rem 5rem;
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
    min-height: 90vh;

    align-items: center;

    @media screen and (max-width: 767px) {
      padding: 1.5rem 1rem 5rem;
      align-items: end;
    }

    @media screen and (min-width: 768px) and (max-width: 1200px) {
      padding: 8rem 2rem 5rem;
      align-items: center;
    }

    :last-child {
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
        mask-image: linear-gradient(75deg, transparent 45%, var(--text) 70%, var(--text) 100%);
        mask-mode: alpha;

        @media screen and (max-width: 767px) {
          width: 200%;
          height: 200%;
          object-position: 200% -5rem;
          mask-image: linear-gradient(45deg, transparent 50%, var(--text) 70%, var(--text) 100%);
        }

        @media screen and (min-width: 768px) and (max-width: 1200px) {
          width: 150%;
          height: 150%;
          object-position: -15rem -7.5rem;
          mask-image: linear-gradient(60deg, transparent 45%, var(--text) 75%, var(--text) 100%);
        }
      }
    }
  }

  ul {
    list-style: none;

    svg {
      height: 1.5rem;
      width: 1.5rem;
      color: var(--primary);
    }
  }

  .funFactCard {
    width: 100%;
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
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
  }

  .callToAction {
    z-index: 1;
  }
</style>