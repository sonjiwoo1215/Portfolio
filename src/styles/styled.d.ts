import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      gray: string;
      green: string;
      dark: string;
      lightDark: string;
      border: string;
    };
    fonts: {
      accent: string;
      primary: string;
      secondary: string;
      muted: string;
      inverse: string;
    };
  }
}
