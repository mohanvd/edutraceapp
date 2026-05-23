'use client';

import { useState, useEffect, useRef } from 'react';

interface UseScrollVisibilityOptions {
    threshold?: number;
    enabled?: boolean;
}

/**
 * useScrollVisibility
 * ─────────────────────────────────────────────────────────────────
 * Tracks whether the page has scrolled past a threshold.
 * Used by Navbar to switch from transparent → opaque on the landing page.
 *
 * Implements rAF-throttled scroll listener for 60fps performance.
 */
export function useScrollVisibility({
    threshold = 50,
    enabled = true,
}: UseScrollVisibilityOptions = {}): boolean {
    const [scrolled, setScrolled] = useState(false);
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        if (!enabled) {
            setScrolled(false);
            return;
        }

        const handleScroll = () => {
            if (rafId.current !== null) return;
            rafId.current = requestAnimationFrame(() => {
                rafId.current = null;
                setScrolled(window.scrollY > threshold);
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId.current !== null) cancelAnimationFrame(rafId.current);
        };
    }, [threshold, enabled]);

    return scrolled;
}
