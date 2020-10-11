import React from "react";
import { ThemeProvider } from "emotion-theming";
import { theme } from "@uwu-ui/themes";

const withTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);

export const decorators = [withTheme];
