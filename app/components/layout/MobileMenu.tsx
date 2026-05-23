'use client';

import Link from 'next/link';
import { gradeNavLinks } from '@/lib/data/navConfig';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onInstallClick: () => void;
    onSearchOpen: () => void;
    isActive: (path: string) => boolean | undefined;
}

export function MobileMenu({ isOpen, onClose, isActive }: MobileMenuProps) {
    if (!isOpen) return null;

    return (
        <div className="nav-mobileDrawer" role="dialog" aria-label="Mobile menu">
            <div className="nav-mobileSection">
                <Link
                    href="/"
                    className={`nav-navLink ${isActive('/') ? 'nav-navLinkActive' : ''}`}
                    onClick={onClose}
                >
                    Home
                </Link>
                {gradeNavLinks.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`nav-navLink ${isActive(link.href) ? 'nav-navLinkActive' : ''}`}
                        onClick={onClose}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
