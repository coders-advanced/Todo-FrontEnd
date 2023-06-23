import { css, styled } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    li{
      color: ${theme["secondary-black-button"]};
      font-size: 16px;
      cursor: pointer;
    }
    .selected{
    color: ${theme["secondary-task-to-do"]}
    }
  `}`;
