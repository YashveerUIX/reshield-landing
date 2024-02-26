import React, { ReactNode } from "react";
import { Box, Color } from "uikit";

interface HeroContainerProps {
  children: ReactNode;
}

const GradientContainer: React.FC<HeroContainerProps> = ({ children }) => {
  return (
    <Box
      minHeight={"300px"}
      mt={310}
      height={["auto"]}
      style={{
        position: "absolute",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `${Color.gradient}`,
      }}
    >
      <Box py={["", "80px"]} px={["", "240px"]}>
        {children}
      </Box>
    </Box>
  );
};

export default GradientContainer;
