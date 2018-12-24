import { connect } from 'react-redux';
import ContactList from './contact-list';
import { fetchContacts } from '../../actions';

const mapStateToProps = state => ({
  contacts: state.contacts.items || [],
  loading: state.contacts.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactList);
