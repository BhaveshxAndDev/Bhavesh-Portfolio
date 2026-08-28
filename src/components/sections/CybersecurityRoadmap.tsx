import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Shield, Lock, Radio, Eye, AlertTriangle, Key } from 'lucide-react';

export const CybersecurityRoadmap: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'Information Security Principles',
      status: 'Foundational',
      description: 'Understanding the CIA Triad (Confidentiality, Integrity, Availability), authentication mechanisms, hashing algorithms, and baseline cryptographic protocols.',
      icon: Lock,
      topics: ['CIA Triad', 'Hashing (SHA-256)', 'Symmetric & Asymmetric Encryption', 'Access Control Lists']
    },
    {
      id: '02',
      title: 'Cybersecurity Fundamentals',
      status: 'Active Learning',
      description: 'Studying network architecture vulnerabilities, packet sniffing concepts, port scanning methodologies, and defensive operating system hardening.',
      icon: Radio,
      topics: ['TCP/IP Security', 'Port Scanning Fundamentals', 'Firewall Rules', 'Defensive Hardening']
    },
    {
      id: '03',
      title: 'Web & Application Security',
      status: 'Active Practice',
      description: 'Mastering OWASP Top 10 web vulnerabilities, SQL injection prevention using prepared statements, XSS sanitization, and Cross-Site Request Forgery mitigations.',
      icon: AlertTriangle,
      topics: ['OWASP Top 10', 'SQLi Prevention', 'XSS Sanitization', 'CSRF Protection']
    },
    {
      id: '04',
      title: 'Secure Android Development',
      status: 'Active Practice',
      description: 'Securing Android application packages, implementing Android Keystore for sensitive tokens, ProGuard/R8 obfuscation, and root detection strategies.',
      icon: Shield,
      topics: ['Android Keystore', 'ProGuard / R8 Obfuscation', 'EncryptedSharedPreferences', 'Permission Hardening']
    },
    {
      id: '05',
      title: 'API Security & Token Hardening',
      status: 'Emerging Focus',
      description: 'Securing RESTful communication against Man-in-the-Middle (MitM) vectors, enforcing JWT expiration cycles, SSL Pinning, and rate-limiting endpoints.',
      icon: Key,
      topics: ['SSL / TLS Pinning', 'JWT Validation', 'API Rate Limiting', 'Input Validation Gateways']
    },
    {
      id: '06',
      title: 'Advanced Cybersecurity & Threat Modeling',
      status: 'Future Specialization',
      description: 'Future specialization in automated static/dynamic code analysis (SAST/DAST), reverse engineering APK binaries, and building enterprise threat models.',
      icon: Eye,
      topics: ['Binary Reverse Engineering', 'SAST / DAST Tools', 'Threat Modeling (STRIDE)', 'Secure CI/CD Pipelines']
    },
  ];

  return (
    <section id="cybersecurity" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        tag="FUTURE SPECIALIZATION"
        title="MY ROAD TO CYBERSECURITY"
        subtitle="From building full-stack applications to understanding vulnerabilities and engineering resilient, defense-in-depth software architectures."
      />

      {/* Futuristic Banner Card */}
      <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0C1322] via-[#090910] to-[#120B1A] border border-accent-cyan/30 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />
        
        {/* Core Progression Mantra */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="font-mono text-xs text-accent-cyan uppercase tracking-widest font-bold flex items-center justify-center md:justify-start gap-2 mb-2">
              <Shield className="w-4 h-4 text-accent-cyan" />
              ENGINEERING PHILOSOPHY
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
              BUILD APPLICATIONS → UNDERSTAND VULNERABILITIES → SECURE APPLICATIONS
            </h3>
          </div>

          <div className="flex-shrink-0 px-4 py-2 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/40 text-accent-cyan font-mono text-xs font-bold uppercase">
            LEARNING TRAJECTORY
          </div>
        </div>
      </div>

      {/* 6-Step Cybersecurity Roadmap Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#0B0C12] border border-white/10 hover:border-accent-cyan/40 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
            >
              {/* Scanline subtle overlay */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent group-hover:opacity-100 opacity-0 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-accent-cyan">
                    STEP {step.id}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase font-semibold bg-white/5 border border-white/10 text-white/80">
                    {step.status}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h4 className="font-heading font-black text-xl text-white mb-2 group-hover:text-accent-cyan transition-colors">
                  {step.title}
                </h4>

                <p className="text-xs sm:text-sm text-textMuted leading-relaxed mb-6 font-sans">
                  {step.description}
                </p>
              </div>

              {/* Key Topics Covered */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/50 block">
                  Curriculum & Focus Areas:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {step.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 font-mono text-[10px] text-white/70"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
