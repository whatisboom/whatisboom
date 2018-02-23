import React from 'react';
import { shallow } from 'enzyme';
import Heading from './heading';

let heading;

beforeEach(() => {
  heading = shallow(<Heading>Test</Heading>);
});

describe('<Heading /> Component', () => {
  it('should be defined', () => {
    expect(heading).toBeDefined();
  });
  it('should render a single h1', () => {
    expect(heading.find('h1').length).toBe(1);
  });
  it('should display the correct text', () => {
    expect(heading.text()).toBe('Test');
  });
});
