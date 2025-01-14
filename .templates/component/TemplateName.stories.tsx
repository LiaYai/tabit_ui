import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { TemplateName } from './TemplateName';

const meta = {
	title: 'Components/TemplateName',
	component: TemplateName,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof TemplateName>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const InteractionTest: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('TemplateName');
		await expect(element).toBeInTheDocument();
	},
};
