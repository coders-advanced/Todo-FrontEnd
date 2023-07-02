import { styled } from "styled-components";

export const Wrapper = styled.ul`
  position: absolute;
  display: flex;
  /* gap: 10px; */
  flex-direction: column;
  top: 50px;
  right: 20px;
  background-color: white;
  border: 1.12867px solid rgba(146, 151, 183, 0.24);
  box-shadow: 0px 13.544px 18.0587px -4.51467px rgba(16, 24, 40, 0.08);
  border-radius: 13.544px;
  /* padding: 10px 20px; */
  padding-block: 10px;
`;

export const Option = styled.li`
  font-weight: 500;
  font-size: 15.8014px;
  line-height: 140%;
  color: #5b628a;
  width: 125px;
  padding: 9px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
`;
