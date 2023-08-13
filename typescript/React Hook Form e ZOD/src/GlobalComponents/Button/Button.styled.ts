import styled from "styled-components";

export const Button = styled.button`
  background: ${({theme})=> theme['quaternary-color']};
  padding: .5rem;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  border: 2px solid black;
  box-shadow: 0px 5px 0px black ;
  transition: 400ms;
  
  &:hover{
    box-shadow: 0px 2px 0px black ;
    transform: translateY(3px);
  }

  &:active{
    box-shadow: 0px 0px 0px black ;
  }
`