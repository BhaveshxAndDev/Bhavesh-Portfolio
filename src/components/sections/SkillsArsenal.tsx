import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { skillCategoriesData } from '../../data/skills';
import { Code, Smartphone, Server, Database, Cloud, Shield, Sparkles } from 'lucide-react';

export const SkillsArsenal: React.FC = () => {
  const [activeTab, setActiveTab] = useState(skillCategoriesData[0].id);
  const [selectedSkill, setSelectedSkill] = useState(skillCategoriesData[0].skills[0]);

  const categoryIcons: Record<string, React.ReactNode> = {
    programming: <Code className="w-4 h-4" />,
    android: <Smartphone className="w-4 h-4" />,
    backend: <Server className="w-4 h-4" />,
    database: <Database className="w-4 h-4" />,
    cloud_dev: <Cloud className="w-4 h-4" />,
    core_cs: <Shield className="w-4 h-4" />,
  };

  const levelStyles: Record<string, { bg: string; text: string; border: string }> = {
    Advanced: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
    Core: { bg: 'bg-cyan-500/10', text: 'text-cyan-300', border: 'border-cyan-500/30' },
    Practiced: { bg: 'bg-purple-500/10', text: 'text-purple-300', border: 'border-purple-500/30' },
    Emerging: { bg: 'bg-emerald-500/10', text: 'text-emerald-300', border: 'border-emerald-500/30' },
  };

  const currentCategory = skillCategoriesData.find((cat) => cat.id === activeTab) || skillCategoriesData[0];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number="04"
        tag="SKILLS"
        title="MY TECHNOLOGY ARSENAL"
        subtitle="A modular breakdown of languages, frameworks, architectural patterns, and tools utilized across production builds."
      />

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {skillCategoriesData.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setSelectedSkill(cat.skills[0]);
              }}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all whitespace-nowrap border ${
                isActive
                  ? 'bg-accent-warm text-white font-bold border-accent-warm shadow-glow-orange'
                  : 'bg-card text-textMuted border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {categoryIcons[cat.id]}
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Grid + Focus Inspector Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT: Interactive Skill Cards Grid (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AnimatePresence mode="wait">
            {currentCategory.skills.map((skill, idx) => {
              const isSelected = selectedSkill.name === skill.name;
              const level = levelStyles[skill.level] || levelStyles.Core;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  onClick={() => setSelectedSkill(skill)}
                  onMouseEnter={() => setSelectedSkill(skill)}
                  className={`p-5 rounded-2xl cursor-pointer border transition-all duration-300 relative group overflow-hidden ${
                    isSelected
                      ? 'bg-[#181824] border-accent-warm shadow-[0_0_30px_-5px_rgba(255,107,0,0.3)]'
                      : 'bg-card/70 border-white/10 hover:border-white/20 hover:bg-card'
                  }`}
                >
                  {/* Subtle top indicator bar */}
                  {isSelected && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-accent-warm" />
                  )}

                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-heading font-black text-lg text-white group-hover:text-accent-warm transition-colors">
                      {skill.name}
                    </h4>
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase font-semibold border ${level.bg} ${level.text} ${level.border}`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-xs text-textMuted line-clamp-2 leading-relaxed mb-3">
                    {skill.description}
                  </p>

                  <div className="flex items-center justify-between text-[11px] font-mono text-white/50 pt-2 border-t border-white/5">
                    <span>{skill.tag || 'Module'}</span>
                    <span className="text-accent-warm group-hover:translate-x-1 transition-transform">
                      Inspect ❯
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* RIGHT: Detailed Context Inspector Terminal (5 cols) */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="rounded-3xl bg-[#09090E] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden relative">
            {/* Ambient Radial */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-accent-cyan/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-xs text-white/40">
                SKILL_INSPECTOR.sh
              </span>
            </div>

            {/* Selected Skill Deep Dive */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSkill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-accent-warm font-bold uppercase tracking-wider">
                      {selectedSkill.tag || 'Active Module'}
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="font-mono text-xs text-accent-cyan">
                      {selectedSkill.level} Focus
                    </span>
                  </div>
                  <h3 className="text-3xl font-black font-heading text-white">
                    {selectedSkill.name}
                  </h3>
                </div>

                <div className="space-y-2">
                  <h5 className="font-mono text-xs text-white/60 uppercase tracking-widest">
                    Overview & Role
                  </h5>
                  <p className="text-sm text-textMuted leading-relaxed">
                    {selectedSkill.description}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-accent-warm font-mono text-xs uppercase tracking-wider font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>How I Applied It in Projects</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-sans">
                    {selectedSkill.usage}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-textMuted">
                  <span>CATEGORY: {currentCategory.name}</span>
                  <span className="text-emerald-400 font-semibold">PRODUCTION_VERIFIED</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
