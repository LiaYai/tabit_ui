import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const switchVariants = cva(
	'group inline-flex shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background data-[state=unchecked]:bg-grey-transparent48  disabled:opacity-[0.48] disabled:pointer-events-none',
	{
		variants: {
			variant: {
				default:
					'data-[state=checked]:bg-grey-800',
				primary:
					'data-[state=checked]:bg-primary-main',
				secondary:
					'data-[state=checked]:bg-secondary-main',
				info: 'data-[state=checked]:bg-info-main',
				success: 'data-[state=checked]:bg-success-main',
				warning:
					'data-[state=checked]:bg-warning-main',
				error:
					'data-[state=checked]:bg-error-main',
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
		role="switch"
		aria-checked={props.checked}
		className={cn(switchVariants({ variant, size, className }))}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb
			className={cn(
				'pointer-events-none block ring-0 rounded-full bg-white transition-transform data-[state=unchecked]:translate-x-[3px] group-hover:ring-grey-800/[.08] group-hover:ring-grey-800/[.08]',
				size === 'small'
					? 'w-[10px] h-[10px] data-[state=checked]:translate-x-[12px] group-hover:ring-[8px]'
					: 'w-[14px] h-[14px] data-[state=checked]:translate-x-[16px] group-hover:ring-[12px]',
				variant === 'primary' ? 'data-[state=checked]:group-hover:ring-primary-main/[.08]': '',
				variant === 'secondary' ? '	data-[state=checked]:group-hover:ring-secondary-main/[.08]': '',
				variant === 'info' ? 'data-[state=checked]:group-hover:ring-info-main/[.08]': '',
				variant === 'success' ? 'data-[state=checked]:group-hover:ring-success-main/[.08]': '',
				variant === 'warning' ? 'data-[state=checked]:group-hover:ring-warning-main/[.08]': '',
				variant === 'error' ? 'data-[state=checked]:group-hover:ring-error-main/[.08]': '',
			)}
		/>
	</SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
