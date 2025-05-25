import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        // Primary button
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md active:scale-[0.98]",
        // Secondary button
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm hover:shadow-md active:scale-[0.98]",
        // Outline button
        outline: "border border-input bg-transparent hover:bg-accent/10 hover:text-accent-foreground active:bg-accent/20",
        // Ghost button (minimal)
        ghost: "hover:bg-accent/10 hover:text-accent-foreground active:bg-accent/20",
        // Link button
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
        // Destructive button
        destructive: "bg-destructive/90 text-destructive-foreground hover:bg-destructive shadow-sm hover:shadow-md active:scale-[0.98]",
        // Success button
        success: "bg-success/90 text-success-foreground hover:bg-success shadow-sm hover:shadow-md active:scale-[0.98]",
        // Warning button
        warning: "bg-warning/90 text-warning-foreground hover:bg-warning shadow-sm hover:shadow-md active:scale-[0.98]",
        // Info button
        info: "bg-info/90 text-info-foreground hover:bg-info shadow-sm hover:shadow-md active:scale-[0.98]",
      },
      size: {
        xs: "h-7 px-3 text-xs",
        sm: "h-8 px-4 text-sm",
        default: "h-10 px-6 text-base",
        lg: "h-12 px-8 text-lg",
        xl: "h-14 px-10 text-xl",
        icon: "h-10 w-10 p-0",
        "icon-sm": "h-8 w-8 p-0",
        "icon-lg": "h-12 w-12 p-0",
      },
      fullWidth: {
        true: "w-full",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      // Default rounded variant
      {
        variant: ["default", "secondary", "destructive", "success", "warning", "info"],
        rounded: undefined,
        className: "rounded-full",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: undefined,
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    size,
    asChild = false,
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    fullWidth,
    rounded,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button"

    const content = (
      <>
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg
              className="h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </span>
        )}
        <span className={cn('flex items-center gap-2', isLoading && 'invisible')}>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </span>
      </>
    )

    if (asChild) {
      // When asChild is true, we need to ensure we only pass a single child to the Slot component
      const { disabled: _disabled, ...restProps } = props as any;
      const isDisabled = disabled || isLoading;
      
      // Create a wrapper div that will be the single child of the Slot
      const wrappedContent = React.Children.only(
        <div className="contents">
          {content}
        </div>
      );
      
      return (
        <Slot
          className={cn(
            buttonVariants({
              variant,
              size,
              fullWidth,
              rounded,
              className: cn(
                'relative',
                isDisabled && 'pointer-events-none',
                className
              ),
            })
          )}
          ref={ref}
          data-disabled={isDisabled ? '' : undefined}
          aria-disabled={isDisabled}
          {...restProps}
          onClick={isDisabled ? (e: React.MouseEvent) => e.preventDefault() : props.onClick}
          style={{
            pointerEvents: isDisabled ? 'none' : undefined,
            ...props.style,
          }}
        >
          {wrappedContent}
        </Slot>
      )
    }

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            fullWidth,
            rounded,
            className: cn(
              'relative',
              isLoading && 'pointer-events-none',
              className
            ),
          })
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
