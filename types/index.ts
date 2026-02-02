export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'full-stack' | 'cloud' | 'frontend';
  tags: string[];
  image: string;
  liveUrl?: string;
  featured: boolean;
  
  // Case study details
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  techStack: {
    category: string;
    technologies: string[];
  }[];
  timeline?: string;
  team?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'tools';
  proficiency: number; // 1-5
  description: string;
  icon?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type NavItem = {
  label: string;
  href: string;
}
