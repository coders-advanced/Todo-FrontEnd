import "styled-components";
import { Theme } from "../styles/Theme";

type ThemeType = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
