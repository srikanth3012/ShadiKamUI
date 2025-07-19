"use client"

import { forwardRef, useState } from "react"

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Checkbox = forwardRef(({ className, checked, onCheckedChange, ...props }, ref) => {
  const [isChecked, setIsChecked] = useState(checked || false)

  const handleChange = (e) => {
    const newChecked = e.target.checked
    setIsChecked(newChecked)
    if (onCheckedChange) {
      onCheckedChange(newChecked)
    }
  }

  return (
    <input
      type="checkbox"
      ref={ref}
      checked={isChecked}
      onChange={handleChange}
      className={cn("h-4 w-4 rounded border border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500", className)}
      {...props}
    />
  )
})
Checkbox.displayName = "Checkbox"

export { Checkbox }
