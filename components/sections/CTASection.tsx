'use client'

import { motion } from 'framer-motion'
import { LinkButton } from '@/components/ui'
import { fadeUp, viewportConfig } from '@/lib/animations'

export default function CTASection() {
  return (
    <section className="section bg-gradient-to-br from-primary-700 to-accent-600 text-white">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-white mb-6">Let's Build Something Great</h2>
          <p className="text-xl text-white/90 mb-8">
            I'm currently open to full-stack engineering opportunities where
            I can contribute to meaningful products and grow with a talented
            team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <LinkButton size="lg" variant="secondary" href="/contact">
              Start a Conversation
            </LinkButton>
            <a
              href="/Erik-Benedict-Resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-base font-medium text-white hover:bg-white/20 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}