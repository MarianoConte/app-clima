import React from 'react';
import Select from '../../components/Select';
import { renderWithContext } from '../../__mocks__/ProviderMock';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import localCity from '../../__mocks__/localCityData';
import userEvent from '@testing-library/user-event';
import * as actions from '../../actions/weatherAction';
import axios from 'axios';

const mockAxios = axios;
describe('<Select />', () => {
  test('should render "Cargando..."', () => {
    renderWithContext(<Select />, {
      weather: {
        localCity: {},
      },
    });

    expect(screen.getByText('Cargando...')).toBeInTheDocument();
    expect(screen.queryByTestId('select')).toBeNull();
  });

  test('should render the select', async () => {
    const getForecast = jest.spyOn(actions, 'getForecast');
    const getWeather = jest.spyOn(actions, 'getWeather');
    mockAxios.get = jest.fn();

    renderWithContext(<Select />, {
      weather: {
        localCity: localCity,
      },
    });

    const select = screen.getByTestId('select');

    expect(select).toBeInTheDocument();
    expect(screen.queryByText('Cargando...')).toBeNull();
    expect(
      screen.getByText(localCity.city + ' 📌', { exact: false }).value
    ).toBe('0');
    expect(select.children.length).toBe(6);

    await userEvent.selectOptions(select, '1');
    expect(getWeather).toHaveBeenCalled();
    expect(getWeather).toHaveBeenCalledTimes(1);
    expect(getForecast).toHaveBeenCalled();
    expect(getForecast).toHaveBeenCalledTimes(1);
  });
});
