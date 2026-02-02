import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Erik Benedict',
  description: 'Get in touch for opportunities, collaborations, or to discuss your next project.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-xl text-gray-600 mb-12">
          Interested in working together? Let's connect!
        </p>
        
        {/* TODO: add the contact form */}
        <div>
          <p>Contact form coming soon...</p>
        </div>
      </div>
    </div>
  )
}
