import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work | Erik Benedict',
  description: 'View my portfolio of full-stack development projects, including Azure cloud solutions, Next.js applications, and enterprise integrations.',
}

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">My Work</h1>
      <p className="text-xl text-gray-600 mb-12">
        Selected projects showcasing full-stack development, cloud architecture, and business impact.
      </p>
      
      {/* Todo: add project cards and filtering */}
      <div className="grid gap-8">
        <p>Project cards coming soon...</p>
      </div>
    </div>
  )
}
