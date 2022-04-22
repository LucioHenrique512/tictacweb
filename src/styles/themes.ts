import { createTheme } from "@mui/material";
import { DefaultTheme } from "styled-components";

export const light: DefaultTheme = {
  padding: {
    SM: 10,
    MD: 20,
    LG: 35,
  },
  borderRadius: 8,
  colors: {
    background: "#F4F4F4",
    primary: "#000000",
    secondary: "#8C8C8C",
    foreground: "#FFFFFF",
  },
};

export const muiThemeLight = createTheme({
  palette: {
    primary: { main: light.colors.primary },
    secondary: { main: light.colors.secondary },
  },
});
