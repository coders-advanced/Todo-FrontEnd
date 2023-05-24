import { styled } from "styled-components";

export const InputContainer = styled.div`
/* position: relative; */
display:flex;
flex-direction: column;
input{
width: 400px;
height: 40px;
background-color: transparent;
border: 1px solid #000000;
border-radius: 6px;
}
label{
  width: 60px;
  font-size: 20px;
  top: 0px;
  left:12px;
  /* background:${({ theme }) => theme.background}; */
  /* background: rgba(181, 37, 227, 1); */
  /* -webkit-text-fill-color: transparent; */
 /* background-attachment: fixed;
  -webkit-background-clip: text; */
}
`
