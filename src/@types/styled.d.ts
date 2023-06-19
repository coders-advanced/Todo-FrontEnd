import "styled-components";
import { Theme } from "../styles/Theme";

type ThemeType = typeof Theme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType { }
}
