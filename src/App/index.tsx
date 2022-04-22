import React from "react";
import { ThemeProvider } from "styled-components";
import { Navigation } from "../routes";
import GlobalStyle from "../styles/global";
import { light, muiThemeLight } from "../styles/themes";
import { AppName, Container } from "./styles";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={light}>
      <MuiThemeProvider theme={muiThemeLight}>
        <GlobalStyle />
        <Container>
          <AppName>
            Tictac<span>Web</span>
          </AppName>
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
        </Container>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
