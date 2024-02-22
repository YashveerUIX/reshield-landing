import React, { PropsWithChildren } from "react";
import { Text } from "uikit";
import { TextPropTypes } from "uikit/text/types";
import { Font, fonts } from "uikit/text/typography";

type TextProps = PropsWithChildren<
  {
    type?: Font;
    color?: string;
    defaultColor?: string;
  } & Partial<TextPropTypes>
>;

type FontObj = { fontWeight: number; fontSize: number; lineHeight?: number };

export const ResText: React.FC<TextProps> = ({
  children,
  type,
  color,
  defaultColor,
  ...rest
}) => {
  const font: FontObj = type ? fonts[type] : ({} as FontObj);

  return (
    <Text
      fontSize={font?.fontSize}
      fontWeight={font?.fontWeight}
      lineHeight={font?.lineHeight || "130%"}
      color={color || defaultColor}
      {...rest}
    >
      {children}
    </Text>
  );
};
