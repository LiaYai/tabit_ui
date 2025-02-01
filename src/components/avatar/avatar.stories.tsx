import { type Meta, type StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Avatar } from './avatar';

const meta = {
	title: 'Components/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	ArgTypes: {
		size: {
			control: {type: 'select'},
			options: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
		},
		shape: {
			control: {type: 'select'},
			options: ['circle', 'squircle', 'square'],
		}
	},
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const SmallRounded = {
	args: {
		src: 'https://i.ibb.co.com/DKDbKxh/image.png',
		size: 's',
		shape: 'circle',
	}
}

export const MediumHalfRounded = {
	args: {
		src: 'https://i.ibb.co.com/DKDbKxh/image.png',
		size: 'm',
		shape: 'squircle',
	}
}

export const LargeNoRounded = {
	args: {
		src: 'https://i.ibb.co.com/DKDbKxh/image.png',
		size: 'l',
		shape: 'square',
	}
}

export const InteractionTest: Story = {
	args: {
		src: 'https://i.ibb.co.com/DKDbKxh/image.png',
		size: 'xxxl',
		shape: 'circle',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('Avatar');
		await expect(element).toBeInTheDocument();
	},
};
