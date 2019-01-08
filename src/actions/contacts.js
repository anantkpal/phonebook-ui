import {
  map, set, includes, orderBy,
} from 'lodash';
import {
  SET_CONTACTS, REQUEST_CONTACTS, SEARCH_CONTACTS, SORT_CONTACTS,
} from './types';

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

const setSortBy = sortBy => ({
  type: SORT_CONTACTS,
  sortBy,
});

const fetchContacts = () => (dispatch) => {
  dispatch(requestContacts());
  return fetch(PHONEBOOK_API)
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

const sortContacts = sortBy => (dispatch, getState) => {
  dispatch(setSortBy(sortBy));
  const { items } = getState().contacts;
  const contacts = orderBy(items, [sortBy.replace('-', '')], [sortBy.indexOf('-') === 0 ? 'desc' : 'asc']);
  return dispatch(setContacts(contacts));
};

export {
  sortContacts,
  searchContacts,
  requestContacts,
  fetchContacts,
  setContacts,
};
