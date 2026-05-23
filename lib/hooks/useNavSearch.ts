'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { searchCurriculum } from '@/lib/search/curriculumIndex';

export interface SearchResult {
    url: string;
    title: string;
    subtitle?: string;
    type: string;
    metadata?: string;
    icon?: string;
    isImage?: boolean;
    initials?: string;
    badges?: {
        isVerified?: boolean;
        isContributor?: boolean;
        isEarlyAdopter?: boolean;
    };
}

interface UseNavSearchReturn {
    query: string;
    setQuery: (q: string) => void;
    results: SearchResult[];
    isOpen: boolean;
    isLoading: boolean;
    close: () => void;
    handleResultClick: (url: string) => void;
    searchRef: React.RefObject<HTMLDivElement | null>;
    inputRef: React.RefObject<HTMLInputElement | null>;
}

export function useNavSearch(): UseNavSearchReturn {
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const searchRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    useEffect(() => {
        if (query.length < 2) {
            setResults([]);
            setIsLoading(false);
            return;
        }

        const timer = setTimeout(() => {
            setIsLoading(true);
            const matches = searchCurriculum(query);
            setResults(matches);
            setIsOpen(true);
            setIsLoading(false);
        }, 150);

        return () => clearTimeout(timer);
    }, [query]);

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);

    const handleResultClick = useCallback(
        (url: string) => {
            router.push(url);
            setQuery('');
            setIsOpen(false);
            setResults([]);
        },
        [router]
    );

    return {
        query,
        setQuery,
        results,
        isOpen,
        isLoading,
        close,
        handleResultClick,
        searchRef,
        inputRef,
    };
}
