import React from 'react';
import { motion } from 'framer-motion';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-8">
      {/* Full-Width Dark Minimal Cinematic Box */}
      <div className="relative rounded-[3rem] bg-[#07070B] border border-white/10 p-8 sm:p-14 md:p-20 overflow-hidden shadow-2xl text-center flex flex-col items-center justify-center">
        {/* Subtle Background Circuit Mesh */}
        <div className="absolute inset-0 cyber-grid-bg opacity-20 pointer-events-none" />
        
        {/* Ambient Subtle Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-64 bg-accent-warm/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Animated Laser Scanline */}
        <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-accent-warm/60 to-transparent animate-scanline pointer-events-none opacity-40" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent-warm font-mono text-xs uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-warm animate-ping" />
            <span>DEVELOPER CREED</span>
          </motion.div>

          {/* Huge Minimal Typography */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tighter text-white uppercase leading-[0.95]"
          >
            DO FIRST. <br />
            <span className="text-gradient-orange">THEN SPEAK.</span>
          </motion.h2>

          {/* Philosophy Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl md:text-2xl text-white/80 font-normal leading-relaxed max-w-3xl mx-auto pt-4"
          >
            "I believe real capability is demonstrated through work. Build something useful, understand how it works, improve it, and let the result speak."
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-6 font-mono text-xs text-textMuted flex items-center justify-center gap-3"
          >
            <span>BHAVESH DATTUJI REWATKAR</span>
            <span>•</span>
            <span className="text-accent-cyan">BHAVESH.DEV</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
