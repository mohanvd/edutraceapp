'use client';

import React, { ReactNode, useState, useCallback } from 'react';

interface TabsProps {
    items?: string[];
    children: ReactNode;
}

interface TabProps {
    label?: string;
    children: ReactNode;
}

export function Tab({ children }: TabProps) {
    return <div>{children}</div>;
}

export function Tabs({ items = [], children }: TabsProps) {
    const [activeTab, setActiveTab] = useState(0);

    const childArray = React.Children.toArray(children);

    const tabItems =
        items.length > 0
            ? items
            : childArray.map((child, i) => {
                  if (React.isValidElement(child)) {
                      const props = child.props as Record<string, unknown>;
                      if (props && typeof props.label === 'string') {
                          return props.label;
                      }
                  }
                  return `Tab ${i + 1}`;
              });

    return (
        <div className="custom-tabs">
            <div className="custom-tabs-list" role="tablist">
                {tabItems.map((item, index) => (
                    <button
                        key={index}
                        role="tab"
                        aria-selected={activeTab === index}
                        className={`custom-tab-button ${activeTab === index ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className="custom-tabs-content">
                {childArray.map((child, index) => (
                    <div
                        key={index}
                        role="tabpanel"
                        className="custom-tab-panel"
                        style={{ display: activeTab === index ? 'block' : 'none' }}
                    >
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}

Tabs.Tab = Tab;

interface ImageGalleryProps {
    images: string[];
    captions?: string[];
    width?: string;
    height?: string;
}

export function ImageGallery({ images, captions, width, height }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const closeLightbox = useCallback(() => setSelectedImage(null), []);

    const showNext = useCallback(
        (e: React.MouseEvent) => {
            e.stopPropagation();
            setSelectedImage(prev => (prev !== null ? (prev + 1) % images.length : null));
        },
        [images.length]
    );

    const showPrev = useCallback(
        (e: React.MouseEvent) => {
            e.stopPropagation();
            setSelectedImage(prev =>
                prev !== null ? (prev - 1 + images.length) % images.length : null
            );
        },
        [images.length]
    );

    const galleryStyle: React.CSSProperties = {};
    if (width) galleryStyle.maxWidth = width;
    const imageStyle: React.CSSProperties = {};
    if (height) imageStyle.height = height;

    return (
        <>
            <div className="custom-image-gallery" style={galleryStyle}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="custom-gallery-item"
                        onClick={() => setSelectedImage(index)}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={image}
                            alt={captions?.[index] || `Image ${index + 1}`}
                            style={imageStyle}
                        />
                        {captions?.[index] && (
                            <div className="custom-gallery-caption">{captions[index]}</div>
                        )}
                    </div>
                ))}
            </div>

            {selectedImage !== null && (
                <div className="custom-lightbox" onClick={closeLightbox}>
                    <button
                        className="custom-lightbox-close"
                        onClick={closeLightbox}
                        aria-label="Close"
                    >
                        ×
                    </button>
                    {images.length > 1 && (
                        <>
                            <button
                                className="custom-lightbox-prev"
                                onClick={showPrev}
                                aria-label="Previous"
                            >
                                ‹
                            </button>
                            <button
                                className="custom-lightbox-next"
                                onClick={showNext}
                                aria-label="Next"
                            >
                                ›
                            </button>
                        </>
                    )}
                    <div className="custom-lightbox-content" onClick={e => e.stopPropagation()}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={images[selectedImage]}
                            alt={captions?.[selectedImage] || `Image ${selectedImage + 1}`}
                        />
                        {captions?.[selectedImage] && (
                            <div className="custom-lightbox-caption">{captions[selectedImage]}</div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

interface AccordionItemProps {
    title: string;
    children: ReactNode;
}

export function AccordionItem({ title, children }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`custom-accordion-item ${isOpen ? 'open' : ''}`}>
            <button
                className="custom-accordion-trigger"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span>{title}</span>
                <svg
                    className={`custom-accordion-chevron ${isOpen ? 'open' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="16"
                    height="16"
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>
            {isOpen && <div className="custom-accordion-content">{children}</div>}
        </div>
    );
}

interface AccordionProps {
    children: ReactNode;
}

export function Accordion({ children }: AccordionProps) {
    return <div className="custom-accordion">{children}</div>;
}

interface ChoiceProps {
    children: ReactNode;
    correct?: boolean;
    image?: string;
}

export function Choice({ children, correct, image }: ChoiceProps) {
    return (
        <div
            data-correct={correct ? 'true' : 'false'}
            data-image={image || ''}
            className="quiz-choice-data"
        >
            {children}
        </div>
    );
}

interface QuizProps {
    question: string;
    image?: string;
    imageAlt?: string;
    children: ReactNode;
}

export function Quiz({ question, image, imageAlt, children }: QuizProps) {
    const [selected, setSelected] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);

    const choices = React.Children.toArray(children);

    const handleSelect = (index: number) => {
        if (showResult) return;
        setSelected(index);
    };

    const handleCheck = () => {
        if (selected === null) return;
        setShowResult(true);
    };

    const handleReset = () => {
        setSelected(null);
        setShowResult(false);
    };

    const isCorrect = (index: number) => {
        const choice = choices[index];
        if (React.isValidElement(choice)) {
            const props = choice.props as Record<string, unknown>;
            return props.correct === true;
        }
        return false;
    };

    const getChoiceImage = (index: number): string | undefined => {
        const choice = choices[index];
        if (React.isValidElement(choice)) {
            const props = choice.props as Record<string, unknown>;
            return typeof props.image === 'string' ? props.image : undefined;
        }
        return undefined;
    };

    return (
        <div className="custom-quiz">
            <div className="custom-quiz-header">
                <svg
                    className="quiz-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span className="custom-quiz-question">{question}</span>
            </div>
            {image && (
                <div className="custom-quiz-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={image} alt={imageAlt || 'Question diagram'} />
                </div>
            )}
            <div className="custom-quiz-choices">
                {choices.map((choice, index) => {
                    let status = '';
                    if (showResult) {
                        if (isCorrect(index)) status = 'correct';
                        else if (selected === index) status = 'incorrect';
                    } else if (selected === index) {
                        status = 'selected';
                    }

                    const choiceImage = getChoiceImage(index);

                    return (
                        <button
                            key={index}
                            className={`custom-quiz-choice ${status}`}
                            onClick={() => handleSelect(index)}
                            disabled={showResult}
                        >
                            <span className="choice-indicator">
                                {String.fromCharCode(65 + index)}
                            </span>
                            <span className="choice-text">
                                {choiceImage && (

                                    <img
                                        src={choiceImage}
                                        alt={`Choice ${String.fromCharCode(65 + index)}`}
                                        className="choice-image"
                                    />
                                )}
                                {React.isValidElement(choice)
                                    ? (choice.props as { children?: React.ReactNode }).children
                                    : choice}
                            </span>
                            {showResult && isCorrect(index) && (
                                <span className="choice-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </span>
                            )}
                            {showResult && selected === index && !isCorrect(index) && (
                                <span className="choice-icon" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
            <div className="custom-quiz-actions">
                {!showResult ? (
                    <button
                        className="quiz-btn quiz-btn-check"
                        onClick={handleCheck}
                        disabled={selected === null}
                    >
                        Check Answer
                    </button>
                ) : (
                    <button className="quiz-btn quiz-btn-reset" onClick={handleReset}>
                        Try Again
                    </button>
                )}
            </div>
        </div>
    );
}
