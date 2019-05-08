import styled from 'styled-components';
import {
  Flex,
} from 'web-styled';

export const HeaderContainer = styled(Flex).attrs({
  justify: 'flex-end',
  align: 'center',
  wrap: 'wrap',
})`
   width: 100%;
   height: 60px;
   margin-top: ${props => (props.view ? '10px' : '')}
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

export const Result = styled(Flex).attrs({
  width: '44%',
  wrap: 'wrap',
  justify: 'space-around',
})`
  display: ${props => (props.view ? 'block' : 'none')}
  position: absolute;
  margin: 10px 0 0 0;
  background-color: rgb(255,255,255);
  box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
  border-color: #b3ffe6;
  border-style: ${props => (props.veiw ? 'none' : 'none solid solid solid')};
  border-width: 0 1px 1px 1px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 999;
`;

export const ResultItem = styled(Flex).attrs({
  width: '100%',
  height: '50px',
  column: 'column',
  align: 'flex-start',
  justify: 'center',
})`
  background: ${props => (props.complete ? '#00FF7F' : '#ff8080')};
  margin: 10px 0 0 0;
  
  &:last-child{
    margin-bottom: 20px;
  }
  
`;
