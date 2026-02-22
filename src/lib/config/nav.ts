import { resolve } from '$app/paths';

export interface NavLink {
    href: string;
    labelKey: string; // i18n key
}

export const navLinks: NavLink[] = [
    { href: resolve('/'), labelKey: 'nav.home'},
    { href: resolve('/about'), labelKey: 'nav.about' },
    { href: resolve('/projects'), labelKey: 'nav.projects' },
]