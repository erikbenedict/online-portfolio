import { Project } from '@/types'

// TODO: Populate with actual project data from case studies
// Add the 4 featured projects: Virgin Bay Calculator, Mindster, Nugent, Live Cell Algae

export const projects: Project[] = [
  // TODO: populate this with actual project data
]

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((project) => project.category === category)
}
