import React from 'react';
import MDXLayout from './MDXLayout';

interface ComingSoonProps {
    title?: string;
}

export default function ComingSoon({ title }: ComingSoonProps) {
    return (
        <MDXLayout>
            {title && (
                <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#fff' }}>
                    {title}
                </h1>
            )}
            <div
                style={{
                    padding: '4rem 2rem',
                    textAlign: 'center',
                    backgroundColor: 'var(--ds-background-200, #111)',
                    borderRadius: '12px',
                    border: '1px dashed var(--ds-border-primary, #333)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                }}
            >
                <div
                    style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '0.5rem',
                    }}
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ width: '32px', height: '32px', color: '#3b82f6' }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h2 style={{ fontSize: '1.5rem', margin: 0, color: '#fff' }}>Content Coming Soon</h2>
                <p style={{ color: 'var(--ds-text-tertiary, #888)', maxWidth: '400px', margin: 0, lineHeight: 1.6 }}>
                    We are currently preparing the content for this section. Please check back later!
                </p>
            </div>
        </MDXLayout>
    );
}
