import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import store from '../store';
import { Provider } from 'react-redux';
import localCity from '../__mocks__/localCityData';
import { act } from 'react-dom/test-utils';
import {
  FORECAST_SUCCEEDED,
  LOCAL_CITY_SUCCEEDED,
  WEATHER_SUCCEEDED,
} from '../actions/types';
import * as actions from '../actions/weatherAction';
import weatherData from '../__mocks__/weatherData';
import forecastData from '../__mocks__/forecastData';

const renderWithContext = (children) => {
  render(<Provider store={store}>{children}</Provider>);
  return { store };
};

describe('<App/>', () => {
  test('should render the common use of app', async () => {
    const getLocalCity = jest.spyOn(actions, 'getLocalCity');
    const getWeather = jest.spyOn(actions, 'getWeather');
    const getForecast = jest.spyOn(actions, 'getForecast');

    const { store } = renderWithContext(<App />);
    expect(screen.getByText('Clima app')).toBeInTheDocument();
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
    expect(screen.getAllByTestId('spinner')).toHaveLength(2);

    expect(getLocalCity).toHaveBeenCalled();
    expect(getLocalCity).toHaveBeenCalledTimes(1);
    expect(getWeather).not.toHaveBeenCalled();

    act(() =>
      store.dispatch({ type: LOCAL_CITY_SUCCEEDED, payload: localCity })
    );
    let expected = {
      weather: {
        localCity: localCity,
        mainWeather: {},
        weatherForecast: [],
        error: '',
        loadingWeather: true,
        loadingForecast: true,
      },
    };

    expect(expected).toEqual(store.getState());
    const select = screen.getByTestId('select');
    expect(select.children.length).toEqual(6);
    expect(screen.getAllByTestId('spinner')).toHaveLength(2);

    expect(getWeather).toHaveBeenCalled();
    expect(getWeather).toHaveBeenCalledTimes(1);
    expect(getForecast).toHaveBeenCalled();
    expect(getForecast).toHaveBeenCalledTimes(1);
    act(() =>
      store.dispatch({ type: WEATHER_SUCCEEDED, payload: weatherData.data })
    );
  });
});
