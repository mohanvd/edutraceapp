'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect, useLayoutEffect, useMemo, useCallback } from 'react';
import Sidebar from './Sidebar';
import {
    grade10Semester1,
    grade10Semester2,
    grade11Semester1,
    grade11Semester2,
} from './sidebarData';
import { parseLoCode } from '@/lib/loCodeUtils';
import './Sidebar.css';

interface SidebarItem {
    title: string;
    href?: string;
    isHeader?: boolean;
    children?: SidebarItem[];
}

function containsPath(items: SidebarItem[], path: string): boolean {
    if (!items || !path) return false;
    const normalizedPath = path.toLowerCase();
    for (const item of items) {
        if (item.href?.toLowerCase() === normalizedPath) return true;
        if (item.children && containsPath(item.children, path)) return true;
    }
    return false;
}

function getSidebarItems(pathname: string | null): SidebarItem[] {
    if (!pathname) return [];

    if (pathname.startsWith('/grade10/semester1')) {
        return grade10Semester1;
    }
    if (pathname.startsWith('/grade10/semester2')) {
        return grade10Semester2;
    }
    if (pathname.startsWith('/grade11/semester1')) {
        return grade11Semester1;
    }
    if (pathname.startsWith('/grade11/semester2')) {
        return grade11Semester2;
    }

    const cleanPath = pathname.substring(1) || '';
    const parsed = parseLoCode(cleanPath);

    if (parsed) {
        if (parsed.grade === '10') {
            if (containsPath(grade10Semester1, pathname)) return grade10Semester1;
            if (containsPath(grade10Semester2, pathname)) return grade10Semester2;
        } else if (parsed.grade === '11') {
            if (containsPath(grade11Semester1, pathname)) return grade11Semester1;
            if (containsPath(grade11Semester2, pathname)) return grade11Semester2;
        }
    }

    return [];
}

export default function SidebarWrapper() {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const sidebarItems = useMemo(() => getSidebarItems(pathname), [pathname]);
    const hasSidebar = sidebarItems.length > 0;

    const toggleCollapse = useCallback(() => {
        setIsCollapsed(prev => !prev);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
                e.preventDefault();
                toggleCollapse();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [toggleCollapse]);

    useLayoutEffect(() => {
        document.body.style.setProperty('--sidebar-width', '0px');
        document.body.classList.add('sidebar-collapsed');

        if (hasSidebar && !isCollapsed) {
            document.body.style.setProperty('--sidebar-width', '240px');
            document.body.classList.remove('sidebar-collapsed');
        }

        return () => {
            document.body.style.setProperty('--sidebar-width', '0px');
            document.body.classList.remove('sidebar-collapsed');
        };
    }, [isCollapsed, hasSidebar, pathname]);

    if (!hasSidebar) {
        return null;
    }

    return (
        <>
            <button
                className="sidebar-toggleBtn"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle sidebar"
                type="button"
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M3 7h14M3 13h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </button>

            <button
                className={`sidebar-collapseBtn ${isCollapsed ? 'sidebar-collapseBtnCollapsed' : ''}`}
                onClick={toggleCollapse}
                aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                title={isCollapsed ? 'Expand sidebar (Ctrl+B)' : 'Collapse sidebar (Ctrl+B)'}
                type="button"
            >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                        d={isCollapsed ? 'M6 3L11 8L6 13' : 'M10 3L5 8L10 13'}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {sidebarOpen && (
                <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />
            )}

            <div
                className={`sidebar-container ${sidebarOpen ? 'sidebar-containerOpen' : ''} ${isCollapsed ? 'sidebar-containerCollapsed' : ''}`}
            >
                <Sidebar
                    key={pathname}
                    items={sidebarItems}
                    onLinkClick={() => setSidebarOpen(false)}
                />
            </div>
        </>
    );
}
