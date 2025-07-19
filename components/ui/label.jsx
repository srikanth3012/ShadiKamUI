"use client"

import { forwardRef } from "react"

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Label = forwardRef(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className,
    )}
    {...props}
  />
))
Label.displayName = "Label"

export { Label }
