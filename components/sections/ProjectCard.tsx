'use client'

import { ChevronDown, ExternalLink, Users, Clock } from 'lucide-react'
import { Badge } from '@/components/ui'
import { Project } from '@/types'

const categoryLabel: Record<string, string> = {
  'full-stack': 'Full-Stack',
  cloud: 'Cloud / Backend',
  frontend: 'Frontend',
}

interface ProjectCardProps {
  project: Project
  index: number
  isOpen: boolean
  onToggle: () => void
}

export default function ProjectCard({ project, index, isOpen, onToggle }: ProjectCardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-white dark:bg-surface shadow-sm overflow-hidden transition-shadow duration-300 ${
        isOpen ? 'shadow-md' : 'hover:shadow-md'
      }`}
    >
      {/* Collapsed header — always visible */}
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 group"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4 min-w-0">
          {/* Index number */}
          <span className="shrink-0 w-8 h-8 rounded-full bg-accent-100 dark:bg-accent-900/40 text-accent-700 dark:text-accent-400 text-sm font-bold flex items-center justify-center mt-0.5">
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                {project.title}
              </h3>
              <Badge variant="secondary" className="text-xs">
                {categoryLabel[project.category] ?? project.category}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground font-medium mb-2">
              {project.subtitle}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 5 && (
                <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                  +{project.tags.length - 5}
                </span>
              )}
            </div>
          </div>
        </div>

        <ChevronDown
          className={`shrink-0 w-5 h-5 text-muted-foreground transition-transform duration-300 mt-1 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Expanded content */}
      {isOpen && (
        <div className="border-t border-border bg-muted/50 dark:bg-muted/30">
          <div className="px-6 py-6 space-y-6">
            {/* Meta row */}
            <div className="flex flex-wrap gap-6 text-sm">
              {project.timeline && (
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{project.timeline}</span>
                </div>
              )}
              {project.team && (
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{project.team}</span>
                </div>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Challenge + Solution */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                    The Challenge
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                    The Solution
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Results + Tech Stack */}
              <div className="space-y-4">
                {project.results && project.results.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                      Results
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.results.map((result) => (
                        <div
                          key={result.metric}
                          className="rounded-lg border border-border bg-white dark:bg-surface p-3 text-center"
                        >
                          <div className="text-xl font-bold text-accent-600 dark:text-accent-400 mb-0.5">
                            {result.value}
                          </div>
                          <div className="text-xs font-medium text-foreground">
                            {result.metric}
                          </div>
                          {result.description && (
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {result.description}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.techStack && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                      Tech Stack
                    </h4>
                    <div className="space-y-2">
                      {project.techStack.map((layer) => (
                        <div key={layer.category}>
                          <span className="text-xs font-medium text-muted-foreground mr-2">
                            {layer.category}:
                          </span>
                          {layer.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center rounded-md bg-accent-50 dark:bg-accent-950/50 border border-accent-200 dark:border-accent-800 px-1.5 py-0.5 text-xs font-medium text-accent-700 dark:text-accent-400 mr-1 mb-1"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}