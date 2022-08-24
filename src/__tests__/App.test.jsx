import React from 'react';

import { render } from '@testing-library/react';
import App from '../App';

describe('<App/>', () => {
  test('Prueba render app', () => {
    render(<App />);
  });
});
