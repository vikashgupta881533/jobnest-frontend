import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Hero from "./Hero";
import StatCard from "./StatCard";
import Badge from "./Badge";
import { BriefcaseIcon, UsersIcon, CalendarIcon, ClockIcon } from "./icons";

const navItems = [
  { label: "Dashboard", active: true },
  { label: "Post a job" },
  { label: "Candidate search" },
  { label: "My listings" },
  { label: "Pipeline" },
  { label: "Company profile" },
];

const pipeline = [
  { name: "New", count: 48, fill: 100, candidates: [
    { name: "Arjun Verma", role: "Backend Engineer" },
    { name: "Meera Iyer", role: "Backend Engineer" },
  ]},
  { name: "Shortlisted", count: 22, fill: 46, candidates: [
    { name: "Devansh Rao", role: "QA Lead" },
    { name: "Sana Qureshi", role: "Backend Engineer" },
  ]},
  { name: "Interview", count: 9, fill: 19, candidates: [
    { name: "Karthik Nair", role: "QA Lead" },
  ]},
  { name: "Offer", count: 3, fill: 6, candidates: [
    { name: "Isha Kapoor", role: "Growth Marketer" },
  ]},
  { name: "Hired", count: 1, fill: 2, candidates: [
    { name: "Rohan Das", role: "Growth Marketer" },
  ]},
];

const listings = [
  { role: "Backend Engineer", location: "Bengaluru", applicants: 128, posted: "12 days ago", status: "approved", statusText: "Live" },
  { role: "QA Lead", location: "Pune", applicants: 64, posted: "6 days ago", status: "approved", statusText: "Live" },
  { role: "Growth Marketer", location: "Remote", applicants: 22, posted: "2 days ago", status: "pending", statusText: "Under review" },
];

export default function RecruiterDashboard() {
  return (
    <div className="app">
      <Sidebar
        roleLabel="Recruiter"
        navItems={navItems}
        footerTitle="Logged in as"
        footerSub="Talent @ Meridian Corp"
      />
      <main className="main">
        <Topbar
          searchPlaceholder="Search candidates by skill, role, location"
          initials="TM"
          name="Tara Mehta"
          subtitle="Meridian Corp"
        />

        <Hero
          title="Hiring overview"
          subtitle="Three roles are actively hiring across your team. Two candidates are waiting on your feedback."
          metricValue="18d"
          metricLabel="average time to hire, 2 days faster"
        />

        <div className="stats">
          <StatCard label="Open roles" icon={<BriefcaseIcon />} value="3" delta="1 posted this week" deltaType="up" />
          <StatCard label="Total applicants" icon={<UsersIcon />} value="214" delta="▲ 18 today" deltaType="up" spark="0,17 10,14 20,15 30,10 40,11 50,6 60,4" />
          <StatCard label="Interviews this week" icon={<CalendarIcon />} value="12" delta="4 unconfirmed" deltaType="up" />
          <StatCard label="Avg. time to hire" icon={<ClockIcon />} value="18 days" delta="▼ 2 days faster" deltaType="down" spark="0,4 10,7 20,6 30,10 40,9 50,14 60,17" />
        </div>

        <div className="pipeline">
          {pipeline.map((stage) => (
            <div className="stage" key={stage.name}>
              <div className="stage-head">
                <div className="name">{stage.name}</div>
                <div className="count">{stage.count}</div>
              </div>
              <div className="stage-bar"><i style={{ width: `${stage.fill}%` }}></i></div>
              {stage.candidates.map((c) => (
                <div className="cand-card" key={c.name}>
                  <div className="cn">{c.name}</div>
                  <div className="cr">{c.role}</div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="panel">
          <h2>Your active listings</h2>
          <p className="panel-sub">Roles currently open for applications</p>
          <table>
            <thead>
              <tr><th>Role</th><th>Location</th><th>Applicants</th><th>Posted</th><th>Status</th></tr>
            </thead>
            <tbody>
              {listings.map((l) => (
                <tr key={l.role}>
                  <td className="cell-strong">{l.role}</td>
                  <td>{l.location}</td>
                  <td>{l.applicants}</td>
                  <td>{l.posted}</td>
                  <td><Badge type={l.status}>{l.statusText}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
