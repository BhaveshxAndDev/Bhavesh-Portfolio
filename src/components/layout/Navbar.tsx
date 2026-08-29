import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Mail } from 'lucide-react';
import { CTAButton } from '../common/CTAButton';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../common/BrandIcons';

interface NavItem {
  label: string;
  href: string;
  isSection?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Home', href: 'hero', isSection: true },
  { label: 'About', href: 'about', isSection: true },
  { label: 'Education', href: 'education', isSection: true },
  { label: 'Experience', href: 'experience', isSection: true },
  { label: 'Skills', href: 'skills', isSection: true },
  { label: 'Projects', href: 'projects', isSection: true },
  { label: 'Architecture', href: 'architecture', isSection: true },
  { label: 'Services', href: 'services', isSection: true },
  { label: 'Cybersecurity', href: 'cybersecurity', isSection: true },
  { label: 'Milestones', href: 'achievements', isSection: true },
  { label: 'Contact', href: 'contact', isSection: true },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (isHome) {
        const sections = navItems.map((item) => item.href);
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionEl = document.getElementById(sections[i]);
          if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isHome && item.isSection) {
      const target = document.getElementById(item.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(item.href);
      }
    } else {
      navigate(`/#${item.href}`);
      setTimeout(() => {
        const target = document.getElementById(item.href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo on Left */}
          <Link
            to="/"
            onClick={() => {
              if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-card border border-white/15 flex items-center justify-center group-hover:border-accent-warm transition-colors duration-300 relative overflow-hidden">
              <span className="font-heading font-black text-sm text-white group-hover:text-accent-warm transition-colors">
                B
              </span>
              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-accent-cyan rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-base md:text-lg tracking-wider text-white group-hover:text-white transition-colors flex items-center gap-1">
                BHAVESH<span className="text-accent-warm">.DEV</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-card/60 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navItems.slice(0, 9).map((item) => {
              const isActive = isHome && activeSection === item.href;
              return (
                <button
                  key={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 relative ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-textMuted hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-accent-warm/20 border border-accent-warm/50 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Status & CTA on Right */}
          <div className="hidden sm:flex items-center gap-3.5">
            {/* Status Pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LEARNING & BUILDING</span>
            </div>

            {/* Let's Talk CTA */}
            <CTAButton
              to="/#contact"
              onClick={(e?: React.MouseEvent) => {
                if (e) handleNavClick(e, { label: 'Contact', href: 'contact', isSection: true });
              }}
              variant="primary"
              size="sm"
            >
              Let's Talk
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="xl:hidden w-10 h-10 rounded-full bg-card/90 border border-white/15 flex items-center justify-center text-white hover:border-accent-warm transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-accent-warm" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Futuristic Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#050505]/98 backdrop-blur-2xl xl:hidden flex flex-col justify-between p-6 sm:p-8 pt-20 overflow-y-auto"
          >
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-card border border-accent-warm flex items-center justify-center">
                  <span className="font-heading font-black text-sm text-accent-warm">B</span>
                </div>
                <span className="font-heading font-black text-lg text-white">
                  BHAVESH<span className="text-accent-warm">.DEV</span>
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-card border border-white/20 flex items-center justify-center text-white"
              >
                <X className="w-5 h-5 text-accent-warm" />
              </button>
            </div>

            {/* Nav Links Stack */}
            <div className="py-6 flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={(e) => handleNavClick(e, item)}
                  className="flex items-center justify-between py-2.5 px-4 rounded-xl text-left font-heading font-bold text-lg text-white hover:text-accent-warm hover:bg-white/[0.04] transition-all"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                </motion.button>
              ))}
            </div>

            {/* Mobile Footer Area */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              {/* Status indicator */}
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>CURRENTLY LEARNING & BUILDING</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/BhaveshxAndDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bhavesh GitHub"
                  className="w-10 h-10 rounded-full bg-card border border-white/15 flex items-center justify-center text-white/80 hover:text-accent-warm hover:border-accent-warm transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bhavesh-rewatkar-82b8a03a2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bhavesh LinkedIn"
                  className="w-10 h-10 rounded-full bg-card border border-white/15 flex items-center justify-center text-white/80 hover:text-accent-cyan hover:border-accent-cyan transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/share/1QFqZgEbEH/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bhavesh Facebook"
                  className="w-10 h-10 rounded-full bg-card border border-white/15 flex items-center justify-center text-white/80 hover:text-blue-400 hover:border-blue-400 transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:bhaveshrewatkardev@gmail.com"
                  aria-label="Bhavesh Email"
                  className="w-10 h-10 rounded-full bg-card border border-white/15 flex items-center justify-center text-white/80 hover:text-accent-orange hover:border-accent-orange transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                <CTAButton
                  to="/#contact"
                  onClick={(e?: React.MouseEvent) => {
                    if (e) handleNavClick(e, { label: 'Contact', href: 'contact', isSection: true });
                  }}
                  variant="primary"
                  size="md"
                >
                  Contact
                </CTAButton>
                <CTAButton
                  href="/resume/Bhavesh-Rewatkar-Resume.pdf"
                  variant="glass"
                  size="md"
                  iconType="external"
                  target="_blank"
                  download="Bhavesh-Rewatkar-Resume.pdf"
                >
                  Resume
                </CTAButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
