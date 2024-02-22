import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { DefaultTheme, ThemedStyledProps } from "styled-components";
import { Color } from "uikit";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  variant?: "primary" | "secondary";
  styles?: React.CSSProperties;
  onClick?: () => void;
}

const getButtonStyles = (
  props: ThemedStyledProps<ButtonProps, DefaultTheme>
) => {
  switch (props.variant) {
    case "primary":
      return `
        background: ${Color.gradient};
        color: ${Color.white};
        ${getInterpolatedStyles(props.styles)}
      `;
    case "secondary":
      return `
        background: ${Color.white};
        color: ${Color.secondaryButtonBlue};
        ${getInterpolatedStyles(props.styles)}
      `;
    default:
      return `
        ${getInterpolatedStyles(props.styles)}
      `;
  }
};

const getInterpolatedStyles = (styles?: React.CSSProperties) => {
  if (!styles) return "";

  return Object.entries(styles)
    .map(([key, value]) => `${key}: ${value};`)
    .join(" ");
};

const StyledButton = styled.button<ButtonProps>`
  padding: 16px 32px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  ${getButtonStyles};
`;

const Button: React.FC<ButtonProps> = ({ children, ...restProps }) => {
  return <StyledButton {...restProps}>{children}</StyledButton>;
};

export default Button;
