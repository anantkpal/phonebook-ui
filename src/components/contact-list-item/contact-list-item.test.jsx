import React from 'react';
import { shallow } from 'enzyme';
import Avatar from 'react-toolbox/lib/avatar';
import { Row } from '../layout';
import ContactListItem from './contact-list-item';

describe('ContactListItem', () => {
  const contact = {
    name: 'Oleta Level',
    phone_number: '+442032960159',
    address: '10 London Wall, London EC2M 6SA, UK',
  };

  it('should render contact details', () => {
    const contactListItemComponent = shallow(<ContactListItem contact={contact} />);
    expect(contactListItemComponent.find(Row).at(2)
      .text()).toEqual(contact.name);
    expect(contactListItemComponent.find('a').text()).toEqual(contact.phone_number);
    expect(contactListItemComponent.find('a').prop('href')).toEqual(`tel:${contact.phone_number}`);
    expect(contactListItemComponent.find(Row).at(4).contains(contact.address)).toEqual(true);
    expect(contactListItemComponent.find(Avatar).prop('title')).toEqual(contact.name);
  });
});
