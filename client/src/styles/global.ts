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
  

  .bg {
    background: url('/assets/landing.png');
    background-position-y : -5.3rem;
    background-position-x : 9rem;
    background-size: cover;
    background-repeat : no-repeat;

    @media screen and (max-width : 1400px) and (min-width : 1370px) {
        background-position-y : -4.3rem;
    }
    @media screen and (max-width : 1370px) and (min-width : 1300px) {
        background-position-y : -3.3rem;
    }
    @media screen and (max-width : 1300px) and (min-width : 1280px) {
        background-position-y : -2.3rem;
    }
    @media screen and (max-width : 1280px) and (min-width: 1200px) {
        background-position-y : -1.3rem
    }
    @media screen and (max-width : 1200px) and (min-width : 1035px) {
        background-position-y : 0rem;
    }
    @media screen and (max-width : 1035px) and (min-width : 900px) {
        background-position-y : -4rem;
        background-position-x : -4rem;
        background-size : 130%;
    }
    @media screen and (max-width : 900px) and (min-width : 800px) {
        background-position-y : -2rem;
        background-position-x : -4rem;
        background-size : 130%;
    }
    @media screen and (max-width : 800px) and (min-width : 700px) {
        background-position-y : 1rem;
        background-position-x : -4rem;
        background-size : 133%;
    }
    @media screen and (max-width : 700px) and (min-width : 650px) {
        background-position-y : 1rem;
        background-position-x : -6rem;
        background-size : 140%;
    }
    @media screen and (max-width : 650px) {
        background : url('/assets/bg-2.png');
        background-position-y : unset;
        background-position-x : unset;
        background-size: cover;
        background-repeat : no-repeat;
    }
  }
  }
  .services {
    background : url('/assets/bg-2.png');
    height : 100vh;
    background-position-y : unset;
    background-position-x : unset;
    background-size: cover;
    background-repeat : no-repeat;
  }
  
  .payment {
    background : url('/assets/bg-2.png');
    height : 100vh;
    background-position-y : unset;
    background-position-x : unset;
    background-size: cover;
    background-repeat : no-repeat;
  }

  .transactions {
    background : url('/assets/bg-2.png');
    height : 100vh;
    background-position-y : unset;
    background-position-x : unset;
    background-size: cover;
    background-repeat : no-repeat;
  }

  .wallet-adapter-modal-wrapper
   .wallet-adapter-button {
    width : 88% !important;
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