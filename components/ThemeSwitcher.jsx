// components/ThemeToggle.js
import React, { useContext } from "react";

const ThemeContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeSwitcher = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const themeClass = darkMode ? "dark" : "light";

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, themeClass }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeSwitcher;
