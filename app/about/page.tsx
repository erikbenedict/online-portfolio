import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Erik Benedict',
  description: 'Learn more about Erik Benedict - Full-Stack Software Engineer with expertise in Azure, React, and cloud-native development.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      {/*TODO: build out the full about section */}
      <div className="prose prose-lg max-w-none">
        <p>Content coming soon...</p>
      </div>
    </div>
  )
}
