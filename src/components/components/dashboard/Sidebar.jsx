import React from "react";

/**
 * navItems: [{ label: "Overview", active: true }, ...]
 * footer: "Admin · Priya Nair" (or two lines via footerSub)
 */
export default function Sidebar({ roleLabel, navItems, footerTitle, footerSub }) {
  return (
    <aside className="sidebar">
      <div className="brand">Meridian</div>
      <div className="brand-role">{roleLabel}</div>
      <ul className="nav">
        {navItems.map((item) => (
          <li key={item.label}>
            <a href="#" className={item.active ? "active" : ""}>
              <span className="dot"></span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="sidebar-foot">
        {footerTitle}
        <br />
        {footerSub}
      </div>
    </aside>
  );
}
