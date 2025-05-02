// src/components/ui/button.tsx
"use client"

import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost"
  size?: "default" | "sm" | "icon"
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = "default", size = "default", ...props }, ref) => {
    // シンプルなButtonコンポーネント
    const baseClasses = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none"
    
    const variantClasses = {
      default: "bg-slate-900 text-white hover:bg-slate-800",
      secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
      ghost: "bg-transparent hover:bg-slate-100"
    }
    
    const sizeClasses = {
      default: "h-10 px-4 py-2 rounded-md",
      sm: "h-9 px-3 py-1 text-sm rounded-md",
      icon: "h-10 w-10 rounded-full"
    }
    
    const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`
    
    return (
      <button className={allClasses} ref={ref} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"