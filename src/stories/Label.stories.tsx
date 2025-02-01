import { Label } from '@/components/ui/label';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, spyOn, within } from '@storybook/test';
import Icon from '@/components/ui/Icon';
import { MailIcon } from '@icons/index';

const meta = {
	title: 'Atoms/Label',
	component: Label,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: [
				'filled',
				'outlined',
				'soft'
			],
		},
		labelColor: {
			control: { type: 'select' },
			options: ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'],
		},
	},
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
	args: {
		variant: 'filled',
		children: 'Filled',
	},
};

export const FilledWithIconBefore: Story = {
	args: {
		variant: 'filled',
		children: 'Filled',
        iconBefore: <Icon component={MailIcon} size={'16px'} />,
	},
};

export const FilledWithIconAfter: Story = {
	args: {
		variant: 'filled',
		children: 'Filled',
        iconAfter: <Icon component={MailIcon} size={'16px'} />,
	},
};

export const Outlined: Story = {
	args: {
		variant: 'outlined',
		children: 'Outlined',
	},
};

export const OutlinedWithIconBefore: Story = {
	args: {
		variant: 'outlined',
		children: 'Outlined',
        iconBefore: <Icon component={MailIcon} size={'16px'} />,
	},
};

export const OutlinedWithIconAfter: Story = {
	args: {
		variant: 'outlined',
		children: 'Outlined',
        iconAfter: <Icon component={MailIcon} size={'16px'} />,
	},
};

export const Soft: Story = {
	args: {
		variant: 'soft',
		children: 'Soft',
	},
};

export const SoftWithIconBefore: Story = {
	args: {
		variant: 'soft',
		children: 'Soft',
        iconBefore: <Icon component={MailIcon} size={'16px'} />,
	},
};

export const SoftWithIconAfter: Story = {
	args: {
		variant: 'soft',
		children: 'Soft',
        iconAfter: <Icon component={MailIcon} size={'16px'} />,
	},
};

export const InteractionTest: Story = {
	args: {
		children: 'Test Label'
	},
	play: async ({ canvasElement }) => {
		const consoleSpy = spyOn(console, 'log');

		const canvas = within(canvasElement);
		const element = canvas.getByTestId('Label');
		await expect(element).toBeInTheDocument();
		consoleSpy.mockRestore();
	},
};
