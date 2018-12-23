import styled from 'styled-components';
import Flex from './flex';

const Column = styled(Flex)`
  flex-direction: column;
`;

Column.propTypes = Flex.propTypes;
Column.defaultProps = Flex.defaultProps;

export default Column;
