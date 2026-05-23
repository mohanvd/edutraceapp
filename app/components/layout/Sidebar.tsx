'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Sidebar.css';

interface SidebarItem {
    title: string;
    href?: string;
    children?: SidebarItem[];
    isHeader?: boolean;
}

interface SidebarProps {
    items: SidebarItem[];
    onLinkClick?: () => void;
}

export default function Sidebar({ items, onLinkClick }: SidebarProps) {
    const pathname = usePathname();
    const safePathname = pathname ?? '';
    const [mounted, setMounted] = useState(false);

    const getGradePath = (path: string) => {
        const match = path.match(/\/(grade\d+\/semester\d+)/);
        return match ? match[1] : path;
    };

    const currentGradePath = getGradePath(safePathname);
    const [prevGradePath, setPrevGradePath] = useState(currentGradePath);

    const getInitialOpenSections = React.useCallback(() => {
        const openSections: { [key: string]: boolean } = {};

        const findAndOpenParents = (sidebarItems: SidebarItem[], currentPath: string) => {
            for (const item of sidebarItems) {
                if (item.children) {

                    const hasActiveChild = item.children.some(child =>
                        child.href === currentPath ||
                        (child.children && findAndOpenParents([child], currentPath))
                    );

                    if (hasActiveChild) {
                        openSections[item.title] = true;
                        findAndOpenParents(item.children, currentPath);
                    }
                }
            }
            return Object.keys(openSections).length > 0;
        };

        findAndOpenParents(items, safePathname);
        return openSections;
    }, [items, safePathname]);

    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(() => getInitialOpenSections());

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const currentGrade = safePathname.match(/grade\d+/)?.[0];
        const prevGrade = prevGradePath.match(/grade\d+/)?.[0];
        const currentSemester = safePathname.match(/semester\d+/)?.[0];
        const prevSemester = prevGradePath.match(/semester\d+/)?.[0];

        if (currentGrade !== prevGrade || currentSemester !== prevSemester) {
            setOpenSections(getInitialOpenSections());
        } else {

            setOpenSections(prev => ({
                ...prev,
                ...getInitialOpenSections()
            }));
        }

        if (currentGradePath !== prevGradePath) {
            setPrevGradePath(currentGradePath);
        }
    }, [safePathname, currentGradePath, prevGradePath, items, getInitialOpenSections]);

    const toggleSection = (title: string) => {
        setOpenSections(prev => {
            const newState = {
                ...prev,
                [title]: !prev[title]
            };
            return newState;
        });
    };

    const isActive = (href: string) => {
        if (!mounted) return false;
        return safePathname === href;
    };

    const renderItem = (item: SidebarItem, level: number = 0) => {
        const hasChildren = item.children && item.children.length > 0;
        const isOpen = openSections[item.title] === true; // Default closed

        if (item.isHeader) {
            return (
                <div key={item.title} className="sidebar-header" style={{ '--level': level } as any}>
                    {item.title}
                </div>
            );
        }

        if (hasChildren) {
            return (
                <div key={item.title} className="sidebar-section" style={{ '--level': level } as any}>
                    <button
                        className={`sidebar-sectionButton ${isOpen ? "sidebar-sectionButtonOpen" : ''}`}
                        onClick={() => toggleSection(item.title)}
                    >
                        <span className="sidebar-sectionTitle">{item.title}</span>
                        <svg
                            className="sidebar-arrow"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                d="M5 6L8 9L11 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="sidebar-sectionContent">
                            {item.children?.map(child => renderItem(child, level + 1))}
                        </div>
                    )}
                </div>
            );
        }

        if (item.href) {
            return (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`sidebar-link ${isActive(item.href) ? "sidebar-linkActive" : ''}`}
                    style={{ '--level': level } as any}
                    onClick={() => {

                        if (onLinkClick) {
                            onLinkClick();
                        }
                    }}
                >
                    {item.title}
                </Link>
            );
        }

        return null;
    };

    return (
        <aside className="sidebar-sidebar">
            <div className="sidebar-content">
                {items.map((item) => renderItem(item))}
            </div>
        </aside>
    );
}
