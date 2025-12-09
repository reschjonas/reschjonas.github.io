import React from 'react';
import Widget from '../UI/Widget';
import { content } from '../../data/content';

const SkillsWidget = () => {
    return (
        <Widget title="System Capabilities" className="h-full">
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-bold mb-2 border-b border-[var(--terminal-text)] inline-block">Languages</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {content.skills.languages.map(skill => (
                            <div key={skill} className="flex items-center gap-2">
                                <span className="text-green-500">[OK]</span> {skill}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-2 border-b border-[var(--terminal-text)] inline-block">Security Ops</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {content.skills.security.map(skill => (
                            <div key={skill} className="flex items-center gap-2">
                                <span className="text-green-500">[OK]</span> {skill}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-2 border-b border-[var(--terminal-text)] inline-block">Infrastructure</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {content.skills.infrastructure.map(skill => (
                            <div key={skill} className="flex items-center gap-2">
                                <span className="text-green-500">[OK]</span> {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Widget>
    );
};

export default SkillsWidget;
