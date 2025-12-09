import React from 'react';
import Widget from '../UI/Widget';
import { content } from '../../data/content';

const MenuWidget = ({ activeTab, setActiveTab }) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'about', label: 'About' },
    ];

    return (
        <Widget title="Navigation" className="mb-6">
            <nav className="flex flex-col gap-2">
                {menuItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`text-left px-3 py-2 border border-transparent hover:border-[var(--terminal-text)] transition-all ${activeTab === item.id
                                ? 'bg-[var(--terminal-text)] text-[var(--terminal-bg)] font-bold'
                                : 'hover:pl-4'
                            }`}
                    >
                        {activeTab === item.id ? '> ' : '  '}{item.label}
                    </button>
                ))}
                <div className="border-t border-dashed border-[var(--terminal-text)] my-2"></div>
                <div className="px-3 py-2 text-sm opacity-70">
                    <p>Links:</p>
                    <a href={content.contact.github} target="_blank" rel="noopener noreferrer" className="block hover:underline">GitHub</a>
                    <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" className="block hover:underline">LinkedIn</a>
                    <a href={`mailto:${content.contact.email}`} className="block hover:underline">Email</a>
                </div>
            </nav>
        </Widget>
    );
};

export default MenuWidget;
