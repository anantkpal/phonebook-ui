import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Column } from '../../components/layout';
import ContactListItem from '../../components/contact-list-item';

class ContactList extends Component {
  componentDidMount() {
    const { fetchContacts } = this.props;
    fetchContacts();
  }

  render() {
    const { contacts, loading } = this.props;

    if (loading) {
      return 'Loading...';
    }

    return (
      <Column>
        {
          contacts.map(contact => <ContactListItem contact={contact} key={contact.phone_number} />)
        }
      </Column>
    );
  }
}


ContactList.propTypes = {
  fetchContacts: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  contacts: PropTypes.arrayOf(PropTypes.shape({
    phone_number: PropTypes.string.isRequired,
  })),
};

ContactList.defaultProps = {
  contacts: [],
  loading: false,
};
export default ContactList;
