import { FileInput } from '@/components/ui/fileinput';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, spyOn, within } from '@storybook/test';

const meta = {
	title: 'Atoms/FileInput',
	component: FileInput,
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: {
				type: 'select',
				options: ['file'],
			},
			defaultValue: 'file',
		},
		multiple: {
			control: {
				type: 'boolean',
			},
			defaultValue: false,
		},
		accept: {
			control: {
				type: 'text',
			},
			defaultValue: '',
		},
		disabled: {
			control: {
				type: 'boolean',
			},
			defaultValue: false,
		},
	},
} satisfies Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// <FileInput variant="default">Default</FileInput>
export const Default: Story = {
	args: {
		type: 'file',
	},
};

// <FileInput variant="multipleFiles">MultipleFiles</FileInput>
export const MultipleFiles: Story = {
	args: {
		type: 'file',
		multiple: true,
	},
};

// <FileInput variant="withAcceptedTypes">WithAcceptedTypes</FileInput>
export const WithAcceptedTypes: Story = {
	args: {
		type: 'file',
		accept: '.docx,.doc,.jpeg,.jpg',
	},
};

// <FileInput variant="disabled">Disabled</FileInput>
export const Disabled: Story = {
	args: {
		type: 'file',
		disabled: true,
	},
};

export const InteractionTest: Story = {
	args: {
		type: 'file',
		onClick: () => console.log('FileInput clicked!'),
	},
	play: async ({ canvasElement }) => {
		const consoleSpy = spyOn(console, 'log');

		const canvas = within(canvasElement);
		const element = canvas.getByTestId('FileInput');
		await expect(element).toBeInTheDocument();
		element.click();
		await expect(consoleSpy).toHaveBeenCalledWith('FileInput clicked!'); // Проверяем вызов
		consoleSpy.mockRestore();
	},
};
