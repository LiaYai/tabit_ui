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
			'w-full min-h-[98px] resize-none overflow-auto focus:outline-none placeholder-transparent transition-all duration-150 disabled:cursor-not-allowed font-medium font-[Manrope] text-[14px] leading-[22px]',
			disabled ? 'text-[#919EABCC]' : 'text-[#212B36]'
		);

		const typeStylesTextarea = {
			outlined: cn(
				'bg-transparent border rounded-lg px-[14px] py-4',
				error
					? 'border-[#FF5630] border-2'
					: disabled
						? 'border-[#919EAB33]'
						: isFocused
							? 'border-[#212B36] border-2'
							: 'border-[#919EAB33] hover:border-[#212B36]'
			),
			filled: cn(
				'border-none rounded-lg px-[12px] py-[24px] focus:outline-none focus:ring-0 focus:border-none',
				error
					? 'bg-[#FF563014]'
					: disabled
						? 'border border-[#919EAB33] bg-[#919EAB14]'
						: isFocused
							? 'bg-[#919EAB29]'
							: 'bg-[#919EAB14] hover:bg-[#919EAB29]'
			),
			standart: cn(
				'bg-transparent py-[19px] focus:outline-none focus:ring-0',
				error
					? 'border-b-2 border-[#FF5630]'
					: disabled
						? 'border-b-2 border-[#919EAB33]'
						: isFocused
							? 'border-b-2 border-[#212B36]'
							: 'border-b border-[#919EAB52] hover:border-[#212B36]'
			),
		};

		const baseStylesLabel =
			'absolute transition-all duration-200 pointer-events-none font-medium font-[Manrope]';

		const typeStylesLabel = {
			outlined: cn(
				'left-[14px]',
				isFocused || hasValue
					? '-top-[6px] bg-white px-1 text-[11px] leading-[12px]'
					: 'top-[16px] text-[14px] leading-[22px] bg-transparent',
				error
					? isFocused || hasValue
						? 'text-[#FF5630]'
						: 'text-[#919EAB]'
					: disabled
						? 'text-[#919EAB]'
						: isFocused
							? 'text-[#212B36]'
							: hasValue
								? 'text-[#637381]'
								: 'text-[#919EAB]'
			),
			filled: cn(
				'left-[12px] bg-transparent',
				isFocused || hasValue
					? 'top-[8px] text-[11px] leading-[12px]'
					: 'top-[16px] text-[14px] leading-[22px] ',
				error
					? isFocused || hasValue
						? 'text-[#FF5630]'
						: 'text-[#919EAB]'
					: disabled
						? 'text-[#919EAB]'
						: isFocused
							? 'text-[#212B36]'
							: hasValue
								? 'text-[#637381]'
								: 'text-[#919EAB]'
			),
			standart: cn(
				isFocused || hasValue
					? 'top-[2px] bg-white text-[11px] leading-[12px]'
					: 'top-[20px] text-[14px] leading-[22px] bg-transparent',
				error
					? isFocused || hasValue
						? 'text-[#FF5630]'
						: 'text-[#919EAB]'
					: disabled
						? 'text-[#919EAB]'
						: isFocused
							? 'text-[#212B36]'
							: hasValue
								? 'text-[#637381]'
								: 'text-[#919EAB]'
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
