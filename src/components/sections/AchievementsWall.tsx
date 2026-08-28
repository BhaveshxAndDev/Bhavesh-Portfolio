import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { achievementsData } from '../../data/achievements';
import { Trophy, Crown, Rocket, FileCheck, Award, Bot } from 'lucide-react';

export const AchievementsWall: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Trophy: <Trophy className="w-6 h-6 text-amber-400" />,
    Crown: <Crown className="w-6 h-6 text-amber-300" />,
    Rocket: <Rocket className="w-6 h-6 text-accent-warm" />,
    FileCheck: <FileCheck className="w-6 h-6 text-emerald-400" />,
    Award: <Award className="w-6 h-6 text-purple-400" />,
    Bot: <Bot className="w-6 h-6 text-accent-cyan" />,
  };

  return (
    <section id="achievements" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number="07"
        tag="ACHIEVEMENTS"
        title="MILESTONES & HONORS"
        subtitle="Verified recognitions of technical competence, problem-solving under pressure, strategic thinking, and leadership."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((item, idx) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden ${
                item.isFeatured
                  ? 'bg-gradient-to-b from-[#16120D] to-[#0D0B08] border-amber-500/30 hover:border-amber-400 shadow-[0_0_30px_-10px_rgba(251,191,36,0.2)]'
                  : 'bg-card/70 border-white/10 hover:border-white/20 hover:bg-card'
              }`}
            >
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] group-hover:bg-accent-warm/10 rounded-bl-full pointer-events-none transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[item.icon] || <Trophy className="w-6 h-6 text-accent-warm" />}
                  </div>

                  {item.tag && (
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] uppercase font-bold text-white/80">
                      {item.tag}
                    </span>
                  )}
                </div>

                <span className="font-mono text-[11px] uppercase tracking-wider text-accent-warm font-bold block mb-1">
                  {item.category}
                </span>

                <h3 className="text-xl sm:text-2xl font-black font-heading text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-white/40">
                <span>VERIFIED RECORD</span>
                <span className="text-accent-cyan font-bold">HONOR #0{idx + 1}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
