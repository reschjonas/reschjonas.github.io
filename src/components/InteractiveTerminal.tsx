"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, ArrowLeft } from "lucide-react";

export default function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ type: 'output' | 'command', text: string }>>([
    { type: 'output', text: "Welcome to Jonas's Portfolio Terminal v1.0.0" },
    { type: 'output', text: "Type 'help' for a list of available commands." },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history, isOpen]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setShowHint(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newHistory: Array<{ type: 'output' | 'command', text: string }> = [...history, { type: 'command' as const, text: cmd }];

    switch (trimmedCmd) {
      case "help":
        newHistory.push(
          { type: 'output' as const, text: "Available commands:" },
          { type: 'output' as const, text: "  about     - Who is Jonas?" },
          { type: 'output' as const, text: "  skills    - List technical skills" },
          { type: 'output' as const, text: "  projects  - List recent projects" },
          { type: 'output' as const, text: "  contact   - Get contact info" },
          { type: 'output' as const, text: "  clear     - Clear terminal" },
          { type: 'output' as const, text: "  exit      - Close terminal" }
        );
        break;
      case "about":
        newHistory.push(
          { type: 'output' as const, text: "Jonas Resch" },
          { type: 'output' as const, text: "Role: Security Analyst & Student" },
          { type: 'output' as const, text: "Education: B.Sc. IT Security @ Hochschule Mittweida" },
          { type: 'output' as const, text: "Experience: Student Asst. @ NCC" }
        );
        break;
      case "skills":
        newHistory.push(
          { type: 'output' as const, text: "Skills:" },
          { type: 'output' as const, text: "  [+] Penetration Testing" },
          { type: 'output' as const, text: "  [+] Vulnerability Research" },
          { type: 'output' as const, text: "  [+] Linux & Windows Security" },
          { type: 'output' as const, text: "  [+] Python & Bash Scripting" }
        );
        break;
      case "projects":
        newHistory.push(
          { type: 'output' as const, text: "Recent Projects:" },
          { type: 'output' as const, text: "  * Leaktor - Fast Secrets Scanner" },
          { type: 'output' as const, text: "  * EscalateX - Linux PrivEsc Scanner" },
          { type: 'output' as const, text: "  * QuantHide - Post-Quantum Steganography" },
          { type: 'output' as const, text: "  * DesyncDiver - HTTP Request Smuggling Tool" }
        );
        break;
      case "contact":
        newHistory.push(
          { type: 'output' as const, text: "Email: resch.jonas@pm.me" },
          { type: 'output' as const, text: "GitHub: github.com/reschjonas" },
          { type: 'output' as const, text: "LinkedIn: linkedin.com/in/jonas-resch-91bba733b" }
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "exit":
        setIsOpen(false);
        setInput("");
        return;
      case "":
        break;
      default:
        newHistory.push({ type: 'output' as const, text: `Command not found: ${cmd}. Type 'help' for commands.` });
    }

    setHistory(newHistory);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <>
      {/* Floating Toggle Button with Hint */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
        <AnimatePresence>
          {showHint && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="hidden md:flex items-center bg-secondary/90 backdrop-blur-md text-primary-foreground px-4 py-2 rounded-lg border border-white/10 shadow-lg"
            >
              <span className="text-sm font-medium mr-2">Try the terminal!</span>
              <ArrowLeft className="w-4 h-4 text-primary animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          className="p-4 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/25 border border-white/10 hover:bg-primary/90 transition-all relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Terminal className="w-6 h-6" />
          {showHint && (
            <span className="absolute top-0 right-0 w-3 h-3 bg-accent rounded-full animate-ping"></span>
          )}
        </motion.button>
      </div>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-lg shadow-2xl"
          >
            <div className="bg-secondary/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden font-mono text-sm">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <span className="text-muted-foreground text-xs">root@jonas: ~</span>
                <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div 
                className="p-4 h-80 overflow-y-auto text-foreground scrollbar-hide" 
                onClick={() => inputRef.current?.focus()}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {history.map((line, i) => (
                  <div key={i} className="mb-1 whitespace-pre-wrap">
                    {line.type === 'command' ? (
                      <>
                        <span className="text-primary">root@jonas:~$</span> {line.text}
                      </>
                    ) : (
                      line.text
                    )}
                  </div>
                ))}
                <div className="flex items-center">
                  <span className="text-primary mr-2">root@jonas:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-none outline-none text-foreground"
                    autoComplete="off"
                    autoFocus
                  />
                </div>
                <div ref={messagesEndRef} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
