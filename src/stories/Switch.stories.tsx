//import Switch from '@/elements/switch';
import { SwitchElement } from '@/elements/switch';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, spyOn, within } from '@storybook/test';

const meta = {
	title: 'Atoms/Switch',
	component: SwitchElement,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: [
				'default',
				'primary',
				'secondary',
				'info',
				'success',
				'warning',
				'error',
			],
		},
		size: {
			control: { type: 'select' },
			options: ['small', 'medium'],
		},
		checked: {
			control: { type: 'boolean' },
		},
		disabled: {
			control: { type: 'boolean' },
		},
		label: {
			control: { type: 'text' },
		},
	},
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof SwitchElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		checked: true,
	},
};

export const Primary: Story = {
	args: {
		size: 'medium',
		variant: 'primary',
		checked: true,
	},
};

export const Secondary: Story = {
	args: {
		size: 'medium',
		variant: 'secondary',
		checked: true,
	},
};

export const Info: Story = {
	args: {
		size: 'medium',
		variant: 'info',
		checked: true,
	},
};

export const Success: Story = {
	args: {
		size: 'medium',
		variant: 'success',
		checked: true,
	},
};

export const Warning: Story = {
	args: {
		size: 'medium',
		variant: 'warning',
		checked: true,
	},
};

export const Error: Story = {
	args: {
		size: 'medium',
		variant: 'error',
		checked: true,
	},
};

export const Small: Story = {
	args: {
		checked: true,
		size: 'small',
		variant: 'secondary',
	},
};

export const Unchecked: Story = {
	args: {
		checked: false,
	},
};

export const UncheckedDisabled: Story = {
	args: {
		disabled: true,
	},
};

export const CheckedDisabled: Story = {
	args: {
		checked: true,
		disabled: true,
		variant: 'info',
	},
};

export const WithLabel: Story = {
	args: {
		checked: true,
		label: 'Label',
	},
};

export const InteractionTest: Story = {
	args: {
		onClick: () => console.log('Checked!'),
		size: 'medium',
		variant: 'secondary',
	},
	play: async ({ canvasElement }) => {
		const consoleSpy = spyOn(console, 'log');

		const canvas = within(canvasElement);
		const element = canvas.getByTestId('Switch');
		await expect(element).toBeInTheDocument();
		element.click();
		await expect(consoleSpy).toHaveBeenCalledWith('Checked!');
		consoleSpy.mockRestore();
	},
};
