'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java';
import cpp from 'highlight.js/lib/languages/cpp';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml'; // HTML
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import sql from 'highlight.js/lib/languages/sql';
import markdown from 'highlight.js/lib/languages/markdown';
import yaml from 'highlight.js/lib/languages/yaml';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('ts', typescript);
hljs.registerLanguage('jsx', javascript);
hljs.registerLanguage('tsx', typescript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('java', java);
hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('c++', cpp);
hljs.registerLanguage('css', css);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('shell', bash);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('md', markdown);
hljs.registerLanguage('mdx', markdown);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('yml', yaml);

export function CodeHighlighter() {
    const pathname = usePathname();
    const safePathname = pathname ?? '';
    const observerRef = useRef<MutationObserver | null>(null);
    const processedPres = useRef<WeakSet<Element>>(new WeakSet());
    const rafRef = useRef<number | null>(null);

    useEffect(() => {

        const isContentPage =
            safePathname.startsWith('/grade') || /^\/[A-Z]{2}\.[1-3]\.\d{2}$/i.test(safePathname);
        if (!isContentPage) return;

        const highlightCode = () => {
            document.querySelectorAll('pre code:not(.hljs)').forEach(block => {
                hljs.highlightElement(block as HTMLElement);
            });
        };

        const addCopyButtons = () => {
            document.querySelectorAll('pre:not(.has-copy-btn)').forEach(pre => {

                if (processedPres.current.has(pre)) return;

                pre.classList.add('has-copy-btn');
                processedPres.current.add(pre);

                const preElement = pre as HTMLElement;
                const computedStyle = window.getComputedStyle(preElement);
                if (computedStyle.position === 'static') {
                    preElement.style.position = 'relative';
                }

                const copyBtn = document.createElement('button');
                copyBtn.className = 'code-copy-btn';
                copyBtn.setAttribute('data-code-copy', 'true');
                copyBtn.innerHTML = `
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span>Copy</span>
                `;
                copyBtn.style.cssText = `
                    position: absolute;
                    top: 8px;
                    right: 8px;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    padding: 4px 8px;
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 6px;
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 12px;
                    cursor: pointer;
                    transition: color 0.2s, background-color 0.2s, border-color 0.2s, opacity 0.2s, transform 0.2s;
                    z-index: 10;
                `;

                copyBtn.addEventListener('mouseenter', () => {
                    copyBtn.style.background = 'rgba(255, 255, 255, 0.15)';
                    copyBtn.style.color = 'rgba(255, 255, 255, 0.9)';
                });
                copyBtn.addEventListener('mouseleave', () => {
                    copyBtn.style.background = 'rgba(255, 255, 255, 0.1)';
                    copyBtn.style.color = 'rgba(255, 255, 255, 0.6)';
                });

                copyBtn.addEventListener('click', async () => {
                    const code = pre.querySelector('code');
                    if (code) {
                        await navigator.clipboard.writeText(code.textContent || '');
                        copyBtn.innerHTML = `
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Copied!</span>
                        `;
                        copyBtn.style.color = '#22c55e';
                        setTimeout(() => {
                            copyBtn.innerHTML = `
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                                <span>Copy</span>
                            `;
                            copyBtn.style.color = 'rgba(255, 255, 255, 0.6)';
                        }, 2000);
                    }
                });

                pre.appendChild(copyBtn);
            });
        };

        const timeoutId = setTimeout(() => {
            highlightCode();
            addCopyButtons();
        }, 100);

        const debouncedProcess = () => {
            if (rafRef.current) return; // Already scheduled
            rafRef.current = requestAnimationFrame(() => {
                rafRef.current = null;
                highlightCode();
                addCopyButtons();
            });
        };

        const mdxWrapper = document.querySelector('.mdx-wrapper');
        if (mdxWrapper) {
            observerRef.current = new MutationObserver(debouncedProcess);
            observerRef.current.observe(mdxWrapper, {
                childList: true,
                subtree: true,
            });
        }

        return () => {
            clearTimeout(timeoutId);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            observerRef.current?.disconnect();
        };
    }, [safePathname]); // Re-run when pathname changes

    useEffect(() => {
        processedPres.current = new WeakSet();
    }, [safePathname]);

    return null;
}
