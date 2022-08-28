import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import weatherSaga from '../sagas/weatherSaga';

export const renderWithContext = (children, state) => {
  const sagaMiddleware = createSagaMiddleware();
  const mockStore = configureMockStore([sagaMiddleware]);
  const store = mockStore(state);
  sagaMiddleware.run(weatherSaga);
  const component = render(<Provider store={store}>{children}</Provider>);
  return { store, component };
};
