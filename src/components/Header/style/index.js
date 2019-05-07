import styled from 'styled-components';
import {
  Flex,
} from 'web-styled';

export const HeaderContainer = styled(Flex).attrs({
  justify: 'flex-end',
  align: 'center',
})`
   width: 100%;
   height: 60px;
`;


export const Icon = styled.img`
  width: 28px;
  padding: 0 10px 0 0;
`;

export const AddNotification = styled.button`
  display: inline-block;
  position: relative;
  padding: 5px 10px;
  outline: none;
  cursor: pointer;
  top: 0;
  font-size: 15px;
  font-family: "Open Sans", Helvetica;
  border-radius: 4px;
  border-bottom: 1px solid rgba( 28, 227, 125, 0.5 );
  background: rgba( 22, 230, 137, 1 );
  color: #fff;
  box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.1 );
  transform: translateZ(0);
  transition: all 0.2s ease;
  
  &:hover{
    top: -5px;
    box-shadow: 0px 10px 10px rgba( 15, 165, 60, 0.2 );
    transform: rotateX(20deg);
  }
  
  &:active{
    top: 0px;
    box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.0 );
    background: rgba( 20, 224, 133, 1 );
  }
  
  &:focus{
    outline: none;
  }
  
`;
