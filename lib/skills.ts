import { Skill } from '@/types'

export const skills: Skill[] = [
  // Frontend
  {
    name: 'React',
    category: 'frontend',
    description: 'Building complex UIs with hooks, context, and modern patterns',
  },
  {
    name: 'Next.js',
    category: 'frontend',
    description: 'SSR, SSG, API routes, and App Router expertise',
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    description: 'Type-safe development with advanced types and patterns',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    description: 'Rapid UI development with utility-first CSS',
  },
  {
    name: 'HTML / CSS',
    category: 'frontend',
    description: 'Semantic markup, accessibility, and responsive design',
  },

  // Backend
  {
    name: 'Node.js',
    category: 'backend',
    description: 'Building scalable APIs and serverless functions',
  },
  {
    name: 'Express',
    category: 'backend',
    description: 'RESTful API development and middleware',
  },
  {
    name: 'SQL Server',
    category: 'backend',
    description: 'Database design, queries, and optimization',
  },
  {
    name: 'REST APIs',
    category: 'backend',
    description: 'Design, documentation, and third-party integrations',
  },
  {
    name: 'C# / .NET',
    category: 'backend',
    description: 'Azure Functions and backend service development',
  },

  // Cloud & DevOps
  {
    name: 'Azure',
    category: 'cloud',
    description: 'App Services, Functions, Static Web Apps, SQL, DevOps',
  },
  {
    name: 'Azure DevOps',
    category: 'cloud',
    description: 'CI/CD pipelines, repos, and project management',
  },
  {
    name: 'Azure Data Factory',
    category: 'cloud',
    description: 'ETL pipelines and data orchestration',
  },
  {
    name: 'GitHub Actions',
    category: 'cloud',
    description: 'Automated workflows and branch-based deployments',
  },

  // Tools
  {
    name: 'Git',
    category: 'tools',
    description: 'Version control, branching strategies, PR reviews',
  },
  {
    name: 'Power Platform',
    category: 'tools',
    description: 'Power Automate, Power Apps, Dynamics 365 integration',
  },
  {
    name: 'Dynamics GP',
    category: 'tools',
    description: 'ERP integrations and data synchronization',
  },
  {
    name: 'Figma',
    category: 'tools',
    description: 'Design-to-code collaboration and component handoff',
  },
]

export function getSkillsByCategory(category: Skill['category']): Skill[] {
  return skills.filter((skill) => skill.category === category)
}

export function getAllSkills(): Skill[] {
  return skills
}