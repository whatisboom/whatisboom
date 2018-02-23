import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  SideNavItem
} from 'components';

export class SideNav extends Component {

  expandTimeout = 500;

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
  }

  static defaultProps = {
    items: []
  }

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    const navItems = this.getNavItems(this.props.items);

    return (
      <nav
        className={this.getClassName()}
        onMouseEnter={this.handleMouseEnter.bind(this)}
      >
        <ul>{navItems}</ul>
      </nav>
    );
  }

  getClassName() {
    return this.state.expanded ? 'side-nav expanded' : 'side-nav';
  }

  getNavItems(data = []) {
    return data.map((item, i) => {
      return <SideNavItem key={i} item={item} />;
    });
  }

  handleMouseEnter() {
    this.mouseOverTimer = setTimeout(this.toggleExpanded.bind(this), this.expandTimeout);
  }

  handleMouseExit() {
    if (this.state.expanded) {
      this.toggleExpanded();
    }
    clearTimeout(this.mouseOverTimer);
    delete this.mouseOverTimer;
  }

  setExpanded(expanded, cb = () => {}) {
    this.setState(() => ({
      expanded
    }), cb);
  }

  toggleExpanded() {
    this.setExpanded(!this.state.expanded)
  }

}

export function mapStateToProps(state) {
  return {
    items: state.nav
  };
}

export default connect(mapStateToProps)(SideNav);
