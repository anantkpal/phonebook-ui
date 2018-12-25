import { connect } from 'react-redux';
import SortContacts from './sort-contacts';
import { sortContacts } from '../../actions';

const mapStateToProps = state => ({
  sortBy: state.contacts.sortBy,
});

const mapDispatchToProps = dispatch => ({
  sortContacts: sortBy => dispatch(sortContacts(sortBy)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortContacts);
