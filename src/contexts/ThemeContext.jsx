import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeWrapper = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeWrapper, ThemeContext };
