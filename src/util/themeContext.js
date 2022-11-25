
import React from 'react';

const ThemeContext = React.createContext(false);

const ThemeProvider = ({ children }) => {
  const [ theme, setTheme ] = React.useState(true);

  const toggleTheme = () => {
    setTheme(!theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider };