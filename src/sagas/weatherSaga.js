import {
  FORECAST_REQUESTED,
  FORECAST_SUCCEEDED,
  LOCAL_CITY_REQUESTED,
  LOCAL_CITY_SUCCEEDED,
  SET_ERROR,
  WEATHER_REQUESTED,
  WEATHER_SUCCEEDED,
} from '../actions/types';
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* getLocalCity() {
  try {
    const { data } = yield call(axios.get, 'http://ip-api.com/json');
    const { city, lat, lon } = data;
    yield put({
      type: LOCAL_CITY_SUCCEEDED,
      payload: { city, lat, lon },
    });
  } catch (error) {
    yield put({
      type: SET_ERROR,
      payload: 'Ocurrió un error al solicitar su ubicación',
    });
  }
}

function* getWeather(action) {
  const { lat, lon } = action.payload;
  try {
    const { data } = yield call(
      axios.get,
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );
    yield put({
      type: WEATHER_SUCCEEDED,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: SET_ERROR,
      payload: 'Ocurrió un error al solicitar el clima actual de esa ciudad',
    });
  }
}

function* getForecast(action) {
  const { lat, lon } = action.payload;
  try {
    const { data } = yield call(
      axios.get,
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );
    yield put({
      type: FORECAST_SUCCEEDED,
      payload: data.list,
    });
  } catch (error) {
    yield put({
      type: SET_ERROR,
      payload: 'Ocurrió un error al solicitar el pronóstico del clima',
    });
  }
}

function* weatherSaga() {
  yield takeEvery(LOCAL_CITY_REQUESTED, getLocalCity);
  yield takeEvery(WEATHER_REQUESTED, getWeather);
  yield takeEvery(FORECAST_REQUESTED, getForecast);
}

export default weatherSaga;
