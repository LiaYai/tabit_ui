import { Button } from '@/components/ui/button';
import { BellOutlined } from '@ant-design/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, spyOn, within } from '@storybook/test';

const meta = {
	title: 'Atoms/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: [
				'default',
				'secondary',
				'destructive',
				'ghost',
				'link',
				'outline',
			],
		},
		size: {
			control: { type: 'select' },
			options: ['default', 'icon', 'sm', 'lg'],
		},
	},
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// <Button variant="default">Default</Button>
export const Default: Story = {
	args: {
		variant: 'default',
		children: 'Default',
	},
};

// <Button variant="secondary">Secondary</Button>
export const Secondary: Story = {
	args: {
		variant: 'secondary',
		children: 'Secondary',
	},
};

// <Button variant="secondary">Secondary</Button>
export const Error: Story = {
	args: {
		variant: 'destructive',
		children: 'Error',
	},
};

// Пример кнопки для отправки формы
export const SubmitButton: Story = {
	args: {
		children: 'Submit',
		type: 'submit',
	},
};

export const WithIcon: Story = {
	args: {
		type: 'button',
		variant: 'default',
		children: (
			<>
				<BellOutlined /> Оповещения
			</>
		),
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
