import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Trophy, Calendar, MapPin, Building2, CheckCircle, Code, Server, Database, Layers, Wrench } from 'lucide-react';
import { experienceData } from '../../data/experience';

export const ExperienceSection: React.FC = () => {
  const exp = experienceData[0];

  const categoryIcons: Record<string, React.ReactNode> = {
    'Android / Frontend': <Code className="w-4 h-4 text-accent-warm" />,
    'Backend & APIs': <Server className="w-4 h-4 text-accent-cyan" />,
    'Database & Server': <Database className="w-4 h-4 text-emerald-400" />,
    'Integrations & Libraries': <Layers className="w-4 h-4 text-purple-400" />,
    'Developer Tools': <Wrench className="w-4 h-4 text-amber-400" />,
  };

  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number="03"
        tag="EXPERIENCE"
        title="WHERE I BUILT REAL-WORLD EXPERIENCE"
        subtitle="Practical enterprise internship engineering full-stack native Android applications with custom PHP backends and MySQL architectures."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl bg-[#0C0C12] border border-white/15 p-6 sm:p-10 md:p-12 shadow-2xl overflow-hidden group"
      >
        {/* Top Glow Edge */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-warm to-transparent" />
        
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Experience Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10 relative z-10">
          <div className="space-y-3">
            {/* Prominent Intern of the Month Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 border border-amber-400/50 text-amber-300 font-heading font-black text-xs md:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(251,191,36,0.3)] animate-pulse">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>🏆 INTERN OF THE MONTH</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-white">
              {exp.role}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-textMuted">
              <span className="flex items-center gap-1.5 text-white font-semibold">
                <Building2 className="w-4 h-4 text-accent-warm" />
                {exp.company}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent-cyan" />
                {exp.location}
              </span>
            </div>
          </div>

          {/* Date Range Badge */}
          <div className="flex flex-col lg:items-end space-y-1.5 font-mono text-xs">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-semibold">
              <Calendar className="w-4 h-4 text-accent-warm" />
              <span>{exp.duration}</span>
            </div>
            {exp.extendedDuration && (
              <span className="text-textMuted text-[11px]">
                {exp.extendedDuration}
              </span>
            )}
          </div>
        </div>

        {/* Overview Summary */}
        <div className="py-8 border-b border-white/10 relative z-10">
          <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-4xl">
            {exp.description}
          </p>
        </div>

        {/* Technical Areas Categorized Grid */}
        <div className="py-8 relative z-10 space-y-6">
          <h4 className="font-mono text-xs uppercase tracking-widest text-accent-warm font-bold">
            TECHNICAL COVERAGE & APPLIED METHODOLOGIES
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exp.technicalAreas.map((area) => (
              <div
                key={area.category}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors space-y-3"
              >
                <div className="flex items-center gap-2 font-heading font-bold text-sm text-white">
                  {categoryIcons[area.category] || <Code className="w-4 h-4" />}
                  <span>{area.category}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-card border border-white/10 font-mono text-[11px] text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Milestone Achievements */}
        <div className="pt-6 relative z-10 space-y-3 border-t border-white/10">
          <h4 className="font-mono text-xs uppercase tracking-widest text-white/60 font-bold">
            KEY INTERNSHIP ACHIEVEMENTS
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {exp.keyAchievements.map((ach, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-textMuted"
              >
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{ach}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
