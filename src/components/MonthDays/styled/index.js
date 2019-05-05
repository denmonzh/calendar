import styled from 'styled-components';
import {
  Flex,
  Text,
} from 'web-styled';


export const DayMonthItem = styled(Flex).attrs({
  justify: 'flex-start',
})`
    width: 14%;
    border: 1px solid black;
    height: 80px;
    cursor: pointer;
`;

export const NumberText = styled(Text).attrs({
  size: '14px',
  align: 'left',
  padding: '0 0 0 3px',
  spacing: '0',
  margin: '0',
})`
  width: 25px;
  height: 100%;
  background: ${props => (props.selected ? 'aqua' : 'none')};
`;
