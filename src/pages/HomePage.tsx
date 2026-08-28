import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { HeroStats } from '../components/sections/HeroStats';
import { TechMarqueeStrip } from '../components/sections/TechMarqueeStrip';
import { AboutSection } from '../components/sections/AboutSection';
import { EducationTimeline } from '../components/sections/EducationTimeline';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { SkillsArsenal } from '../components/sections/SkillsArsenal';
import { AndroidLibrariesTerminal } from '../components/sections/AndroidLibrariesTerminal';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import { ArchitecturePipeline } from '../components/sections/ArchitecturePipeline';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { CybersecurityRoadmap } from '../components/sections/CybersecurityRoadmap';
import { AchievementsWall } from '../components/sections/AchievementsWall';
import { PersonalityInterests } from '../components/sections/PersonalityInterests';
import { PhilosophySection } from '../components/sections/PhilosophySection';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="relative z-10 space-y-4">
      {/* 01. Hero */}
      <HeroSection />

      {/* 02. Stats */}
      <HeroStats />

      {/* 03. Technology Marquee */}
      <TechMarqueeStrip />

      {/* 04. About & Identity */}
      <AboutSection />

      {/* 05. Education */}
      <EducationTimeline />

      {/* 06. Experience */}
      <ExperienceSection />

      {/* 07. Skills Arsenal */}
      <SkillsArsenal />

      {/* 08. Android Dependencies */}
      <AndroidLibrariesTerminal />

      {/* 09. Featured Projects */}
      <FeaturedProjects />

      {/* 10. Architecture Pipeline */}
      <ArchitecturePipeline />

      {/* 11. Services */}
      <ServicesGrid />

      {/* 12. Cybersecurity Roadmap */}
      <CybersecurityRoadmap />

      {/* 13. Achievements */}
      <AchievementsWall />

      {/* 14. Personal Interests */}
      <PersonalityInterests />

      {/* 15. Philosophy */}
      <PhilosophySection />

      {/* 16. Contact */}
      <ContactSection />
    </div>
  );
};
