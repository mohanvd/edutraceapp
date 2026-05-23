export interface LearningObjective {
    lo: number;
    weekStart: number;
    weekEnd: number;
    status: 'not-studied' | 'in-progress' | 'completed' | 'mastered';
    notes: string;
    lastUpdated?: string;
    description?: string;
    topic?: string;
}

export interface SubjectData {
    los: LearningObjective[];
    icon?: string;
    color?: string;
}

export interface TrackerData {
    [subject: string]: SubjectData;
}

export const curriculumData: { [key: string]: TrackerData } = {
    'g10-s1': {
        Physics: {
            los: [
                { lo: 1, weekStart: 1, weekEnd: 2, status: 'not-studied', notes: '' },
                { lo: 2, weekStart: 3, weekEnd: 5, status: 'not-studied', notes: '' },
                { lo: 3, weekStart: 6, weekEnd: 7, status: 'not-studied', notes: '' },
                { lo: 4, weekStart: 8, weekEnd: 8, status: 'not-studied', notes: '' },
                { lo: 5, weekStart: 9, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 6, weekStart: 11, weekEnd: 12, status: 'not-studied', notes: '' },
                { lo: 7, weekStart: 13, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        Chemistry: {
            los: [
                { lo: 1, weekStart: 1, weekEnd: 2, status: 'not-studied', notes: '' },
                { lo: 2, weekStart: 3, weekEnd: 4, status: 'not-studied', notes: '' },
                { lo: 3, weekStart: 5, weekEnd: 6, status: 'not-studied', notes: '' },
                { lo: 4, weekStart: 7, weekEnd: 8, status: 'not-studied', notes: '' },
                { lo: 5, weekStart: 9, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 6, weekStart: 11, weekEnd: 12, status: 'not-studied', notes: '' },
                { lo: 7, weekStart: 13, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        Biology: {
            los: [
                { lo: 1, weekStart: 1, weekEnd: 1, status: 'not-studied', notes: '' },
                { lo: 2, weekStart: 2, weekEnd: 3, status: 'not-studied', notes: '' },
                { lo: 3, weekStart: 4, weekEnd: 6, status: 'not-studied', notes: '' },
                { lo: 4, weekStart: 7, weekEnd: 8, status: 'not-studied', notes: '' },
                { lo: 5, weekStart: 9, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 6, weekStart: 11, weekEnd: 12, status: 'not-studied', notes: '' },
                { lo: 7, weekStart: 13, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        Geology: {
            los: [
                { lo: 1, weekStart: 1, weekEnd: 2, status: 'not-studied', notes: '' },
                { lo: 2, weekStart: 3, weekEnd: 4, status: 'not-studied', notes: '' },
                { lo: 3, weekStart: 5, weekEnd: 5, status: 'not-studied', notes: '' },
                { lo: 4, weekStart: 6, weekEnd: 7, status: 'not-studied', notes: '' },
                { lo: 5, weekStart: 8, weekEnd: 9, status: 'not-studied', notes: '' },
                { lo: 6, weekStart: 10, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 7, weekStart: 11, weekEnd: 12, status: 'not-studied', notes: '' },
                { lo: 8, weekStart: 13, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        Math: {
            los: [
                { lo: 1, weekStart: 1, weekEnd: 4, status: 'not-studied', notes: '' },
                { lo: 2, weekStart: 5, weekEnd: 6, status: 'not-studied', notes: '' },
                { lo: 3, weekStart: 7, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 4, weekStart: 11, weekEnd: 11, status: 'not-studied', notes: '' },
                { lo: 5, weekStart: 12, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        Mechanics: {
            los: [
                { lo: 1, weekStart: 1, weekEnd: 4, status: 'not-studied', notes: '' },
                { lo: 2, weekStart: 5, weekEnd: 7, status: 'not-studied', notes: '' },
                { lo: 3, weekStart: 8, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 4, weekStart: 11, weekEnd: 12, status: 'not-studied', notes: '' },
                { lo: 5, weekStart: 13, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        CS: {
            los: [
                { lo: 1, weekStart: 1, weekEnd: 2, status: 'not-studied', notes: '' },
                { lo: 2, weekStart: 3, weekEnd: 5, status: 'not-studied', notes: '' },
                { lo: 3, weekStart: 6, weekEnd: 7, status: 'not-studied', notes: '' },
                { lo: 4, weekStart: 8, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 5, weekStart: 11, weekEnd: 12, status: 'not-studied', notes: '' },
                { lo: 6, weekStart: 13, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        French: {
            los: [
                { lo: 1, weekStart: 1, weekEnd: 7, status: 'not-studied', notes: '', description: 'Unité 1' },
                { lo: 2, weekStart: 8, weekEnd: 14, status: 'not-studied', notes: '', description: 'Unité 2' },
            ]
        },
        German: {
            los: [
                { lo: 1, weekStart: 1, weekEnd: 5, status: 'not-studied', notes: '', description: 'Lektion 1' },
                { lo: 2, weekStart: 6, weekEnd: 10, status: 'not-studied', notes: '', description: 'Lektion 2' },
                { lo: 3, weekStart: 11, weekEnd: 14, status: 'not-studied', notes: '', description: 'Lektion 3' },
            ]
        }
    },
    'g10-s2': {
        Physics: {
            los: [
                { lo: 8, weekStart: 1, weekEnd: 2, status: 'not-studied', notes: '' },
                { lo: 9, weekStart: 3, weekEnd: 5, status: 'not-studied', notes: '' },
                { lo: 10, weekStart: 6, weekEnd: 8, status: 'not-studied', notes: '' },
                { lo: 11, weekStart: 9, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        Chemistry: {
            los: [
                { lo: 8, weekStart: 1, weekEnd: 2, status: 'not-studied', notes: '' },
                { lo: 9, weekStart: 2, weekEnd: 3, status: 'not-studied', notes: '' },
                { lo: 10, weekStart: 3, weekEnd: 4, status: 'not-studied', notes: '' },
                { lo: 11, weekStart: 5, weekEnd: 6, status: 'not-studied', notes: '' },
                { lo: 12, weekStart: 6, weekEnd: 7, status: 'not-studied', notes: '' },
                { lo: 13, weekStart: 8, weekEnd: 9, status: 'not-studied', notes: '' },
                { lo: 14, weekStart: 9, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 15, weekStart: 11, weekEnd: 12, status: 'not-studied', notes: '' },
                { lo: 16, weekStart: 12, weekEnd: 13, status: 'not-studied', notes: '' },
                { lo: 17, weekStart: 13, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        Biology: {
            los: [
                { lo: 9, weekStart: 1, weekEnd: 2, status: 'not-studied', notes: '' },
                { lo: 10, weekStart: 3, weekEnd: 4, status: 'not-studied', notes: '' },
                { lo: 11, weekStart: 5, weekEnd: 6, status: 'not-studied', notes: '' },
                { lo: 12, weekStart: 7, weekEnd: 8, status: 'not-studied', notes: '' },
                { lo: 13, weekStart: 9, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 14, weekStart: 11, weekEnd: 12, status: 'not-studied', notes: '' },
                { lo: 15, weekStart: 13, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        Geology: {
            los: [
                { lo: 8, weekStart: 1, weekEnd: 2, status: 'not-studied', notes: '' },
                { lo: 9, weekStart: 3, weekEnd: 5, status: 'not-studied', notes: '' },
                { lo: 10, weekStart: 6, weekEnd: 7, status: 'not-studied', notes: '' },
                { lo: 11, weekStart: 8, weekEnd: 9, status: 'not-studied', notes: '' },
                { lo: 12, weekStart: 10, weekEnd: 11, status: 'not-studied', notes: '' },
                { lo: 13, weekStart: 12, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        Math: {
            los: [
                { lo: 7, weekStart: 1, weekEnd: 2, status: 'not-studied', notes: '' },
                { lo: 8, weekStart: 3, weekEnd: 5, status: 'not-studied', notes: '' },
                { lo: 9, weekStart: 6, weekEnd: 8, status: 'not-studied', notes: '' },
                { lo: 10, weekStart: 9, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 11, weekStart: 11, weekEnd: 12, status: 'not-studied', notes: '' },
                { lo: 12, weekStart: 13, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        Mechanics: {
            los: [
                { lo: 5, weekStart: 1, weekEnd: 3, status: 'not-studied', notes: '' },
                { lo: 6, weekStart: 4, weekEnd: 6, status: 'not-studied', notes: '' },
                { lo: 7, weekStart: 7, weekEnd: 9, status: 'not-studied', notes: '' },
                { lo: 8, weekStart: 10, weekEnd: 12, status: 'not-studied', notes: '' },
                { lo: 9, weekStart: 13, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        CS: {
            los: [
                { lo: 7, weekStart: 1, weekEnd: 2, status: 'not-studied', notes: '' },
                { lo: 8, weekStart: 3, weekEnd: 4, status: 'not-studied', notes: '' },
                { lo: 9, weekStart: 5, weekEnd: 6, status: 'not-studied', notes: '' },
                { lo: 10, weekStart: 7, weekEnd: 8, status: 'not-studied', notes: '' },
                { lo: 11, weekStart: 9, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 12, weekStart: 11, weekEnd: 12, status: 'not-studied', notes: '' },
                { lo: 13, weekStart: 13, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        French: {
            los: [
                { lo: 3, weekStart: 1, weekEnd: 7, status: 'not-studied', notes: '', description: 'Unité 3' },
                { lo: 4, weekStart: 8, weekEnd: 14, status: 'not-studied', notes: '', description: 'Unité 4' },
            ]
        },
        German: {
            los: [
                { lo: 4, weekStart: 1, weekEnd: 5, status: 'not-studied', notes: '', description: 'Lektion 4' },
                { lo: 5, weekStart: 6, weekEnd: 10, status: 'not-studied', notes: '', description: 'Lektion 5' },
                { lo: 6, weekStart: 11, weekEnd: 14, status: 'not-studied', notes: '', description: 'Lektion 6' },
            ]
        }
    },
    'g11-s1': {
        Physics: {
            los: [
                { lo: 1, weekStart: 1, weekEnd: 2, status: 'not-studied', notes: '' },
                { lo: 2, weekStart: 3, weekEnd: 5, status: 'not-studied', notes: '' },
                { lo: 3, weekStart: 6, weekEnd: 7, status: 'not-studied', notes: '' },
                { lo: 4, weekStart: 8, weekEnd: 8, status: 'not-studied', notes: '' },
                { lo: 5, weekStart: 9, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 6, weekStart: 11, weekEnd: 12, status: 'not-studied', notes: '' },
                { lo: 7, weekStart: 13, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        Chemistry: {
            los: [
                { lo: 1, weekStart: 1, weekEnd: 2, status: 'not-studied', notes: '' },
                { lo: 2, weekStart: 3, weekEnd: 4, status: 'not-studied', notes: '' },
                { lo: 3, weekStart: 5, weekEnd: 6, status: 'not-studied', notes: '' },
                { lo: 4, weekStart: 7, weekEnd: 8, status: 'not-studied', notes: '' },
                { lo: 5, weekStart: 9, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 6, weekStart: 11, weekEnd: 12, status: 'not-studied', notes: '' },
                { lo: 7, weekStart: 13, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        Biology: {
            los: [
                { lo: 1, weekStart: 1, weekEnd: 1, status: 'not-studied', notes: '' },
                { lo: 2, weekStart: 2, weekEnd: 3, status: 'not-studied', notes: '' },
                { lo: 3, weekStart: 4, weekEnd: 6, status: 'not-studied', notes: '' },
                { lo: 4, weekStart: 7, weekEnd: 8, status: 'not-studied', notes: '' },
                { lo: 5, weekStart: 9, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 6, weekStart: 11, weekEnd: 12, status: 'not-studied', notes: '' },
                { lo: 7, weekStart: 13, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        Geology: {
            los: [
                { lo: 1, weekStart: 1, weekEnd: 2, status: 'not-studied', notes: '' },
                { lo: 2, weekStart: 3, weekEnd: 4, status: 'not-studied', notes: '' },
                { lo: 3, weekStart: 5, weekEnd: 5, status: 'not-studied', notes: '' },
                { lo: 4, weekStart: 6, weekEnd: 7, status: 'not-studied', notes: '' },
                { lo: 5, weekStart: 8, weekEnd: 9, status: 'not-studied', notes: '' },
                { lo: 6, weekStart: 10, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 7, weekStart: 11, weekEnd: 12, status: 'not-studied', notes: '' },
                { lo: 8, weekStart: 13, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        Math: {
            los: [
                { lo: 1, weekStart: 1, weekEnd: 4, status: 'not-studied', notes: '' },
                { lo: 2, weekStart: 5, weekEnd: 6, status: 'not-studied', notes: '' },
                { lo: 3, weekStart: 7, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 4, weekStart: 11, weekEnd: 11, status: 'not-studied', notes: '' },
                { lo: 5, weekStart: 12, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        Mechanics: {
            los: [
                { lo: 1, weekStart: 1, weekEnd: 4, status: 'not-studied', notes: '' },
                { lo: 2, weekStart: 5, weekEnd: 7, status: 'not-studied', notes: '' },
                { lo: 3, weekStart: 8, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 4, weekStart: 11, weekEnd: 12, status: 'not-studied', notes: '' },
            ]
        },
        CS: {
            los: [
                { lo: 1, weekStart: 1, weekEnd: 4, status: 'not-studied', notes: '' },
                { lo: 2, weekStart: 5, weekEnd: 7, status: 'not-studied', notes: '' },
                { lo: 3, weekStart: 8, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 4, weekStart: 11, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        French: {
            los: [
                { lo: 1, weekStart: 1, weekEnd: 7, status: 'not-studied', notes: '', description: 'Unité 1' },
                { lo: 2, weekStart: 8, weekEnd: 14, status: 'not-studied', notes: '', description: 'Unité 2' },
            ]
        },
        German: {
            los: [
                { lo: 1, weekStart: 1, weekEnd: 5, status: 'not-studied', notes: '', description: 'Lektion 1' },
                { lo: 2, weekStart: 6, weekEnd: 10, status: 'not-studied', notes: '', description: 'Lektion 2' },
                { lo: 3, weekStart: 11, weekEnd: 14, status: 'not-studied', notes: '', description: 'Lektion 3' },
            ]
        }
    },
    'g11-s2': {
        Physics: {
            los: [
                { lo: 8, weekStart: 1, weekEnd: 1, status: 'not-studied', notes: '' },
                { lo: 9, weekStart: 2, weekEnd: 2, status: 'not-studied', notes: '' },
                { lo: 10, weekStart: 3, weekEnd: 4, status: 'not-studied', notes: '' },
                { lo: 11, weekStart: 5, weekEnd: 6, status: 'not-studied', notes: '' },
                { lo: 12, weekStart: 7, weekEnd: 8, status: 'not-studied', notes: '' },
                { lo: 13, weekStart: 9, weekEnd: 9, status: 'not-studied', notes: '' },
                { lo: 14, weekStart: 10, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 15, weekStart: 11, weekEnd: 11, status: 'not-studied', notes: '' },
                { lo: 16, weekStart: 12, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        Chemistry: {
            los: [
                { lo: 8, weekStart: 1, weekEnd: 3, status: 'not-studied', notes: '' },
                { lo: 9, weekStart: 4, weekEnd: 6, status: 'not-studied', notes: '' },
                { lo: 10, weekStart: 7, weekEnd: 11, status: 'not-studied', notes: '' },
                { lo: 11, weekStart: 12, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        Biology: {
            los: [
                { lo: 8, weekStart: 1, weekEnd: 2, status: 'not-studied', notes: '' },
                { lo: 9, weekStart: 3, weekEnd: 3, status: 'not-studied', notes: '' },
                { lo: 10, weekStart: 4, weekEnd: 5, status: 'not-studied', notes: '' },
                { lo: 11, weekStart: 6, weekEnd: 7, status: 'not-studied', notes: '' },
                { lo: 12, weekStart: 8, weekEnd: 9, status: 'not-studied', notes: '' },
                { lo: 13, weekStart: 10, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 14, weekStart: 11, weekEnd: 11, status: 'not-studied', notes: '' },
            ]
        },
        Geology: {
            los: [
                { lo: 9, weekStart: 1, weekEnd: 2, status: 'not-studied', notes: '' },
                { lo: 10, weekStart: 3, weekEnd: 4, status: 'not-studied', notes: '' },
                { lo: 11, weekStart: 5, weekEnd: 5, status: 'not-studied', notes: '' },
                { lo: 12, weekStart: 6, weekEnd: 7, status: 'not-studied', notes: '' },
                { lo: 13, weekStart: 8, weekEnd: 9, status: 'not-studied', notes: '' },
                { lo: 14, weekStart: 10, weekEnd: 11, status: 'not-studied', notes: '' },
                { lo: 15, weekStart: 12, weekEnd: 12, status: 'not-studied', notes: '' },
            ]
        },
        Math: {
            los: [
                { lo: 6, weekStart: 1, weekEnd: 3, status: 'not-studied', notes: '' },
                { lo: 7, weekStart: 4, weekEnd: 6, status: 'not-studied', notes: '' },
                { lo: 8, weekStart: 7, weekEnd: 9, status: 'not-studied', notes: '' },
                { lo: 9, weekStart: 10, weekEnd: 12, status: 'not-studied', notes: '' },
                { lo: 10, weekStart: 13, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        Mechanics: {
            los: [
                { lo: 5, weekStart: 1, weekEnd: 5, status: 'not-studied', notes: '' },
                { lo: 6, weekStart: 6, weekEnd: 10, status: 'not-studied', notes: '' },
                { lo: 7, weekStart: 11, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        CS: {
            los: [
                { lo: 5, weekStart: 1, weekEnd: 3, status: 'not-studied', notes: '' },
                { lo: 6, weekStart: 4, weekEnd: 6, status: 'not-studied', notes: '' },
                { lo: 7, weekStart: 7, weekEnd: 9, status: 'not-studied', notes: '' },
                { lo: 8, weekStart: 10, weekEnd: 11, status: 'not-studied', notes: '' },
                { lo: 9, weekStart: 12, weekEnd: 14, status: 'not-studied', notes: '' },
            ]
        },
        French: {
            los: [
                { lo: 3, weekStart: 1, weekEnd: 7, status: 'not-studied', notes: '', description: 'Unité 3' },
                { lo: 4, weekStart: 8, weekEnd: 14, status: 'not-studied', notes: '', description: 'Unité 4' },
            ]
        },
        German: {
            los: [
                { lo: 4, weekStart: 1, weekEnd: 5, status: 'not-studied', notes: '', description: 'Lektion 4' },
                { lo: 5, weekStart: 6, weekEnd: 10, status: 'not-studied', notes: '', description: 'Lektion 5' },
                { lo: 6, weekStart: 11, weekEnd: 14, status: 'not-studied', notes: '', description: 'Lektion 6' },
            ]
        }
    },
    'grade12': {
        Physics: {
            icon: 'zap',
            color: 'yellow',
            los: [
                { lo: 1, weekStart: 1, weekEnd: 4, status: 'not-studied', notes: '', description: 'Physics LO 1' },
                { lo: 2, weekStart: 5, weekEnd: 8, status: 'not-studied', notes: '', description: 'Physics LO 2' },
                { lo: 3, weekStart: 9, weekEnd: 12, status: 'not-studied', notes: '', description: 'Physics LO 3' },
                { lo: 4, weekStart: 13, weekEnd: 16, status: 'not-studied', notes: '', description: 'Physics LO 4' },
                { lo: 5, weekStart: 17, weekEnd: 20, status: 'not-studied', notes: '', description: 'Physics LO 5' },
                { lo: 6, weekStart: 21, weekEnd: 24, status: 'not-studied', notes: '', description: 'Physics LO 6' },
                { lo: 7, weekStart: 25, weekEnd: 28, status: 'not-studied', notes: '', description: 'Physics LO 7' },
                { lo: 8, weekStart: 29, weekEnd: 32, status: 'not-studied', notes: '', description: 'Physics LO 8' },
                { lo: 9, weekStart: 33, weekEnd: 36, status: 'not-studied', notes: '', description: 'Physics LO 9' },
            ]
        },
        Chemistry: {
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3v12m6-12v12M4 7h16M4 11h16m-7 8h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1z"/></svg>',
            color: 'cyan',
            los: [
                { lo: 1, weekStart: 1, weekEnd: 5, status: 'not-studied', notes: '', description: 'Chemistry LO 1' },
                { lo: 2, weekStart: 6, weekEnd: 10, status: 'not-studied', notes: '', description: 'Chemistry LO 2' },
                { lo: 3, weekStart: 11, weekEnd: 15, status: 'not-studied', notes: '', description: 'Chemistry LO 3' },
                { lo: 4, weekStart: 16, weekEnd: 21, status: 'not-studied', notes: '', description: 'Chemistry LO 4' },
                { lo: 5, weekStart: 22, weekEnd: 26, status: 'not-studied', notes: '', description: 'Chemistry LO 5' },
                { lo: 6, weekStart: 27, weekEnd: 31, status: 'not-studied', notes: '', description: 'Chemistry LO 6' },
                { lo: 7, weekStart: 32, weekEnd: 36, status: 'not-studied', notes: '', description: 'Chemistry LO 7' },
            ]
        },
        Biology: {
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4 4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm-6 8c0 2.21 1.79 4 4 4m6 0c2.21 0 4-1.79 4-4M6 14v2a8 8 0 0 0 8 8 8 8 0 0 0 8-8v-2"/></svg>',
            color: 'green',
            los: [
                { lo: 1, weekStart: 1, weekEnd: 5, status: 'not-studied', notes: '', description: 'Biology LO 1' },
                { lo: 2, weekStart: 6, weekEnd: 10, status: 'not-studied', notes: '', description: 'Biology LO 2' },
                { lo: 3, weekStart: 11, weekEnd: 16, status: 'not-studied', notes: '', description: 'Biology LO 3' },
                { lo: 4, weekStart: 17, weekEnd: 21, status: 'not-studied', notes: '', description: 'Biology LO 4' },
                { lo: 5, weekStart: 22, weekEnd: 26, status: 'not-studied', notes: '', description: 'Biology LO 5' },
                { lo: 6, weekStart: 27, weekEnd: 31, status: 'not-studied', notes: '', description: 'Biology LO 6' },
                { lo: 7, weekStart: 32, weekEnd: 36, status: 'not-studied', notes: '', description: 'Biology LO 7' },
            ]
        },
        Geology: {
            icon: 'geology',
            color: 'purple',
            los: [
                { lo: 1, weekStart: 1, weekEnd: 4, status: 'not-studied', notes: '', description: 'Geology LO 1' },
                { lo: 2, weekStart: 5, weekEnd: 9, status: 'not-studied', notes: '', description: 'Geology LO 2' },
                { lo: 3, weekStart: 10, weekEnd: 13, status: 'not-studied', notes: '', description: 'Geology LO 3' },
                { lo: 4, weekStart: 14, weekEnd: 18, status: 'not-studied', notes: '', description: 'Geology LO 4' },
                { lo: 5, weekStart: 19, weekEnd: 23, status: 'not-studied', notes: '', description: 'Geology LO 5' },
                { lo: 6, weekStart: 24, weekEnd: 27, status: 'not-studied', notes: '', description: 'Geology LO 6' },
                { lo: 7, weekStart: 28, weekEnd: 32, status: 'not-studied', notes: '', description: 'Geology LO 7' },
                { lo: 8, weekStart: 33, weekEnd: 36, status: 'not-studied', notes: '', description: 'Geology LO 8' },
            ]
        },
        Math: {
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3l18 18M3 21L21 3m-9 0v18M3 12h18"/></svg>',
            color: 'red',
            los: [
                { lo: 1, weekStart: 1, weekEnd: 7, status: 'not-studied', notes: '', description: 'Math LO 1' },
                { lo: 2, weekStart: 8, weekEnd: 14, status: 'not-studied', notes: '', description: 'Math LO 2' },
                { lo: 3, weekStart: 15, weekEnd: 22, status: 'not-studied', notes: '', description: 'Math LO 3' },
                { lo: 4, weekStart: 23, weekEnd: 29, status: 'not-studied', notes: '', description: 'Math LO 4' },
                { lo: 5, weekStart: 30, weekEnd: 36, status: 'not-studied', notes: '', description: 'Math LO 5' },
            ]
        },
        Mechanics: {
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m7.07-13.07L14.12 9.88m-4.24 4.24L4.93 19.07m0-14.14l4.95 4.95m4.24 4.24l4.95 4.95"/></svg>',
            color: 'orange',
            los: [
                { lo: 1, weekStart: 1, weekEnd: 7, status: 'not-studied', notes: '', description: 'Mechanics LO 1' },
                { lo: 2, weekStart: 8, weekEnd: 14, status: 'not-studied', notes: '', description: 'Mechanics LO 2' },
                { lo: 3, weekStart: 15, weekEnd: 22, status: 'not-studied', notes: '', description: 'Mechanics LO 3' },
                { lo: 4, weekStart: 23, weekEnd: 29, status: 'not-studied', notes: '', description: 'Mechanics LO 4' },
                { lo: 5, weekStart: 30, weekEnd: 36, status: 'not-studied', notes: '', description: 'Mechanics LO 5' },
            ]
        },
        French: {
            icon: 'french',
            color: 'blue',
            los: [
                { lo: 1, weekStart: 1, weekEnd: 9, status: 'not-studied', notes: '', description: 'Unité 1' },
                { lo: 2, weekStart: 10, weekEnd: 18, status: 'not-studied', notes: '', description: 'Unité 2' },
                { lo: 3, weekStart: 19, weekEnd: 27, status: 'not-studied', notes: '', description: 'Unité 3' },
                { lo: 4, weekStart: 28, weekEnd: 36, status: 'not-studied', notes: '', description: 'Unité 4' },
            ]
        },
        German: {
            icon: 'german',
            color: 'yellow',
            los: [
                { lo: 1, weekStart: 1, weekEnd: 7, status: 'not-studied', notes: '', description: 'Lektion 1' },
                { lo: 2, weekStart: 8, weekEnd: 14, status: 'not-studied', notes: '', description: 'Lektion 2' },
                { lo: 3, weekStart: 15, weekEnd: 21, status: 'not-studied', notes: '', description: 'Lektion 3' },
                { lo: 4, weekStart: 22, weekEnd: 28, status: 'not-studied', notes: '', description: 'Lektion 4' },
                { lo: 5, weekStart: 29, weekEnd: 36, status: 'not-studied', notes: '', description: 'Lektion 5' },
            ]
        }
    }
};
