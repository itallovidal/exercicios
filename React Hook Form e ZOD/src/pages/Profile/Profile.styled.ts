import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({theme})=> theme['quaternary-color']};
  padding: 2rem;
  border-radius: 10px;
  width: 40%;
  border: 2px solid black;
  box-shadow: 0px 10px 0px black ;
  
    p, ul{
      margin-top: 1rem;
    }
    ul li::marker{
      content: '🎯';
    }
`