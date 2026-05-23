'use client';

import { useState, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import '@/app/components/layout/Dashboard.css';
import { generateLoCode } from '@/lib/loCodeUtils';
import { curriculumData } from '@/lib/data/curriculum';

const statusLabels = {
    'not-studied': 'Not Studied',
    'in-progress': 'In Progress',
    completed: 'Completed',
    mastered: 'Mastered',
};

export default function GradeSemesterDashboard() {
    const pathname = usePathname();
    const router = useRouter();

    const match = pathname?.match(/\/grade(\d+)\/semester(\d+)/);
    const grade = match ? match[1] : '10';
    const semester = match ? match[2] : '1';
    const gradeKey = `g${grade}-s${semester}`;
    const initialData = curriculumData[gradeKey];

    const [activeSubject, setActiveSubject] = useState('Physics');
    const [weekFilter, setWeekFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');

    const data = useMemo(() => initialData ?? {}, [initialData]);

    if (!initialData) {
        return (
            <div className="p-8 text-center">
                Curriculum data not found for Grade {grade} Semester {semester}
            </div>
        );
    }

    const handleSubjectClick = (subject: string, week?: number) => {
        setActiveSubject(subject);
        if (week) setWeekFilter(week.toString());
        setTimeout(() => {
            const tabsElement = document.querySelector('.tabs-container');
            tabsElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    const getStats = () => {
        const subjects = Object.keys(data);
        const totalLOs = subjects.reduce((sum, subject) => sum + data[subject].los.length, 0);
        return { totalLOs };
    };

    const buildWeeklyGrid = () => {
        const weeks = 14;
        const subjects = Object.keys(data).filter(s => !['CS', 'French', 'German'].includes(s));
        const grid: Record<string, Array<{ los: string; status: string }>> = {};

        subjects.forEach(subject => {
            grid[subject] = Array(weeks)
                .fill(null)
                .map(() => ({ los: '', status: 'not-studied' }));
            data[subject].los.forEach(lo => {
                for (let week = lo.weekStart; week <= lo.weekEnd; week++) {
                    if (week <= weeks) {
                        const cell = grid[subject][week - 1];
                        if (cell.los) cell.los += `, ${lo.lo}`;
                        else cell.los = `${lo.lo}`;
                    }
                }
            });
        });

        return { weeks, subjects, grid };
    };

    const weeklyData = buildWeeklyGrid();
    const stats = getStats();
    const currentSubjectData = data[activeSubject];

    const filteredLOs =
        currentSubjectData?.los.filter(lo => {
            if (weekFilter !== 'all') {
                const week = parseInt(weekFilter, 10);
                if (lo.weekStart > week || lo.weekEnd < week) return false;
            }
            if (statusFilter !== 'all' && lo.status !== statusFilter) return false;
            return true;
        }) || [];

    return (
        <div className="dashboard-container">
            <div>
                <div className="weekly-calendar">
                    <div className="calendar-scroll">
                        <table className="calendar-table">
                            <thead>
                                <tr>
                                    <th className="subject-header">Week</th>
                                    {weeklyData.subjects.map(subject => (
                                        <th key={subject} className="subject-header">
                                            {subject}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[...Array(weeklyData.weeks)].map((_, weekIndex) => (
                                    <tr key={weekIndex}>
                                        <td className="week-number">{weekIndex + 1}</td>
                                        {weeklyData.subjects.map(subject => {
                                            const cell = weeklyData.grid[subject][weekIndex];
                                            const hasLOs = cell.los !== '';
                                            return (
                                                <td
                                                    key={subject}
                                                    className={`lo-cell lo-cell-${cell.status} ${hasLOs ? 'lo-cell-clickable' : ''}`}
                                                    onClick={() =>
                                                        hasLOs &&
                                                        handleSubjectClick(subject, weekIndex + 1)
                                                    }
                                                >
                                                    {cell.los || '-'}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="curriculum-stats-panel">
                    <div className="curriculum-stats-grid">
                        <div className="curriculum-stat-item">
                            <span className="curriculum-stat-value">{stats.totalLOs}</span>
                            <span className="curriculum-stat-label">Total Learning Outcomes</span>
                        </div>
                    </div>
                </div>

                <div className="filter-bar">
                    <div className="filter-grid">
                        <div className="filter-group">
                            <label>Filter by Week</label>
                            <select
                                value={weekFilter}
                                onChange={e => setWeekFilter(e.target.value)}
                            >
                                <option value="all">All Weeks</option>
                                {[...Array(weeklyData.weeks)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        Week {i + 1}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Filter by Status</label>
                            <select
                                value={statusFilter}
                                onChange={e => setStatusFilter(e.target.value)}
                            >
                                <option value="all">All Statuses</option>
                                <option value="not-studied">Not Studied</option>
                                <option value="in-progress">In Progress</option>
                                <option value="completed">Completed</option>
                                <option value="mastered">Mastered</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="tabs-container">
                    <div className="tabs-wrapper">
                        {Object.keys(data).map(subject => (
                            <button
                                key={subject}
                                type="button"
                                onClick={() => setActiveSubject(subject)}
                                className={`tab-button ${activeSubject === subject ? 'active' : ''}`}
                            >
                                {subject}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="lo-grid">
                    {filteredLOs.map(lo => (
                        <div
                            key={lo.lo}
                            className="lo-card"
                            onClick={() =>
                                router.push(`/${generateLoCode(activeSubject, grade, lo.lo)}`)
                            }
                            style={{ cursor: 'pointer' }}
                            onKeyDown={e => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    router.push(`/${generateLoCode(activeSubject, grade, lo.lo)}`);
                                }
                            }}
                            role="button"
                            tabIndex={0}
                        >
                            <div className="lo-card-header">
                                <div className="lo-info">
                                    <h3>LO {lo.lo}</h3>
                                    <p className="lo-week">
                                        Week {lo.weekStart}
                                        {lo.weekEnd !== lo.weekStart ? `-${lo.weekEnd}` : ''}
                                    </p>
                                </div>
                                <span className={`status-badge status-${lo.status}`}>
                                    {statusLabels[lo.status]}
                                </span>
                            </div>
                            {lo.description && (
                                <p className="lo-description" style={{ marginBottom: '1rem', color: '#666' }}>
                                    {lo.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {filteredLOs.length === 0 && (
                    <div className="empty-state">No Learning Outcomes match the current filters.</div>
                )}
            </div>
        </div>
    );
}
