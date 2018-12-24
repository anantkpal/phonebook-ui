import {
  types,
} from '../actions';

export default (
  state = {
    loading: false,
    items: [],
  },
  action,
) => {
  switch (action.type) {
    case types.REQUEST_CONTACTS:
      return Object.assign({}, state, {
        loading: true,
        items: [],
      });
    case types.RECEIVE_CONTACTS:
      return Object.assign({}, state, {
        loading: false,
        items: action.contacts,
      });
    default:
      return state;
  }
};
