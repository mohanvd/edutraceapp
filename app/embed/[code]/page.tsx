import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import MDXServer from '@/app/components/mdx/MDXServer';
import MDXLayout from '@/app/components/mdx/MDXLayout';
import { parseLoCode, findLoPath } from '@/lib/loCodeMapping';
import EmbedWatermark from '../EmbedWatermark';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

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

function getContentFromFile(filePath: string): string | null {
    const fullPath = path.join(process.cwd(), 'content', filePath);

    try {
        return fs.readFileSync(fullPath, 'utf8');
    } catch {
        return null;
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { code } = await params;
    const parsed = parseLoCode(code);

    if (!parsed) {
        return { title: 'Not Found' };
    }

    const { subject, grade, loNumber } = parsed;
    const subjectName = SUBJECT_DISPLAY_NAMES[subject] || subject;
    const loNum = parseInt(loNumber).toString();

    return {
        title: `${subjectName} LO${loNum} – Embed`,
        description: `${subjectName} Learning Outcome ${loNum} for Grade ${parseInt(grade) + 9} STEM students. Powered by EduTrace.`,
        robots: { index: false, follow: false },
    };
}

export default async function EmbedPage({ params }: PageProps) {
    const { code } = await params;
    const parsed = parseLoCode(code);

    if (!parsed) notFound();

    const { subject, grade, loNumber } = parsed;
    const loPath = findLoPath(subject, grade, loNumber);

    if (!loPath) notFound();

    const filePath = `grade${grade}/semester${loPath.semester}/${subject}/${loPath.loName}.mdx`;
    const rawContent = getContentFromFile(filePath);

    if (!rawContent) notFound();

    const subjectName = SUBJECT_DISPLAY_NAMES[subject] || subject;
    const loNum = parseInt(loNumber).toString();
    const title = `${subjectName} LO${loNum}`;
    const fullUrl = `/${code}`;

    return (
        <EmbedWatermark title={title} loCode={code} fullUrl={fullUrl}>
            <MDXLayout>
                <h1 style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    marginBottom: '1.5rem',
                    color: '#fff'
                }}>
                    {title}
                </h1>
                <MDXServer source={rawContent} />
            </MDXLayout>
        </EmbedWatermark>
    );
}
