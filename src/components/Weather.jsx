import React from 'react';
import { getDayName, getParsedDate } from '../utils';
import { useDispatch } from 'react-redux';
import { setMainWeather } from '../actions/weatherAction';

const Weather = ({ weather }) => {
  const { temp_min, temp_max, humidity } = weather.main;
  const { icon } = weather.weather[0];
  const date = new Date(weather.dt_txt);
  const day = getParsedDate(date);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setMainWeather(weather));
  };

  return (
    <div
      className='grid grid-cols-5 w-full p-2 text-lg hover:bg-sky-50 hover:cursor-pointer rounded '
      onClick={handleClick}
    >
      <p className='text-left'>{day} </p>
      <p className='text-center'> {humidity}%</p>
      <img
        src={`/assets/icons/${icon}-cropped.svg`}
        className='h-8 w-8 m-auto'
      />
      <p className='text-center'>{Math.round(temp_max)}°</p>
      <p className='text-center'>{Math.round(temp_min)}°</p>
    </div>
  );
};

export default Weather;
