import React from 'react';
import { Terminal, Code, Server, Shield, Database, Globe } from 'lucide-react';
import { content } from '../../data/content';

const TechStackWidget = () => {
    const getIcon = (skill) => {
        if (skill.includes('Python') || skill.includes('Go') || skill.includes('Rust')) return <Code size={16} />;
        if (skill.includes('Linux') || skill.includes('Docker')) return <Server size={16} />;
        if (skill.includes('Burp') || skill.includes('Nmap')) return <Shield size={16} />;
        return <Terminal size={16} />;
    };

    return (
        <div className="h-full overflow-hidden">
            <div className="grid grid-cols-2 gap-2 h-full">
                {content.skills.languages.slice(0, 4).map(skill => (
                    <div key={skill} className="flex items-center gap-2 p-2 border border-[var(--terminal-text)] rounded bg-[rgba(255,176,0,0.05)] hover:bg-[var(--terminal-text)] hover:text-[var(--terminal-bg)] transition-colors cursor-default">
                        {getIcon(skill)}
                        <span className="text-xs font-bold">{skill}</span>
                    </div>
                ))}
                {content.skills.security.slice(0, 2).map(skill => (
                    <div key={skill} className="flex items-center gap-2 p-2 border border-[var(--terminal-text)] rounded bg-[rgba(255,176,0,0.05)] hover:bg-[var(--terminal-text)] hover:text-[var(--terminal-bg)] transition-colors cursor-default">
                        {getIcon(skill)}
                        <span className="text-xs font-bold">{skill}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStackWidget;
