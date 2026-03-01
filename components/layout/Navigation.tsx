'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Download } from 'lucide-react'

type NavItem = {
  label: string
  href: string
  external?: boolean
  download?: boolean
  isButton?: boolean
}

const navItems: NavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-1 sm:gap-2">
      {navItems.map((item) => {
        const isActive = item.href === '/contact'
          ? pathname.startsWith(item.href)
          : false

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium px-3 py-2 rounded-md transition-colors hover:text-accent-600 hover:bg-accent-50 relative ${
              isActive
                ? 'text-foreground bg-accent-50'
                : 'text-muted-foreground'
            }`}
          >
            {item.label}
          </Link>
        )
      })}

      {/* Resume download button */}
      <a
        href="/Erik-Benedict-Resume.pdf"
        download
        className="ml-2 inline-flex items-center gap-1.5 rounded-lg border border-accent-600 bg-accent-600 px-3 py-2 text-sm font-medium text-white hover:bg-accent-700 hover:border-accent-700 transition-colors"
      >
        <Download className="w-3.5 h-3.5" />
        Resume
      </a>
    </nav>
  )
}