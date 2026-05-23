import { curriculumData } from '@/lib/data/curriculum';
import { generateLoCode } from '@/lib/loCodeUtils';
import type { SearchResult } from '@/lib/hooks/useNavSearch';

const GRADE_KEY_MAP: Record<string, { grade: string; semester: string; label: string }> = {
    'g10-s1': { grade: '10', semester: '1', label: 'Grade 10 Semester 1' },
    'g10-s2': { grade: '10', semester: '2', label: 'Grade 10 Semester 2' },
    'g11-s1': { grade: '11', semester: '1', label: 'Grade 11 Semester 1' },
    'g11-s2': { grade: '11', semester: '2', label: 'Grade 11 Semester 2' },
};

let cachedIndex: SearchResult[] | null = null;

export function getCurriculumSearchIndex(): SearchResult[] {
    if (cachedIndex) return cachedIndex;

    const results: SearchResult[] = [];

    for (const [gradeKey, subjects] of Object.entries(curriculumData)) {
        const meta = GRADE_KEY_MAP[gradeKey];
        if (!meta) continue;

        for (const [subject, subjectData] of Object.entries(subjects)) {
            for (const lo of subjectData.los) {
                const code = generateLoCode(subject, meta.grade, lo.lo);
                results.push({
                    url: `/${code}`,
                    title: `${subject} LO ${lo.lo}`,
                    subtitle: meta.label,
                    type: 'learning-outcome',
                    metadata: code,
                });
            }

            const slug = subject.toLowerCase();
            results.push({
                url: `/grade${meta.grade}/semester${meta.semester}/revision/${slug}/midterm`,
                title: `${subject} Midterm Revision`,
                subtitle: meta.label,
                type: 'revision',
            });
            results.push({
                url: `/grade${meta.grade}/semester${meta.semester}/revision/${slug}/final`,
                title: `${subject} Final Revision`,
                subtitle: meta.label,
                type: 'revision',
            });
        }
    }

    cachedIndex = results;
    return results;
}

export function searchCurriculum(query: string): SearchResult[] {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];

    const index = getCurriculumSearchIndex();
    return index
        .filter(item => {
            const haystack = `${item.title} ${item.subtitle ?? ''} ${item.metadata ?? ''} ${item.url}`.toLowerCase();
            return haystack.includes(q);
        })
        .slice(0, 12);
}
