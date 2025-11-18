"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Terminal, Lock } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Security Analyst & Student</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Exploring the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Depths of Security
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              I'm Jonas Resch, an IT Security student and penetration tester based in Chemnitz. 
              Passionate about offensive security, vulnerability research, and the ethics of technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-secondary text-secondary-foreground border border-white/10 font-medium hover:bg-secondary/80 transition-all"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Abstract decorative circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-50"></div>
              
              {/* Card Grid */}
              <div className="relative grid grid-cols-2 gap-6 p-4">
                <div className="glass p-6 rounded-2xl transform translate-y-12">
                  <Terminal className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Offensive Security</h3>
                  <p className="text-sm text-muted-foreground">Simulating advanced cyber attacks to identify weaknesses.</p>
                </div>
                <div className="glass p-6 rounded-2xl transform -translate-y-12">
                  <Shield className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-bold text-lg mb-2">Vulnerability Research</h3>
                  <p className="text-sm text-muted-foreground">Studying known vulnerabilities to understand exploitation.</p>
                </div>
                <div className="glass p-6 rounded-2xl transform translate-y-12">
                  <Lock className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Security Auditing</h3>
                  <p className="text-sm text-muted-foreground">Analyzing systems to uncover hidden security flaws.</p>
                </div>
                <div className="glass p-6 rounded-2xl transform -translate-y-12 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
                  <div className="h-full flex flex-col justify-center items-center text-center">
                    <span className="text-4xl font-bold text-primary mb-1">Top 200</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">HackTheBox</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

