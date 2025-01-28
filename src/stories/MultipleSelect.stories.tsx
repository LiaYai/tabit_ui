import { MultipleSelect } from '@/elements/MultypleSelect';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, spyOn } from '@storybook/test';
import { screen, waitFor } from '@testing-library/react';

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

const data = [
	'Новая',
	'В работе',
	'Приостановлена',
	'Завершена'
];

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
		selected: [],
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

		// Проверяем наличие кнопки SelectButton
		const element = canvas.getByTestId('SelectButton');
		await expect(element).toBeInTheDocument();

		// Кликаем по кнопке
		element.click();

		// Ожидаем появления списка SelectList
		await waitFor(() => {
			const list = screen.getByTestId('SelectList');
			expect(list).toBeInTheDocument();
		});

		// Определяем выбранные элементы
		const selected = [
			'Новая',
		];

		// Проверяем наличие элемента с текстом "Оптимизация бизнес-процессов"
		const item = screen.getByText('Завершена');
		await expect(item).toBeInTheDocument();

		// Кликаем по элементу
		item.click();

		// Проверяем вызов console.log с выбранными элементами
		await expect(consoleSpy).toHaveBeenCalledWith(selected);

		// Восстанавливаем оригинальную функцию console.log
		consoleSpy.mockRestore();
	},
};
