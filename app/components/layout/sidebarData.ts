import { curriculumData } from '@/lib/data/curriculum';
import { generateLoCode } from '@/lib/loCodeUtils';

export interface SidebarItem {
    title: string;
    href?: string;
    isHeader?: boolean;
    children?: SidebarItem[];
}

const PRACTICAL_SUBJECTS = ['Physics', 'Mechanics', 'Chemistry', 'Geology', 'Biology'];

const SUBJECT_SLUG: Record<string, string> = {
    Physics: 'physics',
    Mechanics: 'mechanics',
    Chemistry: 'chemistry',
    Geology: 'geology',
    Biology: 'biology',
    Math: 'math',
    CS: 'cs',
    French: 'french',
    German: 'german',
};

export function generateSidebarData(gradeKey: string): SidebarItem[] {
    const data = curriculumData[gradeKey];
    if (!data) return [];

    const [grade, semester] = gradeKey.split('-');

    const gradeNum = grade.startsWith('grade')
        ? grade.replace('grade', '')
        : grade.replace('g', '');
    const semesterNum = semester ? semester.replace('s', '') : '1';

    const basePath = `/grade${gradeNum}/${semester ? 'semester' + semesterNum : ''}`.replace(
        /\/$/,
        ''
    );

    const items: SidebarItem[] = [
        {
            title: 'Overview',
            href: basePath,
        },
        {
            title: 'Subjects',
            isHeader: true,
        },
    ];

    Object.keys(data).forEach(subject => {
        const subjectData = data[subject];
        const slug = SUBJECT_SLUG[subject] || subject.toLowerCase();
        const children: SidebarItem[] = subjectData.los.map(lo => {

            const href = `/${generateLoCode(subject, gradeNum, lo.lo.toString())}`;

            return {
                title: `LO ${lo.lo}`,
                href,
            };
        });

        if (semester && PRACTICAL_SUBJECTS.includes(subject)) {
            children.push({
                title: 'Practical',
                href: `${basePath}/practical/${slug}`,
            });
        }

        if (semester) {
            children.push({
                title: 'Midterm Revision',
                href: `${basePath}/revision/${slug}/midterm`,
            });
            children.push({
                title: 'Final Revision',
                href: `${basePath}/revision/${slug}/final`,
            });
        }

        items.push({
            title: subject,
            children,
        });
    });

    return items;
}

export const grade10Semester1 = generateSidebarData('g10-s1');
export const grade10Semester2 = generateSidebarData('g10-s2');
export const grade11Semester1 = generateSidebarData('g11-s1');
export const grade11Semester2 = generateSidebarData('g11-s2');
