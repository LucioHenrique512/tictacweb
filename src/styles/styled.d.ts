import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    padding: {
      SM: number;
      MD: number;
      LG: number;
    };
    borderRadius: number;
    fontSize: {
      SM: number;
      MD: number;
      LG: number;
    };
    colors: {
      primary: string;
      secondary: string;
      background: string;
      foreground: string;
    };
  }
}
