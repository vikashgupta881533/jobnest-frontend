import React from "react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {

  return (
    <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>

      {/* Brand */}
      <div className="brand">

        <div className="brand-logo">
          H
        </div>

        <div>
          <h2>HireFlow</h2>
          <p>Your career, elevated.</p>
        </div>

      </div>


      {/* Main Menu */}
      <div className="nav-title">
        MAIN MENU
      </div>

      <nav className="sidebar-nav">

        <a href="#" className="nav-item active">
          <span className="nav-icon">⌂</span>
          <span>Dashboard</span>
        </a>

        <a href="#" className="nav-item">
          <span className="nav-icon">♙</span>
          <span>My Profile</span>
        </a>

        <a href="#" className="nav-item">
          <span className="nav-icon">▤</span>
          <span>Applications</span>
          <span className="nav-badge">12</span>
        </a>

        <a href="#" className="nav-item">
          <span className="nav-icon">♡</span>
          <span>Saved Jobs</span>
          <span className="nav-badge">8</span>
        </a>

        <a href="#" className="nav-item">
          <span className="nav-icon">▱</span>
          <span>Resume</span>
        </a>

        <a href="#" className="nav-item">
          <span className="nav-icon">♢</span>
          <span>Job Alerts</span>
        </a>

      </nav>


      {/* Account */}
      <div className="account-title">
        ACCOUNT
      </div>

      <nav className="sidebar-nav">

        <a href="#" className="nav-item">
          <span className="nav-icon">⚙</span>
          <span>Settings</span>
        </a>

        <a href="#" className="nav-item">
          <span className="nav-icon">?</span>
          <span>Help Center</span>
        </a>

      </nav>


      {/* Upgrade Card */}
      <div className="upgrade-card">

        <div className="upgrade-icon">
          ✦
        </div>

        <h4>
          Unlock more opportunities
        </h4>

        <p>
          Make your profile stand out and get noticed by top companies.
        </p>

        <button>
          Explore Now →
        </button>

      </div>


      {/* User */}
      <div className="sidebar-user">

        <div className="avatar">
          DG
        </div>

        <div>
          <strong>Dhruv Gupta</strong>
          <span>Candidate</span>
        </div>

      </div>

    </aside>
  );
};

export default Sidebar;