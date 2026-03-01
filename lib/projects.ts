import { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'virgin-bay-calculator',
    title: 'Virgin Bay Mortgage',
    subtitle: 'VBM Calculator - Property Valuation Engine',
    description: 'Developed a proprietary property valuation engine analyzing 14+ variables to generate a 0-100 investment score. Integrated multiple REST APIs with Azure infrastructure for real-time property analysis.',
    category: 'full-stack',
    tags: ['React', 'TypeScript', 'Azure Functions', 'SQL Server', 'REST APIs', 'Contentful'],
    image: '/images/virgin-bay-calculator.jpg',
    liveUrl: 'https://virginbay.com/roi-calculator',
    featured: true,
    
    challenge: 'Virgin Bay Mortgage needed a modern, automated property valuation tool that could provide instant, accurate assessments for their clients in the US Virgin Islands market. Traditional methods were time-consuming and couldn\'t account for unique factors affecting property values in their local market, including rental potential and condo-specific variables.',
    
    solution: 'Built a proprietary VBM Calculator Application leveraging external APIs, custom algorithms, and integrated with their Contentful-powered content system to deliver instant property valuations and investment insights. Developed custom valuation logic analyzing 14+ variables including property specs, location, rental potential, and market trends to generate unique VBM scores.',
    
    results: [
      {
        metric: 'Proprietary Score',
        value: '0-100',
        description: 'Exclusive investment scoring system'
      },
      {
        metric: 'Variables Analyzed',
        value: '14+',
        description: 'Comprehensive analysis including unique market factors'
      },
      {
        metric: 'API Integrations',
        value: '3',
        description: 'Contentful CMS plus property and rental data APIs'
      }
    ],
    
    techStack: [
      {
        category: 'Frontend',
        technologies: ['React', 'TypeScript', 'Contentful REST API']
      },
      {
        category: 'Backend',
        technologies: ['Azure Functions', 'SQL Server', 'RESTful APIs']
      },
      {
        category: 'Infrastructure',
        technologies: ['Azure Static Web Apps', 'Azure API Management']
      }
    ],
    
    timeline: '3 months',
    team: 'Lead Developer - Full ownership of architecture and implementation'
  },
  {
    slug: 'mindster',
    title: 'Mindster',
    subtitle: 'AI-Powered Personal Coaching Platform',
    description: 'Revolutionary personal coaching application combining psychological principles with AI technology. Built with React and TypeScript, featuring dynamic content management and Azure cloud hosting.',
    category: 'full-stack',
    tags: ['React', 'TypeScript', 'Azure', 'Strapi CMS', 'AI/ML', 'Behavioral Science'],
    image: '/images/mindster.jpg',
    featured: true,
    
    challenge: 'The proliferation of digital tools claiming to enhance personal productivity and well-being has not substantially addressed the psychological underpinnings of behaviors like emotional eating. Existing solutions often overlook the mental models, psychological assessments, and nuances unique to individual users, presenting a significant unmet need.',
    
    solution: 'Developed Mindster as an innovative personal coaching application designed to enhance personal development through psychological principles and cutting-edge technology. Built with React and TypeScript, the platform delivers a responsive and engaging user experience. Azure Static Web Apps provide scalable hosting, while PostgreSQL ensures secure data management. Content is dynamically handled with Strapi CMS.',
    
    results: [
      {
        metric: 'Cloud Platform',
        value: 'Azure',
        description: 'Scalable cloud computing infrastructure'
      },
      {
        metric: 'Core Development',
        value: 'TypeScript',
        description: 'Type-safe development for reliability'
      },
      {
        metric: 'Content Management',
        value: 'Strapi CMS',
        description: 'Dynamic content updates and management'
      }
    ],
    
    techStack: [
      {
        category: 'Frontend',
        technologies: ['React', 'TypeScript', 'Responsive UI']
      },
      {
        category: 'Backend',
        technologies: ['Strapi CMS', 'PostgreSQL', 'Azure Functions']
      },
      {
        category: 'Infrastructure',
        technologies: ['Azure Static Web Apps', 'Azure Cloud Services']
      }
    ],
    
    timeline: '4 months',
    team: 'Full-Stack Developer - End-to-end implementation'
  },
  {
    slug: 'nugent-filters-integration',
    title: 'Nugent Filters',
    subtitle: 'E-Commerce & Inventory Integration',
    description: 'Established foundational infrastructure for automated inventory synchronization between Dynamics GP and Shopify. Built serverless competitor cross-reference tool embedded in storefront.',
    category: 'cloud',
    tags: ['Power Automate', 'Shopify', 'Dynamics GP', 'Azure Functions', 'SQL Server', 'OAuth 2.0'],
    image: '/images/nugent-filters.jpg',
    liveUrl: 'https://www.nugentfilters.com',
    featured: true,
    
    challenge: 'Nugent Filters needed to modernize their operations by connecting their on-premise Dynamics GP SQL Server database with their Shopify e-commerce storefront. Additionally, customers needed a way to easily cross-reference competitor part numbers to find equivalent Nugent products.',
    
    solution: 'Successfully established the foundational infrastructure for automated inventory synchronization using Power Automate cloud flows with an On-Premises Data Gateway to securely bridge environments. The system syncs inventory every 5 minutes using OAuth 2.0 authentication and Shopify\'s GraphQL Admin API. Built a competitor cross-reference search tool using serverless Azure architecture - customers enter a competitor part number and find the equivalent Nugent product with a direct link to purchase.',
    
    results: [
      {
        metric: 'Sync Frequency',
        value: '5 minutes',
        description: 'Real-time inventory updates between systems'
      },
      {
        metric: 'Architecture',
        value: 'Serverless',
        description: 'Minimal operational overhead and costs'
      },
      {
        metric: 'Authentication',
        value: 'OAuth 2.0',
        description: 'Secure API communication'
      }
    ],
    
    techStack: [
      {
        category: 'Integration',
        technologies: ['Power Automate', 'On-Premises Data Gateway', 'Shopify GraphQL API']
      },
      {
        category: 'Frontend Widget',
        technologies: ['React', 'Azure Static Web Apps', 'Embedded iframe']
      },
      {
        category: 'Backend',
        technologies: ['Azure Functions', 'Azure SQL Database', 'Full-text Search']
      }
    ],
    
    timeline: '2 months',
    team: 'Integration Specialist - Lead developer for both projects'
  },
  {
    slug: 'live-cell-algae-group',
    title: 'Live Cell Algae Group',
    subtitle: 'Complete Digital Transformation in 30 Days',
    description: 'Executed complete rebrand from EnSoil to multi-category platform. Delivered 22 HubSpot pages, Shopify integration, and comprehensive tech stack analysis in under 30 days.',
    category: 'full-stack',
    tags: ['HubSpot', 'Shopify', 'Next.js', 'Multi-Category Platform', 'Rapid Delivery'],
    image: '/images/live-cell-algae.jpg',
    liveUrl: 'https://thelivecellalgaegroup.com/',
    featured: true,
    
    challenge: 'Live Cell Algae Group (formerly EnSoil) needed to evolve from a single-product agricultural brand into a comprehensive multi-category platform showcasing their revolutionary algae technology across agriculture, lawn care, beauty, pharmaceuticals, and animal nutrition markets. The rebrand required complete rearchitecture of their digital presence to support multiple product lines, diverse customer segments, and sophisticated lead generation - all under aggressive timeline constraints.',
    
    solution: 'Delivered a complete digital transformation in under 30 days, including brand redesign, HubSpot website rebuild, Shopify e-commerce integration, comprehensive tech stack analysis, and strategic technology roadmap. Designed and developed 22 HubSpot pages including category-specific landing pages, resources/downloads, and events page. Implemented HubSpot tracking code across all pages with custom event tracking, cross-platform attribution, and CRM connection for automatic lead capture.',
    
    results: [
      {
        metric: 'Pages Delivered',
        value: '22',
        description: 'Complete multi-category website with targeted lead capture'
      },
      {
        metric: 'Platform',
        value: 'HubSpot',
        description: 'CMS & CRM with advanced tracking and automation'
      },
      {
        metric: 'E-Commerce',
        value: 'Shopify',
        description: 'Seamless commerce with unified customer experience'
      },
      {
        metric: 'Timeline',
        value: '<30 days',
        description: 'Full rebrand, redesign, rebuild, and integration'
      }
    ],
    
    techStack: [
      {
        category: 'CMS & Marketing',
        technologies: ['HubSpot CMS', 'HubSpot CRM', 'Marketing Automation']
      },
      {
        category: 'E-Commerce',
        technologies: ['Shopify', 'Synchronized Inventory', 'Order Tracking']
      },
      {
        category: 'Analytics',
        technologies: ['Custom Event Tracking', 'Lead Attribution', 'Conversion Path Analysis']
      }
    ],
    
    timeline: '<30 days',
    team: 'Lead Developer - Full-stack ownership of entire platform'
  }
]

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((project) => project.category === category)
}