import 'server-only';
import fs from 'fs';
import path from 'path';

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

const PRACTICAL_SUBJECTS = ['physics', 'mechanics', 'chemistry', 'geology', 'biology'];

const VALID_TYPES = ['midterm', 'final'] as const;

export type RevisionType = (typeof VALID_TYPES)[number];

export function isValidSubject(subject: string): boolean {
    return subject in SUBJECT_DISPLAY_NAMES;
}

export function isValidPracticalSubject(subject: string): boolean {
    return PRACTICAL_SUBJECTS.includes(subject);
}

export function isValidType(type: string): type is RevisionType {
    return VALID_TYPES.includes(type as RevisionType);
}

export function getSubjectDisplayName(subject: string): string {
    return SUBJECT_DISPLAY_NAMES[subject] || subject;
}

export function loadRevisionContent(
    grade: string,
    semester: string,
    subject: string,
    type: string
): string | null {
    const filePath = path.join(
        process.cwd(),
        'content',
        `grade${grade}`,
        `semester${semester}`,
        subject,
        `${type}-revision.mdx`
    );

    if (!fs.existsSync(filePath)) {
        return null;
    }

    return fs.readFileSync(filePath, 'utf8');
}

export function loadPracticalContent(
    grade: string,
    semester: string,
    subject: string
): string | null {
    const filePath = path.join(
        process.cwd(),
        'content',
        `grade${grade}`,
        `semester${semester}`,
        subject,
        'practical.mdx'
    );

    if (!fs.existsSync(filePath)) {
        return null;
    }

    return fs.readFileSync(filePath, 'utf8');
}
