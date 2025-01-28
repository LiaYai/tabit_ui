import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const switchVariants = cva(
	'peer inline-flex shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background data-[state=unchecked]:bg-switch-unchecked/[.48] disabled:cursor-not-allowed  disabled:opacity-[0.48]',
	{
		variants: {
			variant: {
				default:
					'data-[state=checked]:bg-default hover:data-[state=checked]:*:ring-default/[.08]',
				primary:
					'data-[state=checked]:bg-primary_sw hover:data-[state=checked]:*:ring-primary_sw/[.08]',
				secondary:
					'data-[state=checked]:bg-secondary_sw hover:data-[state=checked]:*:ring-secondary_sw/[.08]',
				info: 'data-[state=checked]:bg-info hover:data-[state=checked]:*:ring-info/[.08]',
				success:
					'data-[state=checked]:bg-success hover:data-[state=checked]:*:ring-success/[.08]',
				warning:
					'data-[state=checked]:bg-warning hover:data-[state=checked]:*:ring-warning/[.08]',
				error:
					'data-[state=checked]:bg-error hover:data-[state=checked]:*:ring-error/[.08]',
			},
			size: {
				small: 'w-[25px] h-[16px]',
				medium: 'w-[33px] h-[20px]',
			},
		},
		defaultVariants: {
			size: 'medium',
			variant: 'default',
		},
	}
);

export interface SwitchProps
	extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
		VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	SwitchProps
>(({ className, variant, size, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={cn(switchVariants({ variant, size, className }))}
		{...props}
		ref={ref}
		data-testid="Switch"
	>
		<SwitchPrimitives.Thumb
			className={cn(
				'pointer-events-none block rounded-full bg-white ring-0 transition-transform  data-[state=unchecked]:translate-x-[3px]  hover:data-[state=unchecked]:ring-switch-unchecked/[.08]',
				size === 'small'
					? 'w-[10px] h-[10px] data-[state=checked]:translate-x-[12px] hover:ring-[10px]'
					: 'w-[14px] h-[14px] data-[state=checked]:translate-x-[16px] hover:ring-[12px]'
			)}
		/>
	</SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
