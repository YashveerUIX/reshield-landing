import styled from "styled-components";
import { color, space, variant } from "styled-system";

import { HeadingPropTypes } from "./types";

const variants = {
  1: { fontSize: 7 },
  2: { fontSize: 6 },
  3: { fontSize: 5 },
  4: { fontSize: 4 },
  5: { fontSize: 3 },
  6: { fontSize: 2 },
};

const HeadingBase = ({
  level,
  as: Component = `h${level}`,
  ...props
}: HeadingPropTypes) => <Component {...props} />;

const Heading = styled(HeadingBase)(
  {
    margin: 0,
  },
  variant({
    variants,
    prop: "level",
  }),
  space,
  color
);

export default Heading;
