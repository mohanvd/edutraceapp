import Link from 'next/link';
import { gradeNavLinks } from '@/lib/data/navConfig';

export default function HomePage() {
    return (
        <div className="container" style={{ padding: '3rem 1.5rem', maxWidth: '720px' }}>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                EduTrace Curriculum
            </h1>
            <p style={{ color: 'var(--ds-text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
                Open-source viewer for Grade 10 and 11 STEM learning outcomes. Browse by semester,
                open short codes like <code style={{ color: 'var(--ds-color-primary)' }}>PH.2.01</code>,
                or embed lessons in other sites.
            </p>
            <div
                style={{
                    display: 'grid',
                    gap: '0.75rem',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                }}
            >
                {gradeNavLinks.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        style={{
                            display: 'block',
                            padding: '1rem 1.25rem',
                            borderRadius: 'var(--ds-radius-lg)',
                            border: '1px solid var(--ds-border-primary)',
                            background: 'var(--ds-bg-secondary)',
                            color: 'var(--ds-text-primary)',
                            textDecoration: 'none',
                            fontWeight: 600,
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
