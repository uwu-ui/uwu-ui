import React, { FC } from "react";
import { ThemeProvider } from "emotion-theming";

import { theme } from "@uwu-ui/themes";

const UwuUiThemeProvider: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default UwuUiThemeProvider;
