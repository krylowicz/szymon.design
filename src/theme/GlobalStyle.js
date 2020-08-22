import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 62.5%; // 1 rem -> 10px
  }  

  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
  }
`;

export default GlobalStyle;
