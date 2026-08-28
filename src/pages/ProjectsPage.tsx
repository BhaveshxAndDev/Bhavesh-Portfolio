import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTAButton } from '../components/common/CTAButton';
import { projectsData } from '../data/projects';
import { Search, Trophy, ArrowLeft } from 'lucide-react';
import { GithubIcon } from '../components/common/BrandIcons';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['ALL', 'ANDROID', 'FULL-STACK', 'HEALTH-TECH', 'HACKATHON'];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === 'ALL' ||
        (selectedCategory === 'ANDROID' && project.category.includes('Android')) ||
        (selectedCategory === 'FULL-STACK' && (project.category.includes('Full-Stack') || project.categoryBadge.includes('Full-Stack'))) ||
        (selectedCategory === 'HEALTH-TECH' && project.category === 'Health-Tech') ||
        (selectedCategory === 'HACKATHON' && (project.isHackathon || project.category === 'Hackathon Project'));

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.solution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-textMuted hover:text-accent-warm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO PORTFOLIO</span>
        </Link>
      </div>

      <SectionHeading
        tag="PROJECT CATALOG"
        title="ENGINEERED APPLICATIONS & CASE STUDIES"
        subtitle="Explore detailed problem breakdowns, full-stack architectural flows, and technology implementations."
      />

      {/* Filter and Search Controls Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12 p-4 rounded-2xl bg-card border border-white/10">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider transition-all whitespace-nowrap border ${
                  isActive
                    ? 'bg-accent-warm text-white font-bold border-accent-warm shadow-glow-orange'
                    : 'bg-white/[0.02] text-textMuted border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by tech, keyword..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-xs font-mono focus:outline-none focus:border-accent-warm"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-16 text-center rounded-3xl bg-card border border-white/10 space-y-3">
          <p className="text-lg text-white font-heading font-bold">No projects matched your criteria</p>
          <p className="text-xs font-mono text-textMuted">Try clearing the search query or changing category filter.</p>
          <button
            onClick={() => {
              setSelectedCategory('ALL');
              setSearchQuery('');
            }}
            className="mt-2 px-4 py-2 rounded-full bg-white/10 text-xs font-mono text-white hover:bg-white/20"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 sm:p-8 rounded-3xl bg-[#0C0C12] border border-white/10 hover:border-accent-warm/40 transition-all duration-300 group flex flex-col justify-between shadow-2xl relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-bold text-accent-warm">
                      #{project.number}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] uppercase text-white/80">
                      {project.isHackathon && <Trophy className="w-3 h-3 text-amber-400" />}
                      {project.categoryBadge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black font-heading text-white mb-2 group-hover:text-accent-warm transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-accent-cyan font-medium mb-4">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-textMuted leading-relaxed line-clamp-3 mb-6">
                    {project.solution}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 font-mono text-[10px] text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="px-2 py-0.5 rounded-md bg-white/5 font-mono text-[10px] text-white/40">
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <CTAButton
                    to={`/projects/${project.slug}`}
                    variant="primary"
                    size="sm"
                  >
                    View Case Study
                  </CTAButton>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};
