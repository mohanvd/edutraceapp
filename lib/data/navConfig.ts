/**
 * Navigation configuration for the curriculum-only app.
 */

export interface NavItem {
    href: string;
    title: string;
    description: string;
    iconPaths: string[];
}

export const learnNavItems: NavItem[] = [];
export const toolsNavItems: NavItem[] = [];
export const moreNavItems: NavItem[] = [];

export const gradeNavLinks = [
    { href: '/grade10/semester1', label: 'Grade 10 S1' },
    { href: '/grade10/semester2', label: 'Grade 10 S2' },
    { href: '/grade11/semester1', label: 'Grade 11 S1' },
    { href: '/grade11/semester2', label: 'Grade 11 S2' },
] as const;
