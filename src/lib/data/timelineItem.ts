interface TimelineItem {
    title: string;
    months: string;
    years: string;
    description: string;
    icon: string;
}

// The property values are the keys for the translation json. For actual value, see translations/en.json or
// translations/se.json
export const timelineItems: TimelineItem[] = [
    {
        title: 'homePage.experienceSection.resumeItems.item1.title',
        months: 'homePage.experienceSection.resumeItems.item1.months',
        years: '2025 - 2026',
        description: 'homePage.experienceSection.resumeItems.item1.description',
        icon: 'education'
    }, {
        title: 'homePage.experienceSection.resumeItems.item2.title',
        months: 'homePage.experienceSection.resumeItems.item2.months',
        years: '2021 - 2024',
        description: 'homePage.experienceSection.resumeItems.item2.description',
        icon: 'job'
    }, {
        title: 'homePage.experienceSection.resumeItems.item5.title',
        months: 'homePage.experienceSection.resumeItems.item5.months',
        years: '2019 - 2021',
        description: 'homePage.experienceSection.resumeItems.item5.description',
        icon: 'education'
    }, {
        title: 'homePage.experienceSection.resumeItems.item3.title',
        months: 'homePage.experienceSection.resumeItems.item3.months',
        years: '2019',
        description: 'homePage.experienceSection.resumeItems.item3.description',
        icon: 'job'
    }, {
        title: 'homePage.experienceSection.resumeItems.item4.title',
        months: 'homePage.experienceSection.resumeItems.item4.months',
        years: '2018',
        description: 'homePage.experienceSection.resumeItems.item4.description',
        icon: 'job'
    }, {
        title: 'homePage.experienceSection.resumeItems.item6.title',
        months: 'homePage.experienceSection.resumeItems.item6.months',
        years: '2018',
        description: 'homePage.experienceSection.resumeItems.item6.description',
        icon: 'education'
    }, {
        title: 'homePage.experienceSection.resumeItems.item7.title',
        months: 'homePage.experienceSection.resumeItems.item7.months',
        years: '2017 - 2018',
        description: 'homePage.experienceSection.resumeItems.item7.description',
        icon: 'education'
    }, {
        title: 'homePage.experienceSection.resumeItems.item8.title',
        months: 'homePage.experienceSection.resumeItems.item8.months',
        years: '2015 - 2018',
        description: 'homePage.experienceSection.resumeItems.item8.description',
        icon: 'job'
    }, {
        title: 'homePage.experienceSection.resumeItems.item9.title',
        months: 'homePage.experienceSection.resumeItems.item9.months',
        years: '2011 - 2014',
        description: 'homePage.experienceSection.resumeItems.item9.description',
        icon: 'education'
    },
]