import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { CTAButton } from '../common/CTAButton';
import { Shield, Smartphone, UserCheck, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number="01"
        tag="ABOUT"
        title="BUILD. LEARN. IMPROVE. DELIVER."
        subtitle="Bridging practical full-stack Android software craftsmanship with an emerging trajectory toward cybersecurity engineering."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT COLUMN: Editorial Typography & Manifesto (6 cols) */}
        <div className="lg:col-span-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="font-mono text-xs text-accent-warm uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-warm" />
              Developer Manifesto
            </span>

            {/* Oversized Quote Typography */}
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white leading-none">
              "Do First. <br />
              <span className="text-gradient-orange">Then Speak."</span>
            </h3>

            <p className="text-lg md:text-xl text-white/90 font-medium leading-snug pt-2">
              "I believe real capability is demonstrated through work. Build something useful, understand how it works, improve it, and let the result speak."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-textMuted text-sm sm:text-base leading-relaxed"
          >
            <p>
              I am Bhavesh Dattuji Rewatkar, a Full-Stack Android Developer based in Katol, Nagpur. I believe that engineering prowess is built through disciplined hands-on execution rather than empty rhetoric. I focus on developing clean, practical applications that tackle genuine problems with structured architectures.
            </p>
            <p>
              My technical journey spans end-to-end mobile engineering: designing native XML layouts with Google Material Design, writing robust Java business logic, creating PHP REST APIs, and modeling relational databases in MySQL. Currently, I am expanding into the foundational principles of cybersecurity to build resilient, attack-resistant software systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2"
          >
            <CTAButton
              to="/#experience"
              onClick={() => {
                const el = document.getElementById('experience');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="primary"
              size="md"
            >
              Explore My Journey
            </CTAButton>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Interactive Developer Identity Card (6 cols) */}
        <div className="lg:col-span-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-lg rounded-3xl bg-[#0F0F16] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden group"
          >
            {/* Animated Laser Scanning Line */}
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-75 blur-xs animate-scanline pointer-events-none" />

            {/* Background Cyber Mesh */}
            <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />

            {/* Identity Card Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-warm/10 border border-accent-warm/30 flex items-center justify-center text-accent-warm">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-lg text-white">
                    BHAVESH D. REWATKAR
                  </h4>
                  <span className="font-mono text-xs text-textMuted">
                    ID: DEV_IN_935907
                  </span>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                VERIFIED
              </div>
            </div>

            {/* Structured Card Pillars */}
            <div className="py-6 space-y-5 relative z-10 font-mono text-xs">
              {/* Pillar 1: Current Focus */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1.5 hover:border-accent-warm/40 transition-colors">
                <div className="flex items-center justify-between text-textMuted">
                  <span className="text-white/60 tracking-wider">CURRENT FOCUS</span>
                  <Smartphone className="w-4 h-4 text-accent-warm" />
                </div>
                <p className="font-heading font-bold text-base text-white">
                  Full-Stack Android Development
                </p>
                <p className="text-textMuted text-[11px]">
                  Native Java, XML layouts, PHP REST API integration, and MySQL database management.
                </p>
              </div>

              {/* Pillar 2: Future Focus */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1.5 hover:border-accent-cyan/40 transition-colors">
                <div className="flex items-center justify-between text-textMuted">
                  <span className="text-white/60 tracking-wider">FUTURE FOCUS</span>
                  <Shield className="w-4 h-4 text-accent-cyan" />
                </div>
                <p className="font-heading font-bold text-base text-white">
                  Cybersecurity & Secure Applications
                </p>
                <p className="text-textMuted text-[11px]">
                  Information security, OWASP mobile practices, API sanitization, and vulnerability assessment.
                </p>
              </div>

              {/* Pillar 3: Mindset */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1.5 hover:border-purple-400/40 transition-colors">
                <div className="flex items-center justify-between text-textMuted">
                  <span className="text-white/60 tracking-wider">CORE MINDSET</span>
                  <Zap className="w-4 h-4 text-purple-400" />
                </div>
                <p className="font-heading font-bold text-base text-white tracking-wide">
                  Build → Learn → Improve → Deliver
                </p>
                <p className="text-textMuted text-[11px]">
                  Action-oriented development loop with rigorous attention to functional performance.
                </p>
              </div>
            </div>

            {/* Card Footer Location & Coordinates */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-textMuted relative z-10">
              <span>LOCATION: KATOL, NAGPUR</span>
              <span className="text-accent-warm">STATUS: READY_TO_CODE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
