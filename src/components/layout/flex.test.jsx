import React from 'react';
import { mount } from 'enzyme';
import Flex from './flex';

describe('Flex', () => {
  it('should render with no width', () => {
    const component = mount(<Flex />);
    expect(component).not.toHaveStyleRule('min-width', expect.any(String));
    expect(component).not.toHaveStyleRule('max-width', expect.any(String));
    expect(component).toHaveStyleRule('display', 'flex');
  });

  it('should render with width', () => {
    const component = mount(<Flex minWidth="100px" maxWidth="200px" />);
    expect(component).toHaveStyleRule('min-width', '100px');
    expect(component).toHaveStyleRule('max-width', '200px');
    expect(component).toHaveStyleRule('display', 'flex');
  });

  it('should render with no height', () => {
    const component = mount(<Flex />);
    expect(component).not.toHaveStyleRule('min-height', expect.any(String));
    expect(component).not.toHaveStyleRule('max-height', expect.any(String));
    expect(component).toHaveStyleRule('display', 'flex');
  });

  it('should render with height', () => {
    const component = mount(<Flex minHeight="100px" maxHeight="200px" />);
    expect(component).toHaveStyleRule('min-height', '100px');
    expect(component).toHaveStyleRule('max-height', '200px');
    expect(component).toHaveStyleRule('display', 'flex');
  });

  it('should render with no border', () => {
    const component = mount(<Flex />);
    expect(component).not.toHaveStyleRule('border', expect.any(String));
    expect(component).toHaveStyleRule('display', 'flex');
  });

  it('should render with border', () => {
    const component = mount(<Flex border="1px solid blue" />);
    expect(component).toHaveStyleRule('border', '1px solid blue');
    expect(component).toHaveStyleRule('display', 'flex');
  });

  it('should render with no borderRadius', () => {
    const component = mount(<Flex />);
    expect(component).not.toHaveStyleRule('border-radius', expect.any(String));
    expect(component).toHaveStyleRule('display', 'flex');
  });

  it('should render with borderRadius', () => {
    const component = mount(<Flex borderRadius="1px" />);
    expect(component).toHaveStyleRule('border-radius', '1px');
    expect(component).toHaveStyleRule('display', 'flex');
  });

  it('should render with no align', () => {
    const component = mount(<Flex />);
    expect(component).not.toHaveStyleRule('align-items', expect.any(String));
    expect(component).toHaveStyleRule('display', 'flex');
  });

  it('should render with align', () => {
    const component = mount(<Flex align="center" />);
    expect(component).toHaveStyleRule('align-items', 'center');
    expect(component).toHaveStyleRule('display', 'flex');
  });

  it('should render with no justify', () => {
    const component = mount(<Flex />);
    expect(component).not.toHaveStyleRule('justify-content', expect.any(String));
    expect(component).toHaveStyleRule('display', 'flex');
  });

  it('should render with justify', () => {
    const component = mount(<Flex justify="center" />);
    expect(component).toHaveStyleRule('justify-content', 'center');
    expect(component).toHaveStyleRule('display', 'flex');
  });

  it('should render with no color', () => {
    const component = mount(<Flex />);
    expect(component).not.toHaveStyleRule('justify-content', expect.any(String));
    expect(component).toHaveStyleRule('display', 'flex');
  });

  it('should render with color', () => {
    const component = mount(<Flex color="blue" />);
    expect(component).toHaveStyleRule('color', 'blue');
    expect(component).toHaveStyleRule('display', 'flex');
  });

  it('should render with no background', () => {
    const component = mount(<Flex />);
    expect(component).not.toHaveStyleRule('background', expect.any(String));
    expect(component).toHaveStyleRule('display', 'flex');
  });

  it('should render with background', () => {
    const component = mount(<Flex background="blue" />);
    expect(component).toHaveStyleRule('background', 'blue');
    expect(component).toHaveStyleRule('display', 'flex');
  });

  it('should render with no padding', () => {
    const component = mount(<Flex />);
    expect(component).not.toHaveStyleRule('padding', expect.any(String));
    expect(component).toHaveStyleRule('display', 'flex');
  });

  it('should render with padding', () => {
    const component = mount(<Flex padding="1px" />);
    expect(component).toHaveStyleRule('padding', '1px');
    expect(component).toHaveStyleRule('display', 'flex');
  });

  it('should render with no margin', () => {
    const component = mount(<Flex />);
    expect(component).not.toHaveStyleRule('margin', expect.any(String));
    expect(component).toHaveStyleRule('display', 'flex');
  });

  it('should render with margin', () => {
    const component = mount(<Flex margin="2px" />);
    expect(component).toHaveStyleRule('margin', '2px');
    expect(component).toHaveStyleRule('display', 'flex');
  });
});
