import React from "react";
import { useTheme, THEMES } from "./ThemeContext";

/**
 * Floating theme switcher. Place it once, right inside <ThemeProvider>,
 * outside/above your <Routes> — that way it shows on every page
 * (home, login, all dashboards) instead of being copy-pasted everywhere.
 *
 * Usage in App.jsx:
 *
 *   <ThemeProvider defaultTheme="brass">
 *     <ThemeSwitcher />
 *     <Routes> ... </Routes>
 *   </ThemeProvider>
 */
export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="control-dock">
      <div className="control-row">
        <div className="control-label">Theme</div>
        <div className="pills">
          {THEMES.map((t) => (
            <button
              key={t.id}
              className={theme === t.id ? "active" : ""}
              onClick={() => setTheme(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
