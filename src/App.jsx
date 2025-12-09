import React from 'react';
import { BentoGrid, BentoItem } from './components/Bento/BentoGrid';
import BioWidget from './components/Widgets/BioWidget';
import TechStackWidget from './components/Widgets/TechStackWidget';
import ProjectListWidget from './components/Widgets/ProjectListWidget';
import TerminalWidget from './components/Widgets/TerminalWidget';
import TimeLocationWidget from './components/Widgets/TimeLocationWidget';
import SystemMonitorWidget from './components/Widgets/SystemMonitorWidget';
import { Github, Linkedin, Mail, Cpu, Globe, Terminal as TerminalIcon } from 'lucide-react';
import { content } from './data/content';

function App() {
  return (
    <div className="min-h-screen md:h-screen bg-[var(--terminal-bg)] text-[var(--terminal-text)] p-4 md:p-6 font-mono selection:bg-[var(--terminal-text)] selection:text-[var(--terminal-bg)] md:overflow-hidden flex flex-col crt-screen">
      <div className="crt fixed inset-0 pointer-events-none z-50 opacity-50" />

      <BentoGrid className="max-w-6xl mx-auto w-full flex-1 min-h-0">
        {/* Bio Widget - Large */}
        <BentoItem
          className="md:col-span-2 md:row-span-1"
          header={<BioWidget />}
        />

        {/* System Monitor - Small */}
        <BentoItem
          className="md:col-span-1 md:row-span-1"
          title="System Status"
        >
          <SystemMonitorWidget />
        </BentoItem>

        {/* Tech Stack - Medium */}
        <BentoItem
          title="Tech Stack"
          description="Languages & Tools"
          icon={<Cpu size={20} />}
          className="md:col-span-1 md:row-span-1"
        >
          <TechStackWidget />
        </BentoItem>

        {/* Projects - Tall */}
        <BentoItem
          title="Projects"
          description="Recent Deployments"
          icon={<Globe size={20} />}
          className="md:col-span-1 md:row-span-2"
        >
          <ProjectListWidget />
        </BentoItem>

        {/* Terminal - Medium */}
        <BentoItem
          title="Terminal"
          description="Interactive Shell"
          icon={<TerminalIcon size={20} />}
          className="md:col-span-1 md:row-span-1"
        >
          <TerminalWidget />
        </BentoItem>

        {/* Time & Location - Small */}
        <BentoItem
          className="md:col-span-1 md:row-span-1"
          header={<TimeLocationWidget />}
        />

        {/* Socials - Small Grid */}
        <BentoItem
          className="md:col-span-1 md:row-span-1"
          header={
            <div className="grid grid-cols-2 gap-4 h-full">
              <a href={content.contact.github} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center border border-[var(--terminal-text)] rounded hover:bg-[var(--terminal-text)] hover:text-[var(--terminal-bg)] transition-colors">
                <Github size={24} />
                <span className="text-xs mt-2">GitHub</span>
              </a>
              <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center border border-[var(--terminal-text)] rounded hover:bg-[var(--terminal-text)] hover:text-[var(--terminal-bg)] transition-colors">
                <Linkedin size={24} />
                <span className="text-xs mt-2">LinkedIn</span>
              </a>
              <a href={`mailto:${content.contact.email}`} className="col-span-2 flex items-center justify-center gap-2 border border-[var(--terminal-text)] rounded hover:bg-[var(--terminal-text)] hover:text-[var(--terminal-bg)] transition-colors">
                <Mail size={20} />
                <span className="text-sm">Email Me</span>
              </a>
            </div>
          }
        />
      </BentoGrid>

      <footer className="text-center mt-4 text-[10px] opacity-40 shrink-0">
        SYSTEM STATUS: ONLINE | V3.0.2
      </footer>
    </div>
  );
}

export default App;
