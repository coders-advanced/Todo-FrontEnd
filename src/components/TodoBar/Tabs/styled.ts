import { css, styled } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 20px;
    ul{
      display: flex;
      gap: 40px;
    }
    li{
      color: ${theme["secondary-black-button"]};
      font-size: 16px;
      position: relative;
      cursor: pointer;
      font-weight: 400;
      transition: color .2s;
      }
    li::after {
      content: '';
      background-color: ${theme["secondary-task-to-do"]};
      height: 4px;
      width: 0;
      position: absolute;
      display: block;
      top: 30px;
      transition: width .2s;
      border-radius: 4px;
    }
    li:hover::after {
      width: 100%;
    }
    .active{
      color: ${theme["secondary-task-to-do"]};
    }
  `}
`;