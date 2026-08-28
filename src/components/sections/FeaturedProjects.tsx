import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { CTAButton } from '../common/CTAButton';
import { TechBadge } from '../common/TechBadge';
import { projectsData } from '../../data/projects';
import { ArrowRight, CheckCircle2, Trophy } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <SectionHeading
          number="05"
          tag="SELECTED WORK"
          title="PROJECTS THAT SOLVE REAL PROBLEMS"
          subtitle="Engineered with native Android frontend logic, PHP REST backend pipelines, and normalized MySQL relational schemas."
          className="mb-0"
        />

        <div className="flex-shrink-0">
          <CTAButton to="/projects" variant="glass" size="md">
            View All Projects
          </CTAButton>
        </div>
      </div>

      {/* Large Editorial Project Cards Stack */}
      <div className="space-y-12 md:space-y-16">
        {projectsData.map((project, idx) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative rounded-[2.5rem] bg-[#0A0A10] border border-white/15 p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl group hover:border-accent-warm/40 transition-all duration-500"
            >
              {/* Corner Glow Accent */}
              <div
                className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${
                  project.id === 'digital-complaint-management'
                    ? 'from-orange-500 to-red-600'
                    : project.id === 'vitalyx'
                    ? 'from-cyan-500 to-blue-600'
                    : 'from-purple-500 to-pink-600'
                }`}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                {/* Left Info Column (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Project Number + Category Badge */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xl md:text-2xl font-black text-accent-warm">
                      #{project.number}
                    </span>
                    <span className="text-white/20">|</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider bg-white/5 border border-white/10 text-white/90">
                      {project.isHackathon && <Trophy className="w-3.5 h-3.5 text-amber-400" />}
                      {project.categoryBadge}
                    </span>
                  </div>

                  {/* Project Title & Tagline */}
                  <div className="space-y-2">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-white group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg text-accent-cyan font-medium">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Problem & Solution Breakdown */}
                  <div className="space-y-3 pt-2 text-xs sm:text-sm">
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                      <span className="font-mono text-[11px] text-red-400 uppercase tracking-wider font-bold">
                        Problem Statement:
                      </span>
                      <p className="text-textMuted leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                      <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider font-bold">
                        Engineered Solution:
                      </span>
                      <p className="text-white/90 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Highlights Bullet list */}
                  <div className="space-y-2 pt-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-white/60 font-semibold">
                      Core Functional Architecture:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-textMuted">
                      {project.features.slice(0, 4).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-warm flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} variant="subtle" size="sm" />
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                    <CTAButton
                      to={`/projects/${project.slug}`}
                      variant="primary"
                      size="md"
                    >
                      Read Case Study
                    </CTAButton>

                    {project.githubUrl && (
                      <CTAButton
                        href={project.githubUrl}
                        variant="glass"
                        size="md"
                        iconType="external"
                        target="_blank"
                      >
                        GitHub Repo
                      </CTAButton>
                    )}
                  </div>
                </div>

                {/* Right Visual / Case Study Mockup Frame (5 cols) */}
                <div className="lg:col-span-5 h-full flex flex-col justify-center">
                  <div className="relative rounded-3xl bg-[#11111B] border border-white/15 p-6 shadow-2xl overflow-hidden group/frame hover:border-accent-warm/50 transition-all duration-300">
                    {/* Top Device Bar */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-[11px] font-mono text-textMuted">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-accent-warm animate-ping" />
                        APP_ARCHITECTURE
                      </span>
                      <span>{project.role}</span>
                    </div>

                    {/* Architectural Graphic representation */}
                    <div className="aspect-[4/3] rounded-2xl bg-[#09090E] border border-white/10 p-5 flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute inset-0 cyber-grid-bg opacity-30" />

                      <div className="relative z-10 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded bg-accent-warm/10 text-accent-warm font-mono text-[10px] uppercase font-bold border border-accent-warm/30">
                            Layer 01 : Native UI
                          </span>
                          <span className="font-mono text-[10px] text-white/40">XML + Java</span>
                        </div>

                        <div className="h-0.5 w-full bg-gradient-to-r from-accent-warm via-accent-cyan to-purple-500 opacity-50" />

                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan font-mono text-[10px] uppercase font-bold border border-accent-cyan/30">
                            Layer 02 : Network API
                          </span>
                          <span className="font-mono text-[10px] text-white/40">PHP REST + JSON</span>
                        </div>

                        <div className="h-0.5 w-full bg-gradient-to-r from-accent-cyan via-emerald-400 to-accent-warm opacity-50" />

                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 font-mono text-[10px] uppercase font-bold border border-emerald-500/30">
                            Layer 03 : Data Storage
                          </span>
                          <span className="font-mono text-[10px] text-white/40">MySQL Relational</span>
                        </div>
                      </div>

                      {/* Case Study Callout Box */}
                      <Link
                        to={`/projects/${project.slug}`}
                        className="relative z-10 mt-4 p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between hover:bg-white/[0.08] transition-colors group/link"
                      >
                        <span className="font-mono text-xs text-white group-hover/link:text-accent-warm transition-colors font-semibold">
                          Inspect Complete Technical Breakdown
                        </span>
                        <ArrowRight className="w-4 h-4 text-accent-warm group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Bottom Telemetry */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-textMuted">
                      <span>VERIFIED PRODUCTION BUILD</span>
                      <span className="text-accent-cyan font-bold">CASE STUDY 0{project.number}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
