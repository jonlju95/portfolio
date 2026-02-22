import * as m from '$lib/paraglide/messages';

export const t = (key: string): string => {
    const fn = (m as unknown as Record<string, () => string>)[key];
    return fn?.() ?? key;
};