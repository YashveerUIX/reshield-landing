import { ReactNode } from "react";
import { ColorProps, SpaceProps } from "styled-system";

type LevelsType = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingPropTypes = {
  level: LevelsType;
  as?: any;
  children: ReactNode;
} & SpaceProps &
  ColorProps;
