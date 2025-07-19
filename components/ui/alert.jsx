"use client"

import { forwardRef } from "react"

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

const alertVariants = {
  default: "bg-white text-gray-950 border-gray-200",
  destructive: "border-red-500/50 text-red-900 [&>svg]:text-red-900",
}

const Alert = forwardRef(({ className, variant = "default", ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(
      "relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-gray-950 [&>svg~*]:pl-7",
      alertVariants[variant],
      className,
    )}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = forwardRef(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
