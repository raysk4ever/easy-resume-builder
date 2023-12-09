import { useContext } from "react";
import { ThemeContext } from "../contextAPI/ThemeContext";
export const useTheme = () => {
  const { themeColors, currentTheme, setCurrentTheme } =
    useContext(ThemeContext);

  const handleOnThemeChange = (theme) => {
    let root = document.documentElement;
    root.style.setProperty("--themeColor", theme.color);
    setCurrentTheme(theme);
  };

  return {
    themeColors,
    currentTheme,
    setCurrentTheme,
    handleOnThemeChange,
  };
};
