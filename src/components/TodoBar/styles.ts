import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme["primary-white"]};
    display: flex;
    gap: 10px;
    justify-content: end;
    padding: 10px;
    border-radius: 8px;
  `}
`;