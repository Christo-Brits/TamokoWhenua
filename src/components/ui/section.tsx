import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sectionVariants = cva("w-full relative", {
  variants: {
    size: {
      default: "py-16 md:py-24",
      sm: "py-12 md:py-16",
      lg: "py-20 md:py-28",
      xl: "py-24 md:py-32",
      none: "py-0",
    },
    spacing: {
      default: "space-y-12 md:space-y-16",
      sm: "space-y-8 md:space-y-12",
      md: "space-y-12 md:space-y-16",
      lg: "space-y-16 md:space-y-20",
      xl: "space-y-20 md:space-y-24",
      none: "space-y-0",
    },
    variant: {
      default: "bg-background",
      primary: "bg-primary/5",
      secondary: "bg-secondary/5",
      muted: "bg-muted/50",
      accent: "bg-accent/10",
    },
  },
  defaultVariants: {
    size: "default",
    spacing: "default",
    variant: "default",
  },
})

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: React.ElementType
  containerClassName?: string
  fullWidth?: boolean
  innerClassName?: string
  withPadding?: boolean
  children: React.ReactNode
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      as: Tag = "section",
      className,
      containerClassName,
      fullWidth = false,
      innerClassName,
      size,
      spacing,
      variant,
      withPadding = true,
      children,
      ...props
    },
    ref
  ) => {
    // Apply innerClassName if provided, otherwise just render children directly
    const content = innerClassName ? (
      <div className={cn(innerClassName)}>{children}</div>
    ) : (
      <>{children}</>
    )

    return (
      <Tag
        ref={ref}
        className={cn(sectionVariants({ size, spacing, variant, className }))}
        {...props}
      >
        <div
          className={cn(
            "mx-auto w-full",
            !fullWidth && "max-w-7xl px-4 sm:px-6 lg:px-8",
            withPadding && "px-4 sm:px-6 lg:px-8",
            containerClassName
          )}
        >
          {content}
        </div>
      </Tag>
    )
  }
)
Section.displayName = "Section"

export { Section, sectionVariants }
