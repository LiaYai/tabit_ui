import * as React from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.ComponentProps<'textarea'> {
	error?: boolean;
	label?: string;
	type?: 'outlined' | 'filled' | 'standart';
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, error, label, disabled, type = 'outlined', ...props }, ref) => {
		const [isFocused, setIsFocused] = React.useState(false);
		const [hasValue, setHasValue] = React.useState(!!props.defaultValue);

		const baseStylesTextarea = cn(
			'w-full min-h-[98px] resize-none overflow-auto focus:outline-none placeholder-transparent transition-all duration-150 disabled:cursor-not-allowed font-medium font-sans text-[14px] leading-[22px]',
			disabled ? 'text-grey-500/80' : 'text-grey-800'
		);

		const typeStylesTextarea = {
			outlined: cn(
				'bg-transparent border rounded-xs px-[14px] py-4',
				error
					? 'border-error-main border-2'
					: disabled
						? 'border-grey-500/20'
						: isFocused
							? 'border-grey-800 border-2'
							: 'border-grey-500/20 hover:border-grey-800'
			),
			filled: cn(
				'border-none rounded-xs px-[12px] py-[24px] focus:outline-none focus:ring-0 focus:border-none',
				error
					? 'bg-error-transparent8'
					: disabled
						? 'border border-grey-500/20 bg-grey-transparent8'
						: isFocused
							? 'bg-grey-transparent16'
							: 'bg-grey-transparent8 hover:bg-grey-transparent16'
			),
			standart: cn(
				'bg-transparent py-[19px] focus:outline-none focus:ring-0',
				error
					? 'border-b-2 border-error-main'
					: disabled
						? 'border-b-2 border-grey-500/20'
						: isFocused
							? 'border-b-2 border-grey-800'
							: 'border-b border-grey-transparent32 hover:border-grey-800'
			),
		};

		const baseStylesLabel =
			'absolute transition-all duration-200 pointer-events-none font-medium font-sans';

		const typeStylesLabel = {
			outlined: cn(
				'left-[14px]',
				isFocused || hasValue
					? '-top-[6px] bg-white px-1 text-[11px] leading-[12px]'
					: 'top-[16px] text-[14px] leading-[22px] bg-transparent',
				error
					? isFocused || hasValue
						? 'text-error-main'
						: 'text-grey-500'
					: disabled
						? 'text-grey-500'
						: isFocused
							? 'text-grey-800'
							: hasValue
								? 'text-grey-600'
								: 'text-grey-500'
			),
			filled: cn(
				'left-[12px] bg-transparent',
				isFocused || hasValue
					? 'top-[8px] text-[11px] leading-[12px]'
					: 'top-[16px] text-[14px] leading-[22px] ',
				error
					? isFocused || hasValue
						? 'text-error-main'
						: 'text-grey-500'
					: disabled
						? 'text-grey-500'
						: isFocused
							? 'text-grey-800'
							: hasValue
								? 'text-grey-600'
								: 'text-grey-500'
			),
			standart: cn(
				isFocused || hasValue
					? 'top-[2px] bg-white text-[11px] leading-[12px]'
					: 'top-[20px] text-[14px] leading-[22px] bg-transparent',
				error
					? isFocused || hasValue
						? 'text-error-main'
						: 'text-grey-500'
					: disabled
						? 'text-grey-500'
						: isFocused
							? 'text-grey-800'
							: hasValue
								? 'text-grey-600'
								: 'text-grey-500'
			),
		};

		return (
			<div className="relative flex flex-col w-[320px]">
				<div className="relative">
					{label && (
						<label
							htmlFor="textarea"
							className={cn(baseStylesLabel, typeStylesLabel[type], className)}
						>
							{label}
						</label>
					)}

					<textarea
						id="textarea"
						ref={ref}
						className={cn(
							baseStylesTextarea,
							typeStylesTextarea[type],
							className
						)}
						data-testid="Textarea"
						disabled={disabled}
						{...props}
						onFocus={() => setIsFocused(true)}
						onBlur={(e) => {
							setIsFocused(false);
							setHasValue(!!e.target.value);
						}}
						onChange={(e) => setHasValue(!!e.target.value)}
					/>
				</div>
			</div>
		);
	}
);

Textarea.displayName = 'Textarea';

export { Textarea };
