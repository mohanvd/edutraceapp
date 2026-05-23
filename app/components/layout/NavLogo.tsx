'use client';

import Link from 'next/link';

interface NavLogoProps {
    href: string;
}

export function NavLogo({ href }: NavLogoProps) {
    return (
        <Link href={href} className="nav-logo">
            <svg
                className="nav-logoIcon"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M20 70 Q35 30 50 50 T80 30"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                />
            </svg>
            <span className="nav-logoText">EduTrace</span>
        </Link>
    );
}
