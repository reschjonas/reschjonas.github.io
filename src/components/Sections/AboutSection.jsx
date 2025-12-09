import React from 'react';
import { content } from '../../data/content';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-glow mb-8 border-b-2 border-[var(--terminal-text)] pb-2 inline-block">
                    ./about
                </h2>
                <div className="space-y-4 leading-relaxed">
                    {content.about.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
