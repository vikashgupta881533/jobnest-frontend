import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Hero from "./Hero";
import StatCard from "./StatCard";
import Badge from "./Badge";
import { EyeIcon, SendIcon, CalendarIcon } from "./icons";

const navItems = [
  { label: "Dashboard", active: true },
  { label: "My applications" },
  { label: "Saved jobs" },
  { label: "Messages" },
  { label: "Profile" },
  { label: "Resume" },
];

const applications = [
  { role: "Senior Product Designer", company: "Solace Analytics", applied: "Sep 2", status: "interview", statusText: "Interview" },
  { role: "Product Designer II", company: "Northbridge Foods", applied: "Aug 29", status: "shortlisted", statusText: "Shortlisted" },
  { role: "UX Designer", company: "Kestrel Logistics", applied: "Aug 24", status: "applied", statusText: "Applied" },
  { role: "Design Lead", company: "Farrow & Hale", applied: "Aug 20", status: "rejected", statusText: "Not selected" },
  { role: "Product Designer", company: "Vantage Retail Co.", applied: "Aug 14", status: "offer", statusText: "Offer" },
];

const recommended = [
  { role: "Lead Product Designer", company: "Aster Health · Bengaluru", match: "91% match", pay: "₹28–34L", type: "Full-time" },
  { role: "Senior UX Designer", company: "Northbridge Foods · Remote", match: "86% match", pay: "₹22–26L", type: "Full-time" },
  { role: "Design Systems Lead", company: "Kestrel Logistics · Pune", match: "78% match", pay: "₹24–30L", type: "Hybrid" },
];

export default function CandidateDashboard() {
  return (
    <div className="app">
      <Sidebar
        roleLabel="Candidate"
        navItems={navItems}
        footerTitle="Logged in as"
        footerSub="Rhea Sharma"
      />
      <main className="main">
        <Topbar
          searchPlaceholder="Search jobs, companies, skills"
          initials="RS"
          name="Rhea Sharma"
          subtitle="Product designer"
        />

        <Hero
          title="Welcome back, Rhea"
          subtitle="Your profile is 82% complete. Finish it to appear in more recruiter searches this week."
          metricValue="2"
          metricLabel="interviews scheduled, next Friday 3pm"
        />

        <div className="stats">
          <StatCard label="Profile views" icon={<EyeIcon />} value="47" delta="▲ 12 this week" deltaType="up" spark="0,18 10,15 20,13 30,10 40,9 50,5 60,3" />
          <StatCard label="Applications sent" icon={<SendIcon />} value="9" delta="2 this week" deltaType="up" spark="0,15 10,14 20,12 30,13 40,9 50,8 60,6" />
          <StatCard label="Interviews scheduled" icon={<CalendarIcon />} value="2" delta="Next: Fri, 3pm" deltaType="up" />
          <StatCard label="Profile strength" ring percent={82} ringSub="3 items left" />
        </div>

        <div className="grid">
          <div className="panel">
            <h2>Application status</h2>
            <p className="panel-sub">Where each of your applications currently stands</p>
            <table>
              <thead>
                <tr><th>Role</th><th>Company</th><th>Applied</th><th>Stage</th></tr>
              </thead>
              <tbody>
                {applications.map((a) => (
                  <tr key={a.role}>
                    <td className="cell-strong">{a.role}</td>
                    <td>{a.company}</td>
                    <td>{a.applied}</td>
                    <td><Badge type={a.status}>{a.statusText}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="panel">
              <h2>Recommended for you</h2>
              <p className="panel-sub">Based on your profile and recent searches</p>
              {recommended.map((j) => (
                <div className="job-card" key={j.role}>
                  <div className="top">
                    <div>
                      <div className="role">{j.role}</div>
                      <div className="co">{j.company}</div>
                    </div>
                    <div className="match">{j.match}</div>
                  </div>
                  <div className="meta"><span>{j.pay}</span><span>{j.type}</span></div>
                </div>
              ))}
            </div>

            <div className="panel">
              <h2>Complete your profile</h2>
              <ul className="checklist">
                <li><span className="check done">✓</span> Resume uploaded</li>
                <li><span className="check done">✓</span> Skills added</li>
                <li className="todo-text"><span className="check todo"></span> Add work experience</li>
                <li className="todo-text"><span className="check todo"></span> Verify phone number</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
