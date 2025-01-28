import * as React from 'react';
import { cn } from '@/lib/utils';
import { FileInputDemo } from '@/elements/fileinput';

const Textarea = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
	// Состояние для отслеживания количества символов
	const [charCount, setCharCount] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setCharCount(event.target.value.length);
		if (props.onChange) props.onChange(event);
	};

	return (
		<div className="flex flex-col w-[390px] my-[29px] mx-[22px]">
			<div
				className={cn(
					'min-h-[94px] gap-1 rounded-md border-2 border-[rgba(198,199,201,0.3)] bg-transparent shadow-sm focus-within:ring-1 focus-within:ring-[rgba(122,140,228,1)] focus-within:border-[rgba(122,140,228,1)] hover:border-[rgba(164,176,237,1)]',
					className
				)}
				ref={ref}
			>
				<div className="px-3 py-2 flex flex-col resize-y overflow-auto bg-transparent focus:outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50">
					<textarea
						className="flex-1 w-[360px] min-h-[57px] bg-transparent resize-none focus:outline-none"
						data-testid="Textarea"
						disabled={props.disabled}
						onClick={props.onClick}
						onChange={handleChange}
						maxLength={1000}
						{...props}
					/>
					<div className="mt-2">
						<FileInputDemo />
					</div>
				</div>
			</div>

			<div className="text-gray-500 text-sm text-right mt-1">{charCount} / 1000</div>
		</div>
	);
});
Textarea.displayName = 'Textarea';

export { Textarea };
