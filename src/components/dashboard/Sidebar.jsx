import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

/**
 * navItems: [{ label: "Dashboard", to: "/CandidateDashboard" }, ...]
 *   - "to" diya ho toh real page-navigation (React Router Link)
 *   - "to" na ho toh normal <a> (Admin/Recruiter abhi single-page hain, unke liye "href" use hota hai)
 */
export default function Sidebar({ roleLabel, navItems, footerTitle, footerSub }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <div className="brand">Meridian</div>
      <div className="brand-role">{roleLabel}</div>
      <ul className="nav">
        {navItems.map((item) => (
          <li key={item.label}>
            {item.to ? (
              <Link to={item.to} className={location.pathname === item.to ? "active" : ""}>
                <span className="dot"></span>
                {item.label}
              </Link>
            ) : (
              <a href={item.href || "#"} className={item.active ? "active" : ""}>
                <span className="dot"></span>
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
      <div className="sidebar-foot">
        {footerTitle}
        <br />
        {footerSub}
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </aside>
  );
}
