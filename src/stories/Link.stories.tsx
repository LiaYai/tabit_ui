import { Link } from '@/elements/link';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

const IcReplace = () => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M17.7814 8.88205C15.8694 5.46116 13.893 2.23818 11.6226 6.966C11.5319 7.14357 11.4483 7.37009 11.3628 7.6018C11.1558 8.16316 10.9375 8.75498 10.5785 8.75498V8.74898C10.2196 8.74898 10.0013 8.15721 9.79427 7.59586C9.7088 7.36413 9.62525 7.13759 9.5345 6.96C7.26405 2.23218 5.28762 5.45516 3.3756 8.87605L3.23869 9.12121C3.14468 9.28941 3.05535 9.44926 2.97521 9.59423L2.98974 9.58486L0 14.8538C1.20379 15.5989 2.76264 15.5707 4.0166 14.968C4.61307 14.7212 5.09806 14.2935 5.54262 13.7285C5.77839 13.429 6.26096 12.6002 6.99042 11.2419C7.12743 11.5083 7.26145 11.7846 7.39619 12.0623C8.18505 13.6885 8.99834 15.3651 10.5785 15.3951V15.4011C12.1587 15.3711 12.972 13.6945 13.7609 12.0683C14.7645 9.99942 15.7285 8.01206 18.1818 9.60016C18.0995 9.45127 18.0076 9.28674 17.9107 9.11347L17.9102 9.1125L17.7814 8.88205Z"
			fill="currentColor"
		/>
		<path
			d="M20 13.3728C20 14.4929 19.1119 15.4011 18.0165 15.4011C16.9211 15.4011 16.0331 14.4929 16.0331 13.3728C16.0331 12.2526 16.9211 11.3445 18.0165 11.3445C19.1119 11.3445 20 12.2526 20 13.3728Z"
			fill="currentColor"
		/>
	</svg>
);

const IcWindowsFill = () => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M17.5 10.833V17.028C17.5 17.1959 17.4662 17.362 17.4006 17.5165C17.3349 17.671 17.2389 17.8107 17.1181 17.9273C16.9973 18.0439 16.8543 18.135 16.6976 18.1951C16.5408 18.2552 16.3736 18.2831 16.2058 18.2772L16.095 18.268L10 17.5063V10.833H17.5ZM8.33333 10.833V17.298L3.96 16.7513C3.55684 16.7009 3.18596 16.505 2.9171 16.2004C2.64824 15.8958 2.49991 15.5035 2.5 15.0972V10.833H8.33333ZM16.095 1.73132C16.2616 1.71051 16.4306 1.72346 16.5921 1.7694C16.7535 1.81534 16.904 1.89333 17.0347 1.99871C17.1654 2.10409 17.2734 2.2347 17.3525 2.38276C17.4316 2.53083 17.4801 2.6933 17.495 2.86049L17.5 2.97132V9.16632H10V2.49299L16.095 1.73132ZM8.33333 2.70132V9.16632H2.5V4.90215C2.49991 4.49586 2.64824 4.10352 2.9171 3.7989C3.18596 3.49428 3.55684 3.29837 3.96 3.24799L8.33333 2.70132Z"
			fill="currentColor"
		/>
	</svg>
);

const IcEvaStarFill = () => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M14.6331 17.4998C14.4999 17.5004 14.3684 17.4689 14.2498 17.4082L9.9998 15.1832L5.7498 17.4082C5.6118 17.4807 5.4562 17.5131 5.3007 17.5017C5.1452 17.4902 4.99603 17.4354 4.87016 17.3433C4.74429 17.2513 4.64675 17.1258 4.58865 16.9811C4.53054 16.8365 4.5142 16.6784 4.54147 16.5248L5.3748 11.8332L1.94147 8.49984C1.83435 8.39295 1.75836 8.2589 1.72166 8.11209C1.68496 7.96528 1.68892 7.81124 1.73314 7.66651C1.78144 7.51841 1.87028 7.38681 1.98959 7.28664C2.10891 7.18648 2.2539 7.12177 2.40814 7.09984L7.15814 6.40818L9.2498 2.13318C9.31804 1.99229 9.42458 1.87346 9.55723 1.79032C9.68987 1.70718 9.84326 1.66309 9.9998 1.66309C10.1563 1.66309 10.3097 1.70718 10.4424 1.79032C10.575 1.87346 10.6816 1.99229 10.7498 2.13318L12.8665 6.39984L17.6165 7.09151C17.7707 7.11343 17.9157 7.17815 18.035 7.27831C18.1543 7.37847 18.2432 7.51007 18.2915 7.65818C18.3357 7.80291 18.3396 7.95694 18.3029 8.10376C18.2662 8.25057 18.1903 8.38461 18.0831 8.49151L14.6498 11.8248L15.4831 16.5165C15.5129 16.6727 15.4973 16.8342 15.4382 16.9819C15.3792 17.1295 15.2791 17.2572 15.1498 17.3498C14.9989 17.4556 14.8172 17.5083 14.6331 17.4998Z"
			fill="currentColor"
		/>
	</svg>
);

const IcTrendingUpFill = () => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M17.5 5.83333C17.5079 5.77527 17.5079 5.7164 17.5 5.65833C17.4927 5.60941 17.4787 5.56173 17.4583 5.51667C17.4363 5.47594 17.4112 5.43694 17.3833 5.4C17.3516 5.34729 17.3123 5.29956 17.2667 5.25833L17.1667 5.2C17.1186 5.16413 17.0651 5.13601 17.0083 5.11667H16.8417C16.7909 5.0675 16.7316 5.02796 16.6667 5H12.5C12.0398 5 11.6667 5.3731 11.6667 5.83333C11.6667 6.29357 12.0398 6.66667 12.5 6.66667H14.8583L11.525 10.5917L7.925 8.45C7.57274 8.24049 7.12043 8.31823 6.85834 8.63333L2.69167 13.6333C2.54996 13.8034 2.48173 14.0229 2.50206 14.2433C2.52238 14.4637 2.62958 14.667 2.8 14.8083C2.94993 14.9326 3.13863 15.0004 3.33334 15C3.5812 15.0004 3.81637 14.8905 3.975 14.7L7.68334 10.25L11.2417 12.3833C11.5901 12.59 12.0367 12.5161 12.3 12.2083L15.8333 8.08333V10C15.8333 10.4602 16.2064 10.8333 16.6667 10.8333C17.1269 10.8333 17.5 10.4602 17.5 10V5.83333Z"
			fill="currentColor"
		/>
	</svg>
);

const Dot = () => (
	<svg
		width="4"
		height="4"
		viewBox="0 0 4 4"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="2" cy="2" r="2" fill="currentColor" />
	</svg>
);

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
		dot: <Dot />,
	},
};

/** Text Link Disabled */
export const TextLinkDisabled: Story = {
	args: {
		children: 'Link Disabled',
		href: 'javascript:void(0)',
		dot: <Dot />,
		disabled: true,
	},
};

/** Link with primary shape (Replace Icon) */
export const WithReplaceIcon: Story = {
	args: {
		children: 'Link',
		href: 'javascript:void(0)',
		iconLeft: <IcReplace />,
		dot: <Dot />,
	},
};

/** Link with primary shape (Cases Icon) */
export const WithCasesIcon: Story = {
	args: {
		children: 'Root',
		href: 'javascript:void(0)',
		iconLeft: <IcWindowsFill />,
		// dot: <Dot />,
	},
};

/** Link with star Icon */
export const WithStarIcon: Story = {
	args: {
		children: 'Link',
		href: 'javascript:void(0)',
		iconLeft: <IcEvaStarFill />,
		dot: <Dot />,
	},
};

/** Link with trending Icon */
export const WithTrendingIcon: Story = {
	args: {
		children: 'Current',
		href: 'javascript:void(0)',
		iconLeft: <IcTrendingUpFill />,
		dot: <Dot />,
	},
};

/** Интерактивный тест */
export const InteractiveTest: Story = {
	args: {
		children: 'Click me',
		href: 'javascript:void(0)',
		iconLeft: <IcReplace />,
		size: 'default',
		dot: <Dot />,
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
