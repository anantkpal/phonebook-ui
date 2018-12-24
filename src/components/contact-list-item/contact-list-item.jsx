import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-toolbox/lib/avatar';
import { Column, Row } from '../layout';

const ContactListItem = ({ contact }) => (
  <Column border="1px solid #D4D4D4" margin="3px 0" padding="10px 5px" borderRadius="5px">
    <Row>
      <Row margin="5px" maxWidth="60px"><Avatar size="48" title={contact.name} /></Row>
      <Column>
        <Row padding="3px 0">{contact.name}</Row>
        <Row padding="3px 0">
          <strong>Ph:&nbsp;</strong>
          <a href={`tel:${contact.phone_number}`}>{contact.phone_number}</a>
        </Row>
        <Row padding="3px 0">
          <i>
            <strong>Addr:&nbsp;</strong>
            {contact.address}
          </i>
        </Row>
      </Column>
    </Row>
  </Column>
);

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    phone_number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};


export default ContactListItem;
