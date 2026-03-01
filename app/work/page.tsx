'use client'

import { useState } from 'react'
import { getFeaturedProjects, getProjectsByCategory } from '@/lib/projects'
import ProjectCard from '@/components/sections/ProjectCard'
import { Badge } from '@/components/ui'
import { Project } from '@/types'

const categories = [
  { label: 'All Projects', value: 'all' },
  { label: 'Full-Stack', value: 'full-stack' },
  { label: 'Cloud/Backend', value: 'cloud' },
  { label: 'Frontend', value: 'frontend' },
] as const

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | Project['category']>('all')
  
  const allProjects = getFeaturedProjects()
  const displayedProjects = activeCategory === 'all' 
    ? allProjects 
    : getProjectsByCategory(activeCategory)

  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="mb-4">My Work</h1>
          <p className="text-xl text-muted-foreground">
            Selected projects showcasing full-stack development, cloud architecture, 
            and business impact. Each represents end-to-end ownership from requirements 
            through deployment.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className="group"
            >
              <Badge
                variant={activeCategory === category.value ? 'accent' : 'secondary'}
                className="cursor-pointer transition-all hover:scale-105 text-sm py-2 px-4"
              >
                {category.label}
              </Badge>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {displayedProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* Project Count */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Showing {displayedProjects.length} of {allProjects.length} projects
          </p>
        </div>
      </div>
    </div>
  )
}