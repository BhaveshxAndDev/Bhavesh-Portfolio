import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '../components/common/CTAButton';
import { ShieldAlert } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg w-full text-center space-y-6 p-8 sm:p-12 rounded-3xl bg-[#0B0B10] border border-white/15 shadow-2xl relative overflow-hidden"
      >
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent-warm/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="w-16 h-16 rounded-2xl bg-accent-warm/10 border border-accent-warm/30 text-accent-warm flex items-center justify-center mx-auto shadow-glow-orange">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-accent-warm uppercase tracking-widest font-bold">
            ERROR CODE: 404
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-heading text-white">
            404 — SIGNAL LOST
          </h1>
          <p className="text-sm sm:text-base text-textMuted font-sans max-w-sm mx-auto">
            The page you're looking for doesn't exist or has been relocated to another sector.
          </p>
        </div>

        <div className="pt-4 flex justify-center">
          <CTAButton to="/" variant="primary" size="md">
            RETURN HOME
          </CTAButton>
        </div>
      </motion.div>
    </div>
  );
};
