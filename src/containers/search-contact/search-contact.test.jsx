import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Input from 'react-toolbox/lib/input';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import SearchContact from './search-contact';
import SearchContactContainer from '.';

describe('SearchContact', () => {
  const searchContacts = sinon.spy();

  it('should render without any errors', () => {
    const component = shallow(<SearchContact searchContacts={searchContacts} searchText="" />);
    const inputComponent = component.find(Input);
    inputComponent.simulate('change', 'sample');
    expect(searchContacts.calledWithExactly('sample')).toEqual(true);
  });
});

describe('SearchContact container', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  it('should render with search text', () => {
    const store = mockStore({ contacts: { searchText: 'sample' } });
    const container = mount(<Provider store={store}><SearchContactContainer /></Provider>);
    expect(container.find(SearchContact).prop('searchText')).toEqual('sample');
  });
});
