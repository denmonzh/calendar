import styled from 'styled-components';
import {
  Flex,
} from 'web-styled';

export const ControllerItem = styled(Flex).attrs({
  justify: 'center',
  align: 'center',
})`
    width: 33%;
    margin: 20px 0 0 0;
`;

export const Arrow = styled.img`
    width: 64px;
    cursor: pointer;
`;
