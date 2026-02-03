'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavItem } from '@/types'

const navItems: NavItem[] = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  
  return (
    <nav className="flex items-center gap-6">
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.href)
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition-colors hover:text-accent-600 relative ${
              isActive ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            {item.label}
            {isActive && (
              <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-accent-600 rounded-full" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}