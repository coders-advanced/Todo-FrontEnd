import { styled } from "styled-components";

export const Wrapper = styled.div`
  background: rgba(54, 52, 52, 0.63);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
`;
export const EditContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  min-height: 200px;
  width: 100%;
  border: 1px solid rgba(146, 151, 183, 0.16);
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.04);
  border-radius: 12px;
  padding: 18px 20px;
`;
export const Tag = styled.div`
  position: relative;
  min-width: 1em;
  width: min-content;
  color: #667eff;
  span {
    font-size: 18px;
    padding: 5px 10px;
    visibility: hidden;
    white-space: pre;
  }
  input {
    font-size: 18px;
    padding: 5px 10px;
    background: #e5e8fb;
    color: #667eff !important;
    border-radius: 25px;
    border: none;
    position: absolute;
    left: 0;
    color: black;
    min-width: 60px;
    width: 100%;

    &:focus-within,
    :focus-visible,
    :focus {
      outline: none;
      border: none;
    }
  }
`;
export const Title = styled.input`
  height: 20px;
  border: none;
  min-width: 200px;
  padding-inline: 20px;
  color: #282c41;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  margin-bottom: 20px;
  padding: 0;
`;
export const Content = styled.input`
  height: 20px;
  border: none;
  min-width: 200px;
  padding-inline: 20px;
  color: #adaeb1;
  font-weight: 500;
  font-size: 15px;
  line-height: 140%;
  padding: 0;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* gap: 30px; */
  input {
    color: black;
    /* height: 20px;
    border: none;
    min-width: 200px;
    padding-inline: 20px;
    color: black;
    &:focus-within,
    :focus-visible,
    :focus {
      outline: none;
      border: none;
    } */
    &:focus-within,
    :focus-visible,
    :focus {
      outline: none;
      border: none;
    }
  }
`;
