import styled from "styled-components";

export const Form = styled.form`
    background: ${({theme})=> theme['tertiary-color']};
    padding: 2rem;
    border-radius: 10px;
    width: 100%;
    max-width: 20rem;
    border: 2px solid black;
    box-shadow: 0px 10px 0px black ;
  
  h1{
    font-style: italic;
  }
  
  input{
    width: 100%;
  }
  
  button{
    margin: 0 auto;
  }
`