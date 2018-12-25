import reducer from './contacts';
import { types } from '../actions';

describe('Contact reducers', () => {
  const contacts = [
    { phone_number: '+91 987654321' },
  ];

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      items: [], loading: false, searchText: '', sortBy: '',
    });
  });

  it('should return the initial loading contacts state', () => {
    expect(reducer(undefined,
      { type: types.REQUEST_CONTACTS })).toEqual({
      items: [], loading: true, searchText: '', sortBy: '',
    });
  });

  it('should return the loading contacts state from loaded state', () => {
    expect(reducer({ items: contacts, loading: false },
      { type: types.REQUEST_CONTACTS })).toEqual({ items: [], loading: true });
  });

  it('should return the initial load contacts state', () => {
    expect(reducer(undefined,
      { type: types.SET_CONTACTS, contacts })).toEqual({
      items: contacts, loading: false, searchText: '', sortBy: '',
    });
  });

  it('should return the loaded contacts state from loaded state', () => {
    expect(reducer({ items: [], loading: true },
      { type: types.SET_CONTACTS, contacts })).toEqual({ items: contacts, loading: false });
  });

  it('should return the loaded contacts state from searching state', () => {
    expect(reducer({ items: [], loading: true },
      { type: types.SEARCH_CONTACTS, searchText: 'sample' }))
      .toEqual({ items: [], loading: true, searchText: 'sample' });
  });

  it('should return the loaded contacts state from sorting state', () => {
    expect(reducer({ items: [], loading: true },
      { type: types.SORT_CONTACTS, sortBy: 'name' }))
      .toEqual({ items: [], loading: true, sortBy: 'name' });
  });
});
