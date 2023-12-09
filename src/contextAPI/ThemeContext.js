import React, { Children, createContext, useState } from "react";
import { themeColors as theme } from "../templates/themes/colors";

export const ThemeContext = createContext();

export const ThemeContextWrapper = ({ children }) => {
  const [themeColors, setThemeColors] = useState(theme);
  const [currentTheme, setCurrentTheme] = useState(theme[6]);

  return (
    <ThemeContext.Provider
      value={{ themeColors, setThemeColors, currentTheme, setCurrentTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
