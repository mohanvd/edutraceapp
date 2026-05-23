import { notFound } from 'next/navigation';
import MDXServer from '@/app/components/mdx/MDXServer';
import ComingSoon from '@/app/components/mdx/ComingSoon';
import MDXLayout from '@/app/components/mdx/MDXLayout';
import {
    loadPracticalContent,
    isValidPracticalSubject,
    getSubjectDisplayName,
} from '@/lib/helpers/revisionLoader';

interface PageProps {
    params: Promise<{
        subject: string;
    }>;
}

export default async function PracticalPage({ params }: PageProps) {
    const { subject } = await params;

    if (!isValidPracticalSubject(subject)) {
        notFound();
    }

    const rawContent = loadPracticalContent('11', '1', subject);

    const subjectName = getSubjectDisplayName(subject);

    if (!rawContent) {
        return <ComingSoon title={`${subjectName} Practical - Grade 11 Semester 1`} />;
    }

    return (
        <MDXLayout>
            <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#fff' }}>
                {subjectName} Practical - Grade 11 Semester 1
            </h1>
            <MDXServer source={rawContent} />
        </MDXLayout>
    );
}
