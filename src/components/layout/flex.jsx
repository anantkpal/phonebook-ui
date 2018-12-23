import PropTypes from 'prop-types';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  min-width: ${props => props.minWidth};
  max-width: ${props => props.maxWidth};
  min-height: ${props => props.minHeight};
  max-height: ${props => props.maxHeight};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  color: ${props => props.color};
  background: ${props => props.background};
`;

Flex.propTypes = {
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  minHeight: PropTypes.string,
  maxHeight: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
};

Flex.defaultProps = {
  minWidth: null,
  maxWidth: null,
  minHeight: null,
  maxHeight: null,
  border: null,
  borderRadius: null,
  justify: null,
  align: null,
  margin: null,
  padding: null,
  color: null,
  background: null,
};

export default Flex;
