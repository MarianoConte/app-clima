import React from 'react';
import { getParsedDate } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { setMainWeather } from '../actions/weatherAction';

const Weather = ({ weather }) => {
  //Extraigo datos del pronóstico pasado por props
  const { temp_min, temp_max, humidity } = weather.main;
  const { icon, description } = weather.weather[0];
  //Parseo la fecha de esta forma para que no tenga problemas en ios/macos
  const date = new Date(weather.dt_txt.replace(/-/g, '/'));
  const day = getParsedDate(date);

  const dispatch = useDispatch();

  //Extraigo el pronóstico actual de la store para ver si es el mismo que el seleccionado
  const { mainWeather } = useSelector((state) => state.weather);
  const { dt } = mainWeather;

  //Paso el pronóstico seleccionado a la store para que se muestre en el MainWeather
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    dispatch(setMainWeather(weather));
  };

  return (
    <div
      data-testid='weather'
      className={`grid grid-cols-5 w-full p-2 text-lg ${
        weather.dt === dt
          ? 'bg-sky-200'
          : 'hover:bg-sky-50 hover:cursor-pointer'
      } rounded `}
      onClick={handleClick}
    >
      <p className='text-center'>{day} </p>
      <p className='text-center'> {humidity}%</p>
      <img
        src={`/assets/icons/${icon}-cropped.svg`}
        alt={description}
        className='h-8 w-8 m-auto '
      />
      <p className='text-center'>{Math.round(temp_max)}°</p>
      <p className='text-center text-gray-500'>{Math.round(temp_min)}°</p>
    </div>
  );
};

export default Weather;
