import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { Pagination } from './Pagination';

const meta = {
	title: 'Components/Pagination',
	component: Pagination,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['circular', 'rounded'],
		},
		size: {
			control: 'select',
			options: ['large', 'medium', 'small'],
		},
	},
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const circularLarge: Story = {
	args: {
		//variant: 'circular',
		//size: 'large',
		rows: 100,
		pageList: ['All', 10, 20, 50, 100],
		paginationParts: ['pageList'],
		sidePagination: 'client',
		pagination: true,
		showExtendedPagination: false,
		paginationLoadMore: false,
		paginationLoaded: false,
		smartDisplay: false,
		paginationSuccessivelySize: 5,
		paginationVAlign: 'bottom',
		data: [],
		paginationPagesBySide: 1,
		paginationUseIntermediate: false,
		paginationLoo: false,
		onlyInfoPagination: false,
		maintainMetaData: false,
	},
};

export const roundedLarge: Story = {
	args: {
		//variant: 'rounded',
		//size: 'large',
		rows: 100,
		pageList: ['All', 10, 20, 50, 100],
		paginationParts: ['pageList'],
		sidePagination: 'client',
		pagination: true,
		showExtendedPagination: false,
		paginationLoadMore: false,
		paginationLoaded: false,
		smartDisplay: false,
		paginationSuccessivelySize: 5,
		paginationVAlign: 'bottom',
		data: [],
		paginationPagesBySide: 1,
		paginationUseIntermediate: false,
		paginationLoo: false,
		onlyInfoPagination: false,
		maintainMetaData: false,
	},
};

export const circularMedium: Story = {
	args: {
		//variant: 'circular',
		//size: 'medium',
		rows: 100,
		pageList: ['All', 10, 20, 50, 100],
		paginationParts: ['pageList'],
		sidePagination: 'client',
		pagination: true,
		showExtendedPagination: false,
		paginationLoadMore: false,
		paginationLoaded: false,
		smartDisplay: false,
		paginationSuccessivelySize: 5,
		paginationVAlign: 'bottom',
		data: [],
		paginationPagesBySide: 1,
		paginationUseIntermediate: false,
		paginationLoo: false,
		onlyInfoPagination: false,
		maintainMetaData: false,
	},
};

export const roundedMedium: Story = {
	args: {
		//variant: 'rounded',
		//size: 'medium',
		rows: 100,
		pageList: ['All', 10, 20, 50, 100],
		paginationParts: ['pageList'],
		sidePagination: 'client',
		pagination: true,
		showExtendedPagination: false,
		paginationLoadMore: false,
		paginationLoaded: false,
		smartDisplay: false,
		paginationSuccessivelySize: 5,
		paginationVAlign: 'bottom',
		data: [],
		paginationPagesBySide: 1,
		paginationUseIntermediate: false,
		paginationLoo: false,
		onlyInfoPagination: false,
		maintainMetaData: false,
	},
};

export const circularSmall: Story = {
	args: {
		//variant: 'circular',
		//size: 'small',
		rows: 100,
		pageList: ['All', 10, 20, 50, 100],
		paginationParts: ['pageList'],
		sidePagination: 'client',
		pagination: true,
		showExtendedPagination: false,
		paginationLoadMore: false,
		paginationLoaded: false,
		smartDisplay: false,
		paginationSuccessivelySize: 5,
		paginationVAlign: 'bottom',
		data: [],
		paginationPagesBySide: 1,
		paginationUseIntermediate: false,
		paginationLoo: false,
		onlyInfoPagination: false,
		maintainMetaData: false,
	},
};

export const roundedSmall: Story = {
	args: {
		//variant: 'rounded',
		//size: 'small',
		rows: 100,
		pageList: ['All', 10, 20, 50, 100],
		paginationParts: ['pageList'],
		sidePagination: 'client',
		pagination: true,
		showExtendedPagination: false,
		paginationLoadMore: false,
		paginationLoaded: false,
		smartDisplay: false,
		paginationSuccessivelySize: 5,
		paginationVAlign: 'bottom',
		data: [],
		paginationPagesBySide: 1,
		paginationUseIntermediate: false,
		paginationLoo: false,
		onlyInfoPagination: false,
		maintainMetaData: false,
	},
};

export const InteractionTest: Story = {
	args: {
		//variant: 'rounded',
		//size: 'large',
		rows: 100,
		pageList: ['All', 10, 20, 50, 100],
		paginationParts: ['pageList', 'pageInfo'],
		sidePagination: 'client',
		pagination: true,
		showExtendedPagination: false,
		paginationLoadMore: false,
		paginationLoaded: false,
		smartDisplay: false,
		paginationSuccessivelySize: 5,
		paginationVAlign: 'bottom',
		data: [],
		paginationPagesBySide: 1,
		paginationUseIntermediate: false,
		paginationLoo: false,
		onlyInfoPagination: false,
		maintainMetaData: false,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('Pagination');
		await expect(element).toBeInTheDocument();
	},
};
