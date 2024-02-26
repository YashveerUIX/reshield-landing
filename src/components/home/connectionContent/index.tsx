import React from "react";
import { Box, Color } from "uikit";

import Button from "components/button";
import GradientContainer from "components/gradientContainer";
import { ResText } from "components/text";

function ConnectionContent() {
  return (
    <GradientContainer>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        style={{ gap: "40px" }}
      >
        <ResText
          maxWidth={"700px"}
          type="HEADLINE_1"
          color={Color.white}
          lineHeight={"150%"}
          textAlign={"center"}
        >
          Connect your first server or database in 5 minutes
        </ResText>
        <Button variant="secondary">
          <ResText type="BUTTON_1">Schedule A demo</ResText>
        </Button>
      </Box>
    </GradientContainer>
  );
}

export default ConnectionContent;
