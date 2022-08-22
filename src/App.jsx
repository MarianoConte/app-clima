import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getForecast, getLocalCity, getWeather } from './actions/weatherAction';
import Form from './components/Form';
import Header from './components/Header';
import MainWeather from './components/MainWeather';
import WeatherForeCast from './components/WeatherForecast';

function App() {
  const dispatch = useDispatch();

  const { weather } = useSelector((state) => state);
  const { localCity } = weather;

  useEffect(() => {
    dispatch(getLocalCity());
  }, []);

  useEffect(() => {
    if (Object.keys(localCity).length) {
      dispatch(getWeather(localCity));
      dispatch(getForecast(localCity));
    }
  }, [localCity]);
  return (
    <div className='App'>
      <Header />
      <main className='p-5 md:w-1/2 md:m-auto'>
        <Form />
        <MainWeather />
        <WeatherForeCast />
      </main>
    </div>
  );
}

export default App;
