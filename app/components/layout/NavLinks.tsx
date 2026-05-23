'use client';

import Link from 'next/link';
import { gradeNavLinks } from '@/lib/data/navConfig';

interface NavLinksProps {
    isActive: (path: string) => boolean | undefined;
    onLinkClick: () => void;
    children?: React.ReactNode;
    isOpen: boolean;
}

/**
 * NavLinks
 * The center navigation area - grade links + dropdown triggers.
 * Receives `isActive` from Navbar to keep routing logic in one place.
 */
export function NavLinks({ isActive, onLinkClick, children, isOpen }: NavLinksProps) {
    return (
        <div className={`nav-links ${isOpen ? 'nav-linksOpen' : ''}`}>
            {gradeNavLinks.map(link => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-navLink ${isActive(link.href) ? 'nav-navLinkActive' : ''}`}
                    onClick={onLinkClick}
                >
                    {link.label}
                </Link>
            ))}
            {children}
        </div>
    );
}
