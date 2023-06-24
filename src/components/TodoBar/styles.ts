import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme["primary-white"]};
    display: flex;
    gap: 10px;
    justify-content: center;
    padding: 10px;
    margin: 5px;
    border-radius: 8px;
  `}
`;