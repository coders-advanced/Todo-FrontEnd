import { styled } from "styled-components";

export const HomeContainer = styled.div``

export const Main = styled.main`
  display: flex;

  h1 {
    font-size: 48px;
  }

  p {
    font-size: 22px;
    width: 972px;
  }
` 

export const LeftSide = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 8.75rem;
  gap: 2.25rem;
`

export const RightSide = styled.section`
  margin-top: 4rem;
`

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  margin-top: 8rem;
`