import styled from 'styled-components';
import {
  Flex,
} from 'web-styled';


export const DaysContainer = styled(Flex).attrs({
  justify: 'center',
})`
    width: 90%;
    height: 30px;
    margin: 40px 0 0 0;
`;

export const Day = styled(Flex).attrs({
  justify: 'center',
  align: 'center',
})`
    width: 14.2%;
    border: 1px solid black;
    height: 100%;
`;
