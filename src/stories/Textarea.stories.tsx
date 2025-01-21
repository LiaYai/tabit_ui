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
			description: 'Текст подсказки внутри поля',
		},
		disabled: {
			control: 'boolean',
			description: 'Деактивирует поле ввода',
		},
	},
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// <Textarea variant="default">Default</Textarea>
export const Default: Story = {
	args: {
		placeholder: 'Text',
	},
};

// <Textarea variant="disabled">Disabled</Textarea>
export const Disabled: Story = {
	args: {
		placeholder: 'Это поле отключено',
		disabled: true,
	},
};

// <Textarea variant=" WithFileUpload"> WithFileUpload</Textarea>
export const WithFileUpload: Story = {
	args: {
		placeholder: 'Добавьте текст и файл...',
	},
};

export const InteractionTest: Story = {
	args: {
		placeholder: 'Это поле отключено',
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
