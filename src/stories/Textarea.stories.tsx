import { Textarea } from '@/components/ui/textarea';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, spyOn, within } from '@storybook/test';

const meta = {
	title: 'Atoms/Textarea',
	component: Textarea,
	tags: ['autodocs'],
	argTypes: {
		placeholder: {
			control: 'text',
			description: 'Текст подсказки внутри поля (дублируется с label)',
		},
		error: {
			control: 'boolean',
			description: 'Активирует стили ошибки',
		},
		label: {
			control: 'text',
			description: 'Текст подсказки внутри и над полем',
		},
		disabled: {
			control: 'boolean',
			description: 'Деактивирует поле ввода',
		},
		defaultValue: {
			control: 'text',
			description: 'Стандартное значение внутри поля',
		},
		type: {
			control: 'text',
			description: 'Разные типы компоненты',
		},
	},
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый текстовый input Outlined
export const DefaultOutlined: Story = {
	args: {
		label: 'Label',
	},
};

// Ошибка Outlined
export const ErrorOutlined: Story = {
	args: {
		label: 'Label',
		error: true,
	},
};

// Отключенное поле Outlined
export const DisabledOutlined: Story = {
	args: {
		label: 'Label',
		disabled: true,
	},
};

// Базовый текстовый input + введенный текст Outlined
export const DefaultWithValueOutlined: Story = {
	args: {
		label: 'Label',
		defaultValue: 'Value',
	},
};

// Ошибка + введенный текст Outlined
export const ErrorWithValueOutlined: Story = {
	args: {
		label: 'Label',
		error: true,
		defaultValue: 'Value',
	},
};

// Отключенное поле + введенный текст Outlined
export const DisabledWithValueOutlined: Story = {
	args: {
		label: 'Label',
		disabled: true,
		defaultValue: 'Value',
	},
};

// Базовый текстовый input Filled
export const DefaultFilled: Story = {
	args: {
		label: 'Label',
		type: 'filled',
	},
};

// Ошибка Filled
export const ErrorFilled: Story = {
	args: {
		label: 'Label',
		error: true,
		type: 'filled',
	},
};

// Отключенное поле Filled
export const DisabledFilled: Story = {
	args: {
		label: 'Label',
		disabled: true,
		type: 'filled',
	},
};

// Базовый текстовый input + введенный текст Filled
export const DefaultWithValueFilled: Story = {
	args: {
		label: 'Label',
		defaultValue: 'Value',
		type: 'filled',
	},
};

// Ошибка + введенный текст Filled
export const ErrorWithValueFilled: Story = {
	args: {
		label: 'Label',
		error: true,
		defaultValue: 'Value',
		type: 'filled',
	},
};

// Отключенное поле + введенный текст Filled
export const DisabledWithValueFilled: Story = {
	args: {
		label: 'Label',
		disabled: true,
		defaultValue: 'Value',
		type: 'filled',
	},
};

// Базовый текстовый input Standart
export const DefaultStandart: Story = {
	args: {
		label: 'Label',
		type: 'standart',
	},
};

// Ошибка Standart
export const ErrorStandart: Story = {
	args: {
		label: 'Label',
		error: true,
		type: 'standart',
	},
};

// Отключенное поле Standart
export const DisabledStandart: Story = {
	args: {
		label: 'Label',
		disabled: true,
		type: 'standart',
	},
};

// Базовый текстовый input + введенный текст Standart
export const DefaultWithValueStandart: Story = {
	args: {
		label: 'Label',
		defaultValue: 'Value',
		type: 'standart',
	},
};

// Ошибка + введенный текст Standart
export const ErrorWithValueStandart: Story = {
	args: {
		label: 'Label',
		error: true,
		defaultValue: 'Value',
		type: 'standart',
	},
};

// Отключенное поле + введенный текст Standart
export const DisabledWithValueStandart: Story = {
	args: {
		label: 'Label',
		disabled: true,
		defaultValue: 'Value',
		type: 'standart',
	},
};

// Тест клика по textarea
export const InteractionTest: Story = {
	args: {
		label: 'Label',
		onClick: () => console.log('Textarea clicked!'),
	},
	play: async ({ canvasElement }) => {
		const consoleSpy = spyOn(console, 'log');

		const canvas = within(canvasElement);
		const element = canvas.getByTestId('Textarea');
		await expect(element).toBeInTheDocument();
		element.click();
		await expect(consoleSpy).toHaveBeenCalledWith('Textarea clicked!'); // Проверяем вызов
		consoleSpy.mockRestore();
	},
};
