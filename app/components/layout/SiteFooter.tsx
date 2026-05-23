import Link from 'next/link';
import Image from 'next/image';
import { type Ref } from 'react';
import './SiteFooter.css';

interface SiteFooterProps {
    visible?: boolean;
    footerRef?: Ref<HTMLElement>;
}

export default function SiteFooter({ visible = true, footerRef }: SiteFooterProps) {
    return (
        <footer
            className={`landing-footer${visible ? ' landing-footer--visible' : ''}`}
            ref={footerRef}
            aria-label="Site footer"
        >
            <div className="landing-footer-bg" />
            <div className="landing-footer-content">
                <div className="landing-footer-brand">
                    <Link href="/dashboard" className="landing-footer-logo-container">
                        <div className="landing-footer-logo">
                            <Image src="/icons/logo.svg" alt="EduTrace" width={32} height={32} />
                        </div>
                        <span className="landing-footer-company">EduTrace</span>
                    </Link>
                    <p className="brand-desc">
                        Empowering Egyptian STEM schools students to achieve excellence through
                        intelligent learning tools.
                    </p>
                </div>

                <div className="landing-footer-links">
                    <div className="landing-footer-column">
                        <span className="landing-footer-heading">Support</span>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/team">Our Team</Link>
                    </div>

                    <div className="landing-footer-column">
                        <span className="landing-footer-heading">Legal</span>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>

                    <div className="landing-footer-column">
                        <span className="landing-footer-heading">Connect With Us</span>
                        <div className="landing-footer-social">
                            <a
                                href="https://www.facebook.com/profile.php?id=61582023611353"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="Facebook"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/edutraceapp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="LinkedIn"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com/@edutraceapp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="YouTube"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.13 1 12 1 12s0 3.87.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.87 23 12 23 12s0-3.87-.46-5.58z"></path>
                                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/edutraceapp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="Instagram"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <circle cx="17.5" cy="6.5" r="1.5"></circle>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="landing-footer-bottom">
                <span>
                    &copy; {new Date().getFullYear()} EduTrace. By students who should probably be
                    studying right now.
                </span>
            </div>
        </footer>
    );
}
