import React, { useState, useEffect, useRef } from "react";
import useTableLabels from "./useTableLabels";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import api from "../../api/axios";

const navItems = [
  { label: "Overview", to: "/AdminDashboard" },
  { label: "Recruiters", to: "/AdminDashboard/recruiters" },
  { label: "Job listings", to: "/AdminDashboard/jobs" },
  { label: "Profile", to: "/AdminDashboard/profile" },
];

export default function AdminLayout() {
  const [profile, setProfile] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mainRef = useRef(null);
  useTableLabels(mainRef);

  useEffect(() => {
    api.get("/profile", {
      headers: { authorization: localStorage.getItem("token") },
    })
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <Sidebar
        roleLabel="Admin console"
        navItems={navItems}
        footerTitle="Logged in as"
        footerSub={profile?.name || "Admin"}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
      <main className="main" ref={mainRef}>
        <Topbar
          searchPlaceholder="Search users, companies, job listings"
          initials={profile?.name ? profile.name[0].toUpperCase() : "A"}
          name={profile?.name || "Admin"}
          subtitle="Platform admin"
          photo={profile?.profilePhoto}
          profilePath="/AdminDashboard/profile"
          onMenuClick={() => setMobileOpen(true)}
        />
        <Outlet />
      </main>
    </div>
  );
}
