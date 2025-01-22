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
	'Взаимодействие в коллективе',
	'Оптимизация бизнес-процессов',
	'Взаимодествие в отделе',
	'Стратегические лидеры',
	'Тактические лидеры',
	'Новые сотрудники',
	'Опытные сотрудники',
];

export const Default: Story = {
	args: {
		items: data,
		selected: [],
		placeholder: 'Тип проблемы',
		onChange: (selected) => {
			console.log(selected);
		},
	},
};

export const WithPreselectedItems: Story = {
	args: {
		items: data,
		selected: ['Взаимодействие в коллективе', 'Взаимодествие в отделе'],
		placeholder: 'Тип проблемы',
		onChange: (selected) => {
			console.log(selected);
		},
	},
};

export const WithSelectedAll: Story = {
	args: {
		items: data,
		selected: [],
		selectedAllLabel: 'Все проблемы',
		placeholder: 'Тип проблемы',
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
		placeholder: 'Тип проблемы',
		onChange: (selected) => {
			console.log(selected);
		},
	},
};

export const InteractionTest: Story = {
	args: {
		selectedAllLabel: 'Все проблемы',
		items: data,
		selected: ['Взаимодействие в коллективе', 'Взаимодествие в отделе'],
		placeholder: 'Тип проблемы',
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
			'Взаимодействие в коллективе',
			'Взаимодествие в отделе',
			'Оптимизация бизнес-процессов',
		];

		// Проверяем наличие элемента с текстом "Оптимизация бизнес-процессов"
		const item = screen.getByText('Оптимизация бизнес-процессов');
		await expect(item).toBeInTheDocument();

		// Кликаем по элементу
		item.click();

		// Проверяем вызов console.log с выбранными элементами
		await expect(consoleSpy).toHaveBeenCalledWith(selected);

		// Восстанавливаем оригинальную функцию console.log
		consoleSpy.mockRestore();
	},
};
