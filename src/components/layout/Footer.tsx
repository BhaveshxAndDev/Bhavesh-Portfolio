import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../common/BrandIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '/#hero' },
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Services', href: '/#services' },
    { label: 'Cybersecurity', href: '/#cybersecurity' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <footer className="relative bg-[#060609] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent-orange/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-card border border-accent-warm flex items-center justify-center">
                <span className="font-heading font-black text-sm text-accent-warm">B</span>
              </div>
              <span className="font-heading font-black text-xl text-white tracking-wider">
                BHAVESH<span className="text-accent-warm">.DEV</span>
              </span>
            </Link>
            <p className="text-white font-medium text-base">Bhavesh Dattuji Rewatkar</p>
            <p className="text-textMuted text-sm max-w-md leading-relaxed">
              Full-Stack Android Developer & Future Cybersecurity Professional. Building high-performance mobile applications with Java, PHP REST APIs, MySQL, and scalable architectural patterns.
            </p>
            <div className="flex items-center gap-2 text-xs text-textMuted">
              <MapPin className="w-3.5 h-3.5 text-accent-warm" />
              <span>Katol, Nagpur, Maharashtra, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/50">Navigation</h4>
            <ul className="grid grid-cols-2 gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-textMuted hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/50">Connect</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/BhaveshxAndDev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bhavesh GitHub profile"
                className="w-10 h-10 rounded-xl bg-card border border-white/10 flex items-center justify-center text-white/80 hover:text-accent-warm hover:border-accent-warm transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/bhavesh-rewatkar-82b8a03a2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bhavesh LinkedIn profile"
                className="w-10 h-10 rounded-xl bg-card border border-white/10 flex items-center justify-center text-white/80 hover:text-accent-cyan hover:border-accent-cyan transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1QFqZgEbEH/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bhavesh Facebook profile"
                className="w-10 h-10 rounded-xl bg-card border border-white/10 flex items-center justify-center text-white/80 hover:text-blue-400 hover:border-blue-400 transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:bhaveshrewatkardev@gmail.com"
                aria-label="Email Bhavesh"
                className="w-10 h-10 rounded-xl bg-card border border-white/10 flex items-center justify-center text-white/80 hover:text-accent-orange hover:border-accent-orange transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-1.5 pt-2 text-xs font-mono text-textMuted">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent-warm" />
                <a href="mailto:bhaveshrewatkardev@gmail.com" className="hover:text-white">
                  bhaveshrewatkardev@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent-cyan" />
                <a href="tel:9359072319" className="hover:text-white">
                  +91 9359072319
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-textMuted">
          <div>© 2026 Bhavesh Dattuji Rewatkar. All Rights Reserved.</div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>CURRENTLY LEARNING & BUILDING</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-accent-warm transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
