'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { NavLogo } from './NavLogo';
import { NavLinks } from './NavLinks';
import { NavSearch, MobileSearchOverlay } from './NavSearch';
import { MobileMenu } from './MobileMenu';
import { useNavSearch } from '@/lib/hooks/useNavSearch';
import { SearchIcon, MenuIcon, CloseIcon } from '../ui/Icons';
import './Navbar.css';

export default function Navbar() {
    const pathname = usePathname() ?? '';
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
    const search = useNavSearch();

    useEffect(() => {
        setMobileMenuOpen(false);
        setMobileSearchOpen(false);
    }, [pathname]);

    const getGradeFromLoCode = (path: string): { grade: string; semester: string } | null => {
        const match = path.match(/^\/([A-Z]{2})\.([1-2])\.(\d+)$/i);
        if (!match) return null;
        const gradeMap: Record<string, string> = { '1': '10', '2': '11' };
        const grade = gradeMap[match[2]];
        if (!grade) return null;
        return { grade, semester: parseInt(match[3], 10) <= 7 ? '1' : '2' };
    };

    const isActive = (path: string): boolean => {
        if (path === '/') return pathname === '/';
        const loInfo = getGradeFromLoCode(pathname ?? '');
        if (loInfo && path === `/grade${loInfo.grade}/semester${loInfo.semester}`) return true;
        return pathname.startsWith(path);
    };

    return (
        <nav className="nav-navbar nav-navbarScrolled">
            <div className="nav-container">
                <div className="nav-content">
                    <div className="nav-left">
                        <NavLogo href="/" />
                    </div>

                    <NavLinks
                        isActive={isActive}
                        onLinkClick={() => setMobileMenuOpen(false)}
                        isOpen={mobileMenuOpen}
                    >
                        {null}
                    </NavLinks>

                    <div className="nav-right">
                        <NavSearch
                            query={search.query}
                            onQueryChange={search.setQuery}
                            results={search.results}
                            isOpen={search.isOpen}
                            isLoading={search.isLoading}
                            onClose={search.close}
                            onResultClick={search.handleResultClick}
                            searchRef={search.searchRef}
                            inputRef={search.inputRef}
                        />

                        <button
                            className="nav-mobileSearchBtn"
                            onClick={() => setMobileSearchOpen(true)}
                            aria-label="Search"
                            type="button"
                        >
                            <SearchIcon size={20} />
                        </button>

                        <button
                            className="nav-mobileMenuBtn"
                            onClick={() => setMobileMenuOpen(prev => !prev)}
                            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileMenuOpen}
                            type="button"
                        >
                            {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {mobileSearchOpen && (
                <MobileSearchOverlay
                    query={search.query}
                    onQueryChange={search.setQuery}
                    results={search.results}
                    isLoading={search.isLoading}
                    onClose={() => {
                        setMobileSearchOpen(false);
                        search.setQuery('');
                    }}
                    onResultClick={result => {
                        search.handleResultClick(result);
                        setMobileSearchOpen(false);
                    }}
                    inputRef={search.inputRef}
                />
            )}

            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                onInstallClick={() => {}}
                onSearchOpen={() => {
                    setMobileMenuOpen(false);
                    setMobileSearchOpen(true);
                }}
                isActive={isActive}
            />
        </nav>
    );
}
