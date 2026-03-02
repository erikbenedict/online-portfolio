'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Download, Menu, X } from 'lucide-react'

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
  const [isOpen, setIsOpen] = useState(false)

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const linkClass = (href: string) => {
    const isActive = href === '/contact' ? pathname.startsWith(href) : false
    return `text-sm font-medium px-3 py-2 rounded-md transition-colors hover:text-accent-600 dark:hover:text-accent-400 hover:bg-accent-50 dark:hover:bg-accent-900/30 ${
      isActive
        ? 'text-foreground bg-accent-50 dark:bg-accent-900/30'
        : 'text-muted-foreground'
    }`
  }

  return (
    <>
      {/* ── Desktop nav ── */}
      <nav className="hidden md:flex items-center gap-1 sm:gap-2">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={linkClass(item.href)}>
            {item.label}
          </Link>
        ))}
        <a
          href="/Erik-Benedict-Resume.pdf"
          download
          className="ml-2 inline-flex items-center gap-1.5 rounded-lg border border-accent-600 bg-accent-600 px-3 py-2 text-sm font-medium text-white hover:bg-accent-700 hover:border-accent-700 transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          Resume
        </a>
      </nav>

      {/* ── Mobile hamburger button ── */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-muted text-muted-foreground hover:text-accent-600 dark:hover:text-accent-400 hover:bg-accent-50 dark:hover:bg-accent-900/30 transition-colors"
      >
        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>

      {/* ── Mobile menu panel ── */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 top-16 z-40 bg-black/20 dark:bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Dropdown panel */}
          <div className="md:hidden fixed left-0 right-0 top-16 z-50 border-b border-border bg-background backdrop-blur shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${linkClass(item.href)} py-3 text-base`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 mt-1 border-t border-border">
                <a
                  href="/Erik-Benedict-Resume.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-accent-600 bg-accent-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-700 hover:border-accent-700 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Resume
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  )
}