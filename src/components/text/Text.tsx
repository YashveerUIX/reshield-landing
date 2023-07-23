import styled from "styled-components";
import type {
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";
import { color, layout, space, typography } from "styled-system";

export type TextPropTypes = ColorProps &
  TypographyProps &
  LayoutProps &
  SpaceProps;

const Text = styled.p<TextPropTypes>(
  {
    margin: 0,
  },
  color,
  typography,
  layout,
  space
);

export default Text;
