"use client";

import React, { forwardRef, memo } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Card = memo(
  forwardRef(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm",
        className
      )}
      {...props}
    />
  ))
);
Card.displayName = "Card";

const CardHeader = memo(
  forwardRef(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  ))
);
CardHeader.displayName = "CardHeader";

const CardTitle = memo(
  forwardRef(({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  ))
);
CardTitle.displayName = "CardTitle";

const CardDescription = memo(
  forwardRef(({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-gray-500", className)}
      {...props}
    />
  ))
);
CardDescription.displayName = "CardDescription";

const CardContent = memo(
  forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  ))
);
CardContent.displayName = "CardContent";

const CardFooter = memo(
  forwardRef(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  ))
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
