'use client';

import React, { useId } from 'react';
import './Badge.css';

interface BadgeProps {
    type?: 'verified' | 'contributor' | 'earlyAdopter';
    role?: string;
    size?: 'small' | 'medium' | 'large';
    showLabel?: boolean;
}

export default function Badge({ type, role, size = 'medium', showLabel = false }: BadgeProps) {
    const cutoutMaskId = useId().replace(/:/g, '');

    let badgeType: 'verified' | 'contributor' | 'earlyAdopter' = type || 'verified';

    if (role && !type) {
        if (role.toLowerCase() === 'contributor') badgeType = 'contributor';
        else if (role.toLowerCase() === 'earlyadopter') badgeType = 'earlyAdopter';
        else badgeType = 'verified';
    }

    const sizes = {
        small: { container: 16, icon: 14, fontSize: 10 },
        medium: { container: 32, icon: 24, fontSize: 14 },
        large: { container: 48, icon: 40, fontSize: 16 }
    };

    const config = {
        verified: {
            title: 'Verified User',
            label: 'Verified',
            icon: (size: number, maskId: string) => (
                <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
                    <defs>
                        <mask id={maskId}>
                            <rect width="48" height="48" fill="white" />
                            <polygon fill="black" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"></polygon>
                        </mask>
                    </defs>
                    <polygon fill="currentColor" mask={`url(#${maskId})`} points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"></polygon>
                </svg>
            )
        },
        contributor: {
            title: 'EduTrace Contributor',
            label: 'Contributor',
            icon: (size: number, _maskId?: string) => (
                <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
                    <path fill="currentColor" d="M40.613,26.051c-0.25,0.482,0.089,1.053,0.642,1.053h5.103c0.696,0,0.981,0.892,0.428,1.285	L24.517,44.573c-0.161,0.107-0.339,0.161-0.517,0.161s-0.357-0.054-0.517-0.161L1.213,28.389c-0.553-0.393-0.268-1.285,0.428-1.285	h5.103c0.553,0,0.892-0.571,0.642-1.053l-7.28-13.668c-0.428-0.821,0.518-1.677,1.285-1.16L19.111,23	c0.785,0.517,1.41,1.231,1.838,2.07l2.409,4.854C23.5,30.191,23.75,30.316,24,30.316s0.5-0.125,0.642-0.393l2.409-4.854	c0.428-0.839,1.053-1.552,1.838-2.07l17.719-11.777c0.767-0.517,1.713,0.339,1.285,1.16L40.613,26.051z M23.451,5.296L21.82,9	l-3.882,0.309c-0.515,0.041-0.741,0.67-0.369,1.029l2.904,2.807l-0.777,3.708c-0.104,0.496,0.416,0.89,0.865,0.655l3.439-1.8	l3.439,1.8c0.449,0.235,0.97-0.158,0.865-0.655l-0.777-3.708l2.904-2.807c0.371-0.359,0.146-0.988-0.369-1.029L26.18,9l-1.63-3.704	C24.339,4.818,23.661,4.818,23.451,5.296z"></path>
                </svg>
            )
        },
        earlyAdopter: {
            title: 'Early Adopter',
            label: 'Pioneer',
            icon: (size: number, _maskId?: string) => (
                <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
                    <path fill="currentColor" d="M27.2 4L12 26h10l-4 18 20-24H26l4-16h-2.8z" />
                </svg>
            )
        }
    };

    const selectedConfig = config[badgeType];
    const safeSize = sizes[size as keyof typeof sizes] ? size : 'medium';
    const { container, icon: iconSize, fontSize } = sizes[safeSize as keyof typeof sizes];

    const typeClass =
        badgeType === 'earlyAdopter'
            ? 'earlyAdopter'
            : badgeType === 'contributor'
              ? 'contributor'
              : 'verified';

    if (showLabel) {
        return (
            <span
                className={`et-badge-label et-badge-label--${typeClass}`}
                style={{ fontSize: `${fontSize}px` }}
                title={selectedConfig.title}
            >
                {selectedConfig.icon(Math.max(12, iconSize - 2), cutoutMaskId)}
                <span>{selectedConfig.label}</span>
            </span>
        );
    }

    return (
        <span
            className={`et-badge-icon-wrap et-badge-icon-wrap--${typeClass}`}
            style={{
                width: `${container}px`,
                height: `${container}px`,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: `transform var(--ds-transition-base)`,
            }}
            title={selectedConfig.title}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
            }}
        >
            {selectedConfig.icon(iconSize, cutoutMaskId)}
        </span>
    );
}
