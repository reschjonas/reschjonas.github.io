import React from 'react';
import { content } from '../../data/content';

const HeroSection = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16">
            <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold text-glow mb-4">
                    {content.header.title}
                </h1>
                <p className="text-xl md:text-2xl mb-6 opacity-80">
                    {content.header.subtitle}
                </p>
                <p className="text-sm opacity-60 mb-8">
                    {content.header.location} • {content.header.status}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 border-2 border-[var(--terminal-text)] hover:bg-[var(--terminal-text)] hover:text-[var(--terminal-bg)] transition-all"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 border-2 border-[var(--terminal-text)] hover:bg-[var(--terminal-text)] hover:text-[var(--terminal-bg)] transition-all"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
            <div className="absolute bottom-8 animate-bounce text-2xl opacity-50">
                ↓
            </div>
        </section>
    );
};

export default HeroSection;
