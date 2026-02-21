import { resolve } from '$app/paths';

export interface NavLink {
    href: string;
    labelKey: string; // i18n key
}

export const navLinks: NavLink[] = [
    { href: resolve('/'), labelKey: 'navbar.home'},
    { href: resolve('/about'), labelKey: 'navbar.about' },
    { href: resolve('/projects'), labelKey: 'navbar.projects' },
]