import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  font-family: 'JetBrains Mono', monospace;
  line-height: 1.5;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration:none;
  color: inherit;
}
body{
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.background};
}
`;
