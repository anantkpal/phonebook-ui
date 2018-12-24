import React from 'react';
import sinon from 'sinon';
import { map, set } from 'lodash';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ContactList from './contact-list';
import ContactListContainer from '.';
import ContactListItem from '../../components/contact-list-item';

const contacts = [
  {
    name: 'Oleta Level',
    phone_number: '+442032960159',
    address: '10 London Wall, London EC2M 6SA, UK',
  },
  {
    name: 'Maida Harju',
    phone_number: '+442032960899',
    address: 'Woodside House, 94 Tockholes Rd, Darwen BB3 1LL, UK',
  },
];

describe('ContactList', () => {
  const fetchContacts = sinon.spy();

  it('should render in loading state', () => {
    const contactListComponent = shallow(<ContactList fetchContacts={fetchContacts} loading />);
    expect(contactListComponent.contains('Loading...')).toEqual(true);
    expect(contactListComponent.find(ContactListItem).exists()).toEqual(false);
    expect(fetchContacts.calledOnce).toEqual(true);
  });

  it('should render with contact data', () => {
    const contactListComponent = shallow(<ContactList
      fetchContacts={fetchContacts}
      contacts={contacts}
    />);
    expect(contactListComponent.contains('Loading...')).toEqual(false);
    expect(contactListComponent.find(ContactListItem).exists()).toEqual(true);
    expect(contactListComponent.find(ContactListItem).at(0).prop('contact')).toEqual(contacts[0]);
    expect(contactListComponent.find(ContactListItem).at(1).prop('contact')).toEqual(contacts[1]);
  });
});


describe('ContactList container', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  it('should render in loading state', () => {
    const store = mockStore({ contacts: { loading: true, items: [] } });
    const container = mount(<Provider store={store}><ContactListContainer /></Provider>);
    expect(container.find(ContactList).prop('loading')).toEqual(true);
  });

  it('should render in data state', () => {
    const store = mockStore({ contacts: { loading: false, items: map(contacts, o => set(o, 'show', true)) } });
    const container = mount(<Provider store={store}><ContactListContainer /></Provider>);
    expect(container.find(ContactList).prop('contacts')).toEqual(contacts);
    expect(container.find(ContactList).prop('loading')).toEqual(false);
  });

  it('should render in data state with uninitialized items', () => {
    const store = mockStore({ contacts: { loading: false } });
    const container = mount(<Provider store={store}><ContactListContainer /></Provider>);
    expect(container.find(ContactList).prop('contacts')).toEqual([]);
    expect(container.find(ContactList).prop('loading')).toEqual(false);
  });
});
