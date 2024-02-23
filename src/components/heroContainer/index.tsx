import React, { ReactNode } from "react";
import HeroBG from "assets/images/herobg";
import { Box } from "uikit";

interface HeroContainerProps {
  children: ReactNode;
}

const HeroContainer: React.FC<HeroContainerProps> = ({ children }) => {
  return (
    <Box
      px={68}
      mt={110}
      position="relative"
      style={{
        height: "auto",
        width: "100%",
      }}
    >
      <Box
        px={172}
        pt={40}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
      <HeroBG />
    </Box>
  );
};

export default HeroContainer;
