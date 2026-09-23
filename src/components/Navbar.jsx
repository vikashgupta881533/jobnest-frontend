import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./site.css";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const dashboardPath =
    role === "admin" ? "/AdminDashboard" :
    role === "recruiter" ? "/RecruiterDashboard" :
    "/CandidateDashboard";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    navigate("/");
  };

  return (
    <>
      <nav className="mnavbar">
        <Link to="/" className="brand">Meridian<span>.</span></Link>
        <div className="nav-links">
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/for-employers">For Employers</Link>
          <Link to="/companies">Companies</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="nav-actions">
          {token ? (
            <>
              <Link to={dashboardPath} className="mbtn">Dashboard</Link>
              <button className="mbtn mbtn-solid" onClick={handleLogout}>Log out</button>
            </>
          ) : (
            <>
              <Link to="/login" className="mbtn">Log in</Link>
              <Link to="/signup" className="mbtn mbtn-solid">Sign up</Link>
            </>
          )}
        </div>
      </nav>

      <div className="ticker-bar">
        <div className="ticker-track">
          <span><span>🔥 128</span>new jobs added today</span>
          <span><span>42</span>companies hiring right now</span>
          <span><span>3,204</span>applications sent this week</span>
          <span><span>✓</span>every recruiter manually verified</span>
          <span><span>🔥 128</span>new jobs added today</span>
          <span><span>42</span>companies hiring right now</span>
          <span><span>3,204</span>applications sent this week</span>
          <span><span>✓</span>every recruiter manually verified</span>
        </div>
      </div>
    </>
  );
}
