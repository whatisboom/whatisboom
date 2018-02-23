import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SideNavItem extends Component {
  static propTypes = {
    item: PropTypes.object
  }

  static defaultProps = {
    item: {
      text: '',
      url: ''
    }
  }

  render() {
    const {
      text,
      url
    } = this.props.item;
    return <li><a href={ url }>{ text } </a></li>;
  }
}

export default SideNavItem;
