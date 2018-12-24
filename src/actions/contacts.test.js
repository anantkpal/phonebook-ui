import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { RECEIVE_CONTACTS, REQUEST_CONTACTS } from './types';
import { receiveContacts, requestContacts, fetchContacts } from './contacts';

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
      type: RECEIVE_CONTACTS,
      contacts,
    };
    expect(receiveContacts(contacts)).toEqual(expectedAction);
  });

  it('should fetch contacts', () => {
    const contacts = [
      { phone_number: '+91 987654321' },
    ];
    fetchMock.getOnce('http://www.mocky.io/v2/581335f71000004204abaf83 ', {
      body: { contacts },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: REQUEST_CONTACTS },
      { type: RECEIVE_CONTACTS, contacts },
    ];
    const store = mockStore({ todos: [] });

    return store.dispatch(fetchContacts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
