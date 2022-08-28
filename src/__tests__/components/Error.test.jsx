import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Error from '../../components/Error';

describe('<Error />', () => {
  test('should render error', () => {
    const error = 'Mensaje de error';
    render(<Error error={error} />);
    expect(screen.getByTestId('error')).toBeInTheDocument();
    expect(screen.getByText(error)).toBeInTheDocument();
  });
});
