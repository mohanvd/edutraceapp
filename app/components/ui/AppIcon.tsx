'use client';

import type { ElementType } from 'react';
import {
    AlertCircleIcon,
    AlertTriangleIcon,
    AtomIcon,
    BanIcon,
    BellIcon,
    BookOpenIcon,
    BotIcon,
    BriefcaseIcon,
    CheckCircleIcon,
    ClipboardIcon,
    CogIcon,
    DnaIcon,
    FileTextIcon,
    FlaskIcon,
    GlobeIcon,
    GraduationCapIcon,
    HashIcon,
    HeartIcon,
    HomeIcon,
    InfoIcon,
    LanguagesIcon,
    LaptopIcon,
    LightbulbIcon,
    MessageCircleIcon,
    MicroscopeIcon,
    MoonIcon,
    PencilIcon,
    PinIcon,
    PlaneIcon,
    SearchIcon,
    SmartphoneIcon,
    SparklesIcon,
    SunIcon,
    TargetIcon,
    TelescopeIcon,
    ThumbsDownIcon,
    ThumbsUpIcon,
    TrophyIcon,
    WifiOffIcon,
    ZapIcon,
} from './Icons';

export type AppIconName =
    | 'alert-circle'
    | 'alert-triangle'
    | 'atom'
    | 'ban'
    | 'bell'
    | 'book-open'
    | 'bot'
    | 'briefcase'
    | 'check-circle'
    | 'clipboard'
    | 'cog'
    | 'dna'
    | 'file-text'
    | 'flask'
    | 'globe'
    | 'graduation-cap'
    | 'hash'
    | 'heart'
    | 'home'
    | 'info'
    | 'languages'
    | 'laptop'
    | 'lightbulb'
    | 'message-circle'
    | 'microscope'
    | 'moon'
    | 'pencil'
    | 'pin'
    | 'plane'
    | 'search'
    | 'smartphone'
    | 'sparkles'
    | 'sun'
    | 'target'
    | 'telescope'
    | 'thumbs-down'
    | 'thumbs-up'
    | 'trophy'
    | 'wifi-off'
    | 'zap';

const ICON_MAP: Record<AppIconName, ElementType> = {
    'alert-circle': AlertCircleIcon,
    'alert-triangle': AlertTriangleIcon,
    atom: AtomIcon,
    ban: BanIcon,
    bell: BellIcon,
    'book-open': BookOpenIcon,
    bot: BotIcon,
    briefcase: BriefcaseIcon,
    'check-circle': CheckCircleIcon,
    clipboard: ClipboardIcon,
    cog: CogIcon,
    dna: DnaIcon,
    'file-text': FileTextIcon,
    flask: FlaskIcon,
    globe: GlobeIcon,
    'graduation-cap': GraduationCapIcon,
    hash: HashIcon,
    heart: HeartIcon,
    home: HomeIcon,
    info: InfoIcon,
    languages: LanguagesIcon,
    laptop: LaptopIcon,
    lightbulb: LightbulbIcon,
    'message-circle': MessageCircleIcon,
    microscope: MicroscopeIcon,
    moon: MoonIcon,
    pencil: PencilIcon,
    pin: PinIcon,
    plane: PlaneIcon,
    search: SearchIcon,
    smartphone: SmartphoneIcon,
    sparkles: SparklesIcon,
    sun: SunIcon,
    target: TargetIcon,
    telescope: TelescopeIcon,
    'thumbs-down': ThumbsDownIcon,
    'thumbs-up': ThumbsUpIcon,
    trophy: TrophyIcon,
    'wifi-off': WifiOffIcon,
    zap: ZapIcon,
};

export const SUBJECT_ICON_KEYS: Record<string, AppIconName> = {
    physics: 'atom',
    chemistry: 'flask',
    biology: 'dna',
    geology: 'globe',
    math: 'hash',
    mechanics: 'cog',
    english: 'book-open',
    french: 'languages',
    german: 'languages',
    cs: 'laptop',
    study: 'book-open',
    homework: 'pencil',
    project: 'target',
    exam: 'file-text',
    personal: 'home',
    other: 'pin',
    'summer-program': 'sun',
    'research-program': 'microscope',
    internship: 'briefcase',
    training: 'clipboard',
    'university-admission': 'graduation-cap',
    scholarship: 'trophy',
    exchange: 'plane',
    engineering: 'cog',
    astronomy: 'telescope',
    'earth-science': 'globe',
    'general-science': 'microscope',
    robotics: 'bot',
    research: 'book-open',
};

/** Legacy emoji strings (UTF-8 misread as Latin-1) still stored in some records */
const MOJIBAKE_EMOJI_TO_ICON: Record<string, AppIconName> = {
    'ðŸ’¡': 'lightbulb',
    'ðŸš«': 'ban',
    'ðŸ“': 'file-text',
    'ðŸ“Œ': 'pin',
    'ðŸ”': 'search',
    'ðŸŽ“': 'graduation-cap',
    'ðŸ†': 'trophy',
    'ðŸ’¬': 'message-circle',
    'ðŸ“¡': 'wifi-off',
    'ðŸ›Œ': 'moon',
    'ðŸ¦‰': 'moon',
    'ðŸŒ™': 'moon',
    'ðŸ“±': 'smartphone',
    'ðŸ””': 'bell',
    'ðŸ’™': 'heart',
    'ðŸ‘': 'thumbs-up',
    'ðŸ‘Ž': 'thumbs-down',
    'ðŸ“š': 'book-open',
    'ðŸŽ¯': 'target',
    'ðŸ ': 'home',
    'ðŸ§ª': 'flask',
    'ðŸ§¬': 'dna',
    'ðŸŒ': 'globe',
    'ðŸ”¢': 'hash',
    'ðŸ’»': 'laptop',
    'ðŸ“„': 'file-text',
    'ðŸ“': 'hash',
    'ðŸ”­': 'telescope',
    'ðŸ”¬': 'microscope',
    'ðŸ¤–': 'bot',
    'ðŸ’¼': 'briefcase',
    'ðŸ“‹': 'clipboard',
    'ðŸ‡«ðŸ‡·': 'languages',
    'ðŸ‡©ðŸ‡ª': 'languages',
};

const EMOJI_TO_ICON: Record<string, AppIconName> = {
    '💡': 'lightbulb',
    'ℹ️': 'info',
    '⚠️': 'alert-triangle',
    '🚫': 'ban',
    '📝': 'file-text',
    '📌': 'pin',
    '✅': 'check-circle',
    '🔍': 'search',
    '🎓': 'graduation-cap',
    '🏆': 'trophy',
    '💬': 'message-circle',
    '📡': 'wifi-off',
    '🛌': 'moon',
    '🦉': 'moon',
    '☀️': 'sun',
    '⚡': 'zap',
    '🌙': 'moon',
    '📱': 'smartphone',
    '🔔': 'bell',
    '💙': 'heart',
    '👍': 'thumbs-up',
    '👎': 'thumbs-down',
    '✨': 'sparkles',
    '📚': 'book-open',
    '✏️': 'pencil',
    '🎯': 'target',
    '🏠': 'home',
    '⚛️': 'atom',
    '🧪': 'flask',
    '🧬': 'dna',
    '🌍': 'globe',
    '🔢': 'hash',
    '⚙️': 'cog',
    '💻': 'laptop',
    '📄': 'file-text',
    '📐': 'hash',
    '🔭': 'telescope',
    '🔬': 'microscope',
    '🤖': 'bot',
    '☀': 'sun',
    '💼': 'briefcase',
    '📋': 'clipboard',
    '✈️': 'plane',
    '🇫🇷': 'languages',
    '🇩🇪': 'languages',
    ...MOJIBAKE_EMOJI_TO_ICON,
};

export function resolveAppIconName(value?: string | null): AppIconName {
    if (!value) return 'file-text';
    if (value in ICON_MAP) return value as AppIconName;
    if (value in SUBJECT_ICON_KEYS) return SUBJECT_ICON_KEYS[value];
    if (value in EMOJI_TO_ICON) return EMOJI_TO_ICON[value];
    return 'file-text';
}

export interface AppIconProps {
    name?: string | null;
    size?: number;
    className?: string;
}

export function AppIcon({ name, size = 16, className }: AppIconProps) {
    const resolved = resolveAppIconName(name);
    const Icon = ICON_MAP[resolved] ?? FileTextIcon;
    return <Icon size={size} className={className} aria-hidden />;
}

export function CalloutTypeIcon({
    type = 'default',
    size = 18,
    className,
}: {
    type?: 'default' | 'info' | 'warning' | 'error';
    size?: number;
    className?: string;
}) {
    const map: Record<string, AppIconName> = {
        default: 'lightbulb',
        info: 'info',
        warning: 'alert-triangle',
        error: 'ban',
    };
    return <AppIcon name={map[type] ?? 'lightbulb'} size={size} className={className} />;
}
