import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #232323;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
  }

  html {
  scroll-behavior: smooth;
  }
  *{
    text-decoration: none;
  }
  a:active {
    color: #dbdbdb;
  }
  a{
    color: #fff;
  }
`;

export default GlobalStyle;