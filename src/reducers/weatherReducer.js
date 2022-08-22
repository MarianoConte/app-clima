import {
  FORECAST_SUCCEEDED,
  LOCAL_CITY_SUCCEEDED,
  SET_ERROR,
  WEATHER_SUCCEEDED,
} from '../actions/types';

const initialState = {
  localCity: {},
  mainWeather: {},
  weatherForecast: [],
  error: '',
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOCAL_CITY_SUCCEEDED:
      return {
        ...state,
        localCity: action.payload,
        error: '',
      };
    case WEATHER_SUCCEEDED:
      return {
        ...state,
        mainWeather: action.payload,
        error: '',
      };
    case FORECAST_SUCCEEDED:
      return {
        ...state,
        weatherForecast: action.payload,
        error: '',
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
