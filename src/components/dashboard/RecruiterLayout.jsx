import React, { useState, useEffect, useRef } from "react";
import useTableLabels from "./useTableLabels";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import api from "../../api/axios";

const navItems = [
  { label: "Dashboard", to: "/RecruiterDashboard" },
  { label: "Post a job", to: "/RecruiterDashboard/post-job" },
  { label: "My listings", to: "/RecruiterDashboard/listings" },
  { label: "Applicants", to: "/RecruiterDashboard/applicants" },
  { label: "Pipeline", to: "/RecruiterDashboard/pipeline" },
  { label: "Messages", to: "/RecruiterDashboard/messages" },
  { label: "Company profile", to: "/RecruiterDashboard/profile" },
];

export default function RecruiterLayout() {
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
        roleLabel="Recruiter"
        navItems={navItems}
        footerTitle="Logged in as"
        footerSub={profile?.companyName || profile?.name || "Recruiter"}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
      <main className="main" ref={mainRef}>
        <Topbar
          searchPlaceholder="Search candidates by skill, role, location"
          initials={profile?.name ? profile.name[0].toUpperCase() : "R"}
          name={profile?.name || "Recruiter"}
          subtitle={profile?.companyName || "Recruiter"}
          photo={profile?.profilePhoto}
          profilePath="/RecruiterDashboard/profile"
          onMenuClick={() => setMobileOpen(true)}
        />

        {profile && !profile.isApproved && (
          <div className="panel" style={{ marginBottom: 20, borderColor: "var(--rust)" }}>
            <p style={{ margin: 0, color: "var(--rust)" }}>
              Your recruiter account is awaiting admin approval — you will be able to post jobs once approved.
            </p>
          </div>
        )}

        <Outlet />
      </main>
    </div>
  );
}
