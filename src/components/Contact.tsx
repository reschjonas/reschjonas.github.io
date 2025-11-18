"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Terminal } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass p-12 rounded-3xl border-t border-white/10"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-8">
            <Terminal className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            I'm always interested in discussing security research, ethical hacking, or exchanging ideas about the future of technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:resch.jonas@pm.me"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              <span>resch.jonas@pm.me</span>
            </a>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/reschjonas"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-secondary text-foreground border border-white/10 hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/jonas-resch-91bba733b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-secondary text-foreground border border-white/10 hover:bg-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
