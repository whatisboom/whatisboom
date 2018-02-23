import React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { SideNavItem } from './side-nav-item';

let sidenavitem;

const item = {
  text: 'Test Side Nav Item',
  url: '/some/test'
};

beforeEach(() => {
  sidenavitem = mount(<MemoryRouter><SideNavItem item={item} /></MemoryRouter>);
});

describe('<SideNav /> Component', () => {
  it('is defined', () => {
    expect(sidenavitem).toBeDefined();
  });

  it('should render data properly', () => {
    expect(sidenavitem.find('li').length).toBe(1);
    expect(sidenavitem.find(Link).length).toBe(1);
    expect(sidenavitem.text()).toBe(item.text);
  });
});
