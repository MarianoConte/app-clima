import React from 'react';
import Spinner from './Spinner';
import { useSelector } from 'react-redux';
import { capitalizeFirstLetter, getParsedDate } from '../utils';

const MainWeather = () => {
  const { loadingWeather, mainWeather } = useSelector((state) => state.weather);

  if (loadingWeather) return <Spinner />;

  //Extraigo datos del pronóstico local o seleccionado
  const { feels_like, temp, temp_min, temp_max, humidity } = mainWeather.main;
  const { description, icon } = mainWeather.weather[0];

  //Parseo la fecha
  const date = mainWeather.dt_txt
    ? getParsedDate(new Date(mainWeather.dt_txt.replace(/-/g, '/')))
    : getParsedDate();

  return (
    <section
      data-testid='main-weather'
      className='flex justify-between align-middle'
    >
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
        <p>Humedad {humidity}%</p>
        <p>{capitalizeFirstLetter(description)}</p>
        <p>{date}</p>
      </div>
    </section>
  );
};

export default MainWeather;
