import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills | Erik Benedict',
  description: 'Technical skills and expertise: React, Next.js, TypeScript, Azure, Node.js, and more.',
}

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
      <p className="text-xl text-gray-600 mb-12">
        Technologies and tools I use to build production-ready applications.
      </p>
      
      {/* TODO: add skill categories and visualizations */}
      <div className="grid gap-8">
        <p>Skills sections coming soon...</p>
      </div>
    </div>
  )
}
