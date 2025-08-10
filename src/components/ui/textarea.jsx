import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-lg bg-neutral-off-white text-deep-sky-blue placeholder-desaturated-gray focus:outline-none focus:ring-2 focus:ring-comet-pink-peach focus:shadow-glow-sm transition-all duration-300 px-4 py-3",
        className
      )}
      ref={ref}
      {...props} />
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
