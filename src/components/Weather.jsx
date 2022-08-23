import React from 'react';
import { getParsedDate } from '../utils';
import { useDispatch } from 'react-redux';
import { setMainWeather } from '../actions/weatherAction';

const Weather = ({ weather }) => {
  console.log(weather.main);
  const { temp_min, temp_max, humidity } = weather.main;
  const { icon } = weather.weather[0];
  const date = new Date(weather.dt_txt);
  const day = getParsedDate(date);

  const dispatch = useDispatch();

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    dispatch(setMainWeather(weather));
  };

  return (
    <div
      className='grid grid-cols-5 w-full p-2 text-lg hover:bg-sky-50 hover:cursor-pointer rounded '
      onClick={handleClick}
    >
      <p className='text-left'>{day} </p>
      <div className='flex justify-center'>
        <img
          src='/assets/icons/water-drop.svg'
          alt='water-drop'
          className='h-6 w-6 mr-2'
        />
        <p className='text-center'> {humidity}%</p>
      </div>

      <img
        src={`/assets/icons/${icon}-cropped.svg`}
        alt={icon}
        className='h-8 w-8 m-auto '
      />
      <p className='text-center'>{Math.round(temp_max)}°</p>
      <p className='text-center text-gray-500'>{Math.round(temp_min)}°</p>
    </div>
  );
};

export default Weather;
