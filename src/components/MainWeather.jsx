import React from 'react';
import { useSelector } from 'react-redux';
import { capitalizeFirstLetter, getParsedDate } from '../utils';
import Spinner from './Spinner';

const MainWeather = () => {
  const { loadingWeather, mainWeather } = useSelector((state) => state.weather);

  if (loadingWeather) return <Spinner />;

  const { feels_like, temp, temp_min, temp_max, humidity } = mainWeather.main;
  const { description, icon } = mainWeather.weather[0];

  const date = mainWeather.dt_txt
    ? getParsedDate(new Date(mainWeather.dt_txt.replace(/-/g, '/')))
    : getParsedDate();

  return (
    <section className='flex justify-between align-middle'>
      <div className='flex items-center'>
        <img
          className='h-16 w-16'
          src={`/assets/icons/${icon}-cropped.svg`}
          alt={description}
        />
        <p className='text-6xl text-black mx-3'>
          {Math.round(temp)}
          <span className='text-lg align-super'>°C</span>
        </p>
      </div>

      <div className='text-lg text-right'>
        <p>
          {Math.round(temp_max)}° / {Math.round(temp_min)}°
        </p>
        <p>Sensación térmica {Math.round(feels_like)}°C</p>
        <p>{date}</p>
        <p>{capitalizeFirstLetter(description)}</p>
      </div>
    </section>
  );
};

export default MainWeather;
