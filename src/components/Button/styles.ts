import styled, { DefaultTheme, css } from "styled-components";
import { ButtonProps } from ".";

const ButtonModifiers = {
  todo: () => css`
    /* The TodoBar Button */
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
    cursor: pointer;
    &:hover {
      filter: brightness(0.8);
    }
    ${!!variant && ButtonModifiers[variant](theme)}
  `}
`;
