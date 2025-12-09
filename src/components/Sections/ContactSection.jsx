import React from 'react';
import { content } from '../../data/content';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 px-4 bg-[rgba(255,176,0,0.05)]">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-glow mb-8 border-b-2 border-[var(--terminal-text)] pb-2 inline-block">
                    ./contact
                </h2>
                <p className="mb-8 opacity-80">
                    Interested in working together or have a question? Reach out!
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
                    <a
                        href={`mailto:${content.contact.email}`}
                        className="px-6 py-3 border-2 border-[var(--terminal-text)] hover:bg-[var(--terminal-text)] hover:text-[var(--terminal-bg)] transition-all"
                    >
                        ✉ {content.contact.email}
                    </a>
                </div>
                <div className="flex justify-center gap-8">
                    <a
                        href={content.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-70 hover:opacity-100 transition-opacity"
                    >
                        GitHub
                    </a>
                    <a
                        href={content.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-70 hover:opacity-100 transition-opacity"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
