import {
  combineReducers,
  createStore
} from 'redux';

import * as reducers from './reducers';

export const initialState = {
  data: [],
  nav: [
    {
      text: 'Home',
      url: '/'
    }, {
      text: 'Blog',
      url: '/blog'
    }
  ]
};

export const store = createStore(combineReducers(reducers), initialState);

export default store;
