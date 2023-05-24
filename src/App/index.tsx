import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Theme } from "../styles/Theme";
import { Router } from "../Router";
import { Header } from "../components/Header";
import { MainContainer } from "./styles";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <MainContainer>
        <Router />
      </MainContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
