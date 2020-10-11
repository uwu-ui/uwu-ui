import { BaseColor, Color } from "./types";

const baseColor: BaseColor = {
  white: "#ffffff",
  black: "#000000",
  primary50: "#FAECF3",
  primary100: "#F8E5EF",
  primary200: "#F1CDE3",
  primary300: "#D6A6C8",
  primary400: "#AE7DA4",
  primary500: "#794C74",
  primary600: "#683767",
  primary700: "#532657",
  primary800: "#3E1846",
  primary900: "#2E0E3A"
};

const color: Color = {
  ...baseColor
};

export default color;
