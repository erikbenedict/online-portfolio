'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui'
import { getFeaturedProjects } from '@/lib/projects'
import ProjectCard from './ProjectCard'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

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
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
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
          </motion.div>

          {/* Project list */}
          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {projects.map((project, index) => (
              <motion.div key={project.slug} variants={fadeUp}>
                <ProjectCard
                  project={project}
                  index={index}
                  isOpen={expandedSlug === project.slug}
                  onToggle={() => toggle(project.slug)}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}