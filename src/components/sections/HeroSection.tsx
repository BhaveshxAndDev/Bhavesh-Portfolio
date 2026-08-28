import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Terminal } from 'lucide-react';
import { CTAButton } from '../common/CTAButton';
import { TechBadge } from '../common/TechBadge';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../common/BrandIcons';

const typingPhrases = [
  'Building Android Apps',
  'Full-Stack Development',
  'REST API & Backend Integration',
  'Firebase & Database Solutions',
  'Cybersecurity Trajectory',
  'Future Entrepreneur'
];

export const HeroSection: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = typingPhrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex]);

  const floatingPills = [
    { name: 'JAVA', color: 'orange', position: 'top-6 -left-6 md:-left-10', delay: 0 },
    { name: 'ANDROID', color: 'cyan', position: 'top-20 -right-4 md:-right-8', delay: 0.2 },
    { name: 'PHP', color: 'purple', position: 'bottom-28 -left-6 md:-left-8', delay: 0.4 },
    { name: 'MYSQL', color: 'cyan', position: 'bottom-12 -right-4 md:-right-6', delay: 0.6 },
    { name: 'REST API', color: 'orange', position: '-top-4 right-1/4', delay: 0.8 },
    { name: 'FIREBASE', color: 'orange', position: '-bottom-4 left-1/4', delay: 1.0 },
    { name: 'CYBERSECURITY', color: 'cyan', position: 'top-1/2 -right-8 md:-right-12', delay: 1.2 },
  ];

  return (
    <section id="hero" className="relative pt-24 pb-8 md:pt-28 md:pb-12 px-3 sm:px-6 lg:px-8">
      {/* Reference-Inspired Large Rounded Gradient Hero Container */}
      <div className="relative max-w-7xl mx-auto rounded-[2.5rem] md:rounded-[3.5rem] bg-[#09090D] border border-white/10 overflow-hidden shadow-2xl hero-glow-container">
        {/* Futuristic Background Layers */}
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />
        
        {/* Soft Glowing Ambient Orbs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-orange/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-cyan/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Hero Main Content */}
        <div className="relative z-10 px-6 sm:px-10 md:px-16 pt-12 md:pt-20 pb-12 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: Editorial Typography & CTAs (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              
              {/* Small Label Pill */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-warm/40 bg-accent-warm/10 backdrop-blur-md w-fit"
              >
                <span className="w-2 h-2 rounded-full bg-accent-warm animate-ping" />
                <span className="font-mono text-xs text-orange-300 tracking-widest uppercase font-semibold">
                  HELLO, I'M BHAVESH DATTUJI REWATKAR
                </span>
              </motion.div>

              {/* Huge Editorial Heading */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="space-y-1"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black font-heading tracking-tighter text-white leading-[1.02]">
                  FULL-STACK <br />
                  <span className="text-gradient-orange">ANDROID</span> <br />
                  DEVELOPER
                </h1>
              </motion.div>

              {/* Sub-Roles & Typing Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3"
              >
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-white/80">
                  <span className="text-accent-cyan font-semibold">Future Cybersecurity Professional</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/90">Problem Solver</span>
                  <span className="text-white/30">•</span>
                  <span className="text-orange-400">Builder</span>
                </div>

                {/* Animated Typing Console */}
                <div className="flex items-center gap-2 font-mono text-sm sm:text-base py-1 px-3 rounded-lg bg-black/40 border border-white/10 w-fit">
                  <span className="text-accent-warm font-bold">❯</span>
                  <span className="text-white/90">{currentText}</span>
                  <span className="w-2 h-4 bg-accent-cyan animate-pulse inline-block" />
                </div>
              </motion.div>

              {/* Description Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-textMuted text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal"
              >
                I build feature-rich full-stack Android applications by combining modern frontend interfaces, backend APIs, databases, Firebase, and practical problem-solving. I am continuously expanding my expertise toward cybersecurity and secure application development.
              </motion.p>

              {/* CTA Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-3.5 pt-2"
              >
                <CTAButton
                  to="/#projects"
                  onClick={() => {
                    const el = document.getElementById('projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="primary"
                  size="md"
                >
                  View My Projects
                </CTAButton>

                <CTAButton
                  href="/resume/Bhavesh-Rewatkar-Resume.pdf"
                  variant="glass"
                  size="md"
                  iconType="external"
                  download="Bhavesh-Rewatkar-Resume.pdf"
                >
                  Download Resume
                </CTAButton>

                <CTAButton
                  to="/#contact"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="outline"
                  size="md"
                >
                  Contact Me
                </CTAButton>
              </motion.div>

              {/* Social Icons Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-4 pt-3 border-t border-white/10"
              >
                <span className="font-mono text-xs text-textMuted uppercase tracking-wider">Connect:</span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://github.com/BhaveshxAndDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bhavesh GitHub"
                    className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors border border-white/10"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bhavesh-rewatkar-82b8a03a2"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bhavesh LinkedIn"
                    className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-accent-cyan transition-colors border border-white/10"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1QFqZgEbEH/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bhavesh Facebook"
                    className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-blue-400 transition-colors border border-white/10"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Futuristic Rounded Frame with Portrait & Floating Tech Badges (5 cols) */}
            <div className="lg:col-span-5 flex justify-center items-center relative py-6">
              
              {/* Central Futuristic Rounded Frame */}
              <div className="relative w-72 sm:w-80 md:w-96 aspect-[4/5] rounded-[2.5rem] bg-gradient-to-b from-card via-[#15151D] to-[#0A0A0F] border border-white/15 p-3.5 shadow-2xl group">
                
                {/* Outer Glow Halo */}
                <div className="absolute -inset-1 rounded-[2.7rem] bg-gradient-to-r from-accent-warm via-accent-orange to-accent-cyan opacity-30 blur-xl group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

                {/* Inner Image Container */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#0A0A0E] border border-white/10 flex flex-col items-center justify-between p-6">
                  
                  {/* Background Cyber Mesh */}
                  <div className="absolute inset-0 cyber-grid-bg opacity-35" />
                  
                  {/* Top Frame Tech Status */}
                  <div className="relative z-10 w-full flex items-center justify-between text-[11px] font-mono text-white/60">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent-warm animate-pulse" />
                      BHAVESH.DEV
                    </span>
                    <span className="text-accent-cyan font-bold">DEV_ID #BR26</span>
                  </div>

                  {/* Visual Portrait / High-Tech Developer Avatar Representation */}
                  <div className="relative z-10 my-auto flex flex-col items-center text-center">
                    <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-br from-accent-warm via-accent-orange to-accent-cyan shadow-glow-orange animate-float">
                      <div className="w-full h-full rounded-full bg-[#0D0D14] flex flex-col items-center justify-center p-4 border border-white/20 overflow-hidden relative">
                        {/* Futuristic Tech Core Graphic */}
                        <div className="absolute inset-0 bg-radial-gradient from-accent-warm/20 to-transparent" />
                        <div className="w-16 h-16 rounded-2xl bg-card border border-white/20 flex items-center justify-center shadow-inner relative z-10 mb-2">
                          <Terminal className="w-8 h-8 text-accent-warm" />
                        </div>
                        <span className="font-heading font-black text-xs uppercase tracking-widest text-white relative z-10">
                          BHAVESH
                        </span>
                        <span className="font-mono text-[10px] text-accent-cyan relative z-10">
                          FULL-STACK ANDROID
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 space-y-1">
                      <p className="font-heading font-black text-lg text-white">Bhavesh D. Rewatkar</p>
                      <p className="font-mono text-xs text-textMuted">Katol, Nagpur, Maharashtra</p>
                    </div>
                  </div>

                  {/* Bottom Scan telemetry */}
                  <div className="relative z-10 w-full bg-black/60 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-textMuted">SYSTEM STATUS:</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      ACTIVE & COMPILING
                    </span>
                  </div>
                </div>

                {/* Floating Tech Badges with animation around the frame */}
                {floatingPills.map((pill, idx) => (
                  <motion.div
                    key={pill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: pill.delay,
                      duration: 0.5,
                    }}
                    className={`absolute ${pill.position} z-20 hidden sm:block animate-float`}
                    style={{
                      animationDelay: `${idx * 0.8}s`,
                      animationDuration: `${5 + idx}s`,
                    }}
                  >
                    <TechBadge
                      name={pill.name}
                      variant={pill.color as any}
                      size="md"
                      className="shadow-xl shadow-black/80 font-bold border"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Pillars Inspired by Reference Design (#01, #02, #03, #04) */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-accent-warm font-bold"># 01</span>
              <p className="font-heading font-bold text-sm md:text-base text-white">Full-Stack Android</p>
              <p className="text-xs text-textMuted">Java, XML, Material Design</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-xs text-accent-warm font-bold"># 02</span>
              <p className="font-heading font-bold text-sm md:text-base text-white">REST API & Backend</p>
              <p className="text-xs text-textMuted">PHP, JSON, Async Communication</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-xs text-accent-warm font-bold"># 03</span>
              <p className="font-heading font-bold text-sm md:text-base text-white">Database & Cloud</p>
              <p className="text-xs text-textMuted">MySQL, XAMPP, Firebase</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-xs text-accent-warm font-bold"># 04</span>
              <p className="font-heading font-bold text-sm md:text-base text-white">Cybersecurity Focus</p>
              <p className="text-xs text-textMuted">Secure App Dev Trajectory</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Explore Indicator */}
      <div className="mt-6 flex justify-center">
        <a
          href="#tech-strip"
          aria-label="Scroll to technology stack"
          className="inline-flex items-center gap-2 font-mono text-xs text-textMuted hover:text-white transition-colors"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-accent-warm animate-bounce" />
        </a>
      </div>
    </section>
  );
};
