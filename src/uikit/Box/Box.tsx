import styled from "styled-components";
import {
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
} from "styled-system";

import { BoxPropTypes } from "./types";

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
