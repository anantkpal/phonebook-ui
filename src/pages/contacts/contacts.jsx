import React from 'react';
import { Column, Row } from '../../components/layout';
import ContactList from '../../containers/contact-list';
import SearchContact from '../../containers/search-contact';
import SortContacts from '../../containers/sort-contacts';

const ContactsPage = () => (
  <Column border="1px solid #61dafb" minHeight="300px" borderRadius="4px">
    <Row background="#61dafb" color="white" padding="10px" maxHeight="20px">
      Contacts
    </Row>
    <Row padding="5px 10px" align="center">
      <Row maxWidth="30px" padding="3px">
        <div>
        <SortContacts />
        </div>
      </Row>
      <SearchContact />
    </Row>
    <Row padding="10px">
      <ContactList />
    </Row>
  </Column>
);

export default ContactsPage;
