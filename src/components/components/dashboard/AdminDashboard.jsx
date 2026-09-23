import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Hero from "./Hero";
import StatCard from "./StatCard";
import Badge from "./Badge";
import { UsersIcon, ShieldCheckIcon, BriefcaseIcon, TrendingUpIcon } from "./icons";

const navItems = [
  { label: "Overview", active: true },
  { label: "Users" },
  { label: "Recruiters" },
  { label: "Job listings" },
  { label: "Reports" },
  { label: "Settings" },
];

// Mock data — replace with real API data later.
const approvals = [
  { code: "SA", cls: "c1", company: "Solace Analytics", city: "Bengaluru", plan: "Growth", when: "2 hours ago", status: "pending", statusText: "Pending review" },
  { code: "NF", cls: "c2", company: "Northbridge Foods", city: "Pune", plan: "Standard", when: "Yesterday", status: "approved", statusText: "Approved" },
  { code: "KL", cls: "c3", company: "Kestrel Logistics", city: "Gurugram", plan: "Growth", when: "Yesterday", status: "rejected", statusText: "Documents missing" },
  { code: "FH", cls: "c4", company: "Farrow & Hale", city: "Mumbai", plan: "Enterprise", when: "2 days ago", status: "approved", statusText: "Approved" },
  { code: "VR", cls: "c1", company: "Vantage Retail Co.", city: "Hyderabad", plan: "Standard", when: "3 days ago", status: "pending", statusText: "Pending review" },
];

const flagged = [
  { title: '"Work from home — ₹80k/week"', note: "Reported for misleading pay claim" },
  { title: "Field Sales Associate", note: "Duplicate of an existing listing" },
  { title: "Data Entry — No experience", note: "Flagged: requests upfront payment" },
];

export default function AdminDashboard() {
  return (
    <div className="app">
      <Sidebar
        roleLabel="Admin console"
        navItems={navItems}
        footerTitle="Logged in as"
        footerSub="Admin · Priya Nair"
      />
      <main className="main">
        <Topbar
          searchPlaceholder="Search users, companies, job listings"
          initials="PN"
          name="Priya Nair"
          subtitle="Platform admin"
        />

        <Hero
          title="Platform overview"
          subtitle="Tuesday, 11 September. Here is how the marketplace is performing across job seekers, recruiters and listings."
          metricValue="₹18.4L"
          metricLabel="revenue this month, up 6.7%"
        />

        <div className="stats">
          <StatCard label="Active job seekers" icon={<UsersIcon />} value="84,210" delta="▲ 3.2%" deltaType="up" spark="0,18 10,15 20,16 30,10 40,12 50,5 60,3" />
          <StatCard label="Verified recruiters" icon={<ShieldCheckIcon />} value="2,140" delta="▲ 1.1%" deltaType="up" spark="0,10 10,12 20,8 30,11 40,9 50,7 60,6" />
          <StatCard label="Live job listings" icon={<BriefcaseIcon />} value="9,430" delta="▼ 0.4%" deltaType="down" spark="0,6 10,9 20,7 30,12 40,10 50,15 60,16" />
          <StatCard label="Monthly revenue" icon={<TrendingUpIcon />} value="₹18.4L" delta="▲ 6.7%" deltaType="up" spark="0,18 10,14 20,15 30,9 40,10 50,4 60,2" />
        </div>

        <div className="grid">
          <div className="panel">
            <h2>Recent recruiter approvals</h2>
            <p className="panel-sub">Companies awaiting or recently granted posting access</p>
            <table>
              <thead>
                <tr><th>Company</th><th>Plan</th><th>Submitted</th><th>Status</th></tr>
              </thead>
              <tbody>
                {approvals.map((a) => (
                  <tr key={a.company}>
                    <td>
                      <div className="row-flex">
                        <div className={`mini-avatar ${a.cls}`}>{a.code}</div>
                        <div>
                          <div className="cell-strong">{a.company}</div>
                          <div className="cell-sub">{a.city}</div>
                        </div>
                      </div>
                    </td>
                    <td>{a.plan}</td>
                    <td>{a.when}</td>
                    <td><Badge type={a.status}>{a.statusText}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="panel">
              <h2>Flagged listings</h2>
              <p className="panel-sub">Reported by candidates, needs review</p>
              {flagged.map((f) => (
                <div className="list-item" key={f.title}>
                  <div>
                    <div className="t">{f.title}</div>
                    <div className="d">{f.note}</div>
                  </div>
                  <button className="btn-mini">Review</button>
                </div>
              ))}
            </div>

            <div className="panel">
              <h2>Platform health</h2>
              <p className="panel-sub">Last 24 hours</p>
              <div className="list-item"><div><div className="t">Uptime</div></div><div className="cell-strong">99.98%</div></div>
              <div className="list-item"><div><div className="t">Avg response time</div></div><div className="cell-strong">184ms</div></div>
              <div className="list-item"><div><div className="t">Open support tickets</div></div><div className="cell-strong">27</div></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
