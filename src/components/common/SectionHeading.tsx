import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number?: string;
  tag: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  tag,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto' : 'text-left'} ${className}`}
    >
      {/* Category Pill / Number Tag */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase border border-white/10 bg-white/[0.03] backdrop-blur-md mb-4 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        {number && <span className="text-accent-warm font-bold">{number}</span>}
        {number && <span className="text-white/30">/</span>}
        <span className="text-white/80">{tag}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-accent-warm animate-pulse" />
      </motion.div>

      {/* Main Oversized Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.08] text-white"
      >
        {title}
      </motion.h2>

      {/* Optional Editorial Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-base md:text-lg text-textMuted max-w-2xl font-normal leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
