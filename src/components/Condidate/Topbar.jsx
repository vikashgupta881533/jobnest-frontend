import React from "react";

const Topbar = ({ setSidebarOpen }) => {

  return (
    <header className="topbar">

      {/* Mobile Menu */}
      <button
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(true)}
      >
        ☰
      </button>


      {/* Search */}
      <div className="search-box">

        <span className="search-icon">
          ⌕
        </span>

        <input
          type="text"
          placeholder="Search jobs, companies or skills..."
        />

        <span className="search-shortcut">
          ⌘ K
        </span>

      </div>


      {/* Right Actions */}
      <div className="topbar-actions">

        <button className="top-action">
          ♡
          <span>3</span>
        </button>

        <button className="top-action">
          ♧
          <span>5</span>
        </button>


        <div className="top-user">

          <div className="top-avatar">
            DG
          </div>

          <div className="top-user-info">
            <strong>Dhruv Gupta</strong>
            <small>Frontend Developer</small>
          </div>

          <span className="top-arrow">
            V
          </span>

        </div>

      </div>

    </header>
  );
};

export default Topbar;