import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ParticleBackground } from '../common/ParticleBackground';
import { CustomCursor } from '../common/CustomCursor';
import { LoadingScreen } from '../common/LoadingScreen';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Scroll to hash or top on location change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="relative min-h-screen bg-background text-white selection:bg-accent-orange selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Loading Boot Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Interactive Custom Cursor on Desktop */}
      <CustomCursor />

      {/* Lightweight Canvas Particle Mesh */}
      <ParticleBackground />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10">{children}</main>

      {/* Minimal Futuristic Footer */}
      <Footer />
    </div>
  );
};
