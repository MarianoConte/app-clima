import React from 'react';
import MainWeather from '../../components/MainWeather';
import { renderWithContext } from '../../__mocks__/ProviderMock';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import weatherData from '../../__mocks__/weatherData';

describe('<MainWeather />', () => {
  test('should render the spinner', () => {
    renderWithContext(<MainWeather />, {
      weather: {
        mainWeather: {},
        loadingWeather: true,
      },
    });

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
    const weather = screen.queryByTestId('main-weather');
    expect(weather).toBeNull();
  });

  test('should render the weather', () => {
    renderWithContext(<MainWeather />, {
      weather: {
        mainWeather: weatherData.data,
        loadingWeather: false,
      },
    });

    const weather = screen.getByTestId('main-weather');
    expect(weather).toBeInTheDocument();
    const spinner = screen.queryByTestId('spinner');
    expect(spinner).toBeNull();
  });
});
