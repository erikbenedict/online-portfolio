'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-muted text-muted-foreground hover:text-accent-600 hover:bg-accent-50 dark:border-dark-border dark:bg-dark-surface dark:text-dark-muted dark:hover:text-accent-400 dark:hover:bg-accent-950/30 transition-colors"
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Sun className="w-4 h-4" />
      )}
    </button>
  )
}