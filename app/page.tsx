import Image from 'next/image'
import { ArrowRight, Code2, Cloud, Layers } from 'lucide-react'
import { LinkButton, Badge } from '@/components/ui'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import FeaturedProjects from '@/components/sections/FeaturedProjects'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section min-h-[85vh] flex items-center">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-6 items-center max-w-6xl mx-auto">

            {/* Text content */}
            <div>
              <Badge variant="accent" className="mb-6">
                Available for New Opportunities
              </Badge>

              <h1 className="text-balance mb-6">
                Full-Stack Engineer Building
                <span className="gradient-text"> Cloud-Native Solutions</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                Microsoft Certified Azure Developer delivering production
                systems end-to-end. React, Next.js, TypeScript, and scalable
                Azure architectures.
              </p>

              <div className="flex flex-wrap gap-4">
                <LinkButton size="lg" href="/#projects">
                  View My Work <ArrowRight className="ml-2 w-5 h-5" />
                </LinkButton>
                <LinkButton variant="outline" size="lg" href="/contact">
                  Get In Touch
                </LinkButton>
              </div>
            </div>

            {/* Headshot */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Decorative gradient ring */}
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
            </div>

          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="section bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">What I Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I build end-to-end solutions that bridge frontend elegance with
              robust cloud infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-accent-100 text-accent-600 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-muted-foreground">
                Building responsive, performant web applications with React,
                Next.js, and TypeScript. From elegant UIs to robust APIs.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-accent-100 text-accent-600 flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Architecture</h3>
              <p className="text-muted-foreground">
                Designing and deploying scalable Azure solutions — App
                Services, Functions, Static Web Apps, and data pipelines.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-accent-100 text-accent-600 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">System Integration</h3>
              <p className="text-muted-foreground">
                Connecting enterprise systems with modern platforms — Dynamics
                365, Power Platform, and complex API integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Skills Section */}
      <SkillsSection />

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-700 to-accent-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
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
          </div>
        </div>
      </section>
    </>
  )
}