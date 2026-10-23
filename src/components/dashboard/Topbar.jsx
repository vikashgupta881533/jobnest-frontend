import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { SearchIcon, BellIcon } from "./icons";
import api from "../../api/axios";

const authHeader = () => ({ headers: { authorization: localStorage.getItem("token") } });

export default function Topbar({ searchPlaceholder, initials, name, subtitle, photo, onMenuClick, profilePath }) {
  const [open, setOpen] = useState(false);           // profile dropdown
  const [notifOpen, setNotifOpen] = useState(false);  // notifications dropdown
  const [notifications, setNotifications] = useState([]);
  const menuRef = useRef(null);
  const notifRef = useRef(null);
  const navigate = useNavigate();

  const unreadCount = notifications.filter((n) => !n.read).length;

  const fetchNotifications = () => {
    api.get("/notifications", authHeader())
      .then((res) => setNotifications(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30000); // poll every 30s
    return () => clearInterval(interval);
  }, []);

  // dropdowns ke bahar click karte hi band ho jayein
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
      if (notifRef.current && !notifRef.current.contains(e.target)) setNotifOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    navigate("/login");
  };

  const handleNotifClick = (n) => {
    api.patch(`/notifications/${n._id}/read`, {}, authHeader())
      .then(() => fetchNotifications())
      .catch((err) => console.log(err));
    setNotifOpen(false);
    if (n.link) navigate(n.link);
  };

  const handleMarkAllRead = () => {
    api.patch("/notifications/read-all", {}, authHeader())
      .then(() => fetchNotifications())
      .catch((err) => console.log(err));
  };

  const timeAgo = (dateString) => {
    const mins = Math.floor((Date.now() - new Date(dateString)) / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    return `${Math.floor(hrs / 24)}d ago`;
  };

  return (
    <div className="topbar">
      <button className="mobile-menu-btn" onClick={onMenuClick} aria-label="Open menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <div className="search">
        <SearchIcon />
        {searchPlaceholder}
      </div>
      <div className="topbar-right">
        <div className="who-wrap" ref={notifRef}>
          <button className="bell bell-btn" onClick={() => setNotifOpen(!notifOpen)} aria-label="Notifications">
            <BellIcon />
            {unreadCount > 0 && <span className="pip"></span>}
          </button>

          {notifOpen && (
            <div className="who-dropdown notif-dropdown">
              <div className="notif-head">
                <span>Notifications</span>
                {unreadCount > 0 && (
                  <button className="notif-markall" onClick={handleMarkAllRead}>Mark all read</button>
                )}
              </div>
              {notifications.length === 0 && (
                <div className="who-dropdown-item" style={{ color: "var(--muted-2)", cursor: "default" }}>
                  No notifications yet
                </div>
              )}
              {notifications.map((n) => (
                <button
                  key={n._id}
                  className={`notif-item ${!n.read ? "notif-unread" : ""}`}
                  onClick={() => handleNotifClick(n)}
                >
                  <div className="notif-text">{n.text}</div>
                  <div className="notif-time">{timeAgo(n.createdAt)}</div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="who-wrap" ref={menuRef}>
          <button className="who" onClick={() => setOpen(!open)}>
            {photo ? (
              <img src={`${photo}`} alt="profile" className="avatar-img" />
            ) : (
              <div className="avatar">{initials}</div>
            )}
            <div className="meta">
              <div className="name">{name}</div>
              <div className="sub">{subtitle}</div>
            </div>
          </button>

          {open && (
            <div className="who-dropdown">
              <Link to={profilePath} className="who-dropdown-item" onClick={() => setOpen(false)}>
                Profile
              </Link>
              <button className="who-dropdown-item who-dropdown-danger" onClick={handleLogout}>
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
