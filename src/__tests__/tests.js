import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from 'react-testing-library';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from '../components/App';
import reducers from '../reducers';

const store = createStore(reducers, applyMiddleware(thunk));

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});

it('renders geolocation loader with loading text', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getByTestId('loading-location')).toBeTruthy();
});

it('does not render weather data before API response', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getByTestId('weather-info-null')).toBeTruthy();
});
