import { Switch } from '@/components/ui/switch';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, spyOn, within } from '@storybook/test';

const meta = {
	title: 'Atoms/Switch',
	component: Switch,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',

	},
} satisfies Meta<typeof Switch>;

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
