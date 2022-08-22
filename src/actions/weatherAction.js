import {
  FORECAST_REQUESTED,
  LOCAL_CITY_REQUESTED,
  WEATHER_REQUESTED,
} from './types';

export const getLocalCity = () => {
  return {
    type: LOCAL_CITY_REQUESTED,
  };
};

export const getWeather = (city) => {
  return {
    type: WEATHER_REQUESTED,
    payload: city,
  };
};

export const getForecast = (city) => {
  return {
    type: FORECAST_REQUESTED,
    payload: city,
  };
};
