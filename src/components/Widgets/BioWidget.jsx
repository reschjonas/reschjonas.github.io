import React from 'react';
import { User, MapPin, Shield } from 'lucide-react';
import { content } from '../../data/content';

const BioWidget = () => {
    return (
        <div className="flex flex-col h-full justify-between">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-glow mb-1">{content.header.title}</h2>
                    <p className="text-sm opacity-70 mb-4">{content.header.subtitle}</p>
                    <div className="flex items-center gap-2 text-xs opacity-60">
                        <MapPin size={12} />
                        <span>{content.header.location}</span>
                    </div>
                </div>
                <div className="relative">
                    <div className="w-16 h-16 rounded-full border-2 border-[var(--terminal-text)] flex items-center justify-center overflow-hidden bg-[var(--terminal-text)] text-[var(--terminal-bg)]">
                        <User size={32} />
                    </div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-black animate-pulse"></div>
                </div>
            </div>

            <div className="mt-4 text-sm leading-relaxed opacity-90">
                {content.about[0]}
            </div>

            <div className="mt-4 flex gap-2 flex-wrap">
                <span className="px-2 py-1 text-xs border border-[var(--terminal-text)] rounded bg-[rgba(255,176,0,0.1)]">
                    Student
                </span>
                <span className="px-2 py-1 text-xs border border-[var(--terminal-text)] rounded bg-[rgba(255,176,0,0.1)]">
                    Security Analyst @ HSMW
                </span>
            </div>
        </div>
    );
};

export default BioWidget;
