import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  container?: boolean
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('section', className)}
        {...props}
      >
        {container ? (
          <div className="container">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    )
  }
)

Section.displayName = 'Section'

export default Section