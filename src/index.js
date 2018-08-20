import './styles.css'

import App from 'components/app'
import React from 'react'
import { render } from 'react-dom'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import createMemoizeMiddleware from 'redux-memoize';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(createMemoizeMiddleware({ ttl: 200 }), thunk),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('new-app')
);
