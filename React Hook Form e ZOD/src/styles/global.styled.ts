import {createGlobalStyle, keyframes} from "styled-components";


const showing = keyframes`
    100%{
      opacity: 1;
    }
`
export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body, button, input{
    font-family: 'Roboto Mono', monospace;
  }
  
  main{
    opacity: 0;
    animation: ${showing} 500ms forwards;
    background: ${({theme})=> theme['primary-color']};
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
  
  article{
    width: 100%;
  }
  
  section{
    width: 100%;
    max-width: 60rem;
    margin: 0 auto;
  }
`