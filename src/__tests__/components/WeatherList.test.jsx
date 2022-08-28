import React from 'react';
import WeatherList from '../../components/WeatherList';
import { renderWithContext } from '../../__mocks__/ProviderMock';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import forecastData from '../../__mocks__/forecastData';
import weatherData from '../../__mocks__/weatherData';

describe('<WeatherList/>', () => {
  test('should render the spinner', () => {
    renderWithContext(<WeatherList />, {
      weather: {
        weatherForecast: [],
        loadingForecast: true,
      },
    });

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
    const weather = screen.queryByTestId('weather');
    expect(weather).toBeNull();
  });

  test('should render the weather list', () => {
    renderWithContext(<WeatherList />, {
      weather: {
        mainWeather: weatherData.data,
        weatherForecast: forecastData.data.list,
        loadingForecast: false,
      },
    });

    const weather = screen.getAllByTestId('weather');
    expect(weather.length).toEqual(forecastData.data.list.length);
    const spinner = screen.queryByTestId('spinner');
    expect(spinner).toBeNull();
  });
});
