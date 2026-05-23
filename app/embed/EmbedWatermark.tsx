'use client';

import { ReactNode } from 'react';

interface EmbedWatermarkProps {
    children: ReactNode;
    title: string;
    loCode: string;
    fullUrl: string;
}

export default function EmbedWatermark({ children, title, loCode, fullUrl }: EmbedWatermarkProps) {
    return (
        <div className="embed-container" data-lo={loCode}>
            <div className="embed-topbar">
                <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="embed-topbar-brand"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/icons/icon.png"
                        alt="EduTrace"
                        className="embed-topbar-logo"
                        width={24}
                        height={24}
                    />
                    <span>EduTrace</span>
                    <span className="embed-topbar-title">&middot; {title}</span>
                </a>
                <a
                    href={fullUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="embed-topbar-cta"
                >
                    Open in EduTrace
                    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z" />
                    </svg>
                </a>
            </div>

            <div className="embed-content">
                {children}
            </div>

            <div className="embed-watermark">
                <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/icons/icon.png"
                        alt="EduTrace"
                        className="embed-watermark-logo"
                        width={16}
                        height={16}
                    />
                    <span>Powered by <strong>EduTrace</strong></span>
                    <span className="embed-watermark-divider">&middot;</span>
                    <span>edutrace.app</span>
                </a>
            </div>
        </div>
    );
}
