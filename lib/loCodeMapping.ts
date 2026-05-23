/**
 * Learning Outcome Code Mapping
 * Maps subject codes to full subject names and vice versa
 * 
 * ⚠️ SERVER-ONLY: This file uses fs/path and cannot be imported in client components
 * For client-safe utilities, use ./loCodeUtils.ts instead
 */
import 'server-only';

import fs from 'fs';
import path from 'path';
import { generateLoCode, parseLoCode } from './loCodeUtils';

export * from './loCodeUtils';

/**
 * Find which semester the LO belongs to based on file system
 * Returns the full file path if found
 */
export function findLoPath(subject: string, grade: string, loNumber: string): {
    semester: string;
    loName: string;
} | null {
    const contentDir = path.join(process.cwd(), 'content', `grade${grade}`);

    for (const semester of ['semester1', 'semester2']) {
        const semesterDir = path.join(contentDir, semester, subject);

        if (!fs.existsSync(semesterDir)) continue;

        const files = fs.readdirSync(semesterDir).filter((f: string) => f.endsWith('.mdx'));

        for (const file of files) {
            const loMatch = file.match(/lo(\d+)\.mdx$/);

            if (loMatch && parseInt(loMatch[1]) === parseInt(loNumber)) {
                return {
                    semester: semester.replace('semester', ''),
                    loName: file.replace('.mdx', ''),
                };
            }
        }
    }

    return null;
}

/**
 * Convert old URL format to new code format
 * Example: "/grade11/semester1/physics/lo1" -> "/PH.2.01"
 */
export function urlToCode(url: string): string {
    const match = url.match(/\/grade(\d+)\/semester\d+\/([^\/]+)\/lo(\d+)/);

    if (!match) {
        return url;
    }

    const [, grade, subject, loNumber] = match;

    try {
        return '/' + generateLoCode(subject, grade, loNumber);
    } catch {
        return url;
    }
}

/**
 * Convert code format to old URL format (requires filesystem lookup for semester)
 * Example: "/PH.2.01" -> "/grade11/semester1/physics/lo1"
 */
export function codeToUrl(code: string): string | null {
    const cleanCode = code.replace(/^\//, '');
    const parsed = parseLoCode(cleanCode);

    if (!parsed) {
        return null;
    }

    const { subject, grade, loNumber } = parsed;
    const loPath = findLoPath(subject, grade, loNumber);

    if (!loPath) {
        return null;
    }

    return `/grade${grade}/semester${loPath.semester}/${subject}/${loPath.loName}`;
}
