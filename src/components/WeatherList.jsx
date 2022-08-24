import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';
import Weather from './Weather';

const WeatherList = () => {
  const { weatherForecast, loadingForecast } = useSelector(
    (state) => state.weather
  );

  return (
    <section className='bg-sky-100 mt-5 rounded-md'>
      {loadingForecast ? (
        <Spinner />
      ) : (
        <>
          <div
            className={`grid grid-cols-5 w-full p-2 text-2xl font-bold bg-slate-300 rounded`}
          >
            <p className='text-center'>📅</p>
            <p className='text-center'>💧</p>
            <p className='text-center'>🌦️</p>
            <p className='text-center'>🌡️</p>
            <p className='text-center'>❄️</p>
          </div>
          {weatherForecast.map((weather) => (
            <Weather weather={weather} key={weather.dt} />
          ))}
        </>
      )}
    </section>
  );
};

export default WeatherList;
