import {getLocaleFromNavigator, init, register} from 'svelte-i18n';

register('en', () => import('./translations/en.json'));
register('sv', () => import('./translations/se.json'));

export function setupI18n(initialLocale?: string) {
    init({
        fallbackLocale: 'en',
        initialLocale: initialLocale || getLocaleFromNavigator(),
    });
}
