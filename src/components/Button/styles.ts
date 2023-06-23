import styled, { DefaultTheme, css } from "styled-components";
import { ButtonProps } from ".";

const ButtonModifiers = {
  todo: () => css`
    padding: 6px 12px;
    font-size: 14px;
    background-color: transparent;
    color: #000;
    border-radius: 8px;
    border: solid 1px #E9E8EB;
    font-weight: 500;
    text-transform: capitalize
  `,
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme["primary-purple-dark"]};
    `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme["primary-white"]};
    color: #000;
  `
};
export const ButtonContainer = styled.button<ButtonProps>`
  ${({ variant, theme }) => css`
    padding: 17px 88px;
    background-color: #000;
    color: #FFF;
    border: none;
    border-radius: 10px;
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    font-family: ${theme.fonts.display};
    transition: all .3s;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    &:hover {
      filter: brightness(0.8);
    }
    ${!!variant && ButtonModifiers[variant](theme)}
  `}
`;

export const ButtonIcon = styled.span`
  svg{
    display: block;

  }  
`;
