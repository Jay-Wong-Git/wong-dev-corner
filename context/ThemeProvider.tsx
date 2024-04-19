"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
  preferDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "system");
  const [preferDark, setPreferDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (localStorage.getItem("theme") === "system" && preferDark)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode, preferDark]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (typeof window !== "undefined") setPreferDark(mediaQuery.matches);
    const handlePreferDark = () => setPreferDark(mediaQuery.matches);
    mediaQuery.addEventListener("change", handlePreferDark);
    return () => mediaQuery.removeEventListener("change", handlePreferDark);
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, setMode, preferDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
