import React from 'react';
import { Link } from 'react-router-dom';
import { AboutSection } from '../components/sections/AboutSection';
import { EducationTimeline } from '../components/sections/EducationTimeline';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { SkillsArsenal } from '../components/sections/SkillsArsenal';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { CybersecurityRoadmap } from '../components/sections/CybersecurityRoadmap';
import { AchievementsWall } from '../components/sections/AchievementsWall';
import { ContactSection } from '../components/sections/ContactSection';
import { ArrowLeft } from 'lucide-react';

const SubPageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
    <div className="mb-6">
      <Link
        to="/"
        className="inline-flex items-center gap-2 font-mono text-xs text-textMuted hover:text-accent-warm transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>BACK TO FULL PORTFOLIO</span>
      </Link>
    </div>
    {children}
  </div>
);

export const AboutPage: React.FC = () => (
  <SubPageWrapper>
    <AboutSection />
  </SubPageWrapper>
);

export const EducationPage: React.FC = () => (
  <SubPageWrapper>
    <EducationTimeline />
  </SubPageWrapper>
);

export const ExperiencePage: React.FC = () => (
  <SubPageWrapper>
    <ExperienceSection />
  </SubPageWrapper>
);

export const SkillsPage: React.FC = () => (
  <SubPageWrapper>
    <SkillsArsenal />
  </SubPageWrapper>
);

export const ServicesPage: React.FC = () => (
  <SubPageWrapper>
    <ServicesGrid />
  </SubPageWrapper>
);

export const CybersecurityPage: React.FC = () => (
  <SubPageWrapper>
    <CybersecurityRoadmap />
  </SubPageWrapper>
);

export const AchievementsPage: React.FC = () => (
  <SubPageWrapper>
    <AchievementsWall />
  </SubPageWrapper>
);

export const ContactPage: React.FC = () => (
  <SubPageWrapper>
    <ContactSection />
  </SubPageWrapper>
);
