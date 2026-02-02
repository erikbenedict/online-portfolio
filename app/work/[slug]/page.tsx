import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// TODO: import project data here once it's created
// import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  
  // TODO: Get actual project data
  // const project = getProjectBySlug(slug)
  
  return {
    title: `${slug} | Erik Benedict`,
    description: 'Project case study',
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  
  // TODO: Get actual project data
  // const project = getProjectBySlug(slug)
  // if (!project) notFound()
  
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">{slug}</h1>
      
      {/* TODO: build out the full case study layout */}
      <div className="prose prose-lg max-w-none">
        <p>Project case study coming soon...</p>
      </div>
    </div>
  )
}

// Generate static params for all projects
export async function generateStaticParams() {
  // TODO: Return all project slugs
  // const slugs = getAllProjectSlugs()
  // return slugs.map((slug) => ({ slug }))
  
  return []
}
