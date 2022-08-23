import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';
import Weather from './Weather';

const WeatherForeCast = () => {
  const { weatherForecast, loadingForecast } = useSelector(
    (state) => state.weather
  );

  return (
    <section className='bg-sky-100 mt-5 p-2 rounded-md'>
      {loadingForecast ? (
        <Spinner />
      ) : (
        weatherForecast.map((weather) => (
          <Weather weather={weather} key={weather.dt} />
        ))
      )}
    </section>
  );
};

export default WeatherForeCast;
