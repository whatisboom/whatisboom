import React from 'react';
import { mount } from 'enzyme';
import { SideNavItem } from './side-nav-item';

let sidenavitem;

beforeEach(() => {
  sidenavitem = mount(<SideNavItem />);
});

describe('<SideNav /> Component', () => {
  it('is defined', () => {
    expect(sidenavitem).toBeDefined();
  });
});
