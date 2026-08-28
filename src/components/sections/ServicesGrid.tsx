import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { servicesData } from '../../data/services';
import { 
  Smartphone, 
  AppWindow, 
  Server, 
  Flame, 
  Database, 
  Layout, 
  Globe, 
  GitBranch, 
  ShieldCheck
} from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Smartphone: <Smartphone className="w-6 h-6 text-accent-warm" />,
    AppWindow: <AppWindow className="w-6 h-6 text-orange-400" />,
    Server: <Server className="w-6 h-6 text-accent-cyan" />,
    Flame: <Flame className="w-6 h-6 text-amber-400" />,
    Database: <Database className="w-6 h-6 text-emerald-400" />,
    Layout: <Layout className="w-6 h-6 text-purple-400" />,
    Globe: <Globe className="w-6 h-6 text-blue-400" />,
    GitBranch: <GitBranch className="w-6 h-6 text-pink-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-accent-cyan" />,
  };

  return (
    <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number="06"
        tag="SERVICES"
        title="WHAT I CAN BUILD"
        subtitle="End-to-end software engineering capabilities spanning responsive Android interfaces, custom PHP backend APIs, and relational data architecture."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, idx) => {
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden ${
                service.isEmerging
                  ? 'bg-gradient-to-b from-[#0F141F] to-[#0A0D15] border-accent-cyan/40 hover:border-accent-cyan shadow-[0_0_30px_-5px_rgba(0,240,255,0.2)]'
                  : 'bg-card/70 border-white/10 hover:border-white/20 hover:bg-card'
              }`}
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-accent-warm transition-colors" />

              <div>
                {/* Header with Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-accent-warm/40 transition-all">
                    {iconMap[service.iconName] || <Smartphone className="w-6 h-6" />}
                  </div>

                  <div className="flex items-center gap-2">
                    {service.isEmerging && (
                      <span className="px-2.5 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-[10px] uppercase font-bold">
                        EMERGING FOCUS
                      </span>
                    )}
                    <span className="font-mono text-sm font-bold text-white/30 group-hover:text-accent-warm transition-colors">
                      {service.number}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-black font-heading text-white mb-3 group-hover:text-accent-warm transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-textMuted leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Technologies list */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-lg bg-white/[0.03] border border-white/5 font-mono text-[10px] text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
