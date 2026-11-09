export type ProjectCategory = 'all' | 'web' | 'software' | 'tools';

export interface TechnicalChallenge {
  title: string;
  challenge: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'software' | 'tools';
  projectType: string;
  badge?: string; // e.g. "SaaS Destacado", "Enterprise"
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  featured?: boolean;
  liveUrl?: string;
  tourUrl?: string;
  tourTitle?: string;
  demoCredentials?: Array<{
    role: string;
    email: string;
    password?: string;
    description?: string;
  }>;
  highlights: string[];
  challenges?: TechnicalChallenge[];
  image: string;
  accentColor?: string;
  isLogo?: boolean;
  logoBg?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  period?: string;
  role: string;
  organization: string;
  description: string;
  technologies?: string[];
}

export interface ProfessionalCompetency {
  title: string;
  items: string[];
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  location: string;
  workMode?: string;
  availability?: string;
  email: string;
  github?: string;
  linkedin: string;
  whatsapp?: string;
  availableForHire: boolean;
  yearsOfExperience?: string;
  completedProjectsCount: string;
}
