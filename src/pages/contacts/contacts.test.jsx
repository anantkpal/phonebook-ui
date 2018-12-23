import React from 'react';
import { shallow } from 'enzyme';
import ContactsPage from './contacts';
import { Column, Row } from '../../components/layout';

describe('Contacts page', () => {
  it('should render all the elements', () => {
    const component = shallow(<ContactsPage />);
    expect(component.find(Row)).toHaveLength(2);
    expect(component.find(Column)).toHaveLength(1);
  });
});
