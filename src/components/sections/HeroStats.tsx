import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Briefcase, Layers, ShieldCheck } from 'lucide-react';

export const HeroStats: React.FC = () => {
  const stats = [
    {
      value: '03',
      label: 'Featured Projects',
      description: 'End-to-end full-stack Android applications & hackathon build',
      icon: Smartphone,
      accent: 'orange',
    },
    {
      value: '01',
      label: 'Internship Experience',
      description: 'Mountreach Solution Pvt. Ltd. (Intern of the Month Awardee)',
      icon: Briefcase,
      accent: 'cyan',
    },
    {
      value: 'Full-Stack',
      label: 'Development Focus',
      description: 'Java Android UI, PHP REST APIs, MySQL & JSON integration',
      icon: Layers,
      accent: 'amber',
    },
    {
      value: 'Cybersecurity',
      label: 'Future Specialization',
      description: 'Dedicated learning path toward secure application architecture',
      icon: ShieldCheck,
      accent: 'purple',
    },
  ];

  return (
    <section className="relative py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 rounded-2xl bg-card/60 border border-white/10 hover:border-white/20 backdrop-blur-xl transition-all duration-300 group hover:-translate-y-1 overflow-hidden"
            >
              {/* Background corner highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-bl-full pointer-events-none group-hover:bg-accent-warm/10 transition-colors" />

              <div className="flex items-center justify-between mb-4">
                <span className="font-heading font-black text-2xl md:text-3xl text-white group-hover:text-accent-warm transition-colors">
                  {stat.value}
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-accent-warm/40 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-heading font-bold text-base text-white/95 mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-textMuted leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
