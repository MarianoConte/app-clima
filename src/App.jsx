import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getForecast, getLocalCity, getWeather } from './actions/weatherAction';
import Error from './components/Error';
import Select from './components/Select';
import Header from './components/Header';
import MainWeather from './components/MainWeather';
import WeatherList from './components/WeatherList';

function App() {
  const dispatch = useDispatch();

  const { weather } = useSelector((state) => state);
  const { localCity, error } = weather;

  useEffect(() => {
    dispatch(getLocalCity());
  }, []);

  useEffect(() => {
    if (Object.keys(localCity).length) {
      dispatch(getWeather(localCity));
      dispatch(getForecast(localCity));
    }
  }, [localCity]);
  return (
    <div className='App'>
      <Header />
      <main className='p-5 md:w-1/2 md:m-auto'>
        <Select />
        <MainWeather />
        {error && <Error error={error} />}
        <WeatherList />
      </main>
    </div>
  );
}

export default App;
