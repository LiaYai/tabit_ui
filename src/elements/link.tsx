import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

// Определяем варианты стилей для Link
const linkVariants = cva(
	'inline-flex items-center h-6 font-sans text-[15px] font-semibold leading-[19.5px] gap-[8px] group transition-colors duration-200 no-underline md:no-underline hover:no-underline hover:text-[hsla(230,66%,69%,1)] active:text-[hsla(230,66%,69%,1)] w-fit',
	{
		variants: {
			variant: {
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-9 px-4 py-2',
				sm: 'h-8 rounded-md px-3 text-xs',
				lg: 'h-10 rounded-md px-8',
				icon: 'h-9 w-9',
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
	quantity?: number | boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
	(
		{
			variant,
			size,
			iconLeft,
			iconRight,
			quantity = false,
			className,
			children,
			...props
		},
		ref
	) => {
		const displayQuantity =
			typeof quantity === 'number'
				? quantity
				: quantity === true
					? 1
					: undefined;

		return (
			<a
				ref={ref}
				className={cn(linkVariants({ variant, size, className }))}
				{...props}
			>
				{iconLeft && (
					<span
						className={cn(
							'flex items-center justify-center w-6 h-6 p-[4px] rounded-[4px] transition-colors bg-transparent group-hover:bg-transparent group-active:bg-[hsla(0,0%,100%,1)] scale-x-[0.8] scale-y-[0.8]'
						)}
					>
						<span className="w-4 h-4 flex items-center justify-center">
							{iconLeft}
						</span>
					</span>
				)}

				<span className="truncate h-[19px]">{children}</span>

				{iconRight && (
					<span
						className={cn('flex items-center justify-center w-3 h-3 relative')}
					>
						<span
							className={cn(
								'absolute flex items-center justify-center w-[8px] h-[6px] group-hover:text-[hsla(230,66%,69%,1)] group-active:text-[hsla(230,66%,69%,1)] pt-[2px] scale-x-[0.6567] scale-y-[0.65]'
							)}
						>
							{iconRight}
						</span>
					</span>
				)}

				{displayQuantity !== undefined && (
					<span
						className={cn(
							'flex items-center justify-center w-[17px] h-[17px] pt-[2px] rounded-full bg-[hsla(230,66%,69%,1)] text-[10px] font-bold leading-[13px] text-[hsla(0,0%,100%,1)]'
						)}
					>
						{displayQuantity}
					</span>
				)}
			</a>
		);
	}
);

Link.displayName = 'Link';

export { Link, linkVariants, type LinkProps };
