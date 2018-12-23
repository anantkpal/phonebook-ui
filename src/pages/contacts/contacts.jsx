import React from 'react';
import { Column, Row } from '../../components/layout';

const ContactsPage = () => (
  <Column maxWidth="500px" border="1px solid #61dafb" minHeight="400px" borderRadius="4px">
    <Row background="#61dafb" color="white" padding="10px">
      Contacts Header
    </Row>
    <Row padding="10px">
      Contacts
    </Row>
  </Column>
);

export default ContactsPage;
