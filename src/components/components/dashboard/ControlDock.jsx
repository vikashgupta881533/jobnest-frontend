import React from "react";
import { THEMES } from "./theme/ThemeContext";

const ROLES = [
  { id: "admin", label: "Admin" },
  { id: "recruiter", label: "Recruiter" },
  { id: "candidate", label: "Candidate" },
];

export default function ControlDock({ role, setRole, theme, setTheme }) {
  return (
    <div className="control-dock">
      <div className="control-row">
        <div className="control-label">Role</div>
        <div className="pills">
          {ROLES.map((r) => (
            <button key={r.id} className={role === r.id ? "active" : ""} onClick={() => setRole(r.id)}>
              {r.label}
            </button>
          ))}
        </div>
      </div>
      <div className="control-row">
        <div className="control-label">Theme</div>
        <div className="pills">
          {THEMES.map((t) => (
            <button key={t.id} className={theme === t.id ? "active" : ""} onClick={() => setTheme(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
