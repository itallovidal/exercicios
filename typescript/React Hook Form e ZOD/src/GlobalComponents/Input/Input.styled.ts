import styled from "styled-components";
import {showing} from "../../styles/global.styled.ts";

export const Wrapper = styled.div`
  margin-block: 2rem;
  
  label{
    display: block;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }

  p{
    margin-top: 1.2rem;
    opacity: 0;
    animation: ${showing} 400ms forwards;
    color: red;
  }
  input {
    background: none;
    border: none;
    border-radius: 5px;
    outline: none;
    padding: .5rem .5rem .5rem 1rem;
    background: ${({theme})=> theme['quaternary-color']};
    box-shadow: 0px 5px 0px ${({theme})=> theme['secondary-color']} ;
    transition: 400ms;
    cursor: pointer;

    &:hover, &:focus{
      box-shadow: 0px 2px 0px ${({theme})=> theme['secondary-color']} ;
      transform: translateY(3px);
    }

  }
`