import React from 'react';
import { shallow } from 'enzyme';
import Home from './home';

let home;

beforeEach(() => {
  home = shallow(<Home />);
});

describe('<Home /> Container', () => {
  it('should be defined', () => {
    expect(home).toBeDefined();
  })
  it('renders a <div class="home">', () => {
    expect(home.find('div.home').length).toEqual(1);
  });
});
