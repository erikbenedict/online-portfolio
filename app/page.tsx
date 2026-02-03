import { ArrowRight, Code2, Cloud, Layers } from 'lucide-react'
import { LinkButton, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section min-h-[80vh] flex items-center">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" className="mb-6">
              Available for New Opportunities
            </Badge>
            
            <h1 className="text-balance mb-6">
              Full-Stack Engineer Building
              <span className="gradient-text"> Cloud-Native Solutions</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Microsoft Certified Azure Developer with 2+ years delivering production systems. 
              Specializing in React, Next.js, TypeScript, and scalable cloud architectures.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <LinkButton size="lg" href="/work">
                View My Work <ArrowRight className="ml-2 w-5 h-5" />
              </LinkButton>
              
              <LinkButton variant="outline" size="lg" href="/contact">
                Get In Touch
              </LinkButton>
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
              I build end-to-end solutions that bridge frontend elegance with robust cloud infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent-100 text-accent-600 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">Full-Stack Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Building responsive, performant web applications with React, Next.js, and TypeScript. 
                  From elegant UIs to robust APIs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent-100 text-accent-600 flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">Cloud Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Designing and deploying scalable Azure solutions. App Services, Functions, 
                  Static Web Apps, and data pipelines.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent-100 text-accent-600 flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">System Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Connecting enterprise systems with modern platforms. Dynamics 365, 
                  Power Platform, and API integrations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="section">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="mb-4">Featured Projects</h2>
              <p className="text-xl text-muted-foreground">
                Recent work showcasing full-stack capabilities and business impact
              </p>
            </div>
            <LinkButton variant="ghost" href="/work" className="hidden md:inline-flex">
              View All Projects <ArrowRight className="ml-2 w-4 h-4" />
            </LinkButton>
          </div>
          
          <div className="text-center py-12 text-muted-foreground">
            <p>Project showcases coming in next phase...</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-700 to-accent-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Let's Build Something Great</h2>
            <p className="text-xl text-white/90 mb-8">
              I'm currently open to full-stack engineering opportunities where I can 
              contribute to meaningful products and grow with a talented team.
            </p>
            <LinkButton 
              size="lg" 
              variant="secondary"
              href="/contact"
            >
              Start a Conversation
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  )
}