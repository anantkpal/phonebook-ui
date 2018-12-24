import { RECEIVE_CONTACTS, REQUEST_CONTACTS } from './types';

const requestContacts = () => ({
  type: REQUEST_CONTACTS,
});

const receiveContacts = contacts => ({
  type: RECEIVE_CONTACTS,
  contacts,
});

const fetchContacts = () => (dispatch) => {
  dispatch(requestContacts());
  return fetch('http://www.mocky.io/v2/581335f71000004204abaf83')
    .then(response => response.json())
    .then(json => dispatch(receiveContacts(json.contacts)));
};


export {
  requestContacts,
  fetchContacts,
  receiveContacts,
};
