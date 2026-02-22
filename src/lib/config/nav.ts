import { resolve } from '$app/paths';

export interface NavLink {
    href: string;
    labelKey: string; // i18n key
    icon?: string;
}

export const navLinks: NavLink[] = [
    { href: resolve('/'), labelKey: 'nav.home', icon: "fa7-regular:home" },
    { href: resolve('/about'), labelKey: 'nav.about', icon: "fa7-regular:user" },
    { href: resolve('/projects'), labelKey: 'nav.projects', icon: "fa7-regular:folder" },
]