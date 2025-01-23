import { Input } from '@/components/ui/input';
import {
	CloseCircleOutlined,
	EditOutlined,
	InfoCircleOutlined,
} from '@ant-design/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

const meta = {
	title: 'Atoms/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['default', 'disabled', 'error', 'ghost'],
		},
		size: {
			control: { type: 'select' },
			options: ['default', 'icon', 'sm', 'lg'],
		},
	},
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'default',
		size: 'default',
		type: 'text',
		placeholder: 'текст',
		icon: (
			<>
				<EditOutlined />
			</>
		),
	},
};

export const Disabled: Story = {
	args: {
		variant: 'disabled',
		size: 'default',
		type: 'text',
		placeholder: 'текст',
		disabled: true,
		icon: (
			<>
				<InfoCircleOutlined />
			</>
		),
	},
};

export const Error: Story = {
	args: {
		variant: 'error',
		size: 'default',
		type: 'text',
		placeholder: 'текст',
		icon: (
			<>
				<CloseCircleOutlined />
			</>
		),
	},
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		size: 'default',
		type: 'text',
		placeholder: 'текст',
		icon: (
			<>
				<CloseCircleOutlined />
			</>
		),
	},
};

export const InteractionTest: Story = {
	args: {
		variant: 'default',
		size: 'default',
		type: 'text',
		placeholder: 'Enter text',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const inputElement = canvas.getByTestId('Input') as HTMLInputElement;

		await expect(inputElement).toBeInTheDocument();

		await inputElement.focus();
		inputElement.value = 'test';
		await expect(inputElement).toHaveValue('test');
	},
};
