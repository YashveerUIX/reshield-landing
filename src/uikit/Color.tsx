const Color = {
  black: "#000",
  white: "#FFF",
  commonTextBlack: "#0D1835",
  dullBlue: "#6374A3",
  primaryBlue: "#2147AD",
  secondaryButtonBlue: "#2C5EE7",
  sectionBlue: "#265BEE",
  gradient: "linear-gradient(to right,#46AED0, #0777FF, #7F82F4)",
  darkGradient: "linear-gradient(#2C5EE7,#09236A)",
};

export type ColorName = keyof typeof Color;

export default Color;
