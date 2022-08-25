import { getForecast, getLocalCity, getWeather } from '../../sagas/weatherSaga';
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import weatherData from '../../__mocks__/weatherData';
import forecastData from '../../__mocks__/forecastData';

describe('weatherSaga', () => {
  test('should getLocalCity', () => {
    const generator = getLocalCity();
    const response = { data: { city: 'Buenos Aires', lat: -34.6, lon: -58.4 } };

    expect(generator.next().value).toEqual(
      call(axios.get, 'http://ip-api.com/json')
    );

    expect(generator.next(response).value.payload).toEqual({
      action: {
        type: 'LOCAL_CITY_SUCCEEDED',
        payload: { city: 'Buenos Aires', lat: -34.6, lon: -58.4 },
      },
    });

    expect(generator.next()).toEqual({
      done: true,
      value: undefined,
    });
  });

  test('should failure getLocalCity', () => {
    const generator = getLocalCity();
    const response = {};

    expect(generator.next().value).toEqual(
      call(axios.get, 'http://ip-api.com/json')
    );

    expect(generator.next(response).value.payload.action).toEqual({
      type: 'SET_ERROR',
      payload: 'Ocurrió un error al solicitar su ubicación',
    });

    expect(generator.next()).toEqual({
      done: true,
      value: undefined,
    });
  });

  test('should getWeather', () => {
    const { lat, lon } = { lat: -57.541, lon: -37.9951 };
    const action = { payload: { lat, lon } };

    const generator = getWeather(action);
    const response = weatherData;

    expect(generator.next(response).value).toEqual(
      call(
        axios.get,
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      )
    );

    expect(generator.next(response).value.payload.action).toEqual({
      type: 'WEATHER_SUCCEEDED',
      payload: response.data,
    });

    expect(generator.next()).toEqual({
      done: true,
      value: undefined,
    });
  });

  test('should getWeather fails', () => {
    const { lat, lon } = { lat: -57.541, lon: -37.9951 };
    const action = { payload: { lat, lon } };

    const generator = getWeather(action);
    const response = {};

    expect(generator.next(response).value).toEqual(
      call(
        axios.get,
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      )
    );

    expect(generator.next(response).value.payload.action).toEqual({
      type: 'SET_ERROR',
      payload: 'Ocurrió un error al solicitar el clima actual de esa ciudad',
    });

    expect(generator.next()).toEqual({
      done: true,
      value: undefined,
    });
  });

  test('should getForecast', () => {
    const { lat, lon } = { lat: -57.541, lon: -37.9951 };
    const action = { payload: { lat, lon } };

    const generator = getForecast(action);
    const response = forecastData;

    expect(generator.next(response).value).toEqual(
      call(
        axios.get,
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      )
    );

    expect(generator.next(response).value.payload.action).toEqual({
      type: 'FORECAST_SUCCEEDED',
      payload: response.data.list,
    });

    expect(generator.next()).toEqual({
      done: true,
      value: undefined,
    });
  });

  test('should getForecast fails', () => {
    const { lat, lon } = { lat: -57.541, lon: -37.9951 };
    const action = { payload: { lat, lon } };

    const generator = getForecast(action);
    const response = {};

    expect(generator.next(response).value).toEqual(
      call(
        axios.get,
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      )
    );

    expect(generator.next(response).value.payload.action).toEqual({
      type: 'SET_ERROR',
      payload: 'Ocurrió un error al solicitar el pronóstico del clima',
    });

    expect(generator.next()).toEqual({
      done: true,
      value: undefined,
    });
  });
});
