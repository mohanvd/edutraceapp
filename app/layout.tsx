import './globals.css';
import './styles/components.css';
import './styles/micro-interactions.css';
import './components/ui/Skeleton/skeleton.css';
import 'katex/dist/katex.min.css';
import { DM_Sans, Fraunces, Source_Serif_4, JetBrains_Mono } from 'next/font/google';
import Navbar from './components/layout/Navbar';
import SidebarWrapper from './components/layout/SidebarWrapper';
import { CodeHighlighter } from './components/mdx/CodeHighlighter';
import { ErrorBoundary } from './components/features/ErrorBoundary';
import type { Metadata, Viewport } from 'next';

const dmSans = DM_Sans({
    subsets: ['latin', 'latin-ext'],
    variable: '--font-sans-primary',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin', 'latin-ext'],
    variable: '--font-mono-code',
    display: 'swap',
});

const fraunces = Fraunces({
    subsets: ['latin', 'latin-ext'],
    axes: ['SOFT', 'WONK', 'opsz'],
    variable: '--font-serif-display',
    display: 'swap',
});

const sourceSerif = Source_Serif_4({
    subsets: ['latin', 'latin-ext'],
    variable: '--font-serif-secondary',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'EduTrace Curriculum',
        template: '%s | EduTrace Curriculum',
    },
    description:
        'Open-source STEM curriculum viewer for Egyptian Grade 10 and 11 learning outcomes.',
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/icons/icon.png', type: 'image/png', sizes: '512x512' },
        ],
    },
};

export const viewport: Viewport = {
    themeColor: '#0D0D0D',
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            dir="ltr"
            className={`dark ${dmSans.variable} ${jetbrainsMono.variable} ${fraunces.variable} ${sourceSerif.variable}`}
            style={{ colorScheme: 'dark' }}
            suppressHydrationWarning
        >
            <head>
                <meta charSet="utf-8" />
                <link rel="icon" type="image/png" href="/icons/icon.png" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `!function(){try{var e=document.documentElement;e.classList.add("dark"),e.style.colorScheme="dark",localStorage.setItem("theme","dark");var a=window.location.pathname,n=a.startsWith("/grade10/")||a.startsWith("/grade11/")||/^\\/[A-Z]{2}\\.[1-2]\\.[0-9]{2}$/.test(a);!function o(){document.body?document.body.style.setProperty("--sidebar-width",n?"240px":"0px"):requestAnimationFrame(o)}()}catch(r){}}();`,
                    }}
                />
            </head>
            <body suppressHydrationWarning>
                <CodeHighlighter />
                <ErrorBoundary>
                    <a href="#main-content" className="skip-link">
                        Skip to main content
                    </a>
                    <Navbar />
                    <SidebarWrapper />
                    <main id="main-content" className="app-main">
                        {children}
                    </main>
                </ErrorBoundary>
            </body>
        </html>
    );
}
