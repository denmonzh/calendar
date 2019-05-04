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


export const Search = styled.input`
  margin: 0 20px 0 0;
  width: 25%;
  height: 30px;
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

export const Icon = styled.img`
  width: 28px;
  padding: 0 10px 0 0;
`;
