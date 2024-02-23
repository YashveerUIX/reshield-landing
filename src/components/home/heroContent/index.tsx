import React from "react";
import Image from "next/image";
import { Box, Color } from "uikit";

import Button from "components/button";
import { GradientText } from "components/gradientText";
import HeroContainer from "components/heroContainer";
import { ResText } from "components/text";

function HeroContent() {
  return (
    <>
      <HeroContainer>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          style={{ gap: "20px" }}
        >
          <Box style={{ textAlign: "center" }}>
            <ResText color={Color.primaryBlue} type="HEADLINE_1">
              Access governance for all{" "}
            </ResText>
            <GradientText gradient={Color.gradient} type="HEADLINE_1">
              Infrastructure Databases
            </GradientText>
          </Box>
          <ResText
            textAlign={"center"}
            color={Color.commonTextBlack}
            type="BODY_1"
          >
            Single platform to govern access. Enable role-based, just-in-time,
            and time-limited access with automated flows. Enhance access
            visibility, minimise risk, boost team productivity, and ensure
            compliance.
          </ResText>
          <Box mt={4}>
            <Button variant="primary">
              <ResText type="BUTTON_1">Schedule A demo</ResText>
            </Button>
          </Box>
          <Box>
            <Image
              width={"1100px"}
              height={"700px"}
              style={{ position: "absolute" }}
              src={"/images/ReshieldDashboard.png"}
            />
          </Box>
        </Box>
      </HeroContainer>
    </>
  );
}

export default HeroContent;
