import React, { useState, useEffect, useRef } from 'react';

const TerminalWidget = () => {
    const [history, setHistory] = useState([
        "$ help",
        "Commands: help, tools, skills, contact, whoami, date, clear"
    ]);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);

    const handleCommand = (cmd) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let response = '';

        switch (cleanCmd) {
            case 'help':
                response = "Commands: help, tools, skills, contact, whoami, date, clear";
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'tools':
                response = "Pentesting: Burp Suite, Metasploit, Nmap, Wireshark, Hashcat, Gobuster, ffuf, SQLMap, John, Hydra, BloodHound, Mimikatz, Responder, CrackMapExec...";
                break;
            case 'skills':
                response = "Python | Go | Rust | Bash | Web Security | Network Recon | Privilege Escalation | Code Auditing";
                break;
            case 'contact':
                response = "Email: contact@reschj.one | GitHub: @reschjonas";
                break;
            case 'whoami':
                response = "visitor@reschj.one (Guest User)";
                break;
            case 'date':
                response = new Date().toString();
                break;
            default:
                response = `Command not found: ${cleanCmd}. Try 'help'`;
        }

        setHistory(prev => [...prev, `> ${cmd}`, response]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    return (
        <div className="absolute inset-0 flex flex-col font-mono text-xs md:text-sm">
            <div className="flex-1 overflow-auto tui-scroll mb-2 space-y-1">
                {history.map((line, i) => (
                    <div key={i} className="break-words">{line}</div>
                ))}
                <div ref={bottomRef} />
            </div>
            <div className="flex items-center gap-2 border-t border-[var(--terminal-text)] pt-2 shrink-0">
                <span className="text-green-500 font-bold">$</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-none outline-none text-[var(--terminal-text)] placeholder-gray-600 min-w-0"
                    placeholder="Type command..."
                    autoFocus
                />
            </div>
        </div>
    );
};

export default TerminalWidget;
