import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    const scrollTo = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--terminal-bg)] border-b-2 border-[var(--terminal-text)]">
            <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
                <a href="#" className="text-xl font-bold text-glow hover:bg-transparent">
                    &gt; JONAS_RESCH
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6">
                    {links.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={(e) => scrollTo(e, link.href)}
                                className="hover:text-glow transition-all"
                            >
                                [{link.label}]
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? '×' : '≡'}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-[var(--terminal-text)] bg-[var(--terminal-bg)]">
                    <ul className="flex flex-col">
                        {links.map(link => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={(e) => scrollTo(e, link.href)}
                                    className="block px-4 py-3 border-b border-[var(--terminal-text)] hover:bg-[var(--terminal-text)] hover:text-[var(--terminal-bg)]"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
