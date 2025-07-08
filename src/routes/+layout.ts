import { locale, waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';
import {setupI18n} from "$lib/i18n";

export const load: LayoutLoad = async () => {
    const initialLocale = 'en'; // You can also detect this from cookies, URL, etc.

    setupI18n(initialLocale);
    locale.set(initialLocale); // This must be set before waitLocale

    await waitLocale(); // Now it will wait for the right messages

    return {};
};

export const prerender = true;
