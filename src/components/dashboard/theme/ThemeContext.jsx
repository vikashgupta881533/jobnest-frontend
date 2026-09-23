import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

// Available themes. Add more here later if needed — just add a matching
// [data-theme="name"] block in App.css with the same CSS variables.
export const THEMES = [
  { id: "brass", label: "Brass" },
  { id: "midnight", label: "Midnight" },
  { id: "emerald", label: "Emerald" },
];

export function ThemeProvider({ children, defaultTheme = "brass" }) {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* data-theme drives all CSS variables defined in App.css.
          Every component under this div automatically inherits the
          right colors — no per-component theme logic needed. */}
      <div data-theme={theme} className="theme-root">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
