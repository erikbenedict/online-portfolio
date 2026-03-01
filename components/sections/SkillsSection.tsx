'use client'

import { Badge } from '@/components/ui'
import { getSkillsByCategory } from '@/lib/skills'
import type { Skill } from '@/types'
import { Monitor, Server, Cloud, Wrench } from 'lucide-react'

type CategoryConfig = {
  key: Skill['category']
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const categories: CategoryConfig[] = [
  { key: 'frontend', label: 'Frontend', icon: Monitor },
  { key: 'backend', label: 'Backend', icon: Server },
  { key: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
  { key: 'tools', label: 'Tools & Platforms', icon: Wrench },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="section bg-muted">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Tech Stack
            </Badge>
            <h2 className="mb-4">
              <span className="gradient-text">Skills &amp; Technologies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Full-stack breadth from React frontends to Azure cloud infrastructure.
            </p>
          </div>

          {/* Certification callout */}
          <div className="mb-12 rounded-xl bg-gradient-to-r from-primary-700 to-accent-600 p-px">
            <div className="rounded-xl bg-white px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 shrink-0">
                <img
                  src="/images/ms-certified-badge.png"
                  alt="Microsoft Certified: Azure Developer Associate"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Microsoft Certified: Azure Developer Associate
                </p>
                <p className="text-sm text-muted-foreground">
                  AZ-204 — Designing and building cloud solutions on Microsoft Azure
                </p>
              </div>
              <div className="sm:ml-auto">
                <Badge variant="accent">Certified</Badge>
              </div>
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map(({ key, label, icon: Icon }) => {
              const skills = getSkillsByCategory(key)
              return (
                <div key={key} className="rounded-xl bg-white p-6 shadow-sm">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-accent-500">
                    <div className="w-8 h-8 rounded-lg bg-accent-500 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-accent-100" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground tracking-wide">{label}</h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-0">
                    {skills.map((skill, i) => (
                      <div
                        key={skill.name}
                        className={`py-3 ${i < skills.length - 1 ? 'border-b border-accent-500/50' : ''}`}
                      >
                        <span className="font-semibold rounded-md bg-muted px-2 py-0.5 text-foreground text-sm tracking-wide">
                          {skill.name}
                        </span>
                        {skill.description && (
                          <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}