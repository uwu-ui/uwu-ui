import React, { FC, useEffect } from "react";
import { css } from "@emotion/core";

import styled from "../../styles/styled";

interface ButtonProps {
  colors?: string;
}

const Button: FC<ButtonProps> = ({ colors, children }) => {
  useEffect(() => {
    console.log(colors);
  }, [colors]);

  return <StyledButton>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button(
  ({ theme }) => css`
    padding: 12px;
    border: 0;
    outline: none;
    appearance: none;
    background-color: ${theme.colors.primary600};
    color: white;
  `
);
