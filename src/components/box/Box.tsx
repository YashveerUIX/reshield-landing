import styled from "styled-components";
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
} from "styled-system";
import {
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
} from "styled-system";

export type BoxPropTypes = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  ShadowProps &
  PositionProps;

const Box = styled.div<BoxPropTypes>(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  color,
  space,
  layout,
  flexbox,
  border,
  shadow,
  position
);

export default Box;
