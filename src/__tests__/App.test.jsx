import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);

describe('<App/>', () => {
  let store;
  let app;

  beforeEach(() => {
    store = mockStore({
      weather: {
        localCity: {},
        mainWeather: {},
        weatherForecast: [],
        error: '',
        loadingWeather: true,
        loadingForecast: true,
      },
    });

    app = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const getLocalCity = jest
      .fn()
      .mockResolvedValue({ city: 'Buenos Aires', lat: -34.6, lon: -58.4 });
  });
  test('should render', () => {
    //app.debug();
    expect(screen.getByText('Clima app')).toBeInTheDocument();
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });
  test('', () => {
    app.debug();
  });
});
