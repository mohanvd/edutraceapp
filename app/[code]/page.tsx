import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { unstable_cache } from 'next/cache';
import type { Metadata } from 'next';
import MDXServer from '@/app/components/mdx/MDXServer';
import MDXLayout from '@/app/components/mdx/MDXLayout';
import ComingSoon from '@/app/components/mdx/ComingSoon';
import { parseLoCode, findLoPath, generateLoCode } from '@/lib/loCodeMapping';

interface PageProps {
    params: Promise<{
        code: string;
    }>;
}

const SUBJECT_DISPLAY_NAMES: Record<string, string> = {
    physics: 'Physics',
    chemistry: 'Chemistry',
    biology: 'Biology',
    geology: 'Geology',
    math: 'Math',
    mechanics: 'Mechanics',
    cs: 'CS',
    french: 'French',
    german: 'German',
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { code } = await params;
    const parsed = parseLoCode(code);

    if (!parsed) {
        return {
            description: 'Curriculum content',
        };
    }

    const subjectName = SUBJECT_DISPLAY_NAMES[parsed.subject] || parsed.subject;
    const loNum = parseInt(parsed.loNumber, 10).toString();
    const pageTitle = code.toUpperCase();

    return {
        title: pageTitle,
        description: `Study ${subjectName} Learning Outcome ${loNum} for Grade ${parsed.grade}.`,
    };
}

function getContentFromFile(filePath: string): string | null {
    const fullPath = path.join(process.cwd(), 'content', filePath);

    try {
        return fs.readFileSync(fullPath, 'utf8');
    } catch {
        return null;
    }
}

function getFileLastUpdated(filePath: string): Date | null {
    const fullPath = path.join(process.cwd(), 'content', filePath);
    try {
        return fs.statSync(fullPath).mtime;
    } catch {
        return null;
    }
}

const getCachedContentFromFile = (filePath: string) =>
    unstable_cache(
        () => Promise.resolve(getContentFromFile(filePath)),
        ['mdx-content', filePath],
        { revalidate: 900 }
    )();

export default async function ShortCodePage({ params }: PageProps) {
    const { code } = await params;
    const parsed = parseLoCode(code);

    if (!parsed) {
        notFound();
    }

    const { subject, grade, loNumber } = parsed;
    const loPath = findLoPath(subject, grade, loNumber);

    if (!loPath) {
        notFound();
    }

    const filePath = `grade${grade}/semester${loPath.semester}/${subject}/${loPath.loName}.mdx`;
    const rawContent = await getCachedContentFromFile(filePath);
    const lastUpdated = getFileLastUpdated(filePath);
    const title = code.toUpperCase();

    if (!rawContent) {
        return <ComingSoon title={title} />;
    }

    const THIN_CONTENT_MARKER = 'Content coming soon...';
    const MIN_CONTENT_BYTES = 100;

    if (rawContent.trim() === THIN_CONTENT_MARKER || rawContent.length < MIN_CONTENT_BYTES) {
        return <ComingSoon title={title} />;
    }

    const currentLoNumber = parseInt(loNumber, 10);
    const previousLoCode =
        currentLoNumber > 1 ? generateLoCode(subject, grade, currentLoNumber - 1) : null;
    const nextLoCode = generateLoCode(subject, grade, currentLoNumber + 1);

    const hasPrevious =
        previousLoCode !== null &&
        (() => {
            const previousParsed = parseLoCode(previousLoCode);
            if (!previousParsed) return false;
            const previousPath = findLoPath(
                previousParsed.subject,
                previousParsed.grade,
                previousParsed.loNumber
            );
            if (!previousPath) return false;
            const previousFilePath = path.join(
                process.cwd(),
                'content',
                `grade${previousParsed.grade}`,
                `semester${previousPath.semester}`,
                previousParsed.subject,
                `${previousPath.loName}.mdx`
            );
            return fs.existsSync(previousFilePath);
        })();

    const hasNext = (() => {
        const nextParsed = parseLoCode(nextLoCode);
        if (!nextParsed) return false;
        const nextPath = findLoPath(nextParsed.subject, nextParsed.grade, nextParsed.loNumber);
        if (!nextPath) return false;
        const nextFilePath = path.join(
            process.cwd(),
            'content',
            `grade${nextParsed.grade}`,
            `semester${nextPath.semester}`,
            nextParsed.subject,
            `${nextPath.loName}.mdx`
        );
        return fs.existsSync(nextFilePath);
    })();

    return (
        <MDXLayout>
            <h1
                style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    marginBottom: '2rem',
                    color: '#fff',
                }}
            >
                {title}
            </h1>
            <MDXServer source={rawContent} />
            {lastUpdated && (
                <p
                    style={{
                        marginTop: '1.25rem',
                        marginBottom: '0',
                        fontSize: '0.85rem',
                        color: 'var(--ds-text-quaternary)',
                    }}
                >
                    Last updated: {lastUpdated.toLocaleDateString('en-US')}
                </p>
            )}
            {(hasPrevious || hasNext) && (
                <nav
                    style={{
                        marginTop: '2.5rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid var(--ds-border-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.75rem',
                    }}
                    aria-label="Learning outcome navigation"
                >
                    <div>
                        {hasPrevious && previousLoCode && (
                            <Link
                                href={`/${previousLoCode}`}
                                prefetch
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 'var(--ds-space-1)',
                                    fontSize: 'var(--ds-font-size-sm)',
                                    color: 'var(--ds-color-primary)',
                                    textDecoration: 'none',
                                }}
                            >
                                Previous
                            </Link>
                        )}
                    </div>
                    <div>
                        {hasNext && (
                            <Link
                                href={`/${nextLoCode}`}
                                prefetch
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 'var(--ds-space-1)',
                                    fontSize: 'var(--ds-font-size-sm)',
                                    color: 'var(--ds-color-primary)',
                                    textDecoration: 'none',
                                }}
                            >
                                Next
                            </Link>
                        )}
                    </div>
                </nav>
            )}
        </MDXLayout>
    );
}

export async function generateStaticParams() {
    const params: Array<{ code: string }> = [];
    const contentDir = path.join(process.cwd(), 'content');
    const grades = ['grade10', 'grade11'];

    for (const grade of grades) {
        const gradeDir = path.join(contentDir, grade);
        if (!fs.existsSync(gradeDir)) continue;

        const semesters = fs
            .readdirSync(gradeDir)
            .filter((item: string) => fs.statSync(path.join(gradeDir, item)).isDirectory());

        for (const semester of semesters) {
            const semesterDir = path.join(gradeDir, semester);
            const subjects = fs
                .readdirSync(semesterDir)
                .filter((item: string) => fs.statSync(path.join(semesterDir, item)).isDirectory());

            for (const subject of subjects) {
                const subjectDir = path.join(semesterDir, subject);
                const files = fs
                    .readdirSync(subjectDir)
                    .filter((file: string) => file.endsWith('.mdx'));

                for (const file of files) {
                    const loMatch = file.match(/lo(\d+)\.mdx$/);
                    if (loMatch) {
                        const loNumber = loMatch[1];
                        const gradeNumber = grade.replace('grade', '');
                        try {
                            const code = generateLoCode(subject, gradeNumber, loNumber);
                            params.push({ code });
                        } catch {
                            // skip invalid combinations
                        }
                    }
                }
            }
        }
    }

    return params;
}
