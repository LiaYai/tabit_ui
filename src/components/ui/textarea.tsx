import * as React from 'react';
import { cn } from '@/lib/utils';
import { FileInputDemo } from '@/elements/input';

const Textarea = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
	return (
		<div
			className={cn(
				'w-[390px] min-h-[94px] my-[29px] mx-[22px]  gap-1 rounded-md border-2 border-[rgba(198, 199, 201, 0.3)] bg-transparent shadow-sm focus-within:ring-1 focus-within:ring-ring hover:border-[rgba(164,176,237,1)]',
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
					{...props}
				/>
				<div className="">
					<FileInputDemo />
				</div>
			</div>
		</div>
	);
});
Textarea.displayName = 'Textarea';

export { Textarea };
