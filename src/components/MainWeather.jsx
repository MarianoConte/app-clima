import React from 'react';
import { useSelector } from 'react-redux';
import { capitalizeFirstLetter, getFormattedDate } from '../utils';

const MainWeather = () => {
  const { weather } = useSelector((state) => state);

  //Usar loading true, loading false, etc
  if (!Object.keys(weather.mainWeather).length) return <div>Cargando...</div>;

  const { feels_like, temp, temp_min, temp_max, humidity } =
    weather.mainWeather.main;
  const { description, icon } = weather.mainWeather.weather[0];
  const currentDate = getFormattedDate();

  return (
    <section className='flex justify-between align-middle'>
      <div className='flex items-center'>
        <img
          className='h-16 w-16'
          src={`/assets/icons/${icon}-cropped.svg`}
          alt='soleado'
        />
        <p className='text-6xl text-black mx-3'>
          {Math.round(temp)}
          <span className='text-lg align-super'>°C</span>
        </p>
      </div>

      <div className='text-lg'>
        <p>
          {Math.round(temp_max)}° / {Math.round(temp_min)}°
        </p>
        <p>Sensación térmica {Math.round(feels_like)}°C</p>
        <p>{currentDate}</p>
        <p>{capitalizeFirstLetter(description)}</p>
      </div>
    </section>
  );
};

export default MainWeather;
