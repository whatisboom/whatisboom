import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { SideNav, mapStateToProps } from './side-nav';
import { SideNavItem } from './side-nav-item';

let sidenav, withRouter;

beforeEach(() => {
  withRouter = mount(<MemoryRouter><SideNav /></MemoryRouter>);
  sidenav = withRouter.find(SideNav);
});

describe('<SideNav /> Component', () => {
  it('renders a wrapping div', () => {
    expect(sidenav.find('nav.side-nav').length).toEqual(1);
  });

  describe('getClassName', () => {
    it('should be defined', () => {
      expect(sidenav.instance().getClassName).toBeDefined();
    });
    it('should return a string', () => {
      const cmp = sidenav.instance();
      expect(typeof cmp.getClassName()).toBe('string');
    });
    it('should return "side-nav" when not expanded', () => {
      const cmp = sidenav.instance();
      expect(cmp.getClassName()).toBe('side-nav');
    });
    it('should return "side-nav expanded" when expanded', () => {
      const cmp = sidenav.instance();
      cmp.state.expanded = true;
      expect(cmp.getClassName()).toBe('side-nav expanded');
    });
  });

  describe('getNavItems', () => {
    it('should be defined', () => {
      expect(sidenav.instance().getNavItems).toBeDefined();
    });
    it('should return an empty array with no arguments', () => {
      expect(sidenav.instance().getNavItems()).toEqual([]);
    });
    it('should return an array of SideNavItems when passed an array of objects', () => {
      const data = [{
        text: 'Test',
        url: '/test'
      }];
      expect(sidenav.instance().getNavItems(data).length).toEqual(1);
      expect(sidenav.instance().getNavItems(data)).toEqual([
        <SideNavItem key={0} item={ data[0]} />
      ]);
    });
  });

  describe('toggleExpanded', () => {
    it('should be defined', () => {
      expect(sidenav.instance().toggleExpanded).toBeDefined();
    });
    it('should toggle expanded property', () => {
      const cmp = sidenav.instance();
      expect(cmp.state.expanded).toBe(false);
      cmp.toggleExpanded();
      expect(cmp.state.expanded).toBe(true);
      cmp.toggleExpanded();
      expect(cmp.state.expanded).toBe(false);
    })
  });

  describe('handleMouseEnter', () => {
    it('should be defined', () => {
      expect(sidenav.instance().handleMouseEnter).toBeDefined();
    });
    it('should set mouseOverTimer property', () => {
      const cmp = sidenav.instance();
      expect(cmp.state.expanded).toBe(false);
      expect(cmp.mouseOverTimer).toBeUndefined();
      cmp.handleMouseEnter();
      expect(cmp.mouseOverTimer).toBeDefined();
    });
  });

  describe('handleMouseExit', () => {
    it('should be defined', () => {
      expect(sidenav.instance().handleMouseExit).toBeDefined();
    });
    it('should clear mouseOverTimer property', () => {
      const cmp = sidenav.instance();
      expect(cmp.mouseOverTimer).toBeUndefined();
      cmp.handleMouseEnter();
      expect(cmp.mouseOverTimer).toBeDefined();
      cmp.handleMouseExit();
      expect(cmp.mouseOverTimer).toBeUndefined();
    });
    it('should call toggleExpanded', () => {
      const cmp = sidenav.instance();
      const spy = jest.spyOn(cmp, 'toggleExpanded');
      cmp.handleMouseExit();
      expect(spy).toHaveBeenCalled();
    });
  });
});

describe('SideNav mapStateToProps', () => {
  it('should return the nav prop from state', () => {
    const data = [{
      text: 'Testing mapStateToProps',
      url: '/test'
    }];
    expect(mapStateToProps({
      nav: data
    })).toEqual({
      items: data
    });
  });
});
