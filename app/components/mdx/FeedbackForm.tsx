'use client';

import React from 'react';
import './FeedbackForm.css';

/**
 * Placeholder feedback UI for the open-source curriculum viewer.
 * The full EduTrace app submits feedback to a server API; this build is static-only.
 */
export function FeedbackForm() {
    return (
        <div className="feedback-form-placeholder">
            <p style={{ margin: 0, color: 'var(--ds-text-secondary)', fontSize: '0.9rem' }}>
                Feedback submission is not available in this open-source curriculum viewer.
            </p>
        </div>
    );
}
