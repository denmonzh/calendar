import styled from 'styled-components';
import {
  Flex,
} from 'web-styled';


export const ModalContainer = styled(Flex).attrs({
  align: 'center',
  justify: 'center',
})`
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    overflow: 'hidden auto',
    paddingBottom: '50px',
    zIndex: 9999,
`;


export const Body = styled(Flex).attrs({
  justify: 'center',
  column: 'column',
  align:'center',
})`
  padding: 25px;
  width: 100%;
`;




export const Description = styled.textarea`
  width: 80%;
  margin: 20px auto;
  color: rgba(0,0,0,.87);
  word-wrap: break-word;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-color: rgba(223,225,229,0);
  text-indent:10px;
  outline: none;
  border: 1px solid #dfe1e5;
    
  &:hover {
     box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
     border-color: rgba(223,225,229,0);
  }
  
  ::placeholder {
     padding-left: 2px;
  }
  
  &:focus:placeholder {
     color: transparent;
  }
`;
