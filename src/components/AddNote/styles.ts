import { styled, css } from "styled-components";

export const Wrapper = styled.span`
  ${({ theme }) => css`
    div{
      margin: 10px;
      color: ${theme["primary-white"]};
      display: flex;
      justify-content: start;
      align-items: center;
      svg{
        border: solid 2px ${theme["primary-white"]};
        border-radius: 10px;
        background-color: #FFFFFF44;
        cursor: pointer;
      }
    }
  `}
`;