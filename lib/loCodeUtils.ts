/**
 * Learning Outcome Code Mapping (Client-safe utilities)
 * Maps subject codes to full subject names and vice versa
 */

export const SUBJECT_CODES: Record<string, string> = {
    'PH': 'physics',
    'CH': 'chemistry',
    'BI': 'biology',
    'ES': 'geology', // Earth Science
    'MA': 'math',
    'ME': 'mechanics',
    'CS': 'cs',
    'FR': 'french',
    'DE': 'german',
};

export const SUBJECT_NAMES: Record<string, string> = {
    'physics': 'PH',
    'chemistry': 'CH',
    'biology': 'BI',
    'geology': 'ES',
    'math': 'MA',
    'mechanics': 'ME',
    'cs': 'CS',
    'french': 'FR',
    'german': 'DE',
};

export const GRADE_CODES: Record<string, string> = {
    '1': '10',
    '2': '11',
    '3': '12',
};

export const GRADE_NUMBERS: Record<string, string> = {
    '10': '1',
    '11': '2',
    '12': '3',
};

/**
 * Parse LO code to components
 * Example: "PH.2.01" -> { subject: "physics", grade: "11", loNumber: "01" }
 */
export function parseLoCode(code: string): { subject: string; grade: string; loNumber: string } | null {

    const cleanCode = code.replace(/^\//, '');
    const match = cleanCode.match(/^([A-Z]{2})\.([1-3])\.(\d+)$/i);

    if (!match) {
        return null;
    }

    const [, subjectCode, gradeCode, loNumber] = match;
    const subject = SUBJECT_CODES[subjectCode.toUpperCase()];
    const grade = GRADE_CODES[gradeCode];

    if (!subject || !grade) {
        return null;
    }

    return {
        subject,
        grade,
        loNumber: loNumber.padStart(2, '0'), // Ensure 2 digits
    };
}

/**
 * Generate LO code from components
 * Example: { subject: "physics", grade: "11", loNumber: "1" } -> "PH.2.01"
 */
export function generateLoCode(subject: string, grade: string, loNumber: string | number): string {
    const subjectCode = SUBJECT_NAMES[subject.toLowerCase()];
    const gradeCode = GRADE_NUMBERS[grade];
    const paddedLo = String(loNumber).padStart(2, '0');

    if (!subjectCode || !gradeCode) {
        throw new Error(`Invalid subject or grade: ${subject}, ${grade}`);
    }

    return `${subjectCode}.${gradeCode}.${paddedLo}`;
}
