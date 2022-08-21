import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    padding: 0;
    margin: 0 auto;
    background: #232323;
    color: #fff;
    max-width:1600px;
    min-width:300px;
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