import { connect } from 'react-redux';
import SearchContact from './search-contact';
import { searchContacts } from '../../actions';

const mapStateToProps = state => ({
  searchText: state.contacts.searchText,
});

const mapDispatchToProps = dispatch => ({
  searchContacts: searchText => dispatch(searchContacts(searchText)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchContact);
