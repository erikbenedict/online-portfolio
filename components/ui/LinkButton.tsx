import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

export interface LinkButtonProps extends ComponentPropsWithoutRef<typeof Link> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent'
  size?: 'sm' | 'md' | 'lg'
}

export default function LinkButton({ 
  className, 
  variant = 'primary', 
  size = 'md',
  children,
  ...props 
}: LinkButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2'
  
  const variants = {
    primary: 'bg-primary-700 text-white hover:bg-primary-800 shadow-sm',
    secondary: 'bg-muted text-foreground hover:bg-muted/80',
    outline: 'border-2 border-primary-700 text-primary-700 hover:bg-primary-50',
    ghost: 'text-foreground hover:bg-muted',
    accent: 'bg-accent-600 text-white hover:bg-accent-700 shadow-sm',
  }
  
  const sizes = {
    sm: 'h-9 px-3 text-sm rounded-lg',
    md: 'h-11 px-6 text-base rounded-lg',
    lg: 'h-14 px-8 text-lg rounded-xl',
  }
  
  return (
    <Link
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}