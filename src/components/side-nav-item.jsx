import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SideNavItem extends Component {
  static propTypes = {
    item: PropTypes.object
  }

  static defaultProps = {
    item: {}
  }

  render() {
    const {
      text,
      url
    } = this.props.item;
    return <div>{ text }: { url }</div>;
  }
}
