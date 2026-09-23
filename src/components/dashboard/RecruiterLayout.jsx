import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

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

  useEffect(() => {
    axios.get("http://localhost:6100/profile", {
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
      />
      <main className="main">
        <Topbar
          searchPlaceholder="Search candidates by skill, role, location"
          initials={profile?.name ? profile.name[0].toUpperCase() : "R"}
          name={profile?.name || "Recruiter"}
          subtitle={profile?.companyName || "Recruiter"}
          photo={profile?.profilePhoto}
          profilePath="/RecruiterDashboard/profile"
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
