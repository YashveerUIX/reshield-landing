import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { Text } from "uikit";
import { TextPropTypes } from "uikit/text/types";
import { Font, fonts } from "uikit/text/typography";

type GradientTextProps = PropsWithChildren<
  {
    type?: Font;
    color?: string;
    defaultColor?: string;
    gradient?: string;
  } & Partial<TextPropTypes>
>;

type FontObj = {
  fontWeight?: number;
  fontSize?: number;
  lineHeight?: number;
};

const GradientTextWrapper = styled.span<{ gradient?: string }>`
  background: ${({ gradient }) => gradient || "transparent"};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
`;

const StyledText = styled(Text)<TextPropTypes>({
  margin: 0,
});

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  type,
  color,
  defaultColor,
  gradient,
  ...rest
}) => {
  const font: FontObj | undefined = type ? fonts[type] : undefined;

  return (
    <GradientTextWrapper gradient={gradient}>
      <span>
        <StyledText
          fontSize={font?.fontSize}
          fontWeight={font?.fontWeight}
          lineHeight={font?.lineHeight || "130%"}
          color={color || defaultColor}
          {...rest}
        >
          {children}
        </StyledText>
      </span>
    </GradientTextWrapper>
  );
};
