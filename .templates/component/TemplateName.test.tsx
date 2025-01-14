import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TemplateName } from './TemplateName';

describe('<TemplateName />', () => {
	test('it should mount', () => {
		render(<TemplateName />);

		const element = screen.getByTestId('TemplateName');

		expect(element).toBeInTheDocument();
	});
});
