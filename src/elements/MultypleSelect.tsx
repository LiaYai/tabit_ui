import * as React from 'react';
import { Check, ChevronUp, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

export type SelectElementProps = {
	selectedAllLabel?: string;
	search?: boolean;
	items: string[];
	selected: string[];
	placeholder: string;
	onChange: (selected: string[]) => void;
};

export const MultipleSelect = ({
	items,
	selected,
	placeholder,
	onChange,
	selectedAllLabel,
	search = false,
}: SelectElementProps) => {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(selected);
	const [count, setCount] = React.useState(selected.length);
	const isSelectedAll = value.length === items.length;

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					data-testid="SelectButton"
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-fit justify-between text-sm border-blue-400 shadow-none relative"
				>
					{' '}
					{placeholder}
					{open ? (
						<ChevronUp className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					) : (
						<ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					)}
					{count > 0 && (
						<div className="inline-flex absolute -top-2 -right-2 items-center justify-center w-4 h-4 p-0.5 text-xs/none font-bold bg-amber-400 text-gray-700 rounded-2xl">
							{count}
						</div>
					)}
				</Button>
			</PopoverTrigger>

			<PopoverContent className="w-fit p-0">
				<Command>
					{search && <CommandInput placeholder="Поиск..." className="h-9" />}
					<CommandList data-testid="SelectList">
						<CommandEmpty>Не найдено</CommandEmpty>
						<CommandGroup>
							{selectedAllLabel && (
								<CommandItem
									value="all"
									onSelect={() => {
										const newValue = isSelectedAll ? [] : items;
										setValue(newValue);
										onChange(newValue);
										setCount(newValue.length);
									}}
								>
									<Check
										className={cn(
											'mr-2 h-4 w-4 border border-gray-400 rounded',
											isSelectedAll
												? 'opacity-100 bg-blue-400 stroke-white border-none'
												: 'stroke-transparent'
										)}
									/>
									{selectedAllLabel}
								</CommandItem>
							)}
							{items.map((item) => (
								<CommandItem
									key={item}
									value={item}
									onSelect={(currentValue) => {
										const newValue = value.includes(currentValue)
											? value.filter((v) => v !== currentValue)
											: [...value, currentValue];
										setValue(newValue);
										onChange(newValue);
										setCount(newValue.length);
									}}
								>
									<Check
										className={cn(
											'mr-2 h-4 w-4 border border-gray-400 rounded',
											value.includes(item)
												? 'opacity-100 bg-blue-400 stroke-white border-none'
												: 'stroke-transparent'
										)}
									/>
									{item}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};
