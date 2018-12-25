import React from 'react';
import { shallow } from 'enzyme';
import ContactsPage from './contacts';
import { Column, Row } from '../../components/layout';
import ContactList from '../../containers/contact-list';
import SearchContact from '../../containers/search-contact';
import SortContacts from '../../containers/sort-contacts';

describe('Contacts page', () => {
  it('should render all the elements', () => {
    const component = shallow(<ContactsPage />);
    expect(component.find(Row)).toHaveLength(4);
    expect(component.find(Column)).toHaveLength(1);
    expect(component.find(ContactList).exists()).toEqual(true);
    expect(component.find(SearchContact).exists()).toEqual(true);
    expect(component.find(SortContacts).exists()).toEqual(true);
  });
});
