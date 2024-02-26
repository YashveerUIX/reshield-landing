import React from "react";
import AriseHealthLogo from "assets/icons/ariseHealthLogo";
import styled from "styled-components";
import { Box, Color } from "uikit";

import GradientContainer from "components/gradientContainer";
import { ResText } from "components/text";

const CompanyContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 54px;
`;

function TrustContent() {
  return (
    <GradientContainer>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        style={{ gap: "16px" }}
      >
        <ResText type="HEADLINE_1" color={Color.white} lineHeight={"150%"}>
          Trusted By
        </ResText>
        <CompanyContainer>
          <AriseHealthLogo />
          <AriseHealthLogo />
          <AriseHealthLogo />
          <AriseHealthLogo />
        </CompanyContainer>
      </Box>
    </GradientContainer>
  );
}

export default TrustContent;
