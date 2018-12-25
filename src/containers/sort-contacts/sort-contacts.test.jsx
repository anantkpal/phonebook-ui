import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { IconMenu } from 'react-toolbox/lib/menu';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import SortContacts from './sort-contacts';
import SortContactsContainer from '.';

describe('SortContacts', () => {
  const sortContacts = sinon.spy();

  it('should render without any errors', () => {
    const component = shallow(<SortContacts sortContacts={sortContacts} sortBy="" />);
    const inputComponent = component.find(IconMenu);
    inputComponent.simulate('select', 'sample');
    expect(sortContacts.calledWithExactly('sample')).toEqual(true);
  });
});

describe('SortContacts container', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  it('should render with sort by', () => {
    const store = mockStore({ contacts: { sortBy: 'name' } });
    const container = mount(<Provider store={store}><SortContactsContainer /></Provider>);
    expect(container.find(SortContacts).prop('sortBy')).toEqual('name');
  });
});
