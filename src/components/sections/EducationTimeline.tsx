import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { educationData } from '../../data/education';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number="02"
        tag="EDUCATION"
        title="MY LEARNING JOURNEY"
        subtitle="Establishing a rigorous theoretical and hands-on foundation in computer systems engineering and software architecture."
      />

      <div className="relative max-w-4xl mx-auto mt-12">
        {/* Glowing Vertical Timeline Center Line */}
        <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent-warm via-accent-cyan to-transparent shadow-[0_0_12px_rgba(255,107,0,0.5)]" />

        {educationData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-12 group"
          >
            {/* Timeline Node Icon in center */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card border-2 border-accent-warm flex items-center justify-center text-accent-warm shadow-glow-orange group-hover:scale-110 transition-transform z-20">
              <GraduationCap className="w-5 h-5" />
            </div>

            {/* Left Column (Desktop Date badge) */}
            <div className="md:w-1/2 pl-16 md:pl-0 md:pr-12 md:text-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-warm/10 border border-accent-warm/30 text-accent-warm font-mono text-xs font-bold mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.duration}</span>
              </div>
              <p className="font-mono text-xs text-accent-cyan font-semibold">
                {item.status}
              </p>
            </div>

            {/* Right Column (Card details) */}
            <div className="md:w-1/2 pl-16 md:pl-12 w-full">
              <div className="rounded-3xl bg-card border border-white/10 p-6 sm:p-8 hover:border-accent-warm/40 transition-all duration-300 shadow-2xl relative overflow-hidden">
                {/* Background ambient corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-warm/5 rounded-bl-full pointer-events-none" />

                <div className="space-y-3">
                  <span className="font-mono text-xs text-white/50 uppercase tracking-widest">
                    Technical Diploma
                  </span>

                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white">
                    {item.institution}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-mono text-textMuted">
                    <MapPin className="w-3.5 h-3.5 text-accent-warm" />
                    <span>{item.location}</span>
                  </div>

                  <p className="font-heading font-semibold text-sm text-accent-orange">
                    {item.degree}
                  </p>

                  <div className="pt-4 border-t border-white/10 space-y-2.5">
                    <p className="font-mono text-xs text-white/70 uppercase tracking-wider font-semibold">
                      Key Highlights:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-textMuted">
                      {item.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
