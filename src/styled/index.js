import {
  createGlobalStyle,
} from 'styled-components';
import styled from 'styled-components';


export const Flex = styled.div`
  display: flex;
  box-sizing: border-box;
  position: ${props => (props.absolute ? 'absolute' : 'relative')};
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
  ${props => props.spacing && `
    & > *:not(:last-child) {
      margin-${(props.column ? 'bottom' : 'right')}: ${props.spacing}px;
    }
  `};
  ${props => props.fillSpace && `
    height: 100%;
    width: 100%;
    flex: 1 1 100%;
  `}
  ${props => props.height && `
    height: ${typeof props.height === 'number' ? `${props.height}px` : props.height};
  `};
  ${props => props.width && `
    width: ${typeof props.width === 'number' ? `${props.width}px` : props.width};
  `};
  ${props => props.padding && `
    padding: ${props.padding};
  `};
  ${props => props.margin && `
    margin: ${props.margin};
  `};
  ${props => props.grow !== undefined && `
    flex-grow: ${props.grow};
  `};
  ${props => props.shrink !== undefined && `
    flex-shrink: ${props.shrink};
  `};
  ${props => props.alignSelf && `
    align-self: ${props.alignSelf};
  `};
  ${props => props.placeholder && `
    animation: ${placeholder} 1.5s ease infinite;
  `};
  ${props => props.borderRadius && `
    border-radius: ${props.borderRadius};
  `};
  ${props => props.border && `
    border: ${props.border};
  `};
  ${props => props.borderTop && `
    border-top: ${props.borderTop};
  `};
  ${props => props.borderBottom && `
    border-bottom: ${props.borderBottom};
  `};
  ${props => props.borderRight && `
    border-right: ${props.borderRight};
  `};
  ${props => props.borderLeft && `
    border-left: ${props.borderLeft};
  `};
  ${props => props.background && `
    background: ${props.background};
  `};
  ${props => props.color && `
    color: ${props.color};
  `};
  ${props => props.noScroll && `
    overflow: hidden;
  `};
  ${props => props.scrollX && `
    overflow-y: hidden;
    overflow-x: auto;
  `};
  ${props => props.scrollY && `
    overflow-x: hidden;
    overflow-y: auto;
  `};
  ${props => props.flex && `
    flex: ${props.flex};
  `};
  ${props => props.clickable && `
    cursor: pointer;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  `};
  ${props => props.noPrint && `
    @media print {
      display: none;
    }
  `};
`;

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
    color: ${props => (props.color ? props.color : '#000000')};
    font-size: ${props => (props.size ? props.size : '5em')};
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    letter-spacing: ${props => (props.spacing ? props.spacing : '2px')};
    text-align: ${props => (props.align ? props.align : 'center')};
    cursor: default;
    width: 100%;
    margin: ${props => (props.margin ? props.margin : '0 auto')};
    padding: ${props => (props.padding ? props.padding : '')};
    
    ${props => props.line
    && 'border-bottom: 1px solid rgba(255,255,255,.5);'}
    
    ${props => props.lineBlack
    && 'border-bottom: 1px solid rgba(0,0,0,.5);'}
    
    @media (max-width: 1024px){
        font-size: 3em;
    }
    
`;
