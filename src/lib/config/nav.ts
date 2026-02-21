import { resolve } from '$app/paths';

export interface NavLink {
    href: string;
    labelKey: string; // i18n key
}

export const navLinks: NavLink[] = [
    { href: resolve('/'), labelKey: 'navbar_home'},
    { href: resolve('/about'), labelKey: 'navbar_about' },
    { href: resolve('/projects'), labelKey: 'navbar_projects' },
]