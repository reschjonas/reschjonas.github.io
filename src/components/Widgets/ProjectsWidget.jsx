import React from 'react';
import Widget from '../UI/Widget';
import { content } from '../../data/content';

const ProjectsWidget = () => {
    return (
        <Widget title="Project Database" className="h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.projects.map((project) => (
                    <a
                        key={project.name}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block border border-[var(--terminal-text)] p-3 hover:bg-[var(--terminal-text)] hover:text-[var(--terminal-bg)] transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-1 opacity-50 text-xs">DIR</div>
                        <h3 className="font-bold text-lg mb-1 group-hover:text-[var(--terminal-bg)]">
                            &gt; {project.name}
                        </h3>
                        <p className="text-sm opacity-80 mb-3 line-clamp-2 group-hover:opacity-100">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                            {project.tech.map(t => (
                                <span key={t} className="text-[10px] px-1 border border-current opacity-70 group-hover:border-[var(--terminal-bg)]">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </Widget>
    );
};

export default ProjectsWidget;
