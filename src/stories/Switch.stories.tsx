import { Switch } from '@/components/ui/switch';
import SwitchElement from '@/elements/switch';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, spyOn, within } from '@storybook/test';

const meta = {
	title: 'Atoms/Switch',
	component: SwitchElement,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',

	},
} satisfies Meta<typeof SwitchElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
	args: {
		checked: true,
	},
};

export const Unchecked: Story = {
	args: {
		checked: false,
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const CheckedDisabled: Story = {
	args: {
		checked: true,
		disabled: true,
	},
};

export const WithLabel: Story = {
	args: {
		label: 'Label',
	},
};

export const DisabledWithLabel: Story = {
	args: {
		label: 'Label',
		disabled: true,
	},
};

export const CheckedDisabledWithLabel: Story = {
	args: {
		label: 'Label',
		checked: true,
		disabled: true,
	},
}

export const InteractionTest: Story = {
	args: {
		onClick: () => console.log('Checked!'),
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
