'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui'
import { getFeaturedProjects } from '@/lib/projects'
import ProjectCard from './ProjectCard'

export default function FeaturedProjects() {
  const projects = getFeaturedProjects()
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null)

  const toggle = (slug: string) =>
    setExpandedSlug((prev) => (prev === slug ? null : slug))

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Featured Work
            </Badge>
            <h2 className="mb-4">
              <span className="gradient-text">Recent Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Production systems built for real clients with real impact.
              Click any project to explore the details.
            </p>
          </div>

          {/* Project list */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                isOpen={expandedSlug === project.slug}
                onToggle={() => toggle(project.slug)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}