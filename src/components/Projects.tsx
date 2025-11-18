"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, FolderGit2, Star } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Leaktor",
    description: "A blazingly fast secrets scanner with validation capabilities. Built in Rust to help security professionals find exposed credentials.",
    tags: ["Rust", "Security", "CLI", "Scanner"],
    link: "https://github.com/reschjonas/leaktor",
    featured: true
  },
  {
    title: "EscalateX",
    description: "A powerful Linux privilege escalation scanner — a feature-rich and modern alternative to LinPEAS.",
    tags: ["Linux", "PrivEsc", "Scanner", "Bash"],
    link: "https://github.com/ExploitWorks/EscalateX",
    featured: true
  },
  {
    title: "DesyncDiver",
    description: "HTTP Request Smuggling detection tool for identifying desync vulnerabilities in web applications.",
    tags: ["Web Security", "HTTP", "Python"],
    link: "https://github.com/ExploitWorks/DesyncDiver",
    featured: false
  },
  {
    title: "HTTPipe",
    description: "Pentesting tool for quickly serving files or scripts over HTTP during engagements.",
    tags: ["Pentesting", "Utility", "Network"],
    link: "https://github.com/ExploitWorks/HTTPipe",
    featured: false
  },
  {
    title: "TaskThief",
    description: "Advanced privilege escalation testing tool focused on Windows scheduled tasks exploitation.",
    tags: ["Windows", "PrivEsc", "Exploitation"],
    link: "https://github.com/ExploitWorks/TaskThief",
    featured: false
  },
  {
    title: "QuantHide",
    description: "Quantum-resistant steganography tool implementing post-quantum cryptographic algorithms.",
    tags: ["Cryptography", "Steganography", "Post-Quantum"],
    link: "https://github.com/ExploitWorks/QuantHide",
    featured: false
  },
  {
    title: "Inscribe",
    description: "Fast, elegant USB imaging for Linux. A modern, open-source alternative to balenaEtcher.",
    tags: ["Linux", "Electron", "Utility"],
    link: "https://github.com/reschjonas/Inscribe",
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Deployments</h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Open source security tools and utilities I've developed to aid in penetration testing and research.
            </p>
          </div>
          <Link 
            href="https://github.com/reschjonas" 
            target="_blank"
            className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <Github className="w-5 h-5" />
            <span>View all on GitHub</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass p-6 rounded-xl group hover:-translate-y-1 transition-all duration-300 border hover:border-primary/30 flex flex-col ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-mono px-2 py-1 rounded-md bg-secondary text-muted-foreground border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
