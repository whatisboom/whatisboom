import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
