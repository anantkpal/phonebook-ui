import {
  types,
} from '../actions';

export default (
  state = {
    loading: false,
    items: [],
    searchText: '',
    sortBy: '',
  },
  action,
) => {
  switch (action.type) {
    case types.REQUEST_CONTACTS:
      return Object.assign({}, state, {
        loading: true,
        items: [],
      });
    case types.SET_CONTACTS:
      return Object.assign({}, state, {
        loading: false,
        items: action.contacts,
      });
    case types.SEARCH_CONTACTS:
      return Object.assign({}, state, {
        searchText: action.searchText,
      });
    case types.SORT_CONTACTS:
      return Object.assign({}, state, {
        sortBy: action.sortBy,
      });
    default:
      return state;
  }
};
