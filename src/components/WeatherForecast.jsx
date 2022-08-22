import React from 'react';
import { useSelector } from 'react-redux';
import Weather from './Weather';

const WeatherForeCast = () => {
  const { weatherForecast } = useSelector((state) => state.weather);

  return (
    <section className='bg-sky-100 mt-5 p-2 rounded-md'>
      {weatherForecast.map((weather, index) => (
        <Weather weather={weather} key={weather.dt} />
      ))}
    </section>
  );
};

export default WeatherForeCast;
