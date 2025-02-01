import { MultipleSelect } from '@/elements/MultypleSelect';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, spyOn } from '@storybook/test';
import { screen, waitFor } from '@testing-library/react';

const data = ['Новая', 'В работе', 'Приостановлена', 'Завершена'];

const meta = {
	title: 'Atoms/MultypleSelect',
	component: MultipleSelect,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof MultipleSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		items: data,
		selected: [],
		placeholder: 'Статус',
		onChange: (selected) => {
			console.log(selected);
		},
	},
};

export const WithPreselectedItems: Story = {
	args: {
		items: data,
		selected: ['Новая', 'Завершена'],
		placeholder: 'Статус',
		onChange: (selected) => {
			console.log(selected);
		},
	},
};

export const WithSelectedAll: Story = {
	args: {
		items: data,
		selected: data,
		selectedAllLabel: 'Все',
		placeholder: 'Статус',
		onChange: (selected) => {
			console.log(selected);
		},
	},
};

export const WithSearch: Story = {
	args: {
		items: data,
		selected: [],
		search: true,
		placeholder: 'Статус',
		onChange: (selected) => {
			console.log(selected);
		},
	},
};

export const InteractionTest: Story = {
	args: {
		selectedAllLabel: 'Все',
		items: data,
		selected: ['Новая', 'Завершена'],
		placeholder: 'Статус',
		onChange: (selected) => {
			console.log(selected);
		},
	},
	play: async ({ canvasElement }) => {
		const consoleSpy = spyOn(console, 'log');
		const canvas = within(canvasElement);

		const element = canvas.getByTestId('SelectButton');
		await expect(element).toBeInTheDocument();

		element.click();

		await waitFor(() => {
			const list = screen.getByTestId('SelectList');
			expect(list).toBeInTheDocument();
		});

		const selected = ['Новая'];

		const item = screen.getByText('Завершена');
		await expect(item).toBeInTheDocument();

		item.click();

		await expect(consoleSpy).toHaveBeenCalledWith(selected);

		consoleSpy.mockRestore();
	},
};
