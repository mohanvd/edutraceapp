'use client';

import { ReactNode } from 'react';
import './MDXLayout.css';

interface MDXLayoutProps {
    children: ReactNode;
}

export default function MDXLayout({ children }: MDXLayoutProps) {
    return (
        <div className="mdx-wrapper">
            <main>
                {children}
            </main>
        </div>
    );
}
