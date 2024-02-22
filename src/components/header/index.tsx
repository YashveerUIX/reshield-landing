import React from "react";
import styled from "styled-components";
import { Box, Text } from "uikit";

import Button from "components/button";
import { ResText } from "components/text";

const HeaderRow = styled(Box)`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 120px;
`;

const LogoContainer = styled(Box)``;

const NavRow = styled(Box)`
  display: flex;
  gap: 32px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: fit-content;
`;

const NavButtons = styled.a``;

function Header() {
  return (
    <Box
      style={{
        background:
          "linear-gradient(to bottom, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 0.01) 100%)",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 4,
      }}
    >
      <HeaderRow>
        <LogoContainer>Reshield</LogoContainer>
        <NavRow>
          <NavButtons href="#">
            <ResText type="BODY_2" color={"commonTextBlack"}>
              Menu
            </ResText>
          </NavButtons>
          <NavButtons href="#">
            <ResText type="BODY_2" color={"commonTextBlack"}>
              Contact Us
            </ResText>
          </NavButtons>
          <Button variant="primary">
            <ResText type="BUTTON_1">Sign In</ResText>
          </Button>
        </NavRow>
      </HeaderRow>
    </Box>
  );
}

export default Header;
