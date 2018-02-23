import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    return <li><Link to={ url }>{ text }</Link></li>;
  }
}

export default SideNavItem;
