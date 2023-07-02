import { styled } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  /* max-width: 351px; */
  width: 100%;
  border: 1px solid rgba(146, 151, 183, 0.16);
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.04);
  border-radius: 12px;
  padding: 18px 20px;
`;
export const Heading = styled.div`
  display: flex;
  font-family: "Rubik", sans-serif;
  justify-content: space-between;
  margin-bottom: 25px;
  span {
    /* color: ${({ theme }) => theme["secondary-black-button"]}; */
    color: #667eff;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    line-height: 30px;
    justify-content: center;
    align-items: center;
    background: #e5e8fb;
    border-radius: 25px;
    padding: 4px 16px;
  }
  svg {
    cursor: pointer;
    path {
    }
  }
`;
export const Content = styled.div`
  margin-bottom: 37px;
  h2 {
    color: #282c41;
    font-weight: 600;
    font-size: 20px;
    line-height: 140%;
    margin-bottom: 5px;
  }
  p {
    color: #adaeb1;
    font-weight: 500;
    font-size: 15px;
    line-height: 140%;
  }
`;
export const Footer = styled.time`
  color: #282c41;
  font-weight: 500;
  font-size: 13px;
  line-height: 140%;
  display: flex;
  align-self: end;
  position: absolute;
  bottom: 14px;
`;
