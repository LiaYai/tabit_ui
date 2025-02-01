import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Avatar } from './avatar';

describe('<Avatar />', () => {
	test('it should mount', () => {
		render(<Avatar src={'https://i.ibb.co.com/DKDbKxh/image.png'} alt='Avatar' size='m' shape='circle' />);

		const element = screen.getByTestId('Avatar');

		expect(element).toBeInTheDocument();
	});
});
