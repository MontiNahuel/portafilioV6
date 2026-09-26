import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Inicializamos leyendo el localStorage o por defecto 'v2'
  const [themeVersion, setThemeVersion] = useState(() => {
    const saved = localStorage.getItem("portfolio_theme_version");
    return saved ? saved : "v2";
  });

  useEffect(() => {
    localStorage.setItem("portfolio_theme_version", themeVersion);
    if (themeVersion === "v2") {
      document.documentElement.classList.add("theme-v2");
    } else {
      document.documentElement.classList.remove("theme-v2");
    }
  }, [themeVersion]);

  const toggleThemeVersion = () => {
    setThemeVersion((prev) => (prev === "v1" ? "v2" : "v1"));
  };

  const isV2 = themeVersion === "v2";

  return (
    <ThemeContext.Provider value={{ themeVersion, toggleThemeVersion, isV2 }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe usarse dentro de un ThemeProvider");
  }
  return context;
}
