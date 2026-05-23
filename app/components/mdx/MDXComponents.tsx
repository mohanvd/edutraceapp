import React, { ReactNode } from 'react';
import Card, { CardHeader, CardBody, CardFooter } from '@/app/components/ui/Card/Card';
import NextImage from 'next/image';
import { CalloutTypeIcon } from '@/app/components/ui/AppIcon';
import './MDXComponents.css';

import {
    Tabs,
    Tab,
    AccordionItem,
    Accordion,
    Quiz,
    Choice,
    ImageGallery,
} from './MDXClientComponents';
import { FeedbackForm } from './FeedbackForm';
import { MathGraph, NumberLine, RightTriangle, UnitCircle, Quadrants, DirectedAngles, ObliqueTriangle, ElevationDepression } from './MathComponents';

export { Tabs, Tab, AccordionItem, Accordion, Quiz, Choice, ImageGallery, FeedbackForm, MathGraph, NumberLine, RightTriangle, UnitCircle, Quadrants, DirectedAngles, ObliqueTriangle, ElevationDepression };

interface CalloutProps {
    type?: 'default' | 'info' | 'warning' | 'error';
    emoji?: string;
    children: ReactNode;
}

export function Callout({ type = 'default', emoji: _emoji, children }: CalloutProps) {
    return (
        <div className={`custom-callout custom-callout-${type}`}>
            <span className="custom-callout-icon" aria-hidden="true">
                <CalloutTypeIcon type={type} size={18} />
            </span>
            <div className="custom-callout-content">{children}</div>
        </div>
    );
}

interface DefinitionProps {
    term: string;
    children: ReactNode;
}

export function Definition({ term, children }: DefinitionProps) {
    return (
        <div className="custom-definition">
            <div className="custom-definition-term">
                <svg
                    className="definition-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                {term}
            </div>
            <div className="custom-definition-content">{children}</div>
        </div>
    );
}

interface CompareProps {
    children: ReactNode;
}

interface ItemProps {
    label: string;
    children: ReactNode;
}

export function Compare({ children }: CompareProps) {
    return <div className="custom-compare">{children}</div>;
}

export function Item({ label, children }: ItemProps) {
    return (
        <div className="custom-compare-item">
            <div className="custom-compare-label">{label}</div>
            <div className="custom-compare-content">{children}</div>
        </div>
    );
}

interface VideoEmbedProps {
    url: string;
    title?: string;
    width?: string;
    height?: string;
}

export function VideoEmbed({ url, title = 'Video', width, height }: VideoEmbedProps) {
    const getYouTubeId = (videoUrl: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = videoUrl.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };

    const videoId = getYouTubeId(url);

    if (!videoId) {
        return <div className="custom-video-error">Invalid YouTube URL</div>;
    }

    const containerStyle: React.CSSProperties = {};
    if (width) containerStyle.maxWidth = width;
    if (height) containerStyle.height = height;

    return (
        <div className="custom-video-container" style={containerStyle}>
            <div
                className="custom-video-wrapper"
                style={height ? { paddingBottom: 0, height: '100%' } : {}}
            >
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        </div>
    );
}

interface ButtonProps {
    href: string;
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'success';
    target?: '_blank' | '_self';
}

export function Button({ href, children, variant = 'primary', target = '_self' }: ButtonProps) {
    return (
        <a
            href={href}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className={`custom-button custom-button-${variant}`}
        >
            {children}
        </a>
    );
}

interface GoogleDriveEmbedProps {
    url: string;
    title?: string;
    width?: string;
    height?: string;
}

export function GoogleDriveEmbed({
    url,
    title = 'Google Drive Document',
    width,
    height,
}: GoogleDriveEmbedProps) {
    const getFileId = (driveUrl: string) => {
        const patterns = [
            /\/file\/d\/([^/]+)/,
            /id=([^&]+)/,
            /\/folders\/([^/?]+)/,
            /\/presentation\/d\/([^/]+)/,
            /\/document\/d\/([^/]+)/,
            /\/spreadsheets\/d\/([^/]+)/,
        ];
        for (const pattern of patterns) {
            const match = driveUrl.match(pattern);
            if (match) return match[1];
        }
        return null;
    };

    const fileId = getFileId(url);

    if (!fileId) {
        return (
            <div className="custom-drive-error">
                Invalid Google Drive URL. Please provide a valid share link.
            </div>
        );
    }

    let embedUrl = '';
    if (url.includes('/presentation/')) {
        embedUrl = `https://docs.google.com/presentation/d/${fileId}/embed`;
    } else if (url.includes('/document/')) {
        embedUrl = `https://docs.google.com/document/d/${fileId}/preview`;
    } else if (url.includes('/spreadsheets/')) {
        embedUrl = `https://docs.google.com/spreadsheets/d/${fileId}/preview`;
    } else if (url.includes('/folders/')) {
        embedUrl = `https://drive.google.com/embeddedfolderview?id=${fileId}`;
    } else {
        embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
    }

    const containerStyle: React.CSSProperties = {};
    if (width) containerStyle.maxWidth = width;
    if (height) containerStyle.height = height;

    return (
        <div className="custom-drive-container" style={containerStyle}>
            <div
                className="custom-drive-wrapper"
                style={height ? { paddingBottom: 0, height: '100%' } : {}}
            >
                <iframe
                    src={embedUrl}
                    title={title}
                    allow="autoplay"
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        </div>
    );
}

interface ImageWithTextProps {
    src: string;
    alt?: string;
    caption?: string;
    position?: 'left' | 'right';
    width?: string;
    children?: ReactNode;
}

export function ImageWithText({
    src,
    alt = 'Image',
    caption,
    position = 'right',
    width = '300px',
    children,
}: ImageWithTextProps) {
    const imgStyle = {
        maxWidth: width,
        background: '#ffffff',
        padding: '12px',
        borderRadius: '8px',
    };

    if (!children) {
        return (
            <div className="custom-image-standalone">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={alt} style={imgStyle} />
                {caption && <div className="custom-image-text-caption">{caption}</div>}
            </div>
        );
    }

    return (
        <div className={`custom-image-text custom-image-text-${position}`}>
            <div className="custom-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={alt} className="custom-image-float" style={imgStyle} />
                {caption && <div className="custom-image-text-caption">{caption}</div>}
            </div>
            {children}
        </div>
    );
}

interface ExampleProps {
    title?: string;
    children: ReactNode;
}

export function Example({ title, children }: ExampleProps) {
    return (
        <div className="custom-example">
            {title && (
                <div className="custom-example-header">
                    <svg
                        className="example-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M9 12l2 2 4-4" />
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                    <span>{title}</span>
                </div>
            )}
            <div className="custom-example-content">{children}</div>
        </div>
    );
}

interface StepProps {
    title?: string;
    children: ReactNode;
}

export function Step({ title, children }: StepProps) {
    return (
        <div className="custom-step-content">
            {title && <div className="custom-step-title">{title}</div>}
            <div className="custom-step-body">{children}</div>
        </div>
    );
}

interface StepsProps {
    children: ReactNode;
}

export function Steps({ children }: StepsProps) {
    const childArray = React.Children.toArray(children);

    return (
        <div className="custom-steps">
            {childArray.map((child, index) => (
                <div key={index} className="custom-step">
                    <div className="custom-step-indicator">
                        <div className="custom-step-number">{index + 1}</div>
                        {index < childArray.length - 1 && <div className="custom-step-line" />}
                    </div>
                    <div className="custom-step-content-wrapper">{child}</div>
                </div>
            ))}
        </div>
    );
}

interface FormulaProps {
    name?: string;
    children: ReactNode;
}

export function Formula({ name, children }: FormulaProps) {
    return (
        <div className="custom-formula">
            {name && (
                <div className="custom-formula-name">
                    <svg
                        className="formula-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM17 14v8M14 17h6" />
                    </svg>
                    {name}
                </div>
            )}
            <div className="custom-formula-content">{children}</div>
        </div>
    );
}

interface TimelineItemProps {
    date?: string;
    title: string;
    children?: ReactNode;
}

export function TimelineItem({ date, title, children }: TimelineItemProps) {
    return (
        <div className="custom-timeline-item">
            <div className="custom-timeline-marker">
                <div className="custom-timeline-dot" />
                <div className="custom-timeline-line" />
            </div>
            <div className="custom-timeline-body">
                {date && <div className="custom-timeline-date">{date}</div>}
                <div className="custom-timeline-title">{title}</div>
                {children && <div className="custom-timeline-desc">{children}</div>}
            </div>
        </div>
    );
}

interface TimelineProps {
    title?: string;
    children: ReactNode;
}

export function Timeline({ title, children }: TimelineProps) {
    return (
        <div className="custom-timeline">
            {title && (
                <div className="custom-timeline-header">
                    <svg
                        className="timeline-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {title}
                </div>
            )}
            <div className="custom-timeline-items">{children}</div>
        </div>
    );
}

interface TermProps {
    word: string;
    children: ReactNode;
}

export function Term({ word, children }: TermProps) {
    return (
        <div className="custom-vocab-term">
            <dt className="custom-vocab-word">{word}</dt>
            <dd className="custom-vocab-meaning">{children}</dd>
        </div>
    );
}

interface VocabularyProps {
    title?: string;
    children: ReactNode;
}

export function Vocabulary({ title = 'Vocabulary', children }: VocabularyProps) {
    return (
        <div className="custom-vocabulary">
            <div className="custom-vocabulary-header">
                <svg
                    className="vocabulary-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    <line x1="8" y1="7" x2="16" y2="7" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                {title}
            </div>
            <dl className="custom-vocabulary-list">{children}</dl>
        </div>
    );
}

interface PreProps {
    children?: ReactNode;
    className?: string;
}

export function Pre({ children, ...props }: PreProps) {
    let language = 'text';
    let codeString = '';

    if (React.isValidElement(children)) {
        const childProps = children.props as Record<string, unknown>;
        const className = (childProps?.className as string) || '';
        const match = className.match(/language-(\w+)/);
        if (match) language = match[1];

        const codeContent = childProps?.children;
        if (typeof codeContent === 'string') {
            codeString = codeContent;
        } else if (Array.isArray(codeContent)) {
            codeString = codeContent.join('');
        }
    }

    if (codeString) {

        return (
            <div className="codesnap-wrapper">
                <div className="codesnap-header">
                    <div className="codesnap-dots">
                        <span className="dot dot-red" />
                        <span className="dot dot-yellow" />
                        <span className="dot dot-green" />
                    </div>
                </div>
                <pre style={{ margin: 0 }}>
                    <code className={`language-${language}`}>{codeString.trim()}</code>
                </pre>
            </div>
        );
    }

    return (
        <pre data-language={language || 'code'} {...props}>
            {children}
        </pre>
    );
}

interface PointProps {
    children: ReactNode;
}

export function Point({ children }: PointProps) {
    return <div className="custom-keypoint">{children}</div>;
}

interface KeyPointsProps {
    title?: string;
    children: ReactNode;
}

export function KeyPoints({ title = 'Key Points', children }: KeyPointsProps) {
    return (
        <div className="custom-keypoints">
            <div className="custom-keypoints-header">
                <svg
                    className="keypoints-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                </svg>
                <span>{title}</span>
            </div>
            <div className="custom-keypoints-list">
                {React.Children.map(children, (child, index) => (
                    <div key={index} className="custom-keypoint-item">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}

interface QuoteProps {
    author?: string;
    source?: string;
    children: ReactNode;
}

export function Quote({ author, source, children }: QuoteProps) {
    return (
        <blockquote className="custom-quote">
            <div className="custom-quote-content">{children}</div>
            {(author || source) && (
                <footer className="custom-quote-footer">
                    {author && <cite className="custom-quote-author">- {author}</cite>}
                    {source && <span className="custom-quote-source">{source}</span>}
                </footer>
            )}
        </blockquote>
    );
}

interface ImageProps {
    src: string;
    alt: string;
    caption?: string;
    width?: string | number;
    height?: string | number;
}

export function Image({ src, alt, caption, width, height }: ImageProps) {
    return (
        <figure className="custom-image">
            <NextImage
                src={src}
                alt={alt}
                width={typeof width === 'number' ? width : 800}
                height={typeof height === 'number' ? height : 600}
                style={{ width: '100%', height: 'auto' }}
                loading="lazy"
            />
            {caption && <figcaption className="custom-image-caption">{caption}</figcaption>}
        </figure>
    );
}

const FallbackComponent = ({ children }: { children?: ReactNode }) => <>{children}</>;

const MDXComponents = {

    Callout,
    Definition,
    Compare,
    Item,
    Tabs,
    Tab,
    Example,
    Steps,
    Step,
    Formula,
    Quiz,
    Choice,
    KeyPoints,
    Point,
    Quote,
    FeedbackForm,

    Accordion,
    AccordionItem,
    Timeline,
    TimelineItem,
    Vocabulary,
    Term,

    VideoEmbed,
    ImageGallery,
    Image,
    ImageWithText,
    GoogleDriveEmbed,
    Button,

    pre: Pre,

    Card,
    CardHeader,
    CardBody,
    CardFooter,

    MathGraph,
    NumberLine,
    RightTriangle,
    UnitCircle,
    Quadrants,
    DirectedAngles,
    ObliqueTriangle,
    ElevationDepression,

    Problem: FallbackComponent,
    Question: FallbackComponent,
    Solution: FallbackComponent,
    Var: FallbackComponent,
};

export default MDXComponents;

