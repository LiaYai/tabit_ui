import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer p-px inline-flex h-4 w-7 bg-switch-foreground shrink-0 cursor-pointer items-center rounded-full border border-switch shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:bg-black disabled:opacity-25 data-[state=checked]:bg-switch data-[state=checked]:border-transparent disabled:border-transparent",
      className
    )}
    {...props}
    ref={ref}
    data-testid="Switch"
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-3 w-3 rounded-full bg-switch shadow ring-0 transition-transform data-[state=checked]:translate-x-full data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-white data-[disabled]:bg-white",
        className
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
