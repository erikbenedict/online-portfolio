import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'accent' | 'success' | 'warning'
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default:
        'bg-primary-100 text-primary-700 border-primary-200 dark:bg-primary-900/40 dark:text-primary-200 dark:border-primary-700/50',
      secondary:
        'bg-muted text-muted-foreground border-border',
      accent:
        'bg-accent-100 text-accent-700 border-accent-200 dark:bg-accent-900/40 dark:text-accent-400 dark:border-accent-700/50',
      success:
        'bg-success-50 text-success-700 border-success-200 dark:bg-green-950/40 dark:text-green-400 dark:border-green-800/50',
      warning:
        'bg-warning-50 text-warning-700 border-warning-200 dark:bg-yellow-950/40 dark:text-yellow-400 dark:border-yellow-800/50',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors',
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'

export default Badge