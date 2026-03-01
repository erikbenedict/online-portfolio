'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { LinkButton, Badge } from '@/components/ui'
import { heroEntrance } from '@/lib/animations'

export default function HeroSection() {
  return (
    <section className="section min-h-[85vh] flex items-center">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 items-center max-w-6xl mx-auto">

          {/* Text content — staggered entrance on page load */}
          <div>
            <motion.div custom={0} variants={heroEntrance} initial="hidden" animate="visible">
              <Badge variant="accent" className="mb-6">
                Available for New Opportunities
              </Badge>
            </motion.div>

            <motion.h1
              custom={1}
              variants={heroEntrance}
              initial="hidden"
              animate="visible"
              className="text-balance mb-6"
            >
              Full-Stack Engineer Building
              <span className="gradient-text"> Cloud-Native Solutions</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={heroEntrance}
              initial="hidden"
              animate="visible"
              className="text-xl text-muted-foreground mb-8 max-w-xl"
            >
              Microsoft Certified Azure Developer delivering production systems
              end-to-end. React, Next.js, TypeScript, and scalable Azure
              architectures.
            </motion.p>

            <motion.div
              custom={3}
              variants={heroEntrance}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <LinkButton size="lg" href="/#projects">
                View My Work <ArrowRight className="ml-2 w-5 h-5" />
              </LinkButton>
              <LinkButton variant="outline" size="lg" href="/contact">
                Get In Touch
              </LinkButton>
            </motion.div>
          </div>

          {/* Headshot — fades in slightly after text */}
          <motion.div
            custom={2}
            variants={heroEntrance}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-700 to-accent-500 blur-2xl opacity-20 scale-110" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/images/headshot.jpg"
                  alt="Erik Benedict"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 256px, 320px"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}