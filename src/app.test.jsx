import React from 'react';
import { shallow } from 'enzyme';
import App from './app';
import ContactsPage from './pages/contacts';

describe('App', () => {
  it('should render app contents', () => {
    const component = shallow(<App />);
    expect(component.find(ContactsPage).exists()).toEqual(true);
  });
});
