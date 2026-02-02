import { Skill } from '@/types'

export const skills: Skill[] = [
  // Frontend
  {
    name: 'React',
    category: 'frontend',
    proficiency: 5,
    description: 'Building complex UIs with hooks, context, and modern patterns',
  },
  {
    name: 'Next.js',
    category: 'frontend',
    proficiency: 5,
    description: 'SSR, SSG, API routes, and App Router expertise',
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    proficiency: 5,
    description: 'Type-safe development with advanced types and patterns',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    proficiency: 5,
    description: 'Rapid UI development with utility-first CSS',
  },
  
  // Backend
  {
    name: 'Node.js',
    category: 'backend',
    proficiency: 4,
    description: 'Building scalable APIs and serverless functions',
  },
  {
    name: 'Express',
    category: 'backend',
    proficiency: 4,
    description: 'RESTful API development and middleware',
  },
  {
    name: 'SQL Server',
    category: 'backend',
    proficiency: 4,
    description: 'Database design, queries, and optimization',
  },
  
  // Cloud & DevOps
  {
    name: 'Azure',
    category: 'cloud',
    proficiency: 5,
    description: 'App Services, Functions, Static Web Apps, SQL, DevOps',
  },
  {
    name: 'Azure DevOps',
    category: 'cloud',
    proficiency: 4,
    description: 'CI/CD pipelines, repos, and project management',
  },
  {
    name: 'Azure Data Factory',
    category: 'cloud',
    proficiency: 4,
    description: 'ETL pipelines and data orchestration',
  },
  
  // Tools
  {
    name: 'Git',
    category: 'tools',
    proficiency: 5,
    description: 'Version control, branching strategies, PR reviews',
  },
  {
    name: 'Power Platform',
    category: 'tools',
    proficiency: 4,
    description: 'Power Automate, Power Apps, Dynamics 365 integration',
  },
]

export function getSkillsByCategory(category: Skill['category']): Skill[] {
  return skills.filter((skill) => skill.category === category)
}

export function getAllSkills(): Skill[] {
  return skills
}
