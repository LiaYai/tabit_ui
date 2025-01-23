import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const linkVariants = cva(
	'inline-flex items-center h-6 font-sans text-[15px] font-semibold leading-[19.5px] group transition-colors duration-200 no-underline md:no-underline hover:no-underline hover:text-link active:text-link w-fit',
	{
		variants: {
			variant: {
				link: 'text-primary no-underline-offset-4 hover:no-underline',
			},
			size: {
				default: 'h-9 px-4 py-2',
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
	iconRight?: React.ReactNode;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
	(
		{ variant, size, iconLeft, iconRight, className, children, ...props },
		ref
	) => {
		return (
			<a
				ref={ref}
				className={cn(
					linkVariants({ variant, size, className }),
					'transition-colors duration-200 ease-in-out'
				)}
				style={
					{
						'--hover-bg': 'transparent',
						'--active-bg': 'white',
						'--hover-text': 'var(--link)',
						'--active-text': 'var(--link)',
					} as React.CSSProperties
				}
				{...props}
			>
				{iconLeft && (
					<span
						className={cn(
							'flex items-center justify-center w-6 h-6 rounded-[4px] bg-transparent transition-colors duration-200 ease-in-out mr-[2.5px]',
							'group-hover:bg-[var(--hover-bg)] group-active:bg-[var(--active-bg)]',
							'scale-x-[1] scale-y-[1]'
						)}
					>
						<span className="w-4 h-4 flex items-center justify-center">
							{iconLeft}
						</span>
					</span>
				)}

				<span className="truncate h-[19px] transition-colors duration-200 ease-in-out mr-0.3125">
					{children}
				</span>

				{iconRight && (
					<span className="flex items-center justify-center w-3 h-3 relative transition-colors duration-200 ease-in-out ">
						<span
							className={cn(
								'absolute flex items-center justify-center w-[8px] h-[6px] pl-[16px] pt-[2px]',
								'group-hover:text-[var(--hover-text)] group-active:text-[var(--active-text)]',
								'scale-x-[0.6567] scale-y-[0.65]'
							)}
						>
							{iconRight}
						</span>
					</span>
				)}
			</a>
		);
	}
);

Link.displayName = 'Link';

export { Link, linkVariants, type LinkProps };
