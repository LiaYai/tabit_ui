import type { Meta, StoryObj } from '@storybook/react';
import { expect, spyOn, within } from '@storybook/test';

import { Button } from './Button';

const meta = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Пример основной кнопки
export const Primary: Story = {
	args: {
		children: 'Primary Button',
		type: 'button',
		disabled: false,
	},
};

// Пример кнопки, которая отключена
export const Disabled: Story = {
	args: {
		children: 'Disabled Button',
		type: 'button',
		disabled: true,
	},
};

// Пример кнопки с иконкой и текстом
export const WithIcon: Story = {
	args: {
		children: (
			<>
				<span role="img" aria-label="Search">
					🔍
				</span>{' '}
				Search
			</>
		),
		type: 'button',
		disabled: false,
	},
};

export const InteractionTest: Story = {
	args: {
		children: 'Test Button',
		type: 'button',
		onClick: () => console.log('Button clicked!'),
	},
	play: async ({ canvasElement }) => {
		const consoleSpy = spyOn(console, 'log');

		const canvas = within(canvasElement);
		const element = canvas.getByTestId('Button');
		await expect(element).toBeInTheDocument();
		element.click();
		await expect(consoleSpy).toHaveBeenCalledWith('Button clicked!'); // Проверяем вызов
		consoleSpy.mockRestore();
	},
};

// Пример кнопки для отправки формы
export const SubmitButton: Story = {
	args: {
		children: 'Submit',
		type: 'submit',
	},
};
