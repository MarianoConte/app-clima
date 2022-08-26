import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import * as redux from 'react-redux';
import * as actions from '../actions/weatherAction';
import '@testing-library/jest-dom/extend-expect';
import createMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

//jest.mock('react-redux', () => ({
//  useSelector: jest.fn(),
//  useDispatch: jest.fn(),
//}));
//
//describe('<App/>', () => {
//  beforeEach(() => {
//    useDispatchMock.mockImplementation(() => () => {});
//    useSelectorMock.mockImplementation((selector) => selector(mockStore));
//  });
//  afterEach(() => {
//    useDispatchMock.mockClear();
//    useSelectorMock.mockClear();
//  });
//
//  const useSelectorMock = redux.useSelector;
//  const useDispatchMock = redux.useDispatch;
//
//  const localCity = { city: 'Buenos Aires', lat: -34.6, lon: -58.4 }
//
//  const getLocalCity = jest.spyOn(actions, 'getLocalCity');
//
//  const mockStore = {
//    weather: {
//      localCity: {},
//      mainWeather: {},
//      weatherForecast: [],
//      error: '',
//      loadingWeather: true,
//      loadingForecast: true,
//    },
//  };
//  test('should render', () => {
//    //app.debug();
//    render(<App />);
//    expect(screen.getByText('Clima app')).toBeInTheDocument();
//    expect(screen.getByText('Cargando...')).toBeInTheDocument();
//    //Test use effect
//    expect(getLocalCity).toHaveBeenCalled();
//    expect(getLocalCity).toHaveBeenCalledTimes(1);
//
//    useDispatchMock.mockReturnValue(getLocalCity())
//
//
//  });
//});

const mockStore = createMockStore([]);

describe('<App/>', () => {
  test('should render app with loading', () => {
    const state = {
      weather: {
        localCity: {},
        mainWeather: {},
        weatherForecast: [],
        error: '',
        loadingWeather: true,
        loadingForecast: true,
      },
    };
    const store = mockStore(state);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText('Clima app')).toBeInTheDocument();
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
    expect(screen.getAllByTestId('spinner')).toHaveLength(2);
    expect(store.getActions()).toEqual([{ type: 'LOCAL_CITY_REQUESTED' }]);
  });

  test('should render app', () => {
    const state = {
      weather: {
        localCity: { city: 'Buenos Aires', lat: -34.6, lon: -58.4 },
        mainWeather: {},
        weatherForecast: [],
        error: '',
        loadingWeather: true,
        loadingForecast: true,
      },
    };
    const store = mockStore(state);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const select = screen.getByTestId('select');
    expect(select.children.length).toEqual(6);
    expect(store.getActions());
  });
});
