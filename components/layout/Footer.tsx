import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-border bg-muted transition-colors duration-200">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Erik Benedict. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/erikbenedict"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/erik-benedict/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
              aria-label="Contact"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}