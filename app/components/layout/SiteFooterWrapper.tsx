'use client';

import { usePathname } from 'next/navigation';
import SiteFooter from './SiteFooter';

function shouldShowUnifiedFooter(pathname: string) {
    const p = pathname.toLowerCase();

    const excludedPrefixes = [
        '/problem',
        '/problems',
        '/dashboard',
        '/admin',
        '/notes',
        '/todos',
        '/quiz',
        '/calendar',
        '/gpa',
        '/exams',
        '/u',
        '/u/',
        '/@',
        '/embed/',
        '/grade10/',
        '/grade11/',
        '/capstone/',
        '/api/',
    ];

    if (excludedPrefixes.some(prefix => p === prefix || p.startsWith(prefix))) {
        return false;
    }

    if (
        p === '/login' ||
        p === '/signup' ||
        p.startsWith('/reset-password') ||
        p.startsWith('/verify')
    ) {
        return false;
    }

    if (/^\/[a-z]{2}\.[1-2]\.[0-9]{2}$/i.test(pathname)) {
        return false;
    }

    if (p === '/' || p === '/team' || p === '/terms' || p === '/privacy') {
        return false;
    }

    if (p === '/offline') return true;
    if (p === '/opportunities' || p.startsWith('/opportunities/')) return true;

    return false;
}

export default function SiteFooterWrapper() {
    const pathname = usePathname();

    if (!pathname) return null;
    if (!shouldShowUnifiedFooter(pathname)) return null;

    return <SiteFooter />;
}
