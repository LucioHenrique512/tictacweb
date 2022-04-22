import React from "react";
import { ThemeProvider } from "styled-components";
import { Navigation } from "../routes";
import GlobalStyle from "../styles/global";
import { light, muiThemeLight } from "../styles/themes";
import { AppName, Container } from "./styles";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
function App() {
  return (
    <ThemeProvider theme={light}>
      <MuiThemeProvider theme={muiThemeLight}>
        <GlobalStyle />
        <Container>
          <AppName>
            Tictac<span>Web</span>
          </AppName>
          <Navigation />
        </Container>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
