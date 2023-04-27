import {} from "styled-components";

import { Theme } from "global/theme";

import { ThemeType } from "./theme"; // Import type from above file

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType, Theme {} // extends the global DefaultTheme with our ThemeType.
}
