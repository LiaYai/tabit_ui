import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('<Pagination />', () => {
	test('it should mount', () => {
		render(<Pagination />);

		const element = screen.getByTestId('Pagination');

		expect(element).toBeInTheDocument();
	});
});
