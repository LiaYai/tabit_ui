import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const linkVariants = cva(
	'inline-flex items-center font-manrope text-[14px] font-medium leading-[22px] text-left group no-underline hover:no-underline active:no-underline',
	{
		variants: {
			variant: {
				link: 'text-primary no-underline-offset-4 hover:no-underline',
				disabled: 'opacity-50 pointer-events-none cursor-not-allowed',
			},
			size: {
				default: 'h-auto px-0 py-0',
				sm: 'h-8 rounded-md px-3 text-xs',
				lg: 'h-10 rounded-md px-8',
			},
		},
		defaultVariants: {
			variant: 'link',
			size: 'default',
		},
	}
);

interface LinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
		VariantProps<typeof linkVariants> {
	iconLeft?: React.ReactNode;
	dot?: React.ReactNode;
	disabled?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
	(
		{ variant, size, iconLeft, className, children, dot, disabled, ...props },
		ref
	) => {
		const calculatedVariant = disabled ? 'disabled' : variant;
		const linkStyle = {
			'--text-default': 'var(--text-disabled)',
			'--text-hover': 'var(--text-disabled)',
			'--text-active': 'var(--text-primary)',
			'--icon-default': 'var(--text-primary)',
			'--icon-hover': 'var(--text-primary)',
			'--icon-active': 'var(--text-disabled)',
		} as React.CSSProperties;

		return (
			<a
				ref={ref}
				className={cn(
					linkVariants({
						variant: calculatedVariant,
						size,
						className,
					}),
					'transition-colors duration-300 ease-in-out'
				)}
				style={linkStyle}
				{...props}
			>
				{dot && (
					<span className="mr-3 transition-colors duration-300 ease-in-out text-[var(--icon-active)]">
						{dot}
					</span>
				)}

				<span className="inline-flex items-center">
					{iconLeft && (
						<span
							className={cn(
								'mr-2 transition-colors duration-300 ease-in-out',
								'text-[var(--icon-default)] group-hover:text-[var(--icon-hover)] group-active:text-[var(--icon-active)]'
							)}
						>
							{iconLeft}
						</span>
					)}
					<span
						className={cn(
							'truncate transition-colors duration-300 ease-in-out',
							'text-[var(--text-default)] group-hover:text-[var(--text-hover)] group-active:text-[var(--text-active)]'
						)}
					>
						{children}
					</span>
				</span>
			</a>
		);
	}
);

Link.displayName = 'Link';

export { Link, linkVariants, type LinkProps };
