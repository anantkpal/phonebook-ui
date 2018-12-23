import styled from 'styled-components';
import Flex from './flex';

const Row = styled(Flex)`
  flex-direction: row;
`;

Row.propTypes = Flex.propTypes;
Row.defaultProps = Flex.defaultProps;

export default Row;
