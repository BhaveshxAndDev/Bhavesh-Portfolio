import React from 'react';
import { 
  Code2, 
  Smartphone, 
  FileCode, 
  Server, 
  Network, 
  Database, 
  Flame, 
  GitBranch, 
  Send,
  Layers
} from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

export const TechMarqueeStrip: React.FC = () => {
  const techItems = [
    { name: 'Java', icon: Code2, badge: 'Language' },
    { name: 'Android', icon: Smartphone, badge: 'Mobile OS' },
    { name: 'XML', icon: FileCode, badge: 'Layouts' },
    { name: 'PHP', icon: Server, badge: 'Backend' },
    { name: 'REST API', icon: Network, badge: 'Services' },
    { name: 'MySQL', icon: Database, badge: 'Database' },
    { name: 'Firebase', icon: Flame, badge: 'Cloud' },
    { name: 'Git', icon: GitBranch, badge: 'VCS' },
    { name: 'GitHub', icon: GithubIcon, badge: 'Repo' },
    { name: 'Postman', icon: Send, badge: 'API Testing' },
    { name: 'XAMPP', icon: Layers, badge: 'Local Server' },
    { name: 'Android Studio', icon: Smartphone, badge: 'Primary IDE' },
  ];

  return (
    <section id="tech-strip" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Dark Rounded Container Inspired by Reference Brand Strip */}
      <div className="relative rounded-3xl bg-[#0B0B10] border border-white/10 p-6 md:p-8 overflow-hidden">
        {/* Glow Line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent-warm/40 to-transparent" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent-warm" />
            <h3 className="font-mono text-xs md:text-sm uppercase tracking-widest text-white/70 font-semibold">
              TECHNOLOGY STACK I WORK WITH
            </h3>
          </div>
          <span className="font-mono text-xs text-textMuted hidden sm:inline-block">
            Full-Stack Integration Ecosystem
          </span>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative pt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex items-center gap-8 md:gap-12 animate-marquee whitespace-nowrap will-change-transform">
            {[...techItems, ...techItems, ...techItems].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.name}-${idx}`}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent-warm/30 hover:bg-white/[0.06] transition-all group"
                >
                  <Icon className="w-5 h-5 text-white/70 group-hover:text-accent-warm transition-colors" />
                  <span className="font-heading font-bold text-sm md:text-base text-white tracking-wide">
                    {item.name}
                  </span>
                  <span className="font-mono text-[10px] text-white/40 group-hover:text-accent-cyan transition-colors px-1.5 py-0.5 rounded bg-white/5">
                    {item.badge}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
