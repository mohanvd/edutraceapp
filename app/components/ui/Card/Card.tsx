'use client';

import React, { forwardRef, HTMLAttributes } from 'react';
import './Card.css';

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'interactive';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    padding?: CardPadding;
    fullWidth?: boolean;
    as?: 'div' | 'article' | 'section';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    (
        {
            children,
            variant = 'default',
            padding = 'md',
            fullWidth = false,
            as: Component = 'div',
            className = '',
            ...props
        },
        ref
    ) => {
        const classNames = [
            'ds-card',
            `ds-card--${variant}`,
            `ds-card--padding-${padding}`,
            fullWidth && 'ds-card--full-width',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <Component ref={ref} className={classNames} {...props}>
                {children}
            </Component>
        );
    }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    subtitle?: string;
    action?: React.ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ title, subtitle, action, children, className = '', ...props }, ref) => {
        return (
            <div ref={ref} className={`ds-card-header ${className}`} {...props}>
                {(title || subtitle) && (
                    <div className="ds-card-header__content">
                        {title && <h3 className="ds-card-header__title">{title}</h3>}
                        {subtitle && <p className="ds-card-header__subtitle">{subtitle}</p>}
                    </div>
                )}
                {children}
                {action && <div className="ds-card-header__action">{action}</div>}
            </div>
        );
    }
);

CardHeader.displayName = 'CardHeader';

export const CardBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ children, className = '', ...props }, ref) => {
        return (
            <div ref={ref} className={`ds-card-body ${className}`} {...props}>
                {children}
            </div>
        );
    }
);

CardBody.displayName = 'CardBody';

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
    align?: 'left' | 'center' | 'right' | 'between';
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
    ({ children, align = 'right', className = '', ...props }, ref) => {
        return (
            <div ref={ref} className={`ds-card-footer ds-card-footer--${align} ${className}`} {...props}>
                {children}
            </div>
        );
    }
);

CardFooter.displayName = 'CardFooter';

export default Card;
