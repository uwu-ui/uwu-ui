export interface BaseColor {
  white: string;
  black: string;
  primary50: string;
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  primary500: string;
  primary600: string;
  primary700: string;
  primary800: string;
  primary900: string;
}

export type Color = BaseColor;

export interface UwuUiThemeT {
  colors: Color;
}
