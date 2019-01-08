import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  SET_CONTACTS, REQUEST_CONTACTS, SEARCH_CONTACTS, SORT_CONTACTS,
} from './types';
import {
  setContacts, requestContacts, fetchContacts, searchContacts, sortContacts,
} from './contacts';

describe('Contacts actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  afterEach(() => {
    fetchMock.restore();
  });

  it('should create action to request contacts', () => {
    const expectedAction = {
      type: REQUEST_CONTACTS,
    };
    expect(requestContacts()).toEqual(expectedAction);
  });

  it('should create action to receive contacts', () => {
    const contacts = [
      { phone_number: '+91 987654321' },
    ];
    const expectedAction = {
      type: SET_CONTACTS,
      contacts,
    };
    expect(setContacts(contacts)).toEqual(expectedAction);
  });

  it('should fetch contacts', () => {
    const contacts = [
      { phone_number: '+91 987654321' },
    ];
    fetchMock.getOnce(PHONEBOOK_API, {
      body: { contacts },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: REQUEST_CONTACTS },
      { type: SET_CONTACTS, contacts: [{ phone_number: '+91 987654321', show: true }] },
    ];
    const store = mockStore({ todos: [] });

    return store.dispatch(fetchContacts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should search contacts', () => {
    const contacts = [
      {
        name: 'Smple',
        address: 'addrs',
        phone_number: '+91 987654321',
      },
    ];

    const expectedActions = [
      { type: SEARCH_CONTACTS, searchText: '9876' },
      { type: SET_CONTACTS, contacts: [{ ...contacts[0], show: true }] },
    ];
    const store = mockStore({ contacts: { items: contacts } });

    store.dispatch(searchContacts('9876'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should search contacts with address match', () => {
    const contacts = [
      {
        name: 'Smple',
        address: 'addrs',
        phone_number: '+91 987654321',
      },
    ];

    const expectedActions = [
      { type: SEARCH_CONTACTS, searchText: 'addrs' },
      { type: SET_CONTACTS, contacts: [{ ...contacts[0], show: true }] },
    ];
    const store = mockStore({ contacts: { items: contacts } });

    store.dispatch(searchContacts('addrs'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should sort contacts with name', () => {
    const contacts = [
      {
        name: 'Smple',
        address: 'addrs',
        phone_number: '+91 987654321',
      },
      {
        name: 'Ample',
        address: 'addrs',
        phone_number: '+91 987654321',
      },
    ];

    const expectedActions = [
      { type: SORT_CONTACTS, sortBy: 'name' },
      { type: SET_CONTACTS, contacts: [contacts[1], contacts[0]] },
    ];
    const store = mockStore({ contacts: { items: contacts } });

    store.dispatch(sortContacts('name'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should sort contacts with name reverse', () => {
    const contacts = [
      {
        name: 'Ample',
        address: 'addrs',
        phone_number: '+91 987654321',
      },
      {
        name: 'Smple',
        address: 'addrs',
        phone_number: '+91 987654321',
      },
    ];

    const expectedActions = [
      { type: SORT_CONTACTS, sortBy: '-name' },
      { type: SET_CONTACTS, contacts: [contacts[1], contacts[0]] },
    ];
    const store = mockStore({ contacts: { items: contacts } });

    store.dispatch(sortContacts('-name'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
