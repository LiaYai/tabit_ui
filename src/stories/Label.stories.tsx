import { Label } from '@/components/ui/label';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, spyOn, within } from '@storybook/test';


const Icon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.6663 5.73899V11.167C14.6664 11.7204 14.4546 12.2529 14.0746 12.6551C13.6945 
        13.0574 13.1749 13.299 12.6223 13.3303L12.4997 13.3337H3.49967C2.94625 13.3337 2.41379 
        13.122 2.01152 12.7419C1.60925 12.3618 1.36767 11.8422 1.33634 11.2897L1.33301 
        11.167V5.73899L7.76767 9.10966C7.83926 9.14715 7.91886 9.16674 7.99967 9.16674C8.08048 
        9.16674 8.16009 9.14715 8.23167 9.10966L14.6663 5.73899ZM3.49967 2.66699H12.4997C13.0367 
        2.66693 13.5547 2.86632 13.953 3.2265C14.3514 3.58668 14.6018 4.08198 14.6557 4.61633L7.99967 
        8.10299L1.34367 4.61633C1.39536 4.1032 1.62837 3.62534 2.00084 3.26863C2.37331 2.91193 2.8608 
        2.69978 3.37567 2.67033L3.49967 2.66699Z" fill="currentColor"/>
    </svg>
)

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
        iconBefore: <Icon/>,
	},
};

export const FilledWithIconAfter: Story = {
	args: {
		variant: 'filled',
		children: 'Filled',
        iconAfter: <Icon/>,
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
        iconBefore: <Icon />
	},
};

export const OutlinedWithIconAfter: Story = {
	args: {
		variant: 'outlined',
		children: 'Outlined',
        iconAfter: <Icon />
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
        iconBefore: <Icon />
	},
};

export const SoftWithIconAfter: Story = {
	args: {
		variant: 'soft',
		children: 'Soft',
        iconAfter: <Icon />
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
