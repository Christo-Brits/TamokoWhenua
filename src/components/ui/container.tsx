import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const containerVariants = cva("w-full mx-auto px-4 sm:px-6 lg:px-8", {
  variants: {
    size: {
      default: "max-w-7xl",
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-7xl",
      xl: "max-w-[90rem]",
      full: "max-w-full",
    },
    padding: {
      none: "px-0 sm:px-0 lg:px-0",
      sm: "px-4 sm:px-6 lg:px-8",
      md: "px-6 sm:px-8 lg:px-10",
      lg: "px-8 sm:px-10 lg:px-12",
      xl: "px-10 sm:px-12 lg:px-16",
    },
  },
  defaultVariants: {
    size: "default",
    padding: "sm",
  },
})

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType
  innerClassName?: string
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      as: Tag = "div",
      className,
      size,
      padding,
      innerClassName,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Tag
        ref={ref}
        className={cn(containerVariants({ size, padding, className }))}
        {...props}
      >
        {innerClassName ? (
          <div className={cn(innerClassName)}>{children}</div>
        ) : (
          children
        )}
      </Tag>
    )
  }
)
Container.displayName = "Container"

export { Container, containerVariants }
