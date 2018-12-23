import React from 'react';
import { mount } from 'enzyme';
import { Column } from '.';

describe('Column', () => {
  it('should render as flex with flex direction as column', () => {
    const component = mount(<Column />);
    expect(component).toHaveStyleRule('display', 'flex');
    expect(component).toHaveStyleRule('flex-direction', 'column');
  });
});
