import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Spinner from '../../components/Spinner';

describe('<Spinner />', () => {
  test('should render spinner', () => {
    render(<Spinner />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
