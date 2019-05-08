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
    text-transform: ${props => (props.low ? '' : 'uppercase')};
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

export const Input = styled.input`
    width: ${props => (props.width ? props.width : '100%')};
    margin: ${props => (props.margin ? props.margin : '0 auto')};
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

export const getCustomStyles = width => ({
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    overflow: 'hidden auto',
    paddingBottom: '50px',
    zIndex: 9999,
  },
  content: {
    padding: 0,
    borderRadius: 0,
    position: 'relative',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    marginTop: '50px',
    marginBottom: 'auto',
    width: width || '450px',
    border: 'none',
    outline: 'none',
    overflow: 'visible',
  },
});

export const Spinner = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const Button = styled.button`
  display: inline-block;
  position: relative;
  padding: 2px 5px;
  outline: none;
  cursor: pointer;
  top: 0;
  font-size: 15px;
  font-family: "Open Sans", Helvetica;
  border-radius: 4px;
  border-bottom: 1px solid rgba( 28, 227, 125, 0.5 );
  background: ${props => (props.close ? props.close : 'rgba( 22, 230, 137, 1 )')};
  color: #fff;
  box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.1 );
  margin: 0 auto;
  width: 25%;
  
  
  &:focus{
    outline: none;
  }
  
`;
