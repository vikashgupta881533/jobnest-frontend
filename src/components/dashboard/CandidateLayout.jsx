import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import api from "../../api/axios";

const navItems = [
  { label: "Dashboard", to: "/CandidateDashboard" },
  { label: "Jobs", to: "/CandidateDashboard/jobs" },
  { label: "My applications", to: "/CandidateDashboard/applications" },
  { label: "Saved jobs", to: "/CandidateDashboard/saved" },
  { label: "Profile", to: "/CandidateDashboard/profile" },
  { label: "Resume", to: "/CandidateDashboard/resume" },
];

// Ye layout Sidebar/Topbar sabhi candidate pages ke liye common rakhta hai.
// <Outlet /> ki jagah asli page (Overview/Applications/Saved/Profile/Resume) render hota hai.
export default function CandidateLayout() {
  const [profile, setProfile] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        roleLabel="Candidate"
        navItems={navItems}
        footerTitle="Logged in as"
        footerSub={profile?.name || "Candidate"}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
      <main className="main">
        <Topbar
          searchPlaceholder="Search jobs, companies, skills"
          initials={profile?.name ? profile.name[0].toUpperCase() : "C"}
          name={profile?.name || "Candidate"}
          subtitle={profile?.headline || "Job seeker"}
          photo={profile?.profilePhoto}
          profilePath="/CandidateDashboard/profile"
          onMenuClick={() => setMobileOpen(true)}
        />
        <Outlet />
      </main>
    </div>
  );
}
