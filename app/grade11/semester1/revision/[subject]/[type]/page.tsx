import { notFound } from 'next/navigation';
import MDXServer from '@/app/components/mdx/MDXServer';
import ComingSoon from '@/app/components/mdx/ComingSoon';
import MDXLayout from '@/app/components/mdx/MDXLayout';
import {
    loadRevisionContent,
    isValidSubject,
    isValidType,
    getSubjectDisplayName,
} from '@/lib/helpers/revisionLoader';

interface PageProps {
    params: Promise<{
        subject: string;
        type: string;
    }>;
}

export default async function RevisionPage({ params }: PageProps) {
    const { subject, type } = await params;

    if (!isValidSubject(subject) || !isValidType(type)) {
        notFound();
    }

    const rawContent = loadRevisionContent('11', '1', subject, type);

    const subjectName = getSubjectDisplayName(subject);
    const typeName = type === 'midterm' ? 'Midterm' : 'Final';

    if (!rawContent) {
        return <ComingSoon title={`${subjectName} ${typeName} Revision - Grade 11 Semester 1`} />;
    }

    return (
        <MDXLayout>
            <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#fff' }}>
                {subjectName} {typeName} Revision - Grade 11 Semester 1
            </h1>
            <MDXServer source={rawContent} />
        </MDXLayout>
    );
}
