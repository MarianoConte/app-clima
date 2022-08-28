import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';
import localCity from '../__mocks__/localCityData';
import * as actions from '../actions/weatherAction';
import weatherData from '../__mocks__/weatherData';
import forecastData from '../__mocks__/forecastData';
import { renderWithContext } from '../__mocks__/ProviderMock';
import axios from 'axios';

const mockAxios = axios;
describe('<App/>', () => {
  test('should render the common use of app', async () => {
    const getLocalCity = jest.spyOn(actions, 'getLocalCity');
    const getWeather = jest.spyOn(actions, 'getWeather');
    const getForecast = jest.spyOn(actions, 'getForecast');

    renderWithContext(<App />, {
      weather: {
        localCity: {},
        mainWeather: {},
        weatherForecast: [],
        error: '',
        loadingWeather: true,
        loadingForecast: true,
      },
    });
    expect(screen.getByText('Clima app')).toBeInTheDocument();
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
    expect(screen.getAllByTestId('spinner')).toHaveLength(2);

    expect(getLocalCity).toHaveBeenCalled();
    expect(getLocalCity).toHaveBeenCalledTimes(1);
    expect(getWeather).not.toHaveBeenCalled();
    expect(getForecast).not.toHaveBeenCalled();
  });

  test('should render after localCity loads', async () => {
    const getWeather = jest.spyOn(actions, 'getWeather');
    const getForecast = jest.spyOn(actions, 'getForecast');
    mockAxios.get = jest.fn();

    renderWithContext(<App />, {
      weather: {
        localCity: localCity,
        mainWeather: {},
        weatherForecast: [],
        error: '',
        loadingWeather: true,
        loadingForecast: true,
      },
    });

    expect(screen.getAllByTestId('spinner')).toHaveLength(2);

    expect(getWeather).toHaveBeenCalled();
    expect(getWeather).toHaveBeenCalledTimes(1);
    expect(getForecast).toHaveBeenCalled();
    expect(getForecast).toHaveBeenCalledTimes(1);
  });

  test('should render after weather and forecast loads', () => {
    renderWithContext(<App />, {
      weather: {
        localCity: localCity,
        mainWeather: weatherData.data,
        weatherForecast: forecastData.data.list,
        error: '',
        loadingWeather: false,
        loadingForecast: false,
      },
    });

    expect(screen.queryByTestId('spinner')).toBeNull();
    expect(screen.queryByTestId('error')).toBeNull();
    expect(screen.getByTestId('main-weather')).toBeInTheDocument();
    expect(screen.getByTestId('weather-list')).toBeInTheDocument();
  });

  test('should render error message when error', () => {
    renderWithContext(<App />, {
      weather: {
        localCity: {},
        mainWeather: {},
        weatherForecast: [],
        error: 'Error al cargar los datos',
        loadingWeather: true,
        loadingForecast: true,
      },
    });

    expect(screen.getByTestId('error')).toBeInTheDocument();
  });
});
