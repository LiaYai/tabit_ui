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
			options: ['default', 'sm', 'lg'],
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

/** Дефолтный link */
export const Default: Story = {
	args: {
		children: 'Мои тестирования',
		href: 'javascript:void(0)',
		iconLeft: <AppstoreAddOutlined />,
		iconRight: <DownOutlined />,
	},
};

/** Link с правой иконкой */
export const WithLeftIcon: Story = {
	args: {
		children: 'Мои тестирования',
		href: 'javascript:void(0)',
		iconLeft: <AppstoreAddOutlined />,
	},
};

/** Link с левой иконкой */
export const WithRightIcon: Story = {
	args: {
		children: 'Мои тестирования',
		href: 'javascript:void(0)',
		iconRight: <DownOutlined />,
	},
};

/** Интерактивный тест */
export const InteractiveTest: Story = {
	args: {
		children: 'Click me',
		href: 'javascript:void(0)',
		iconLeft: <AppstoreAddOutlined />,
		iconRight: <DownOutlined />,
		size: 'default',
		onClick: () => console.log('Link clicked!'),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const link = canvas.getByRole('link');

		/** Проверяем, что ссылка существует*/
		await expect(link).toBeInTheDocument();
		/** Проверяем, что атрибут href установлен*/
		await expect(link).toHaveAttribute('href', 'javascript:void(0)');
	},
};
