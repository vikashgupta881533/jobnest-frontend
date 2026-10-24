import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

/**
 * navItems: [{ label: "Dashboard", to: "/CandidateDashboard" }, ...]
 *   - "to" diya ho toh real page-navigation (React Router Link)
 *   - "to" na ho toh normal <a> (Admin/Recruiter abhi single-page hain, unke liye "href" use hota hai)
 */
export default function Sidebar({ roleLabel, navItems, footerTitle, footerSub, mobileOpen = false, onClose = () => {} }) {
  const navigate = useNavigate();
  const location = useLocation();

  // page badalte hi mobile drawer band ho jaye
  useEffect(() => {
    onClose();
  }, [location.pathname]);

  // drawer khula ho to peeche ka page scroll na ho
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    navigate("/login");
  };

  return (
    <>
    <div className={`sidebar-backdrop ${mobileOpen ? "show" : ""}`} onClick={onClose}></div>
    <aside className={`sidebar ${mobileOpen ? "mobile-open" : ""}`}>
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
    </>
  );
}
