import React from 'react';
import { Folder, ExternalLink } from 'lucide-react';
import { content } from '../../data/content';

const ProjectListWidget = () => {
    return (
        <div className="flex flex-col gap-2 h-full overflow-auto tui-scroll pr-2">
            {content.projects.map((project) => (
                <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-2 border-b border-[var(--terminal-text)] border-dashed hover:bg-[var(--terminal-text)] hover:text-[var(--terminal-bg)] transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <Folder size={16} className="opacity-70" />
                        <div>
                            <div className="font-bold text-sm">{project.name}</div>
                            <div className="text-[10px] opacity-70 hidden md:block">{project.description.substring(0, 40)}...</div>
                        </div>
                    </div>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
            ))}
        </div>
    );
};

export default ProjectListWidget;
