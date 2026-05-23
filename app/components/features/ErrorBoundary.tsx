'use client';

import { Component, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('React Error Boundary caught an error', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'var(--ds-bg-primary)',
                            color: 'var(--ds-text-primary)',
                            padding: '2rem',
                            zIndex: 9999,
                        }}
                    >
                        <div style={{ textAlign: 'center', maxWidth: '400px' }}>
                            <h2 style={{ marginBottom: '1rem' }}>Something went wrong</h2>
                            <p style={{ color: 'var(--ds-text-secondary)', marginBottom: '1.5rem' }}>
                                {this.state.error?.message || 'An unexpected error occurred'}
                            </p>
                            <button
                                type="button"
                                onClick={() => window.location.reload()}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    background: 'var(--ds-color-primary)',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: 'var(--ds-radius-md)',
                                    cursor: 'pointer',
                                }}
                            >
                                Reload Page
                            </button>
                        </div>
                    </div>
                )
            );
        }

        return this.props.children;
    }
}
