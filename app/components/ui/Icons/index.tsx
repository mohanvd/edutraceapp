/**
 * EduTrace Design System - Icon Library
 * =========================================
 * All icons are thin-stroke (strokeWidth="1.75"), 24×24 viewBox.
 * Use the `size` prop to scale uniformly. Color inherits via `currentColor`.
 *
 * Usage:
 *   import { CloseIcon, SearchIcon } from '@/app/components/ui/Icons';
 *   <CloseIcon size={20} />
 */

import React from 'react';

interface IconProps {
    size?: number;
    className?: string;
    'aria-hidden'?: boolean;
    'aria-label'?: string;
}

type SvgIconProps = IconProps & React.SVGAttributes<SVGSVGElement>;

const Icon = ({
    size = 16,
    className,
    children,
    ...props
}: SvgIconProps & { children: React.ReactNode }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={props['aria-hidden'] ?? true}
        className={className}
        {...props}
    >
        {children}
    </svg>
);

export const CloseIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </Icon>
);

export const ChevronDownIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <polyline points="6 9 12 15 18 9" />
    </Icon>
);

export const ChevronUpIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <polyline points="18 15 12 9 6 15" />
    </Icon>
);

export const ChevronLeftIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <polyline points="15 18 9 12 15 6" />
    </Icon>
);

export const ChevronRightIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <polyline points="9 18 15 12 9 6" />
    </Icon>
);

export const ArrowLeftIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
    </Icon>
);

export const ArrowRightIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </Icon>
);

export const PlusIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
    </Icon>
);

export const MenuIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </Icon>
);

export const CheckIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <polyline points="20 6 9 17 4 12" />
    </Icon>
);

export const CheckCircleIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </Icon>
);

export const AlertCircleIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
    </Icon>
);

export const AlertTriangleIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
    </Icon>
);

export const InfoIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
    </Icon>
);

export const XCircleIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
    </Icon>
);

export const EyeIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
    </Icon>
);

export const EyeOffIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
    </Icon>
);

export const SearchIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </Icon>
);

export const EditIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </Icon>
);

export const TrashIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </Icon>
);

export const CalendarIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </Icon>
);

export const FileTextIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
    </Icon>
);

export const DownloadIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </Icon>
);

export const SettingsIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </Icon>
);

export const LockIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </Icon>
);

export const MonitorIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
    </Icon>
);

export const UserIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </Icon>
);

export const UsersIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Icon>
);

export const ListIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
    </Icon>
);

export const BoardIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
    </Icon>
);

export const FilterIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </Icon>
);

export const SparklesIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M12 3l1.2 4.2L17.5 8.5 13.2 9.7 12 14l-1.2-4.3L6.5 8.5l4.3-1.3L12 3z" />
        <path d="M5 14l.7 2.3L8 17l-2.3.7L5 20l-.7-2.3L2 17l2.3-.7L5 14z" />
        <path d="M19 14l.7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14z" />
    </Icon>
);

export const PinIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M12 17v5" />
        <path d="M5 10.5C5 7.46 8.13 5 12 5s7 2.46 7 5.5c0 2.11-1.56 3.93-3.75 4.66L12 17l-3.25-1.84C6.56 14.43 5 12.61 5 10.5z" />
    </Icon>
);

export const BookOpenIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </Icon>
);

export const PencilIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
    </Icon>
);

export const TargetIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </Icon>
);

export const HomeIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </Icon>
);

export const GraduationCapIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" />
    </Icon>
);

export const TrophyIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 4h10v5a5 5 0 0 1-10 0V4z" />
        <path d="M7 4H5a2 2 0 0 0 0 4h2M17 4h2a2 2 0 0 1 0 4h-2" />
    </Icon>
);

export const MessageCircleIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </Icon>
);

export const ThumbsUpIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
    </Icon>
);

export const ThumbsDownIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z" />
        <path d="M17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3" />
    </Icon>
);

export const WifiIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
    </Icon>
);

export const WifiOffIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <line x1="1" y1="1" x2="23" y2="23" />
        <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
        <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
        <path d="M10.71 5.05A16 16 0 0 1 22.56 9" />
        <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
    </Icon>
);

export const SunIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </Icon>
);

export const MoonIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </Icon>
);

export const ZapIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </Icon>
);

export const BellIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </Icon>
);

export const SmartphoneIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
    </Icon>
);

export const HeartIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </Icon>
);

export const BanIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </Icon>
);

export const GlobeIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </Icon>
);

export const AtomIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <circle cx="12" cy="12" r="1" />
        <path d="M20.2 12a8.4 8.4 0 0 0-1.8-2.4 8.4 8.4 0 0 0-2.4-1.8" />
        <path d="M3.8 12a8.4 8.4 0 0 0 1.8 2.4 8.4 8.4 0 0 0 2.4 1.8" />
        <path d="M12 3.8a8.4 8.4 0 0 0-2.4 1.8 8.4 8.4 0 0 0-1.8 2.4" />
        <path d="M12 20.2a8.4 8.4 0 0 0 2.4-1.8 8.4 8.4 0 0 0 1.8-2.4" />
    </Icon>
);

export const FlaskIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M9 3h6v7l5 9a2 2 0 0 1-1.74 3H5.74A2 2 0 0 1 4 19l5-9V3z" />
        <line x1="9" y1="3" x2="15" y2="3" />
    </Icon>
);

export const DnaIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M2 15c6.67-6 13.33 0 20-6" />
        <path d="M2 9c6.67 6 13.33 0 20 6" />
    </Icon>
);

export const HashIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <line x1="4" y1="9" x2="20" y2="9" />
        <line x1="4" y1="15" x2="20" y2="15" />
        <line x1="10" y1="3" x2="8" y2="21" />
        <line x1="16" y1="3" x2="14" y2="21" />
    </Icon>
);

export const CogIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </Icon>
);

export const LaptopIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <line x1="2" y1="20" x2="22" y2="20" />
    </Icon>
);

export const MicroscopeIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M6 18h8" />
        <path d="M3 21h18" />
        <path d="M14 10a4 4 0 1 0-8 0c0 2.5 2 4 4 6 2-2 4-3.5 4-6z" />
        <path d="M12 2v2" />
    </Icon>
);

export const TelescopeIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M3 17l8-8" />
        <path d="M13 7l4 4" />
        <path d="M16 4l4 4" />
        <path d="M2 22l6-6" />
    </Icon>
);

export const BotIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16" />
        <line x1="16" y1="16" x2="16" y2="16" />
    </Icon>
);

export const BriefcaseIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </Icon>
);

export const ClipboardIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" />
    </Icon>
);

export const PlaneIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 20 3s-3 .5-4.5 1.5L12 8 3.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </Icon>
);

export const LanguagesIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M5 8h14M5 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0M19 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
        <path d="M12 2v20M7 15h10" />
    </Icon>
);

export const LightbulbIcon = (props: SvgIconProps) => (
    <Icon {...props}>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
    </Icon>
);
