import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { androidDependenciesData } from '../../data/dependencies';
import type { AndroidDependency } from '../../data/dependencies';
import { Terminal, Copy, Check, Code2 } from 'lucide-react';

export const AndroidLibrariesTerminal: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeDep, setActiveDep] = useState<AndroidDependency>(androidDependenciesData[0]);

  const copyToClipboard = (dep: AndroidDependency) => {
    navigator.clipboard.writeText(dep.gradleImplementation);
    setCopiedId(dep.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        tag="DEPENDENCY ECOSYSTEM"
        title="ANDROID LIBRARIES & DEPENDENCIES"
        subtitle="Key Gradle implementations powering asynchronous network communications, smooth UI animations, and media handling."
      />

      <div className="rounded-3xl bg-[#08080C] border border-white/15 shadow-2xl overflow-hidden">
        {/* Terminal Header Bar */}
        <div className="px-6 py-4 bg-[#0F0F16] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
            </div>
            <div className="flex items-center gap-2 pl-3 border-l border-white/10 text-xs font-mono text-white/70">
              <Terminal className="w-3.5 h-3.5 text-accent-warm" />
              <span>build.gradle.kts (Module :app)</span>
            </div>
          </div>
          <span className="font-mono text-xs text-accent-cyan hidden sm:inline-block">
            GRADLE_BUILD_SUCCESSFUL
          </span>
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Dependencies Code List (7 cols) */}
          <div className="lg:col-span-7 space-y-4 font-mono text-xs sm:text-sm">
            <div className="text-white/40 pb-2 flex items-center gap-2">
              <span className="text-accent-warm">dependencies</span>
              <span>{'{'}</span>
            </div>

            <div className="space-y-3 pl-2 sm:pl-4">
              {androidDependenciesData.map((dep) => {
                const isSelected = activeDep.id === dep.id;
                const isCopied = copiedId === dep.id;

                return (
                  <motion.div
                    key={dep.id}
                    onClick={() => setActiveDep(dep)}
                    className={`group relative p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#151520] border-accent-warm/60 shadow-[0_0_20px_-5px_rgba(255,107,0,0.3)]'
                        : 'bg-card/40 border-white/5 hover:border-white/20 hover:bg-card/70'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="space-y-1 overflow-x-auto no-scrollbar">
                        <div className="flex items-center gap-2">
                          <span className="text-accent-cyan font-semibold">
                            {dep.name}
                          </span>
                          <span className="text-white/40 text-[10px] px-1.5 py-0.5 rounded bg-white/5">
                            v{dep.version}
                          </span>
                        </div>
                        <code className="text-white/90 group-hover:text-accent-warm transition-colors font-mono text-xs">
                          {dep.gradleImplementation}
                        </code>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(dep);
                        }}
                        aria-label={`Copy gradle dependency for ${dep.name}`}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white/60 hover:text-white border border-white/10 transition-colors flex-shrink-0"
                        title="Copy Gradle code"
                      >
                        {isCopied ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-white/40 pt-2 flex items-center gap-2">
              <span>{'}'}</span>
              <span className="w-2 h-4 bg-accent-cyan animate-pulse inline-block" />
            </div>
          </div>

          {/* Dependency Details Card (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#11111A] border border-white/10 p-6 space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-mono text-xs text-accent-warm font-bold uppercase tracking-wider">
                {activeDep.category}
              </span>
              <span className="font-mono text-xs text-white/50">
                v{activeDep.version}
              </span>
            </div>

            <div>
              <h4 className="text-xl font-heading font-black text-white mb-2">
                {activeDep.name}
              </h4>
              <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
                {activeDep.purpose}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan font-semibold">
                <Code2 className="w-3.5 h-3.5" />
                <span>Integration Purpose in Projects</span>
              </div>
              <p className="text-xs text-white/90 leading-relaxed font-sans">
                {activeDep.usedFor}
              </p>
            </div>

            <button
              onClick={() => copyToClipboard(activeDep)}
              className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              {copiedId === activeDep.id ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">GRADLE CODE COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-accent-warm" />
                  <span>COPY IMPLEMENTATION CODE</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
