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
	selected = [],
	placeholder,
	onChange,
	selectedAllLabel,
	search = false,
}: SelectElementProps) => {
	const [open, setOpen] = React.useState(false);
	const count = selected.length;
	const isSelectedAll = selected.length === items.length;

	const toggleItem = (item: string) => {
		const newSelected = selected.includes(item)
			? selected.filter((v) => v !== item)
			: [...selected, item];
		onChange(newSelected);
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					data-testid="SelectButton"
					variant="outline"
					role="combobox"
					aria-expanded={open}
					aria-label="Выберите элемент"
					className="w-fit justify-between border rounded-xs text-sm border-gray-500/20 shadow-none relative text-gray-500 hover:outline-primary-main hover:bg-grey-transparent8 hover:outline hover:outline-2 focus:outline-primary focus:outline focus:outline-2 focus-visible:outline-primary-main focus-visible:outline focus-visible:outline-2 "
				>
					{' '}
					{placeholder}
					{open ? (
						<ChevronUp className="ml-2 h-4 w-4 shrink-0 stroke-gray-600" />
					) : (
						<ChevronDown className="ml-2 h-4 w-4 shrink-0 stroke-gray-600" />
					)}
					{count > 0 && (
						<div className="inline-flex absolute -top-2 -right-2 items-center justify-center w-5 h-5 p-0.5 text-xs/5 font-bold bg-primary-main text-common-white rounded-full">
							{count}
						</div>
					)}
				</Button>
			</PopoverTrigger>

			<PopoverContent className="w-fit p-0 border-gray-500/20">
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
										onChange(newValue);
									}}
								>
									<Check
										className={cn(
											'mr-2 h-4 w-4 border border-gray-600 rounded',
											isSelectedAll
												? 'opacity-100 bg-primary-main stroke-white border-none'
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
									onSelect={() => toggleItem(item)}
								>
									<Check
										className={cn(
											'mr-2 h-4 w-4 border border-gray-600 rounded',
											selected.includes(item)
												? 'opacity-100 bg-primary-main stroke-white border-none'
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
