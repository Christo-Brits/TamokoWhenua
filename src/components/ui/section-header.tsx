import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sectionHeaderVariants = cva("max-w-3xl mx-auto text-center", {
  variants: {
    align: {
      left: "mx-0 text-left",
      center: "text-center",
      right: "ml-auto mr-0 text-right",
    },
    spacing: {
      none: "mb-0",
      sm: "mb-8",
      md: "mb-12",
      lg: "mb-16",
      xl: "mb-20",
    },
  },
  defaultVariants: {
    align: "center",
    spacing: "md",
  },
})

export interface SectionHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof sectionHeaderVariants> {
  title: React.ReactNode
  description?: React.ReactNode
  badge?: React.ReactNode
  actions?: React.ReactNode
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
      className,
      title,
      description,
      badge,
      actions,
      align,
      spacing,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(sectionHeaderVariants({ align, spacing, className }))}
        {...props}
      >
        {badge && (
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            {badge}
          </div>
        )}
        
        {typeof title === 'string' ? (
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
        ) : (
          <div className="[&>*]:text-3xl [&>*]:font-bold [&>*]:tracking-tight sm:[&>*]:text-4xl md:[&>*]:text-5xl">
            {title}
          </div>
        )}
        
        {description && (
          <div className="mt-6 text-lg leading-8 text-muted-foreground [&>p]:mt-4">
            {description}
          </div>
        )}
        
        {actions && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {actions}
          </div>
        )}
      </div>
    )
  }
)
SectionHeader.displayName = "SectionHeader"

export { SectionHeader, sectionHeaderVariants }
