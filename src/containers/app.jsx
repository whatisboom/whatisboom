import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  Route
} from 'react-router-dom';

import store from 'store';

import {
  Blog,
  Home
} from 'containers';

import {
  SideNav
} from 'components';

export class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="page-wrapper">
          <SideNav />
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
        </div>
      </Provider>
    );
  }
}

export default App;
