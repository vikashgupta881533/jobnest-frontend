import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Hero from "../../components/dashboard/Hero";
import StatCard from "../../components/dashboard/StatCard";
import { UsersIcon, ShieldCheckIcon, BriefcaseIcon, TrendingUpIcon } from "../../components/dashboard/icons";
import api from "../../api/axios";

const authHeader = () => ({ headers: { authorization: localStorage.getItem("token") } });

export default function AdminOverview() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get("/admin/stats", authHeader())
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Hero
        title="Platform overview"
        subtitle="Here is how the marketplace is performing across job seekers, recruiters and listings."
        metricValue={stats ? String(stats.pendingRecruiters + stats.pendingJobs) : "—"}
        metricLabel="items waiting for your review"
      />

      <div className="stats">
        <StatCard label="Candidates" icon={<UsersIcon />} value={stats ? stats.totalCandidates : "—"} />
        <StatCard label="Recruiters" icon={<ShieldCheckIcon />} value={stats ? stats.totalRecruiters : "—"} />
        <StatCard label="Live job listings" icon={<BriefcaseIcon />} value={stats ? stats.liveJobs : "—"} />
        <StatCard label="Pending approvals" icon={<TrendingUpIcon />} value={stats ? stats.pendingRecruiters + stats.pendingJobs : "—"} />
      </div>

      <div className="grid">
        <div className="panel">
          <h2>Recruiter approvals</h2>
          <p className="panel-sub">
            {stats ? `${stats.pendingRecruiters} recruiter account(s) waiting for approval.` : "Loading..."}
          </p>
          <Link to="/AdminDashboard/recruiters" className="btn-mini">Review recruiters</Link>
        </div>
        <div className="panel">
          <h2>Job listings</h2>
          <p className="panel-sub">
            {stats ? `${stats.pendingJobs} job listing(s) waiting for review.` : "Loading..."}
          </p>
          <Link to="/AdminDashboard/jobs" className="btn-mini">Review job listings</Link>
        </div>
      </div>
    </>
  );
}
