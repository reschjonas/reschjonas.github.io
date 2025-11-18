"use client";

import { motion } from "framer-motion";
import { Code2, Server, ShieldAlert, Cpu, Brain, Lock } from "lucide-react";

const skillCategories = [
  {
    title: "Offensive Security",
    icon: ShieldAlert,
    skills: ["Penetration Testing", "Privilege Escalation", "Custom Exploit Dev", "Vulnerability Analysis", "Top 200 HackTheBox"],
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20"
  },
  {
    title: "Web Security",
    icon: Code2,
    skills: ["OWASP Top 10", "SSRF", "Input Validation", "PHP Security Analysis", "Code Audits"],
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20"
  },
  {
    title: "Systems & Scripting",
    icon: Server,
    skills: ["Linux (Parrot, Arch, Kali)", "Python Scripting", "Bash Automation", "AI Supported Dev", "Forensics"],
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20"
  },
  {
    title: "Research & Future",
    icon: Brain,
    skills: ["AI & AGI Security", "Cryptography", "Ethical Tech Development", "Offensive Research"],
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Arsenal</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive set of tools and methodologies I employ to secure digital environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass p-8 rounded-2xl transition-all hover:bg-white/5 group border hover:border-white/20`}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-xl ${category.bg} ${category.border} border`}>
                    <Icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded-md bg-secondary/50 border border-white/5 text-sm text-muted-foreground group-hover:text-foreground group-hover:border-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

