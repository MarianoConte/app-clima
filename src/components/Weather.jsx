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
      className='flex justify-between p-2 font-bold text-lg hover:bg-sky-50 hover:cursor-pointer'
      onClick={handleClick}
    >
      <div className='flex justify-between w-full'>
        <p>{day} </p>
        <p> {humidity}%</p>
        <img src={`/assets/icons/${icon}-cropped.svg`} className='h-8 w-8' />
        <p>{Math.round(temp_max)}°</p>
        <p>{Math.round(temp_min)}°</p>
      </div>
    </div>
  );
};

export default Weather;
