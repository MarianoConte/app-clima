import React from 'react';
import Weather from '../../components/Weather';
import forecastData from '../../__mocks__/forecastData';
import '@testing-library/jest-dom/extend-expect';
import { renderWithContext } from '../../__mocks__/ProviderMock';
import weatherData from '../../__mocks__/weatherData';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as actions from '../../actions/weatherAction';

describe('<Weather/>', () => {
  test('should it render', async () => {
    const setMainWeather = jest.spyOn(actions, 'setMainWeather');

    renderWithContext(<Weather weather={forecastData.data.list[0]} />, {
      weather: {
        mainWeather: weatherData.data,
        weatherForecast: forecastData.data.list,
      },
    });

    const weather = screen.getByTestId('weather');
    expect(weather).toBeInTheDocument();

    await userEvent.click(weather);
    expect(setMainWeather).toHaveBeenCalled();
    expect(setMainWeather).toHaveBeenCalledTimes(1);
  });
});
