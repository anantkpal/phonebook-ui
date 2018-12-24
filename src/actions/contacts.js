import { map, set, includes } from 'lodash';
import { SET_CONTACTS, REQUEST_CONTACTS, SEARCH_CONTACTS } from './types';

const requestContacts = () => ({
  type: REQUEST_CONTACTS,
});

const setContacts = contacts => ({
  type: SET_CONTACTS,
  contacts,
});

const setSearchText = searchText => ({
  type: SEARCH_CONTACTS,
  searchText,
});

const fetchContacts = () => (dispatch) => {
  dispatch(requestContacts());
  return fetch('http://www.mocky.io/v2/581335f71000004204abaf83')
    .then(response => response.json())
    .then(json => dispatch(setContacts(map(json.contacts, o => set(o, 'show', true)))));
};

const doesContactMatch = (contact, searchText) => includes(contact.name.toLowerCase(), searchText)
  || includes(contact.phone_number.toLowerCase(), searchText)
  || includes(contact.address.toLowerCase(), searchText);

const searchContacts = searchText => (dispatch, getState) => {
  dispatch(setSearchText(searchText));
  const { items } = getState().contacts;
  const contacts = map(items, o => set(o, 'show', doesContactMatch(o, searchText.toLowerCase())));
  return dispatch(setContacts(contacts));
};

export {
  searchContacts,
  requestContacts,
  fetchContacts,
  setContacts,
};
