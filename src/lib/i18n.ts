import * as en from '$lib/paraglide/messages/en.js';
import * as se from '$lib/paraglide/messages/se.js';
import { getLocale } from '$lib/paraglide/runtime';

const messages = { en, se };

export const t = (key: string) => {
    const locale = getLocale() as 'en' | 'se';
    const m = messages[locale] ?? messages.en;
    return (m as unknown as Record<string, () => string>)[key]?.() ?? key;
};