// @flow
import styled from 'styled-components';
import {
  Flex,
  Text,
} from 'web-styled';


export const DayMonthItem = styled(Flex).attrs({
  justify: 'flex-start',
  wrap: 'wrap',
})`
    width: 14%;
    border: 1px solid #AFEEEE;
    height: 80px;
    cursor: pointer;
    box-shadow: ${props => (props.selected && '0px 0px 25px 2px rgba(255,234,0,0.9)')}
`;

export const NumberText = styled(Text).attrs({
  size: '14px',
  align: 'left',
  padding: '0 0 0 3px',
  spacing: '0',
  margin: '0',
})`
  width: 22px;
  height: 'content';
  background: ${props => (props.dayNow ? 'rgba(236, 100, 75, 1)' : 'none')};
`;

export const EventContainer = styled(Flex).attrs({
})`
  width: 100%;
  flex-direction: column;
`;

export const EventItem = styled(Flex).attrs({
  align: 'center',
  justify: 'center',
})`
  width: 100%;
  background: ${props => (props.complete ? '#00FF7F' : '#ff8080')};
  flex-direction: column;
  padding: 5px 0 0 3px;
  margin: 5px 0 0 0;
`;
