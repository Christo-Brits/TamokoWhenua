import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "overflow-hidden transition-all duration-200 ease-in-out",
  {
    variants: {
      variant: {
        default: "border bg-card text-card-foreground shadow-sm hover:shadow-md",
        elevated: "bg-card text-card-foreground shadow-lg hover:shadow-xl",
        outline: "border border-border bg-transparent hover:border-primary/50",
        filled: "bg-accent/10 text-accent-foreground hover:bg-accent/20",
        glass: "backdrop-blur-sm bg-background/80 border border-border/50 shadow-sm hover:shadow-md",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
        full: 'rounded-full',
      },
      shadow: {
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl",
        '2xl': 'shadow-2xl',
        inner: 'shadow-inner',
      },
      hoverable: {
        true: "hover:-translate-y-0.5 hover:shadow-md",
      },
    },
    defaultVariants: {
      variant: "default",
      rounded: "lg",
      shadow: "none",
      hoverable: false,
    },
  }
)

export interface CardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
  hoverable?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({
    className,
    variant,
    rounded,
    shadow,
    hoverable,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ variant, rounded, shadow, hoverable, className })
        )}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    withBorder?: boolean
    align?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  }
>(({ className, withBorder = false, align = 'start', ...props }, ref) => {
  const alignment = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  }[align]
  
  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col space-y-1.5 p-6',
        withBorder && 'border-b border-border/50',
        align && alignment,
        className
      )}
      {...props}
    />
  )
})
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span'
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  }
>(({ className, as: Tag = 'h3', size = 'xl', ...props }, ref) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl md:text-4xl',
    '2xl': 'text-4xl md:text-5xl',
    '3xl': 'text-5xl md:text-6xl',
  }[size]
  
  return (
    <Tag
      ref={ref as any}
      className={cn(
        'font-bold leading-tight tracking-tight text-foreground',
        sizeClasses,
        className
      )}
      {...props}
    />
  )
})
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & {
    size?: 'xs' | 'sm' | 'md' | 'lg'
  }
>(({ className, size = 'sm', ...props }, ref) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  }[size]
  
  return (
    <p
      ref={ref}
      className={cn(
        'text-muted-foreground leading-relaxed',
        sizeClasses,
        className
      )}
      {...props}
    />
  )
})
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    noPadding?: boolean
    fullWidth?: boolean
  }
>(({ className, noPadding = false, fullWidth = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      !noPadding && 'p-6',
      fullWidth && 'w-full',
      className
    )}
    {...props}
  />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    withBorder?: boolean
    align?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  }
>(({ className, withBorder = false, align = 'start', ...props }, ref) => {
  const alignment = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  }[align]
  
  return (
    <div
      ref={ref}
      className={cn(
        'flex items-center p-6 pt-0',
        withBorder && 'border-t border-border/50 pt-6',
        align && alignment,
        className
      )}
      {...props}
    />
  )
})
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
