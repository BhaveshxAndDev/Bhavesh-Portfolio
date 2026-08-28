import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { interestsData } from '../../data/interests';
import { Crown, Music, Shield, Trees, Dumbbell, HeartPulse, Terminal } from 'lucide-react';

export const PersonalityInterests: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Crown: <Crown className="w-5 h-5 text-amber-400" />,
    Music: <Music className="w-5 h-5 text-purple-400" />,
    Shield: <Shield className="w-5 h-5 text-accent-warm" />,
    Trees: <Trees className="w-5 h-5 text-emerald-400" />,
    Dumbbell: <Dumbbell className="w-5 h-5 text-blue-400" />,
    HeartPulse: <HeartPulse className="w-5 h-5 text-red-400" />,
    Terminal: <Terminal className="w-5 h-5 text-accent-cyan" />,
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        tag="DISCIPLINE & INTERESTS"
        title="BEYOND THE TERMINAL"
        subtitle="The disciplines, mental models, and personal passions that shape my focus, patience, and creative problem-solving."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {interestsData.map((item, idx) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-3xl bg-[#0C0C12] border border-white/10 hover:border-accent-warm/40 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-xl overflow-hidden relative"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-accent-warm transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[item.icon] || <Crown className="w-5 h-5" />}
                  </div>
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-heading font-black text-lg text-white mb-2 group-hover:text-accent-warm transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-textMuted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-white/40">
                <span>FACET 0{idx + 1}</span>
                <span className="text-accent-cyan">ACTIVE_PURSUIT</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
