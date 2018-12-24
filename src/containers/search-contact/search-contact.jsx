import React from 'react';
import PropTypes from 'prop-types';
import Input from 'react-toolbox/lib/input';
import { Column } from '../../components/layout';


const SearchContact = ({ searchContacts, searchText }) => (
  <Column>
    <Input
      name="contact-search"
      type="text"
      value={searchText}
      label="Search contact"
      onChange={e => searchContacts(e)}
    />
  </Column>
);

SearchContact.propTypes = {
  searchContacts: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchContact;
