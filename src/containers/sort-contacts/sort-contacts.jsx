import React from 'react';
import PropTypes from 'prop-types';
import { IconMenu, MenuItem } from 'react-toolbox/lib/menu';
import { Column } from '../../components/layout';


const SortContacts = ({ sortBy, sortContacts }) => (
  <Column>
    <IconMenu icon="sort_by_alpha" position="topLeft" menuRipple selectable selected={sortBy} onSelect={item => sortContacts(item)}>
      <MenuItem value="name" caption="Name (A - Z)" />
      <MenuItem value="-name" caption="Name (Z - A)" />
      <MenuItem value="address" caption="Address (A - Z)" />
      <MenuItem value="-address" caption="Address (Z - A)" />
      <MenuItem value="phone_number" caption="Phone Number (0 - 9)" />
      <MenuItem value="-phone_number" caption="Phone Number (9 - 0)" />
    </IconMenu>
  </Column>
);

SortContacts.propTypes = {
  sortContacts: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};

export default SortContacts;
