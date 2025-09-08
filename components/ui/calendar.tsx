"use client";

import type * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 bg-white rounded-md", className)}
      classNames={{
        months: " flex flex-col items-center  gap-2   text-gray-900",
        month: "flex flex-col text-center gap-4",
        caption: "flex justify-between items-center bg px-2",
        caption_label: "text-md  font-medium",
        nav: "flex items-center space-x-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-60 hover:opacity-100"
        ),
        nav_button_previous: "",
        nav_button_next: "",
        table: "w-full border-collapse",
        head_row: "flex",
        head_cell:
          "text-muted-foreground text-[0.75rem] font-normal w-9 text-center",
        row: "flex w-full",
        cell: cn(
          "h-9 w-9 text-center text-sm p-0 relative cursor-pointer",
          "[&:has([aria-selected])]:bg-primary/10 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          "h-9 w-9 p-0  font-normal aria-selected:bg-primary aria-selected:text-white hover:bg-gray-200 rounded-md "
        ),
        day_selected: "bg-pink-100 text-white",
        day_today: "border border-primary text-primary",
        day_outside: "text-gray-300 opacity-50",
        day_disabled: "opacity-50 text-muted-foreground",
        day_range_middle: "bg-muted text-muted-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
