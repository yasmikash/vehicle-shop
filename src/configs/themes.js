import { colors, extendTheme } from "@vechaiui/react";

const light = {
  id: "light",
  type: "light",
  colors: {
    primary: colors.purple,
    neutral: colors.gray,
  },
};

export const lightTheme = extendTheme({
  cursor: "pointer",
  colorSchemes: {
    light,
  },
});
