import React, { useState } from "react";
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
  const [open, setOpen] = useState(false); // mobile pe chhota button, tap karke khulta hai

  return (
    <div className={`control-dock ${open ? "open" : ""}`}>
      <button className="dock-toggle" onClick={() => setOpen(!open)} aria-label="Change theme">
        {open ? "✕" : "🎨"}
      </button>
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
