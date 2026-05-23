'use client';

import React, { useMemo } from 'react';

interface NumberLineProps {
    min?: number;
    max?: number;
    step?: number;
    points?: Array<{ value: number; label?: string; color?: string; filled?: boolean }>;
    regions?: Array<{ start?: number; end?: number; color?: string }>;
    width?: string | number;
    hideLabels?: boolean;
}

export function NumberLine({
    min = -5,
    max = 5,
    step = 1,
    points = [],
    regions = [],
    width = '100%',
    hideLabels = false,
}: NumberLineProps) {

    const actualMin = Math.min(min, max);
    const actualMax = Math.max(min, max);
    const range = actualMax - actualMin;

    const svgWidth = 800; // internal viewbox width
    const svgHeight = 100;
    const padding = 40;
    const lineLength = svgWidth - padding * 2;
    
    const scaleX = (val: number) => {
        return padding + ((val - actualMin) / range) * lineLength;
    };

    const yPos = svgHeight / 2;

    const ticks = useMemo(() => {
        const arr = [];
        for (let i = actualMin; i <= actualMax; i += step) {
            arr.push(i);
        }
        return arr;
    }, [actualMin, actualMax, step]);

    return (
        <div className="custom-number-line-wrapper" style={{ width, margin: '2rem 0' }}>
            <svg 
                viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
                preserveAspectRatio="xMidYMid meet"
                style={{ width: '100%', height: 'auto', display: 'block' }}
            >
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                    refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                    </marker>
                    <marker id="arrowhead-reverse" markerWidth="10" markerHeight="7" 
                    refX="1" refY="3.5" orient="auto">
                        <polygon points="10 0, 0 3.5, 10 7" fill="currentColor" />
                    </marker>
                </defs>

                {regions.map((region, idx) => {
                    const startVal = region.start !== undefined ? Math.max(region.start, actualMin) : actualMin;
                    const endVal = region.end !== undefined ? Math.min(region.end, actualMax) : actualMax;
                    const x1 = scaleX(startVal);
                    const x2 = scaleX(endVal);
                    const color = region.color || 'rgba(59, 130, 246, 0.3)'; // blue-500 with opacity
                    return (
                        <rect 
                            key={idx}
                            x={x1}
                            y={yPos - 10}
                            width={Math.max(0, x2 - x1)}
                            height={20}
                            fill={color}
                            rx={4}
                        />
                    );
                })}

                <line 
                    x1={padding - 20} 
                    y1={yPos} 
                    x2={svgWidth - padding + 20} 
                    y2={yPos} 
                    stroke="currentColor" 
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                    markerStart="url(#arrowhead-reverse)"
                />

                {ticks.map((tick) => (
                    <g key={tick} transform={`translate(${scaleX(tick)}, ${yPos})`}>
                        <line x1={0} y1={-6} x2={0} y2={6} stroke="currentColor" strokeWidth="2" />
                        {!hideLabels && (
                            <text 
                                x={0} 
                                y={24} 
                                textAnchor="middle" 
                                fill="currentColor" 
                                fontSize="14"
                                fontFamily="system-ui, sans-serif"
                            >
                                {tick}
                            </text>
                        )}
                    </g>
                ))}

                {points.map((pt, idx) => {
                    const x = scaleX(pt.value);
                    const color = pt.color || '#ef4444'; // red-500
                    return (
                        <g key={idx} transform={`translate(${x}, ${yPos})`}>
                            <circle 
                                cx={0} 
                                cy={0} 
                                r={6} 
                                fill={pt.filled !== false ? color : 'var(--background, #fff)'} 
                                stroke={color}
                                strokeWidth="3"
                            />
                            {pt.label && (
                                <text 
                                    x={0} 
                                    y={-20} 
                                    textAnchor="middle" 
                                    fill="currentColor"
                                    fontSize="16"
                                    fontWeight="bold"
                                    fontFamily="system-ui, sans-serif"
                                >
                                    {pt.label}
                                </text>
                            )}
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}

import { useEffect, useRef } from 'react';
import functionPlot from 'function-plot';

interface MathGraphProps {
    options: Record<string, unknown>;
    width?: number;
    height?: number;
}

export function MathGraph({ options, width = 600, height = 400 }: MathGraphProps) {
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!rootRef.current) return;
        
        try {
            functionPlot({
                target: rootRef.current,
                width,
                height,
                ...options
            });
        } catch (error) {
            console.error("Error rendering MathGraph:", error);
        }

    }, [options, width, height]);

    return (
        <div className="custom-math-graph" style={{ margin: '2rem auto', display: 'flex', justifyContent: 'center' }}>
            <div ref={rootRef} className="function-plot-container" style={{ background: '#fff', borderRadius: '8px', padding: '16px' }} />
        </div>
    );
}

interface RightTriangleProps {
    width?: number;
    height?: number;
    hypotenuse?: string;
    opposite?: string;
    adjacent?: string;
    angle?: string;
    orientation?: 'left' | 'right';
    color?: string;
}

export function RightTriangle({
    width = 200,
    height = 150,
    hypotenuse = 'Hypotenuse',
    opposite = 'Opposite',
    adjacent = 'Adjacent',
    angle = 'Î¸',
    orientation = 'right',
    color = 'currentColor'
}: RightTriangleProps) {
    const padding = 60;
    const svgW = width + padding * 2;
    const svgH = height + padding * 2;
    
    let x1, y1, x2, y2, x3, y3; 
    if (orientation === 'right') {
        x1 = padding + width; y1 = padding;
        x2 = padding + width; y2 = padding + height;
        x3 = padding;         y3 = padding + height;
    } else {
        x1 = padding;         y1 = padding;
        x2 = padding;         y2 = padding + height;
        x3 = padding + width; y3 = padding + height;
    }

    return (
        <div className="custom-right-triangle" style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} style={{ maxWidth: '100%', height: 'auto', overflow: 'visible' }}>
                <polygon 
                    points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`} 
                    fill="rgba(59, 130, 246, 0.1)" 
                    stroke={color} 
                    strokeWidth="2" 
                />
                <polyline 
                    points={orientation === 'right' 
                        ? `${x2 - 15},${y2} ${x2 - 15},${y2 - 15} ${x2},${y2 - 15}`
                        : `${x2 + 15},${y2} ${x2 + 15},${y2 - 15} ${x2},${y2 - 15}`
                    } 
                    fill="none" 
                    stroke={color} 
                    strokeWidth="2" 
                />
                <path 
                    d={orientation === 'right'
                        ? `M ${x3 + 30} ${y3} A 30 30 0 0 0 ${x3 + 24} ${y3 - 18}`
                        : `M ${x3 - 30} ${y3} A 30 30 0 0 1 ${x3 - 24} ${y3 - 18}`
                    }
                    fill="none" stroke={color} strokeWidth="2"
                />
                {angle && (
                    <text x={orientation === 'right' ? x3 + 45 : x3 - 45} y={y3 - 8} fill={color} fontSize="16" textAnchor="middle">{angle}</text>
                )}
                {opposite && (
                    <text x={orientation === 'right' ? x2 + 15 : x2 - 15} y={y1 + height / 2} fill={color} fontSize="16" textAnchor={orientation === 'right' ? 'start' : 'end'} dominantBaseline="middle">
                        {opposite}
                    </text>
                )}
                {adjacent && (
                    <text x={x3 + (x2 - x3) / 2} y={y2 + 25} fill={color} fontSize="16" textAnchor="middle">
                        {adjacent}
                    </text>
                )}
                {hypotenuse && (
                    <text 
                        x={x3 + (x1 - x3) / 2 - (orientation === 'right' ? 15 : -15)} 
                        y={y1 + height / 2 - 15} 
                        fill={color} 
                        fontSize="16" 
                        textAnchor={orientation === 'right' ? 'end' : 'start'}
                        dominantBaseline="middle"
                    >
                        {hypotenuse}
                    </text>
                )}
            </svg>
        </div>
    );
}

export function UnitCircle({ showTriangle = false, pointLabel = '(cos Î¸, sin Î¸)' }: { showTriangle?: boolean, pointLabel?: string }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <svg width="300" height="300" viewBox="-150 -150 300 300" style={{ maxWidth: '100%', height: 'auto', overflow: 'visible' }}>
                <circle cx="0" cy="0" r="100" fill="none" stroke="currentColor" strokeWidth="2" />
                <line x1="-130" y1="0" x2="130" y2="0" stroke="currentColor" strokeWidth="1" />
                <line x1="0" y1="-130" x2="0" y2="130" stroke="currentColor" strokeWidth="1" />
                <text x="140" y="5" fill="currentColor" fontSize="14" dominantBaseline="middle">(1, 0)</text>
                <text x="-140" y="5" fill="currentColor" fontSize="14" textAnchor="end" dominantBaseline="middle">(-1, 0)</text>
                <text x="0" y="-140" fill="currentColor" fontSize="14" textAnchor="middle">(0, 1)</text>
                <text x="0" y="140" fill="currentColor" fontSize="14" textAnchor="middle" dominantBaseline="hanging">(0, -1)</text>
                
                {showTriangle && (
                    <>
                        <polygon points="0,0 70.7,0 70.7,-70.7" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
                        <line x1="0" y1="0" x2="70.7" y2="-70.7" stroke="#3b82f6" strokeWidth="2" />
                        <text x="35" y="-80" fill="currentColor" fontSize="14" textAnchor="middle">{pointLabel}</text>
                        <text x="78" y="-35" fill="currentColor" fontSize="14" textAnchor="start">y = sin Î¸</text>
                        <text x="35" y="20" fill="currentColor" fontSize="14" textAnchor="middle">x = cos Î¸</text>
                        <text x="25" y="-35" fill="currentColor" fontSize="14" textAnchor="end">r = 1</text>
                        <path d="M 20 0 A 20 20 0 0 0 14 -14" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <text x="28" y="-6" fill="currentColor" fontSize="12" textAnchor="middle">Î¸</text>
                    </>
                )}
            </svg>
        </div>
    );
}

export function Quadrants() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <svg width="300" height="300" viewBox="-150 -150 300 300" style={{ maxWidth: '100%', height: 'auto', overflow: 'visible' }}>
                <line x1="-130" y1="0" x2="130" y2="0" stroke="currentColor" strokeWidth="2" />
                <line x1="0" y1="-130" x2="0" y2="130" stroke="currentColor" strokeWidth="2" />
                
                <text x="140" y="5" fill="currentColor" fontSize="14" dominantBaseline="middle">0Â° / 360Â°</text>
                <text x="-140" y="5" fill="currentColor" fontSize="14" textAnchor="end" dominantBaseline="middle">180Â°</text>
                <text x="0" y="-140" fill="currentColor" fontSize="14" textAnchor="middle">90Â°</text>
                <text x="0" y="140" fill="currentColor" fontSize="14" textAnchor="middle" dominantBaseline="hanging">270Â°</text>
                
                <text x="65" y="-65" fill="currentColor" fontSize="24" textAnchor="middle" fontWeight="bold">I</text>
                <text x="65" y="-40" fill="currentColor" fontSize="14" textAnchor="middle">(All+)</text>
                
                <text x="-65" y="-65" fill="currentColor" fontSize="24" textAnchor="middle" fontWeight="bold">II</text>
                <text x="-65" y="-40" fill="currentColor" fontSize="14" textAnchor="middle">(Sin+)</text>
                
                <text x="-65" y="55" fill="currentColor" fontSize="24" textAnchor="middle" fontWeight="bold">III</text>
                <text x="-65" y="80" fill="currentColor" fontSize="14" textAnchor="middle">(Tan+)</text>
                
                <text x="65" y="55" fill="currentColor" fontSize="24" textAnchor="middle" fontWeight="bold">IV</text>
                <text x="65" y="80" fill="currentColor" fontSize="14" textAnchor="middle">(Cos+)</text>
            </svg>
        </div>
    );
}

export function DirectedAngles() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', margin: '2rem 0', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <svg width="150" height="150" viewBox="0 0 150 150">
                    <line x1="25" y1="100" x2="125" y2="100" stroke="currentColor" strokeWidth="2" />
                    <line x1="25" y1="100" x2="95" y2="30" stroke="currentColor" strokeWidth="2" />
                    <path d="M 65 100 A 40 40 0 0 0 65 60" fill="none" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow-pos)" />
                    <defs>
                        <marker id="arrow-pos" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                            <polygon points="0 0, 6 3, 0 6" fill="#3b82f6" />
                        </marker>
                    </defs>
                </svg>
                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>↺ Positive (+)</span>
                <span style={{ fontSize: '14px', color: 'gray' }}>Counter-clockwise</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <svg width="150" height="150" viewBox="0 0 150 150">
                    <line x1="25" y1="50" x2="125" y2="50" stroke="currentColor" strokeWidth="2" />
                    <line x1="25" y1="50" x2="95" y2="120" stroke="currentColor" strokeWidth="2" />
                    <path d="M 65 50 A 40 40 0 0 1 65 90" fill="none" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow-neg)" />
                    <defs>
                        <marker id="arrow-neg" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                            <polygon points="0 0, 6 3, 0 6" fill="#ef4444" />
                        </marker>
                    </defs>
                </svg>
                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>↻ Negative (−)</span>
                <span style={{ fontSize: '14px', color: 'gray' }}>Clockwise</span>
            </div>
        </div>
    );
}

export function ObliqueTriangle({ a = 'a', b = 'b', c = 'c', A = 'A', B = 'B', C = 'C', showHeight = false }: any) {
    const ptA = { x: 30, y: 150 };
    const ptB = { x: 100, y: 30 };
    const ptC = { x: 220, y: 150 };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <svg width="250" height="180" viewBox="0 0 250 180" style={{ maxWidth: '100%', height: 'auto', overflow: 'visible' }}>
                {showHeight && (
                    <>
                        <line x1={ptB.x} y1={ptB.y} x2={ptB.x} y2={ptC.y} stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                        <polyline points={`${ptB.x},${ptC.y - 10} ${ptB.x + 10},${ptC.y - 10} ${ptB.x + 10},${ptC.y}`} fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <text x={ptB.x + 10} y={(ptB.y + ptC.y) / 2} fill="currentColor" fontSize="14" textAnchor="start">h</text>
                    </>
                )}
                <polygon points={`${ptA.x},${ptA.y} ${ptB.x},${ptB.y} ${ptC.x},${ptC.y}`} fill="rgba(59, 130, 246, 0.1)" stroke="currentColor" strokeWidth="2" />
                
                <text x={ptA.x - 15} y={ptA.y + 10} fill="currentColor" fontSize="18" fontWeight="bold">{A}</text>
                <text x={ptB.x} y={ptB.y - 10} fill="currentColor" fontSize="18" fontWeight="bold" textAnchor="middle">{B}</text>
                <text x={ptC.x + 15} y={ptC.y + 10} fill="currentColor" fontSize="18" fontWeight="bold">{C}</text>
                
                <text x={(ptA.x + ptC.x) / 2} y={ptA.y + 25} fill="currentColor" fontSize="16" textAnchor="middle">{b}</text>
                <text x={(ptA.x + ptB.x) / 2 - 15} y={(ptA.y + ptB.y) / 2 - 5} fill="currentColor" fontSize="16">{c}</text>
                <text x={(ptB.x + ptC.x) / 2 + 10} y={(ptB.y + ptC.y) / 2 - 5} fill="currentColor" fontSize="16">{a}</text>
            </svg>
        </div>
    );
}

export function ElevationDepression({ type = 'elevation', objectLabel = 'Object', observerLabel = 'You', distance = 'd', height = 'h', angle = 'Î¸' }: any) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <svg width="300" height="200" viewBox="0 0 300 200" style={{ maxWidth: '100%', height: 'auto', overflow: 'visible' }}>
                {type === 'elevation' ? (
                    <>
                        <line x1="30" y1="160" x2="250" y2="160" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="30" y1="160" x2="250" y2="40" stroke="currentColor" strokeWidth="2" />
                        <line x1="250" y1="160" x2="250" y2="40" stroke="currentColor" strokeWidth="2" />
                        <path d="M 80 160 A 50 50 0 0 0 74 135" fill="none" stroke="currentColor" strokeWidth="2" />
                        <text x="95" y="150" fill="currentColor" fontSize="16">{angle}</text>
                        <text x="30" y="180" fill="currentColor" fontSize="16" textAnchor="middle">{observerLabel}</text>
                        <text x="250" y="25" fill="currentColor" fontSize="16" textAnchor="middle">{objectLabel}</text>
                        <text x="140" y="180" fill="currentColor" fontSize="14" textAnchor="middle">{distance}</text>
                        <text x="265" y="100" fill="currentColor" fontSize="14">{height}</text>
                        <circle cx="30" cy="160" r="4" fill="currentColor" />
                        <circle cx="250" cy="40" r="4" fill="currentColor" />
                    </>
                ) : (
                    <>
                        <line x1="30" y1="40" x2="250" y2="40" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="30" y1="40" x2="250" y2="160" stroke="currentColor" strokeWidth="2" />
                        <line x1="250" y1="40" x2="250" y2="160" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="30" y1="40" x2="30" y2="160" stroke="currentColor" strokeWidth="2" />
                        <line x1="30" y1="160" x2="250" y2="160" stroke="currentColor" strokeWidth="2" />
                        <path d="M 80 40 A 50 50 0 0 1 74 65" fill="none" stroke="currentColor" strokeWidth="2" />
                        <text x="95" y="60" fill="currentColor" fontSize="16">{angle}</text>
                        <text x="30" y="25" fill="currentColor" fontSize="16" textAnchor="middle">{observerLabel}</text>
                        <text x="250" y="180" fill="currentColor" fontSize="16" textAnchor="middle">{objectLabel}</text>
                        <text x="140" y="180" fill="currentColor" fontSize="14" textAnchor="middle">{distance}</text>
                        <text x="15" y="100" fill="currentColor" fontSize="14" textAnchor="end">{height}</text>
                        <circle cx="30" cy="40" r="4" fill="currentColor" />
                        <circle cx="250" cy="160" r="4" fill="currentColor" />
                    </>
                )}
            </svg>
        </div>
    );
}
