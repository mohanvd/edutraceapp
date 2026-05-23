'use client';

import Badge from '../ui/Badge';
import { AppIcon } from '../ui/AppIcon';
import { CloseIcon } from '../ui/Icons';
import type { SearchResult } from '@/lib/hooks/useNavSearch';

interface NavSearchProps {
    query: string;
    onQueryChange: (q: string) => void;
    results: SearchResult[];
    isOpen: boolean;
    isLoading: boolean;
    onClose: () => void;
    onResultClick: (url: string) => void;
    searchRef: React.RefObject<HTMLDivElement | null>;
    inputRef: React.RefObject<HTMLInputElement | null>;
}

/**
 * NavSearch - Desktop search bar + results dropdown
 */
export function NavSearch({
    query,
    onQueryChange,
    results,
    isOpen,
    isLoading,
    onClose,
    onResultClick,
    searchRef,
    inputRef,
}: NavSearchProps) {
    const showResults =
        isOpen &&
        (results.length > 0 ||
            query.toLowerCase().includes('help') ||
            query.toLowerCase().includes('pass'));

    return (
        <div className="nav-search" ref={searchRef}>
            <div className="nav-searchWrapper">
                <svg
                    className="nav-searchIcon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                </svg>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search... ⌘K"
                    className="nav-searchInput"
                    value={query}
                    onChange={e => onQueryChange(e.target.value)}
                    onFocus={() => results.length > 0 && onClose()}
                    aria-label="Search EduTrace"
                    aria-autocomplete="list"
                />
                {isLoading && (
                    <div className="nav-searchLoading" aria-label="Searching…">
                        <div className="nav-spinner" />
                    </div>
                )}
            </div>

            {showResults && (
                <SearchResultsDropdown
                    results={results}
                    onResultClick={onResultClick}
                    onClose={onClose}
                />
            )}
        </div>
    );
}

interface SearchResultsDropdownProps {
    results: SearchResult[];
    onResultClick: (url: string) => void;
    onClose: () => void;
}

function SearchResultsDropdown({ results, onResultClick, onClose }: SearchResultsDropdownProps) {
    return (
        <div className="nav-searchResultsDropdown" role="listbox">
            <div className="nav-searchResultsHeader">
                <span>{results.length} results</span>
                <button onClick={onClose} className="nav-searchClose" aria-label="Close search">
                    <CloseIcon size={16} />
                </button>
            </div>
            <div className="nav-searchResultsList">
                {results.length === 0 ? (
                    <div
                        className="nav-searchResultItem"
                        style={{
                            justifyContent: 'center',
                            padding: '2rem 1rem',
                            color: 'var(--color-text-secondary)',
                            cursor: 'default',
                        }}
                    >
                        We provide notes, not miracles. ðŸª„
                    </div>
                ) : (
                    results.map((result, index) => (
                        <SearchResultItem
                            key={index}
                            result={result}
                            onClick={() => onResultClick(result.url)}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

interface SearchResultItemProps {
    result: SearchResult;
    onClick: () => void;
}

function SearchResultItem({ result, onClick }: SearchResultItemProps) {
    return (
        <div className="nav-searchResultItem" onClick={onClick} role="option" aria-selected={false}>
            <div className="nav-searchResultIcon">
                {result.isImage && result.icon ? (

                    <img src={result.icon} alt={result.title} />
                ) : result.type === 'user' && result.initials ? (
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'linear-gradient(135deg, #4285f4 0%, #2563eb 100%)',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: 'white',
                        }}
                    >
                        {result.initials}
                    </div>
                ) : result.icon ? (
                    <AppIcon name={result.icon} size={18} />
                ) : null}
            </div>
            <div className="nav-searchResultContent">
                <div className="nav-searchResultTitle">
                    {result.title}
                    {result.badges &&
                        (result.badges.isVerified ||
                            result.badges.isContributor ||
                            result.badges.isEarlyAdopter) && (
                            <span
                                style={{
                                    display: 'inline-flex',
                                    gap: 'var(--ds-cluster-gap-tight, 2px)',
                                    marginLeft: '2px',
                                }}
                            >
                                {result.badges.isVerified && <Badge type="verified" size="small" />}
                                {result.badges.isContributor && (
                                    <Badge type="contributor" size="small" />
                                )}
                                {result.badges.isEarlyAdopter && (
                                    <Badge type="earlyAdopter" size="small" />
                                )}
                            </span>
                        )}
                </div>
                <div className="nav-searchResultSubtitle">{result.subtitle}</div>
                <div className="nav-searchResultMetadata">
                    <span className="nav-searchResultType">{result.type}</span>
                    {result.metadata && <span> · {result.metadata}</span>}
                </div>
            </div>
        </div>
    );
}

interface MobileSearchOverlayProps {
    query: string;
    onQueryChange: (q: string) => void;
    results: SearchResult[];
    isLoading: boolean;
    onClose: () => void;
    onResultClick: (url: string) => void;
    inputRef: React.RefObject<HTMLInputElement | null>;
}

export function MobileSearchOverlay({
    query,
    onQueryChange,
    results,
    isLoading,
    onClose,
    onResultClick,
    inputRef,
}: MobileSearchOverlayProps) {
    return (
        <div className="nav-mobileSearchOverlay">
            <div className="nav-mobileSearchHeader">
                <div className="nav-mobileSearchWrapper">
                    <svg
                        style={{
                            position: 'absolute',
                            left: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            pointerEvents: 'none',
                            width: '14px',
                            height: '14px',
                            color: 'rgba(255,255,255,0.4)',
                            flexShrink: 0,
                        }}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search..."
                        className="nav-mobileSearchInput"
                        style={{
                            boxSizing: 'border-box',
                            width: '100%',
                            height: '28px',
                            paddingLeft: '30px',
                            paddingRight: '12px',
                            paddingTop: 0,
                            paddingBottom: 0,
                            fontSize: '12px',
                        }}
                        value={query}
                        onChange={e => onQueryChange(e.target.value)}
                        autoFocus
                        aria-label="Mobile search"
                    />
                    {isLoading && (
                        <div className="nav-searchLoading">
                            <div className="nav-spinner" />
                        </div>
                    )}
                </div>
                <button
                    className="nav-mobileSearchClose"
                    onClick={onClose}
                    aria-label="Close search"
                >
                    <CloseIcon size={16} />
                </button>
            </div>

            {results.length > 0 && (
                <div className="nav-mobileSearchResults">
                    <div className="nav-searchResultsHeader">
                        <span>{results.length} results</span>
                    </div>
                    <div className="nav-searchResultsList">
                        {results.map((result, index) => (
                            <SearchResultItem
                                key={index}
                                result={result}
                                onClick={() => {
                                    onResultClick(result.url);
                                    onClose();
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
