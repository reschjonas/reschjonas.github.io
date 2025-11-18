"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Calendar, User, Target, Shield } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="space-y-8"
          >
            <div className="glass p-6 rounded-xl border border-white/5">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a passionate <strong className="text-foreground">IT Security student</strong> and <strong className="text-foreground">Security Analyst</strong> based in Chemnitz, Germany. I dedicate my time to offensive security and understanding system intricacies to better protect them.
              </p>
            </div>

            <div className="glass p-6 rounded-xl border border-white/5">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" />
                My Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                My journey is driven by curiosity. I specialize in penetration testing and have achieved a <strong className="text-primary">Top 200 rank on HackTheBox</strong>, demonstrating my ability to tackle complex, real-world security challenges.
              </p>
            </div>

            <div className="glass p-6 rounded-xl border border-white/5">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-500" />
                Current Focus
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I am currently pursuing my B.Sc. in IT Security at Hochschule Mittweida. Simultaneously, I work as a student assistant at the <strong className="text-foreground">Networks and Communications Center (NCC)</strong>, securing academic infrastructure.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-fit"
          >
            <div className="glass p-6 rounded-xl border-l-4 border-l-primary flex flex-col justify-center">
              <User className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-foreground">Role</h3>
              <p className="text-sm text-muted-foreground">Security Analyst & Student</p>
            </div>
            <div className="glass p-6 rounded-xl border-l-4 border-l-accent flex flex-col justify-center">
              <MapPin className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-foreground">Location</h3>
              <p className="text-sm text-muted-foreground">Chemnitz, Germany</p>
            </div>
            <div className="glass p-6 rounded-xl border-l-4 border-l-emerald-500 flex flex-col justify-center">
              <GraduationCap className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="font-bold text-foreground">Education</h3>
              <p className="text-sm text-muted-foreground">B.Sc. IT Security (Since Oct 2025)</p>
              <p className="text-xs text-muted-foreground mt-1">Hochschule Mittweida</p>
            </div>
            <div className="glass p-6 rounded-xl border-l-4 border-l-amber-500 flex flex-col justify-center">
              <Calendar className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="font-bold text-foreground">Experience</h3>
              <p className="text-sm text-muted-foreground">Student Asst. @ HSMW NCC</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
