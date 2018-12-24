import { connect } from 'react-redux';
import { filter } from 'lodash';
import ContactList from './contact-list';
import { fetchContacts } from '../../actions';

const mapStateToProps = state => ({
  contacts: filter(state.contacts.items || [], ['show', true]),
  loading: state.contacts.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactList);
