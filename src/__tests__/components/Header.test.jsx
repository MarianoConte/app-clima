import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../../components/Header';

describe('<Header />', () => {
  beforeEach(() => {
    render(<Header />);
  });
  test('should render the header', () => {
    expect(screen.getByText('Clima app')).toBeInTheDocument();
    expect(screen.getByText('Clima app').tagName).toBe('H1');
  });
});
