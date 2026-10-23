import React, { useState, useEffect } from "react";
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
      />
      <main className="main">
        <Topbar
          searchPlaceholder="Search users, companies, job listings"
          initials={profile?.name ? profile.name[0].toUpperCase() : "A"}
          name={profile?.name || "Admin"}
          subtitle="Platform admin"
          photo={profile?.profilePhoto}
          profilePath="/AdminDashboard/profile"
        />
        <Outlet />
      </main>
    </div>
  );
}
