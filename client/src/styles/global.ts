/* stylelint-disable */
import { createGlobalStyle } from 'styled-components';

// styled components global styles
export const GlobalStyle = createGlobalStyle`
 
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-family: inherit;
  }
  html, 
  body {
    height:100%; 
    padding:0; 
    margin:0; 
    width:100%;
    overflow-x : hidden;
  }
  
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,  
  fieldset,
  label {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
  
  ol,
  ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    all: unset;
  }
  input {
    all : unset;
  }
  select {
    outline: none;
    border: none;
  }
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #B2B2B2;
  }
::-moz-placeholder { /* Firefox 19+ */
    color: #B2B2B2;
  }
:-ms-input-placeholder { /* IE 10+ */
    color: #B2B2B2;
   }
:-moz-placeholder { /* Firefox 18- */
    color: #B2B2B2;;
   }
  `