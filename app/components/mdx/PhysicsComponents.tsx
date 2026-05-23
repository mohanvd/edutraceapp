'use client';

import React from 'react';

const SvgContainer = ({ children, width = 300, height = 200, viewBox = '0 0 300 200' }: any) => (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            style={{ maxWidth: '100%', height: 'auto', overflow: 'visible', color: 'var(--ds-text)' }}
        >
            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                </marker>
                <marker id="arrow-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="var(--ds-blue-500, #3b82f6)" />
                </marker>
                <marker id="arrow-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="var(--ds-red-500, #ef4444)" />
                </marker>
            </defs>
            {children}
        </svg>
    </div>
);

export const VectorGraph = () => (
    <SvgContainer viewBox="0 0 250 250" width={250} height={250}>
        <line x1="30" y1="200" x2="220" y2="200" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="220" x2="50" y2="30" stroke="currentColor" strokeWidth="2" />
        <text x="210" y="220" fill="currentColor" fontSize="16" fontFamily="sans-serif">X</text>
        <text x="30" y="40" fill="currentColor" fontSize="16" fontFamily="sans-serif">y</text>
        
        <line x1="50" y1="200" x2="180" y2="70" stroke="var(--ds-blue-500, #3b82f6)" strokeWidth="4" markerEnd="url(#arrow-blue)" />
        <text x="185" y="65" fill="var(--ds-blue-500, #3b82f6)" fontSize="20" fontWeight="bold" fontFamily="sans-serif">v = (x,y)</text>
        
        <line x1="180" y1="200" x2="180" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="50" y1="70" x2="180" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
        
        <line x1="180" y1="195" x2="180" y2="205" stroke="currentColor" strokeWidth="2" />
        <line x1="45" y1="70" x2="55" y2="70" stroke="currentColor" strokeWidth="2" />
    </SvgContainer>
);

export const InclinedPlaneFBD = () => (
    <SvgContainer viewBox="0 0 350 250" width={350} height={250}>
        <polygon points="50,200 300,200 300,50" fill="none" stroke="currentColor" strokeWidth="2" />
        
        <path d="M 100 200 A 50 50 0 0 0 94 175" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="110" y="195" fill="currentColor" fontSize="16" fontFamily="sans-serif">Î¸</text>
        <rect x="285" y="185" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
        
        <g transform="translate(160, 134) rotate(-31)">
            <rect x="-30" y="-20" width="60" height="40" fill="var(--ds-bg-elevated, #f3f4f6)" stroke="currentColor" strokeWidth="2" />
            
            <line x1="0" y1="-20" x2="0" y2="-80" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="5" y="-70" fill="currentColor" fontSize="16" fontFamily="sans-serif" transform="rotate(31)">N</text>
            
            <line x1="30" y1="0" x2="80" y2="0" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="80" y="-10" fill="currentColor" fontSize="16" fontFamily="sans-serif" transform="rotate(31)">f</text>
            
            <line x1="0" y1="0" x2="-50" y2="83" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="-40" y="100" fill="currentColor" fontSize="16" fontFamily="sans-serif" transform="rotate(31)">mg</text>
            
            <line x1="0" y1="0" x2="0" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" markerEnd="url(#arrow)" />
            <text x="10" y="60" fill="currentColor" fontSize="14" fontFamily="sans-serif" transform="rotate(31)">mg cos Î¸</text>
            
            <line x1="0" y1="0" x2="-45" y2="0" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" markerEnd="url(#arrow)" />
            <text x="-70" y="-10" fill="currentColor" fontSize="14" fontFamily="sans-serif" transform="rotate(31)">mg sin Î¸</text>
        </g>
    </SvgContainer>
);

export const AtwoodMachine = () => (
    <SvgContainer viewBox="0 0 200 300" width={200} height={300}>
        <line x1="50" y1="30" x2="150" y2="30" stroke="currentColor" strokeWidth="3" />
        <path d="M50 30 l10 -10 M70 30 l10 -10 M90 30 l10 -10 M110 30 l10 -10 M130 30 l10 -10" stroke="currentColor" strokeWidth="1" />
        
        <line x1="100" y1="30" x2="100" y2="90" stroke="currentColor" strokeWidth="3" />
        
        <circle cx="100" cy="90" r="30" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="100" cy="90" r="4" fill="currentColor" />
        
        <line x1="70" y1="90" x2="70" y2="230" stroke="currentColor" strokeWidth="2" />
        <line x1="130" y1="90" x2="130" y2="160" stroke="currentColor" strokeWidth="2" />
        
        <rect x="50" y="230" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="3" />
        <rect x="115" y="160" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="3" />
    </SvgContainer>
);

export const CentripetalForce = () => (
    <SvgContainer viewBox="0 0 300 300" width={300} height={300}>
        <circle cx="150" cy="150" r="100" fill="var(--ds-blue-500, #3b82f6)" fillOpacity="0.1" stroke="var(--ds-blue-500, #3b82f6)" strokeWidth="2" strokeDasharray="8,8" />
        <text x="260" y="70" fill="currentColor" fontSize="18" fontWeight="bold" fontFamily="sans-serif">Orbit</text>
        
        <circle cx="150" cy="150" r="4" fill="currentColor" />
        <text x="140" y="130" fill="currentColor" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Axis</text>
        <path d="M 150 120 A 15 15 0 1 1 135 135" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="175" y="135" fill="currentColor" fontSize="16" fontFamily="sans-serif">Ï‰</text>
        
        <circle cx="60" cy="190" r="12" fill="var(--ds-blue-700, #1d4ed8)" />
        
        <line x1="60" y1="190" x2="90" y2="260" stroke="var(--ds-blue-700, #1d4ed8)" strokeWidth="3" markerEnd="url(#arrow-blue)" />
        <text x="35" y="250" fill="var(--ds-blue-700, #1d4ed8)" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Velocity</text>
        
        <line x1="60" y1="190" x2="135" y2="157" stroke="var(--ds-red-500, #ef4444)" strokeWidth="3" markerEnd="url(#arrow-red)" />
        <text x="120" y="195" fill="var(--ds-red-500, #ef4444)" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Centripetal</text>
        <text x="120" y="215" fill="var(--ds-red-500, #ef4444)" fontSize="16" fontWeight="bold" fontFamily="sans-serif">force</text>
    </SvgContainer>
);

export const SuspendedBall = () => (
    <SvgContainer viewBox="0 0 300 200" width={300} height={200}>
        <line x1="50" y1="30" x2="250" y2="30" stroke="currentColor" strokeWidth="2" />
        {Array.from({length: 15}).map((_, i) => (
            <line key={i} x1={60 + i*13} y1="30" x2={70 + i*13} y2="15" stroke="currentColor" strokeWidth="1" />
        ))}
        
        <line x1="150" y1="30" x2="150" y2="100" stroke="currentColor" strokeWidth="2" />
        
        <circle cx="150" cy="115" r="15" fill="currentColor" />
        
        <line x1="150" y1="130" x2="150" y2="180" stroke="currentColor" strokeWidth="2" />
        
        <text x="190" y="80" fill="currentColor" fontSize="16" fontFamily="sans-serif">upper string</text>
        <line x1="185" y1="75" x2="155" y2="75" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />
        
        <text x="190" y="160" fill="currentColor" fontSize="16" fontFamily="sans-serif">lower string</text>
        <line x1="185" y1="155" x2="155" y2="155" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" />
    </SvgContainer>
);

export const ThreeCrates = () => (
    <SvgContainer viewBox="0 0 600 200" width={600} height={200}>
        <line x1="30" y1="150" x2="570" y2="150" stroke="currentColor" strokeWidth="2" />
        {Array.from({length: 35}).map((_, i) => (
            <line key={i} x1={35 + i*15} y1="150" x2={25 + i*15} y2="165" stroke="currentColor" strokeWidth="1" />
        ))}
        
        <rect x="70" y="90" width="100" height="60" fill="none" stroke="currentColor" strokeWidth="3" />
        <text x="115" y="185" fill="currentColor" fontSize="18" fontFamily="sans-serif">1</text>
        <line x1="170" y1="120" x2="230" y2="120" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="180" y="110" fill="currentColor" fontSize="16" fontFamily="sans-serif">10 N</text>

        <rect x="250" y="90" width="100" height="60" fill="none" stroke="currentColor" strokeWidth="3" />
        <text x="295" y="185" fill="currentColor" fontSize="18" fontFamily="sans-serif">2</text>
        <line x1="350" y1="120" x2="400" y2="80" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="350" y="80" fill="currentColor" fontSize="16" fontFamily="sans-serif">10 N</text>

        <rect x="430" y="90" width="100" height="60" fill="none" stroke="currentColor" strokeWidth="3" />
        <text x="475" y="185" fill="currentColor" fontSize="18" fontFamily="sans-serif">3</text>
        <line x1="480" y1="90" x2="480" y2="30" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="495" y="60" fill="currentColor" fontSize="16" fontFamily="sans-serif">10 N</text>
    </SvgContainer>
);

export const BlockOnSteel = () => (
    <SvgContainer viewBox="0 0 500 200" width={500} height={200}>
        <line x1="30" y1="140" x2="220" y2="140" stroke="currentColor" strokeWidth="2" />
        {Array.from({length: 12}).map((_, i) => (
            <line key={i} x1={40 + i*15} y1="140" x2={30 + i*15} y2="155" stroke="currentColor" strokeWidth="1" />
        ))}
        <rect x="80" y="90" width="80" height="50" fill="none" stroke="currentColor" strokeWidth="3" />
        <line x1="160" y1="115" x2="210" y2="115" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="180" y="105" fill="currentColor" fontSize="18" fontStyle="italic" fontFamily="sans-serif">F</text>
        <line x1="180" y1="92" x2="192" y2="92" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <text x="120" y="180" fill="currentColor" fontSize="16" fontFamily="sans-serif">(i)</text>

        <line x1="260" y1="150" x2="460" y2="50" stroke="currentColor" strokeWidth="2" />
        {Array.from({length: 12}).map((_, i) => (
            <line key={i} x1={270 + i*15} y1={145 - i*7.5} x2={270 + i*15} y2={160 - i*7.5} stroke="currentColor" strokeWidth="1" />
        ))}
        <g transform="translate(320, 120) rotate(-26.5)">
            <rect x="0" y="-50" width="80" height="50" fill="none" stroke="currentColor" strokeWidth="3" />
            <line x1="80" y1="-25" x2="130" y2="-25" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="100" y="-35" fill="currentColor" fontSize="18" fontStyle="italic" fontFamily="sans-serif">F</text>
            <line x1="100" y1="-48" x2="112" y2="-48" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow)" />
        </g>
        <text x="360" y="180" fill="currentColor" fontSize="16" fontFamily="sans-serif">(ii)</text>
    </SvgContainer>
);

export const HighWire = () => (
    <SvgContainer viewBox="0 0 400 200" width={400} height={200}>
        <line x1="30" y1="160" x2="370" y2="160" stroke="currentColor" strokeWidth="2" />
        {Array.from({length: 22}).map((_, i) => (
            <line key={i} x1={40 + i*15} y1="160" x2={30 + i*15} y2="175" stroke="currentColor" strokeWidth="1" />
        ))}
        
        <rect x="80" y="60" width="10" height="100" fill="currentColor" />
        <rect x="310" y="60" width="10" height="100" fill="currentColor" />
        
        <line x1="80" y1="60" x2="50" y2="160" stroke="currentColor" strokeWidth="1.5" />
        <line x1="320" y1="60" x2="350" y2="160" stroke="currentColor" strokeWidth="1.5" />
        
        <path d="M 85 60 Q 200 110 315 60" fill="none" stroke="currentColor" strokeWidth="2" />
        
        <circle cx="200" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="200" y1="28" x2="200" y2="55" stroke="currentColor" strokeWidth="2" />
        <line x1="200" y1="55" x2="190" y2="85" stroke="currentColor" strokeWidth="2" />
        <line x1="200" y1="55" x2="210" y2="85" stroke="currentColor" strokeWidth="2" />
        <line x1="200" y1="40" x2="175" y2="50" stroke="currentColor" strokeWidth="2" />
        <line x1="200" y1="40" x2="225" y2="50" stroke="currentColor" strokeWidth="2" />
    </SvgContainer>
);

export const PendulumForce = () => (
    <SvgContainer viewBox="0 0 300 200" width={300} height={200}>
        <line x1="50" y1="30" x2="250" y2="30" stroke="currentColor" strokeWidth="2" />
        {Array.from({length: 15}).map((_, i) => (
            <line key={i} x1={60 + i*13} y1="30" x2={70 + i*13} y2="15" stroke="currentColor" strokeWidth="1" />
        ))}
        
        <line x1="150" y1="30" x2="150" y2="150" stroke="currentColor" strokeWidth="2" strokeDasharray="6,6" />
        
        <line x1="150" y1="30" x2="200" y2="130" stroke="currentColor" strokeWidth="2" />
        
        <circle cx="200" cy="130" r="15" fill="currentColor" />
        
        <line x1="215" y1="130" x2="280" y2="130" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="290" y="135" fill="currentColor" fontSize="18" fontStyle="italic" fontFamily="sans-serif">F</text>
        <line x1="290" y1="120" x2="302" y2="120" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow)" />
        
        <path d="M 150 70 A 40 40 0 0 0 168 65" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="155" y="85" fill="currentColor" fontSize="16" fontFamily="sans-serif">Î¸</text>
    </SvgContainer>
);

export const VectorCircularOptions = () => (
    <SvgContainer viewBox="0 0 500 500" width={500} height={500}>
        {[
            { id: '', x: 100, y: 100 },
            { id: '', x: 200, y: 200 },
            { id: '', x: 300, y: 300 },
            { id: '', x: 400, y: 400 }
        ].map((opt, i) => {
            const cx = opt.x;
            const cy = opt.y;
            const r = 40;
            const px = cx - r;
            const py = cy;
            
            return (
                <g key={i}>
                    <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                    <circle cx={px} cy={py} r={5} fill="currentColor" />
                    
                    <line x1={px} y1={py} x2={px} y2={py - 30} stroke="currentColor" strokeWidth="3" markerEnd="url(#arrow)" />
                    <text x={px - 20} y={py - 15} fill="currentColor" fontSize="16" fontWeight="bold" fontFamily="sans-serif">v</text>
                    
                    <line x1={px} y1={py} x2={px + 30} y2={py} stroke="currentColor" strokeWidth="3" markerEnd="url(#arrow)" />
                    <text x={px + 15} y={py + 20} fill="currentColor" fontSize="16" fontWeight="bold" fontFamily="sans-serif">a</text>
                </g>
            );
        })}
    </SvgContainer>
);

export const StringBreakPath = () => (
    <SvgContainer viewBox="0 0 400 350" width={400} height={350}>
        <circle cx="200" cy="150" r="100" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="10,10" />
        <circle cx="200" cy="150" r="5" fill="currentColor" />
        
        <path d="M 298 130 A 100 100 0 0 0 290 100" fill="none" stroke="currentColor" strokeWidth="3" markerEnd="url(#arrow)" />
        
        <line x1="200" y1="150" x2="200" y2="250" stroke="currentColor" strokeWidth="3" />
        
        <circle cx="200" cy="250" r="12" fill="none" stroke="currentColor" strokeWidth="4" />
        
        <line x1="200" y1="262" x2="180" y2="310" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="165" y="325" fill="currentColor" fontSize="20" fontFamily="sans-serif">A</text>
        
        <line x1="208" y1="258" x2="250" y2="300" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="255" y="315" fill="currentColor" fontSize="20" fontFamily="sans-serif">B</text>
        
        <line x1="212" y1="250" x2="300" y2="250" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="310" y="255" fill="currentColor" fontSize="20" fontFamily="sans-serif">C</text>
        
        <path d="M 210 240 C 270 230 300 180 300 130" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="315" y="140" fill="currentColor" fontSize="20" fontFamily="sans-serif">D</text>
    </SvgContainer>
);

export const StringBreakPathOptions = () => (
    <SvgContainer viewBox="0 0 600 200" width={600} height={200}>
        <line x1="100" y1="120" x2="50" y2="90" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="65" y="150" fill="currentColor" fontSize="16" fontFamily="sans-serif">(i)</text>
        
        <line x1="200" y1="110" x2="130" y2="110" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="155" y="150" fill="currentColor" fontSize="16" fontFamily="sans-serif">(ii)</text>
        
        <line x1="230" y1="110" x2="300" y2="110" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="255" y="150" fill="currentColor" fontSize="16" fontFamily="sans-serif">(iii)</text>
        
        <line x1="350" y1="130" x2="350" y2="60" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="340" y="150" fill="currentColor" fontSize="16" fontFamily="sans-serif">(iv)</text>
        
        <circle cx="480" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M 490 51 A 50 50 0 0 0 470 51" fill="none" stroke="currentColor" strokeWidth="3" markerEnd="url(#arrow)" />
        <circle cx="530" cy="100" r="5" fill="currentColor" />
        <text x="540" y="80" fill="currentColor" fontSize="18" fontWeight="bold" fontFamily="sans-serif">X</text>
        <line x1="480" y1="100" x2="530" y2="100" stroke="currentColor" strokeWidth="2" />
    </SvgContainer>
);

export const RollerCoasterDip = () => (
    <SvgContainer viewBox="0 0 300 200" width={300} height={200}>
        <path d="M 30 150 Q 150 200 270 150" fill="none" stroke="currentColor" strokeWidth="2" />
        
        <line x1="150" y1="10" x2="130" y2="50" stroke="currentColor" strokeWidth="2" />
        <line x1="120" y1="70" x2="80" y2="150" stroke="currentColor" strokeWidth="2" />
        <text x="120" y="65" fill="currentColor" fontSize="16" fontWeight="bold" fontFamily="sans-serif">40 m</text>
        
        <rect x="130" y="165" width="40" height="15" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="140" cy="183" r="4" fill="currentColor" />
        <circle cx="160" cy="183" r="4" fill="currentColor" />
        
        <circle cx="140" cy="160" r="3" fill="currentColor" />
        <circle cx="150" cy="160" r="3" fill="currentColor" />
        <circle cx="160" cy="160" r="3" fill="currentColor" />
        
        <text x="140" y="140" fill="currentColor" fontSize="16" fontWeight="bold" fontFamily="sans-serif">16 m/s</text>
    </SvgContainer>
);

export const AtwoodMachineValues = () => (
    <SvgContainer viewBox="0 0 200 250" width={200} height={250}>
        <circle cx="100" cy="80" r="40" fill="none" stroke="currentColor" strokeWidth="3" />
        
        <line x1="60" y1="80" x2="60" y2="160" stroke="currentColor" strokeWidth="2" />
        <line x1="140" y1="80" x2="140" y2="160" stroke="currentColor" strokeWidth="2" />
        
        <rect x="40" y="160" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="3" />
        <rect x="120" y="160" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="3" />
        
        <text x="60" y="185" textAnchor="middle" fill="currentColor" fontSize="16" fontFamily="sans-serif">M1</text>
        <text x="140" y="185" textAnchor="middle" fill="currentColor" fontSize="16" fontFamily="sans-serif">M2</text>
    </SvgContainer>
);

export const ParabolicPath = () => (
    <SvgContainer viewBox="0 0 400 250" width={400} height={250}>
        <line x1="30" y1="200" x2="370" y2="200" stroke="currentColor" strokeWidth="2" />
        
        <path id="parabola-path" d="M 60 200 Q 200 -20 340 200" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6,6" />
        
        <circle cx="106" cy="138" r="4" fill="currentColor" />
        <text x="85" y="135" fill="currentColor" fontSize="18" fontStyle="italic" fontFamily="sans-serif" fontWeight="bold">P</text>
        
        <circle cx="200" cy="35" r="4" fill="currentColor" />
        <text x="195" y="20" fill="currentColor" fontSize="18" fontStyle="italic" fontFamily="sans-serif" fontWeight="bold">Q</text>
        
        <path d="M 145 80 L 155 69" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 255 80 L 265 93" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
    </SvgContainer>
);

export const BalloonFBD = () => (
    <SvgContainer viewBox="0 0 300 350" width={300} height={350}>
        <path d="M 150 50 C 230 50 250 150 170 230 L 160 250 L 140 250 L 130 230 C 50 150 70 50 150 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="135" y="255" width="30" height="20" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="140" y1="250" x2="135" y2="255" stroke="currentColor" strokeWidth="1" />
        <line x1="160" y1="250" x2="165" y2="255" stroke="currentColor" strokeWidth="1" />
        
        <line x1="150" y1="160" x2="150" y2="30" stroke="currentColor" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="160" y="40" fill="currentColor" fontSize="14" fontFamily="sans-serif">5120 N</text>
        
        <line x1="150" y1="160" x2="150" y2="280" stroke="currentColor" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="160" y="270" fill="currentColor" fontSize="14" fontFamily="sans-serif">4050 N</text>
        
        <line x1="150" y1="160" x2="90" y2="160" stroke="currentColor" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="95" y="150" fill="currentColor" fontSize="14" fontFamily="sans-serif">1520 N</text>
        
        <line x1="150" y1="160" x2="200" y2="160" stroke="currentColor" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="160" y="150" fill="currentColor" fontSize="14" fontFamily="sans-serif">950 N</text>
    </SvgContainer>
);

export const AcVsVGraphs = () => (
    <SvgContainer viewBox="0 0 600 200" width={600} height={200}>
        {[
            { id: '(A)', x: 50 },
            { id: '(B)', x: 180 },
            { id: '(C)', x: 310 },
            { id: '(D)', x: 440 }
        ].map((opt) => (
            <g key={opt.id} transform={`translate(${opt.x}, 20)`}>
                <line x1="0" y1="120" x2="100" y2="120" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="0" y1="120" x2="0" y2="0" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
                <text x="-15" y="15" fill="currentColor" fontSize="16" fontFamily="sans-serif">a</text>
                <text x="105" y="125" fill="currentColor" fontSize="16" fontFamily="sans-serif">v</text>
                <text x="40" y="150" fill="currentColor" fontSize="16" fontFamily="sans-serif">{opt.id}</text>
                
                {opt.id === '(A)' && <line x1="0" y1="120" x2="90" y2="30" stroke="currentColor" strokeWidth="2" />}
                {opt.id === '(B)' && <path d="M 0 120 Q 80 120 90 20" fill="none" stroke="currentColor" strokeWidth="2" />}
                {opt.id === '(C)' && <path d="M 0 120 Q 0 40 90 20" fill="none" stroke="currentColor" strokeWidth="2" />}
                {opt.id === '(D)' && <path d="M 10 20 Q 15 110 90 110" fill="none" stroke="currentColor" strokeWidth="2" />}
            </g>
        ))}
    </SvgContainer>
);

export const AVsFGraph = () => (
    <SvgContainer viewBox="0 0 300 250" width={300} height={250}>
        <line x1="50" y1="200" x2="250" y2="200" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="50" y1="200" x2="50" y2="40" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="35" y="50" fill="currentColor" fontSize="18" fontFamily="sans-serif">a</text>
        <text x="255" y="205" fill="currentColor" fontSize="18" fontFamily="sans-serif">F</text>
        
        <line x1="50" y1="200" x2="130" y2="60" stroke="currentColor" strokeWidth="2" />
        <text x="135" y="55" fill="currentColor" fontSize="16" fontFamily="sans-serif">A</text>
        
        <line x1="50" y1="200" x2="170" y2="80" stroke="currentColor" strokeWidth="2" />
        <text x="175" y="75" fill="currentColor" fontSize="16" fontFamily="sans-serif">B</text>
        
        <line x1="50" y1="200" x2="200" y2="120" stroke="currentColor" strokeWidth="2" />
        <text x="205" y="115" fill="currentColor" fontSize="16" fontFamily="sans-serif">C</text>
        
        <line x1="50" y1="200" x2="220" y2="160" stroke="currentColor" strokeWidth="2" />
        <text x="225" y="155" fill="currentColor" fontSize="16" fontFamily="sans-serif">D</text>
    </SvgContainer>
);

export const VVsTGraph = () => (
    <SvgContainer viewBox="0 0 400 250" width={400} height={250}>
        <line x1="50" y1="200" x2="350" y2="200" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="50" y1="200" x2="50" y2="40" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="35" y="50" fill="currentColor" fontSize="18" fontFamily="sans-serif">v</text>
        <text x="360" y="205" fill="currentColor" fontSize="18" fontFamily="sans-serif">t</text>
        
        <path d="M 50 150 L 120 150 L 180 60 L 250 60 L 310 200" fill="none" stroke="currentColor" strokeWidth="3" />
        
        <line x1="120" y1="150" x2="120" y2="200" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4,4" />
        <line x1="180" y1="60" x2="180" y2="200" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4,4" />
        <line x1="250" y1="60" x2="250" y2="200" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4,4" />
        
        <text x="40" y="155" fill="currentColor" fontSize="16" fontFamily="sans-serif">A</text>
        <text x="120" y="165" fill="currentColor" fontSize="16" fontFamily="sans-serif">B</text>
        <text x="180" y="50" fill="currentColor" fontSize="16" fontFamily="sans-serif">C</text>
        <text x="250" y="50" fill="currentColor" fontSize="16" fontFamily="sans-serif">D</text>
        <text x="315" y="195" fill="currentColor" fontSize="16" fontFamily="sans-serif">E</text>
    </SvgContainer>
);
