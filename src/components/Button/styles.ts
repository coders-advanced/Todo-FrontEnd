import { styled } from "styled-components";

interface ButtonProps {
  buttonTheme: "black" | "white"
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 269px;
  height: 60px;
  background-color: ${props => props.buttonTheme === "black"? "#111010" : "#FBEEFF"};
  color: ${props => props.buttonTheme === "black"? "#FBEEFF" : "#111010" };
  border: none;
  border-radius: 6px;
  font-size: 1.125rem;
  font-weight: bold;

  transition: background-color 150ms;
  
  &:hover {
    cursor: pointer;
    background-color: ${props => props.buttonTheme === "black"? "#000000" : "#FFFFFF"};
  }
`;
