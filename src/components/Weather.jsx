import React from 'react';

const Weather = ({ weather }) => {
  console.log(weather);
  const { temp_min, temp_max, humidity } = weather.main;
  const { icon } = weather.weather[0];
  const { dt_txt } = weather;

  return (
    <div className='flex justify-between p-2 font-bold text-lg hover:bg-sky-50 hover:cursor-pointer'>
      <div className='flex justify-between w-full'>
        <p>{dt_txt}</p>
        <p> {humidity}%</p>
        <img src={`/assets/icons/${icon}-cropped.svg`} className='h-8 w-8' />
        <p>{temp_max}°</p>
        <p>{temp_min}°</p>
      </div>
    </div>
  );
};

export default Weather;
