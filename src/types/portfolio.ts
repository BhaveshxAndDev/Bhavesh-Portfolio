export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  category: 'Android Application' | 'Full-Stack Application' | 'Health-Tech' | 'Hackathon Project';
  categoryBadge: string;
  isHackathon?: boolean;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  role: string;
  contributions: string[];
  architecturePipeline: {
    from: string;
    to: string;
    protocol: string;
    description: string;
  }[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  futureScope: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  accentColor: string;
  gradient: string;
  coverImage?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: {
    name: string;
    tag?: string;
    description: string;
    usage: string;
    level: 'Core' | 'Advanced' | 'Practiced' | 'Emerging';
    iconName?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  extendedDuration?: string;
  description: string;
  isHighlighted?: boolean;
  highlightBadge?: string;
  technicalAreas: {
    category: string;
    skills: string[];
  }[];
  keyAchievements: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  status: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  isEmerging?: boolean;
  iconName: string;
}

export interface AchievementItem {
  id: string;
  icon: string;
  title: string;
  category: string;
  description: string;
  tag?: string;
  isFeatured?: boolean;
}

export interface InterestItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}
