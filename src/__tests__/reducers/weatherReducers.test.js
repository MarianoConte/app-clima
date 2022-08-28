import {
  FORECAST_REQUESTED,
  FORECAST_SUCCEEDED,
  LOCAL_CITY_SUCCEEDED,
  SET_ERROR,
  SET_MAIN_WEATHER,
  WEATHER_REQUESTED,
  WEATHER_SUCCEEDED,
} from '../../actions/types';
import weatherReducer from '../../reducers/weatherReducer';
import forecastData from '../../__mocks__/forecastData';
import localCity from '../../__mocks__/localCityData';
import weatherData from '../../__mocks__/weatherData';
import weather from '../../__mocks__/weatherData';

describe('weatherReducers', () => {
  const initialState = {
    localCity: {},
    mainWeather: {},
    weatherForecast: [],
    error: '',
    loadingForecast: true,
    loadingWeather: true,
  };

  test('return initial state', () => {
    expect(weatherReducer(initialState, '')).toEqual(initialState);
  });

  test('LOCAL_CITY_SUCCEEDED', () => {
    const payload = localCity;
    const action = {
      type: LOCAL_CITY_SUCCEEDED,
      payload,
    };
    const expected = {
      ...initialState,
      localCity: payload,
      error: '',
    };
    expect(weatherReducer(initialState, action)).toEqual(expected);
  });

  test('SET_MAIN_WEATHER', () => {
    const payload = weatherData.data;
    const action = {
      type: SET_MAIN_WEATHER,
      payload,
    };
    const expected = {
      ...initialState,
      mainWeather: payload,
      loadingWeather: false,
      error: '',
    };
    expect(weatherReducer(initialState, action)).toEqual(expected);
  });

  test('WEATHER_SUCCEEDED', () => {
    const payload = weatherData.data;
    const action = {
      type: WEATHER_SUCCEEDED,
      payload,
    };
    const expected = {
      ...initialState,
      mainWeather: payload,
      loadingWeather: false,
      error: '',
    };
    expect(weatherReducer(initialState, action)).toEqual(expected);
  });

  test('FORECAST_SUCCEEDED', () => {
    const payload = forecastData.data;
    const action = {
      type: FORECAST_SUCCEEDED,
      payload,
    };
    const expected = {
      ...initialState,
      weatherForecast: payload,
      loadingForecast: false,
      error: '',
    };
    expect(weatherReducer(initialState, action)).toEqual(expected);
  });

  test('SET_ERROR', () => {
    const payload = 'Error';
    const action = {
      type: SET_ERROR,
      payload,
    };
    const expected = {
      ...initialState,
      error: 'Error',
    };
    expect(weatherReducer(initialState, action)).toEqual(expected);
  });

  test('FORECAST_REQUESTED', () => {
    const action = {
      type: FORECAST_REQUESTED,
    };
    const expected = {
      ...initialState,
      loadingForecast: true,
    };
    expect(weatherReducer(initialState, action)).toEqual(expected);
  });

  test('WEATHER_REQUESTED', () => {
    const action = {
      type: WEATHER_REQUESTED,
    };
    const expected = {
      ...initialState,
      loadingWeather: true,
    };
    expect(weatherReducer(initialState, action)).toEqual(expected);
  });
});
