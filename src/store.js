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
      text: 'GitHub',
      url: 'https://github.com/whatisboom'
    }
  ]
};

export const store = createStore(combineReducers(reducers), initialState);

export default store;
