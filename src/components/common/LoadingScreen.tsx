import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const steps = [
    'Initializing portfolio core...',
    'Loading projects & architectures...',
    'Loading skills & technical arsenal...',
    'Connecting cybersecurity lab systems...',
    'Ready. Welcome to BHAVESH.DEV'
  ];

  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        const stepText = steps[currentStep];
        setLogs((prev) => [...prev, stepText]);
        setProgress(Math.min(100, Math.round(((currentStep + 1) / steps.length) * 100)));
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, 220);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background p-6"
    >
      <div className="w-full max-w-md">
        {/* Brand Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-accent-warm animate-ping" />
            <span className="font-heading font-black text-xl tracking-wider text-white">
              BHAVESH<span className="text-accent-warm">.DEV</span>
            </span>
          </div>
          <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase">
            SYS_BOOT v2.6
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-6">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-warm via-accent-orange to-accent-cyan"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Terminal Boot Log */}
        <div className="bg-card/80 rounded-xl p-4 border border-white/10 font-mono text-xs space-y-2 min-h-[140px] shadow-2xl backdrop-blur-md">
          <AnimatePresence>
            {logs.map((log, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-white/80"
              >
                <span className="text-accent-warm text-[10px]">❯</span>
                <span className={idx === logs.length - 1 ? 'text-accent-cyan font-semibold' : 'text-textMuted'}>
                  {log}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="inline-block w-2 h-3.5 bg-accent-warm animate-pulse ml-4" />
        </div>
      </div>
    </motion.div>
  );
};
