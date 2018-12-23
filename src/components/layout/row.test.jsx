import React from 'react';
import { mount } from 'enzyme';
import { Row } from '.';

describe('Row', () => {
  it('should render as flex with flex direction as row', () => {
    const component = mount(<Row />);
    expect(component).toHaveStyleRule('display', 'flex');
    expect(component).toHaveStyleRule('flex-direction', 'row');
  });
});
