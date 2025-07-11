import {locale, waitLocale} from 'svelte-i18n';
import type {LayoutLoad} from './$types';
import {setupI18n} from '$lib/i18n';
import {browser} from '$app/environment';

export const load: LayoutLoad = async () => {
    let initialLocale: string = ''; // You can also detect this from cookies, URL, etc.

    if (browser) {
        if (localStorage.getItem('lang')) {
            initialLocale = localStorage.getItem('lang') || 'en';
        }
    }

    setupI18n(initialLocale);
    locale.set(initialLocale); // This must be set before waitLocale

    await waitLocale(); // Now it will wait for the right messages

    return {};
};

export const prerender = true;
