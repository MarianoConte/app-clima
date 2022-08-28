import {
  FORECAST_REQUESTED,
  FORECAST_SUCCEEDED,
  LOCAL_CITY_REQUESTED,
  LOCAL_CITY_SUCCEEDED,
  SET_ERROR,
  SET_MAIN_WEATHER,
  WEATHER_REQUESTED,
  WEATHER_SUCCEEDED,
} from '../actions/types';

const initialState = {
  localCity: {},
  mainWeather: {},
  weatherForecast: [],
  error: '',
  loadingWeather: true,
  loadingForecast: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOCAL_CITY_SUCCEEDED:
      return {
        ...state,
        localCity: action.payload,
        error: '',
      };
    case SET_MAIN_WEATHER:
    case WEATHER_SUCCEEDED:
      return {
        ...state,
        mainWeather: action.payload,
        loadingWeather: false,
        error: '',
      };
    case FORECAST_SUCCEEDED:
      return {
        ...state,
        weatherForecast: action.payload,
        loadingForecast: false,
        error: '',
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case FORECAST_REQUESTED:
      return {
        ...state,
        loadingForecast: true,
      };
    case WEATHER_REQUESTED:
      return {
        ...state,
        loadingWeather: true,
      };

    default:
      return state;
  }
}
