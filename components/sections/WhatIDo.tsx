'use client'

import { motion } from 'framer-motion'
import { Code2, Cloud, Layers } from 'lucide-react'
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations'

const whatIDo = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    body: 'Building responsive, performant web applications with React, Next.js, and TypeScript. From elegant UIs to robust APIs.',
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    body: 'Designing and deploying scalable Azure solutions — App Services, Functions, Static Web Apps, and data pipelines.',
  },
  {
    icon: Layers,
    title: 'System Integration',
    body: 'Connecting enterprise systems with modern platforms — Dynamics 365, Power Platform, and complex API integrations.',
  },
]

export default function WhatIDoSection() {
  return (
    <section className="section bg-muted">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="mb-4">What I Do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I build end-to-end solutions that bridge frontend elegance with
            robust cloud infrastructure
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {whatIDo.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-accent-100 text-accent-600 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}