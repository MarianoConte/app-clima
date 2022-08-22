import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getForecast, getWeather } from '../actions/weatherAction';

const Form = () => {
  const { localCity } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  if (!Object.keys(localCity).length) return <div>Cargando...</div>;

  const cities = [
    localCity,
    { city: 'Lima', lat: -12.04, lon: -77.02 },
    { city: 'Montevideo', lat: -34.9, lon: -56.18 },
    { city: 'Brasilia', lat: -15.78, lon: -47.92 },
    { city: 'Santiago', lat: -33.45, lon: -70.66 },
    { city: 'Bogotá', lat: 4.71, lon: -74.07 },
  ];

  const handleChange = (e) => {
    const city = cities[e.target.value];
    dispatch(getWeather(city));
    dispatch(getForecast(city));
  };

  return (
    <form className='w-full pt-2 flex'>
      <select
        className='text-xl w-1/2 md:w-1/3 border rounded'
        onChange={handleChange}
      >
        {cities.map((city, index) => (
          <option key={city.city} value={index}>
            {city.city} {index === 0 ? '📌' : ''}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Form;
