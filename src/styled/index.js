import {
  createGlobalStyle,
} from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    color: #333;
    font-size: 14px;
    font-family: 'Source Sans Pro', sans-serif;
    font-display: swap;
    line-height: 1.42857143;
    background-color: #fff;
    -webkit-print-color-adjust: exact;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;


export const Text = styled.span`
    display: block;
    color: ${props => (props.color ? props.color : '#ffffff')};
    font-size: ${props => (props.size ? props.size : '5em')};
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-align: center;
    cursor: default;
    width: 100%;
    margin: 0 auto;
    padding: ${props => (props.padding ? props.padding : '')};
    
    ${props => props.line
    && 'border-bottom: 1px solid rgba(255,255,255,.5);'}
    
    ${props => props.lineBlack
    && 'border-bottom: 1px solid rgba(0,0,0,.5);'}
    
    @media (max-width: 1024px){
        font-size: 3em;
    }
    
`;
