"use client"

import * as React from "react"
import { X } from "lucide-react"

type ToastProps = {
  children: React.ReactNode
  variant?: "default" | "destructive"
  onDismiss?: () => void
  className?: string
}

export function Toast({ children, variant = "default", onDismiss, className }: ToastProps) {
  const baseStyles = "fixed bottom-4 right-4 z-50 flex items-center justify-between p-4 rounded-md shadow-lg max-w-sm w-full"
  const variantStyles = {
    default: "bg-white text-gray-900 border border-gray-200",
    destructive: "bg-red-500 text-white"
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className || ''}`}>
      <div className="flex-1">
        {children}
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="ml-4 p-1 rounded-full hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-black/50"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

type ToastProviderProps = {
  children: React.ReactNode
}

type ToastMessage = string | { title?: string; description: string; variant?: "default" | "destructive" }

type ToastType = {
  id: string
  title?: string
  description: string
  variant: "default" | "destructive"
}

type ToastContextType = {
  toast: (message: ToastMessage) => void
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = React.useState<ToastType[]>([])

  const toast = (message: ToastMessage) => {
    const id = Math.random().toString(36).substring(2, 9)
    const toastData = typeof message === 'string' 
      ? { id, title: undefined, description: message, variant: 'default' as const }
      : { 
          id, 
          title: message.title,
          description: message.description, 
          variant: message.variant || 'default' 
        }
    setToasts((currentToasts) => [...currentToasts, toastData])

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id))
    }, 5000)
  }

  const removeToast = (id: string) => {
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-0 right-0 z-50 p-4 space-y-2">
        {toasts.map(({ id, title, description, variant }) => (
          <Toast key={id} variant={variant} onDismiss={() => removeToast(id)}>
            {title && <h3 className="font-medium">{title}</h3>}
            <p className={title ? 'text-sm mt-1' : ''}>{description}</p>
          </Toast>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}
