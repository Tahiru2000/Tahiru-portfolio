export interface Project {
  id: string;
  title: string;
  category: 'cloud' | 'ml' | 'fullstack' | 'research';
  categoryLabel: string;
  summary: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  date: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: string;
  bulletPoints: string[];
  skills: string[];
}

export interface LeadershipRole {
  id: string;
  title: string;
  institution: string;
  period: string;
  scope: string;
  summary: string;
  achievements: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details?: string[];
}

export interface GitHubRepoItem {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updated_at: string;
  html_url: string;
}
