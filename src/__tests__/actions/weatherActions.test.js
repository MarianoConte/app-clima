import {
  FORECAST_REQUESTED,
  LOCAL_CITY_REQUESTED,
  SET_MAIN_WEATHER,
  WEATHER_REQUESTED,
} from '../../actions/types';
import {
  getLocalCity,
  getWeather,
  getForecast,
  setMainWeather,
} from '../../actions/weatherAction';
import localCity from '../../__mocks__/localCityData';
import weather from '../../__mocks__/weatherData';

describe('weatherActions', () => {
  test('getLocalCity action', () => {
    const expected = {
      type: LOCAL_CITY_REQUESTED,
    };
    expect(getLocalCity()).toEqual(expected);
  });

  test('getWeather action', () => {
    const expected = {
      type: WEATHER_REQUESTED,
      payload: localCity,
    };
    expect(getWeather(localCity)).toEqual(expected);
  });

  test('getForecast action', () => {
    const expected = {
      type: FORECAST_REQUESTED,
      payload: localCity,
    };
    expect(getForecast(localCity)).toEqual(expected);
  });

  test('setMainWeather action', () => {
    const expected = {
      type: SET_MAIN_WEATHER,
      payload: weather.data,
    };
    expect(setMainWeather(weather.data)).toEqual(expected);
  });
});
