import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const inputVariants = cva(
	'flex w-full border border-2 hover:border-border-hover active:border-border-active rounded-lg bg-transparent text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
	{
		variants: {
			variant: {
				default: 'bg-input text-input-foreground',
				disabled: 'bg-input-disabled border-input-disabled',
				error: 'border-border-error text-foreground rounded-lg',
				ghost: 'bg-input text-input-foreground border-input',
			},
			size: {
				default: 'py-2.5 px-3',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
		VariantProps<typeof inputVariants> {
	className?: string;
	variant?: 'default' | 'disabled' | 'error' | 'ghost';
	size?: 'default';
	message?: string;
	type?: string;
	icon?: React.ReactNode;
	tooltipMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{ className, variant, size, message, type, icon, tooltipMessage, ...props },
		ref
	) => {
		return (
			<div className="relative flex items-center">
				<input
					data-testid="Input"
					type={type}
					className={cn(inputVariants({ variant, size, className }))}
					ref={ref}
					{...props}
				/>
				{icon && (
					<span
						className="cursor-pointer absolute right-4 text-muted-foreground"
						title={tooltipMessage}
					>
						{icon}
					</span>
				)}
				{message && <span className="absolute">{message}</span>}
			</div>
		);
	}
);

Input.displayName = 'Input';

export { Input };
