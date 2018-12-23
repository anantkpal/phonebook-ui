import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('App', () => {
  it('should render app contents', () => {
    const component = shallow(<App />);
    expect(component.contains('Phonebook')).toEqual(true);
  });
});
