<script lang="ts">
    import {ResumeItem} from "$lib";

    import {t} from 'svelte-i18n';
</script>

<div class="timeline animatedElement">
    <div class="timelineContainer left">
        <ResumeItem
                title={$t('homePage.experienceSection.resumeItems.item1.title')}
                subtitle={$t('homePage.experienceSection.resumeItems.item1.subtitle')}
                description={$t('homePage.experienceSection.resumeItems.item1.description')}
                icon="education"/>
    </div>
    <div class="timelineContainer right">
        <ResumeItem
                title={$t('homePage.experienceSection.resumeItems.item2.title')}
                subtitle={$t('homePage.experienceSection.resumeItems.item2.subtitle')}
                description={$t('homePage.experienceSection.resumeItems.item2.description')}
                icon="job"/>
    </div>
    <div class="timelineContainer left">
        <ResumeItem
                title={$t('homePage.experienceSection.resumeItems.item3.title')}
                subtitle={$t('homePage.experienceSection.resumeItems.item3.subtitle')}
                description={$t('homePage.experienceSection.resumeItems.item3.description')}
                icon="job"/>
    </div>
    <div class="timelineContainer right">
        <ResumeItem
                title={$t('homePage.experienceSection.resumeItems.item4.title')}
                subtitle={$t('homePage.experienceSection.resumeItems.item4.subtitle')}
                description={$t('homePage.experienceSection.resumeItems.item4.description')}
                icon="job"/>
    </div>
    <div class="timelineContainer left">
        <ResumeItem
                title={$t('homePage.experienceSection.resumeItems.item5.title')}
                subtitle={$t('homePage.experienceSection.resumeItems.item5.subtitle')}
                description={$t('homePage.experienceSection.resumeItems.item5.description')}
                icon="education"/>
    </div>
    <div class="timelineContainer right">
        <ResumeItem
                title={$t('homePage.experienceSection.resumeItems.item6.title')}
                subtitle={$t('homePage.experienceSection.resumeItems.item6.subtitle')}
                description={$t('homePage.experienceSection.resumeItems.item6.description')}
                icon="education"/>
    </div>
    <div class="timelineContainer left">
        <ResumeItem
                title={$t('homePage.experienceSection.resumeItems.item7.title')}
                subtitle={$t('homePage.experienceSection.resumeItems.item7.subtitle')}
                description={$t('homePage.experienceSection.resumeItems.item7.description')}
                icon="education"/>
    </div>
    <div class="timelineContainer right">
        <ResumeItem
                title={$t('homePage.experienceSection.resumeItems.item8.title')}
                subtitle={$t('homePage.experienceSection.resumeItems.item8.subtitle')}
                description={$t('homePage.experienceSection.resumeItems.item8.description')}
                icon="job"/>
    </div>
    <div class="timelineContainer left">
        <ResumeItem
                title={$t('homePage.experienceSection.resumeItems.item9.title')}
                subtitle={$t('homePage.experienceSection.resumeItems.item9.subtitle')}
                description={$t('homePage.experienceSection.resumeItems.item9.description')}
                icon="education"/>
    </div>
</div>

<style>
    .timeline {
        position: relative;
        width: 100%;
        margin: 8rem auto 0;
    }

    .timeline::after {
        content: '';
        position: absolute;
        top: -6rem;
        bottom: 0;
        left: 50%;
        width: 3px;
        margin-left: -3px;
        background-color: var(--secondary);
        border-radius: 3px;
    }

    /* Container around content */
    .timelineContainer {
        padding: 10px 40px;
        position: relative;
        background-color: inherit;
        width: 50%;
        margin-top: -6rem;
    }

    /* The circles on the timeline */
    .timelineContainer::after {
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        right: -8px;
        background-color: var(--bg);
        border: 2px solid var(--primary);
        top: 22px;
        border-radius: 50%;
        z-index: 1;
    }

    /* Place the container to the left */
    .left {
        left: 0;
    }

    /* Place the container to the right */
    .right {
        left: 50%;
    }

    /* Add arrows to the left container (pointing right) */
    .left::before {
        content: ' ';
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        right: 31px;
        border-style: solid;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent var(--bg);
    }

    /* Add arrows to the right container (pointing left) */
    .right::before {
        content: ' ';
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        left: 31px;
        border-style: solid;
        border-width: 10px 10px 10px 0;
        border-color: transparent var(--bg) transparent transparent;
    }

    /* Fix the circle for containers on the right side */
    .right::after {
        left: -11px;
    }
</style>