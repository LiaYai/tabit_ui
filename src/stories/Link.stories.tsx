import { Link } from '@/elements/link';
import { AppstoreAddOutlined, DownOutlined } from '@ant-design/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

const meta = {
	title: 'Atoms/Link',
	component: Link,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['default', 'sm', 'lg', 'icon'],
			description: 'Size variant of the link',
		},
		iconLeft: {
			control: 'boolean',
			description: 'Show/hide left icon',
		},
		iconRight: {
			control: 'boolean',
			description: 'Show/hide right icon',
		},
		quantity: {
			control: 'number',
			description: 'Numeric badge value (optional)',
		},
		href: {
			control: 'text',
			description: 'Link destination URL',
		},
	},
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default (FullFeatured) link
export const Default: Story = {
	args: {
		children: 'Мои тестирования',
		href: 'javascript:void(0)',
		iconLeft: <AppstoreAddOutlined />,
		iconRight: <DownOutlined />,
	},
};

// Link with left icon
export const WithLeftIcon: Story = {
	args: {
		children: 'Мои тестирования',
		href: 'javascript:void(0)',
		iconLeft: <AppstoreAddOutlined />,
	},
};

// Link with right icon
export const WithRightIcon: Story = {
	args: {
		children: 'Мои тестирования',
		href: 'javascript:void(0)',
		iconRight: <DownOutlined />,
	},
};

// Link with quantity and Icons
export const WithIconsQuantity: Story = {
	args: {
		children: 'Мои тестирования',
		href: 'javascript:void(0)',
		iconLeft: <AppstoreAddOutlined />,
		iconRight: <DownOutlined />,
		quantity: 5,
	},
};

// Link with quantity
export const WithOnlyQuantity: Story = {
	args: {
		children: 'Мои тестирования',
		href: 'javascript:void(0)',
		quantity: 5,
	},
};

// Interactive test
export const InteractiveTest: Story = {
	args: {
		children: 'Click me',
		// Убираем переход по ссылке
		href: 'javascript:void(0)',
		iconLeft: <AppstoreAddOutlined />,
		iconRight: <DownOutlined />,
		quantity: 1,
		size: 'default',
		// Обработчик onClick остается опциональным
		onClick: () => console.log('Link clicked!'),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const link = canvas.getByRole('link');

		// Проверяем, что ссылка существует
		await expect(link).toBeInTheDocument();
		// Проверяем, что атрибут href установлен
		await expect(link).toHaveAttribute('href', 'javascript:void(0)');
	},
};
