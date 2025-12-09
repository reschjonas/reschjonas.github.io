import React from 'react';
import { content } from '../../data/content';

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 px-4 bg-[rgba(255,176,0,0.05)]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-glow mb-8 border-b-2 border-[var(--terminal-text)] pb-2 inline-block">
                    ./skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 opacity-80">[Languages]</h3>
                        <ul className="space-y-2">
                            {content.skills.languages.map(skill => (
                                <li key={skill} className="flex items-center gap-2">
                                    <span className="text-green-500">▹</span> {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4 opacity-80">[Security]</h3>
                        <ul className="space-y-2">
                            {content.skills.security.map(skill => (
                                <li key={skill} className="flex items-center gap-2">
                                    <span className="text-green-500">▹</span> {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4 opacity-80">[Infrastructure]</h3>
                        <ul className="space-y-2">
                            {content.skills.infrastructure.map(skill => (
                                <li key={skill} className="flex items-center gap-2">
                                    <span className="text-green-500">▹</span> {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
