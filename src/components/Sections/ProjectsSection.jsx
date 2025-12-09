import React from 'react';
import { content } from '../../data/content';

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-glow mb-8 border-b-2 border-[var(--terminal-text)] pb-2 inline-block">
                    ./projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {content.projects.map((project) => (
                        <a
                            key={project.name}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-5 border-2 border-[var(--terminal-text)] hover:bg-[var(--terminal-text)] hover:text-[var(--terminal-bg)] transition-all group"
                        >
                            <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--terminal-bg)]">
                                {project.name}
                            </h3>
                            <p className="text-sm opacity-80 mb-4 group-hover:opacity-100">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span
                                        key={t}
                                        className="text-xs px-2 py-1 border border-current opacity-70 group-hover:border-[var(--terminal-bg)]"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
