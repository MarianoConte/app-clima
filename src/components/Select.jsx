import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getForecast, getWeather } from '../actions/weatherAction';

const Select = () => {
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
    <div className='w-full pt-2 flex'>
      <select
        data-testid='select'
        className='text-xl border rounded'
        onChange={handleChange}
      >
        {cities.map((city, index) => (
          <option key={city.city} value={index}>
            {city.city} {index === 0 ? '📌' : ''}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
