import { Link } from '@/elements/link';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Icon from '@/components/ui/Icon';
import {
	DotIcon,
	ReplaceIcon,
	StarIcon,
	TrendingUpIcon,
	WindowsIcon,
} from '@icons/index';

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
		href: {
			control: 'text',
			description: 'Link destination URL',
		},
		disabled: {
			control: 'boolean',
			description: 'Disable the link',
		},
	},
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Text Link */
export const TextLink: Story = {
	args: {
		children: 'Link',
		href: 'javascript:void(0)',
		dot: <Icon component={DotIcon} size={'4px'} />,
	},
};

/** Text Link Disabled */
export const TextLinkDisabled: Story = {
	args: {
		children: 'Link Disabled',
		href: 'javascript:void(0)',
		dot: <Icon component={DotIcon} size={'4px'} />,
		disabled: true,
	},
};

/** Link with primary shape (Replace Icon) */
export const WithReplaceIcon: Story = {
	args: {
		children: 'Link',
		href: 'javascript:void(0)',
		iconLeft: <Icon component={ReplaceIcon} size={'1.3rem'} />,
		dot: <Icon component={DotIcon} size={'4px'} />,
	},
};

/** Link with primary shape (Cases Icon) */
export const WithCasesIcon: Story = {
	args: {
		children: 'Root',
		href: 'javascript:void(0)',
		iconLeft: <Icon component={WindowsIcon} size={'1.3rem'} />,
	},
};

/** Link with star Icon */
export const WithStarIcon: Story = {
	args: {
		children: 'Link',
		href: 'javascript:void(0)',
		iconLeft: <Icon component={StarIcon} size={'1.3rem'} />,
		dot: <Icon component={DotIcon} size={'4px'} />,
	},
};

/** Link with trending Icon */
export const WithTrendingIcon: Story = {
	args: {
		children: 'Current',
		href: 'javascript:void(0)',
		iconLeft: <Icon component={TrendingUpIcon} size={'1.3rem'} />,
		dot: <Icon component={DotIcon} size={'4px'} />,
	},
};

/** Интерактивный тест */
export const InteractiveTest: Story = {
	args: {
		children: 'Click me',
		href: 'javascript:void(0)',
		iconLeft: <Icon component={ReplaceIcon} size={'1.3rem'} />,
		size: 'default',
		dot: <Icon component={DotIcon} size={'4px'} />,
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
