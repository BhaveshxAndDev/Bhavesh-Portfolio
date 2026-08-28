import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { CTAButton } from '../components/common/CTAButton';
import { TechBadge } from '../components/common/TechBadge';
import { GithubIcon } from '../components/common/BrandIcons';
import { 
  ArrowLeft, 
  Trophy, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Sparkles,
  Smartphone
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-black font-heading text-white">Project Not Found</h1>
        <p className="text-textMuted font-mono text-sm">
          The requested project case study could not be located.
        </p>
        <CTAButton to="/projects" variant="primary" size="md">
          Back to Projects
        </CTAButton>
      </div>
    );
  }

  // Find next/prev project for seamless carousel navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === project.slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto min-h-screen">
      {/* Top Breadcrumb Bar */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-textMuted hover:text-accent-warm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-white/40">
            CASE STUDY #{project.number}
          </span>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/10 font-mono text-xs inline-flex items-center gap-1.5 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>

      {/* Case Study Hero Section */}
      <div className="relative rounded-[2.5rem] bg-[#0A0A10] border border-white/15 p-6 sm:p-12 md:p-16 mb-16 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/15 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-base font-black text-accent-warm">
              PROJECT {project.number}
            </span>
            <span className="text-white/20">|</span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs uppercase text-white/90">
              {project.isHackathon && <Trophy className="w-3.5 h-3.5 text-amber-400" />}
              {project.categoryBadge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-accent-cyan font-medium max-w-3xl">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((t) => (
              <TechBadge key={t} name={t} variant="subtle" size="md" />
            ))}
          </div>
        </div>
      </div>

      {/* Structured 12-Section Case Study Grid */}
      <div className="space-y-16">
        
        {/* 01 & 02: Overview, Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem */}
          <div className="p-8 rounded-3xl bg-[#0F0F16] border border-white/10 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              01 — PROBLEM STATEMENT
            </span>
            <h3 className="text-2xl font-bold font-heading text-white">The Friction & Challenge</h3>
            <p className="text-sm text-textMuted leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-3xl bg-[#0F0F16] border border-white/10 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              02 — ENGINEERED SOLUTION
            </span>
            <h3 className="text-2xl font-bold font-heading text-white">The Architecture Solution</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* 03: Feature Ecosystem */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0C0C12] border border-white/10 space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-warm font-bold">
              03 — FEATURE MATRIX
            </span>
            <h3 className="text-3xl font-black font-heading text-white">Complete Feature Ecosystem</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-sm text-white/90"
              >
                <CheckCircle2 className="w-4 h-4 text-accent-warm flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 04: Full-Stack Architecture Pipeline */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#09090E] border border-white/15 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="space-y-1 relative z-10">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent-cyan" />
              04 — SYSTEM ARCHITECTURE & DATA FLOW
            </span>
            <h3 className="text-3xl font-black font-heading text-white">
              End-to-End Execution Pipeline
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 relative z-10">
            {project.architecturePipeline.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-card border border-white/10 space-y-3 relative group hover:border-accent-warm/40 transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-accent-warm font-bold">PHASE 0{idx + 1}</span>
                  <span className="text-white/40">{step.protocol}</span>
                </div>

                <div className="space-y-1">
                  <p className="font-heading font-bold text-sm text-white">
                    {step.from}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-accent-cyan">
                    <span>➔ {step.to}</span>
                  </div>
                </div>

                <p className="text-xs text-textMuted leading-relaxed pt-2 border-t border-white/5">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 05 & 06: Developer Role & Specific Contributions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 p-8 rounded-3xl bg-[#0F0F17] border border-white/10 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-warm font-bold">
              05 — MY ROLE
            </span>
            <h3 className="text-2xl font-bold font-heading text-white">
              {project.role}
            </h3>
            <p className="text-sm text-textMuted leading-relaxed">
              Responsible for the complete mobile frontend implementation in Java/XML, custom backend PHP REST endpoints, database schema design, and asynchronous client-server integration.
            </p>
          </div>

          <div className="lg:col-span-8 p-8 rounded-3xl bg-[#0F0F17] border border-white/10 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan font-bold">
              06 — KEY ENGINEERING CONTRIBUTIONS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {project.contributions.map((contrib, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-white/90 flex items-start gap-2.5"
                >
                  <span className="font-mono text-accent-warm font-bold text-xs mt-0.5">❯</span>
                  <span className="leading-relaxed">{contrib}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 07: Challenges & Resolutions */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0B0C12] border border-white/10 space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">
              07 — TECHNICAL CHALLENGES & RESOLUTIONS
            </span>
            <h3 className="text-3xl font-black font-heading text-white">
              Overcoming Engineering Hurdles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {project.challenges.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border border-white/10 space-y-3"
              >
                <div className="space-y-1">
                  <span className="font-mono text-[11px] text-red-400 font-bold uppercase">
                    Challenge:
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {item.challenge}
                  </p>
                </div>
                <div className="space-y-1 pt-2 border-t border-white/5">
                  <span className="font-mono text-[11px] text-emerald-400 font-bold uppercase">
                    Resolution:
                  </span>
                  <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 08: Application Screenshots Frame */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#09090E] border border-white/10 space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-white/60 font-bold">
              08 — APPLICATION SCREENS & VISUALS
            </span>
            <h3 className="text-3xl font-black font-heading text-white">
              Production Interface Viewports
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {[1, 2, 3].map((frameIdx) => (
              <div
                key={frameIdx}
                className="rounded-2xl bg-[#0F0F16] border border-white/10 p-6 flex flex-col items-center justify-center min-h-[260px] text-center space-y-3 relative overflow-hidden group hover:border-accent-warm/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-warm">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-mono text-xs text-white/70 uppercase tracking-wider font-semibold">
                    Project Screenshot #{frameIdx}
                  </p>
                  <p className="text-[11px] font-mono text-textMuted mt-1">
                    {project.title} — Screen View
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-white/40">
                  NATIVE ANDROID UI
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 09: Planned Future Enhancements */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0E0E18] border border-white/10 space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan font-bold">
              09 — ROADMAP & FUTURE SCOPE
            </span>
            <h3 className="text-3xl font-black font-heading text-white">
              Planned Enhancements
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {project.futureScope.map((scope, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs sm:text-sm text-textMuted"
              >
                <Sparkles className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{scope}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="p-6 rounded-2xl bg-card border border-white/10 hover:border-accent-warm/40 transition-all flex items-center justify-between group"
          >
            <div className="space-y-1">
              <span className="font-mono text-xs text-textMuted">PREVIOUS PROJECT</span>
              <p className="font-heading font-black text-lg text-white group-hover:text-accent-warm transition-colors">
                {prevProject.title}
              </p>
            </div>
            <ArrowLeft className="w-5 h-5 text-white/40 group-hover:text-accent-warm transition-colors" />
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="p-6 rounded-2xl bg-card border border-white/10 hover:border-accent-warm/40 transition-all flex items-center justify-between group text-right"
          >
            <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-accent-warm transition-colors order-2 sm:order-1" />
            <div className="space-y-1 order-1 sm:order-2">
              <span className="font-mono text-xs text-textMuted">NEXT PROJECT</span>
              <p className="font-heading font-black text-lg text-white group-hover:text-accent-warm transition-colors">
                {nextProject.title}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
