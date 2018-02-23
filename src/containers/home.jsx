import React, { Component } from 'react';

import {
  Heading,
  SideNav
} from 'components';

export default class Home extends Component {

  render() {
    return (
      <div className="home">
        <SideNav />
        <Heading>Test</Heading>
      </div>
    );
  }

}
