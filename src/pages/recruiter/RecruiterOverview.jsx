import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../../components/dashboard/Hero";
import StatCard from "../../components/dashboard/StatCard";
import { BriefcaseIcon, UsersIcon, CalendarIcon, ClockIcon } from "../../components/dashboard/icons";
import api from "../../api/axios";

const authHeader = () => ({ headers: { authorization: localStorage.getItem("token") } });

export default function RecruiterOverview() {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    api.get("/jobs/my", authHeader())
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));

    api.get("/applications/recruiter", authHeader())
      .then((res) => setApplications(res.data))
      .catch((err) => console.log(err));
  }, []);

  const interviewCount = applications.filter((a) => a.status === "interview").length;
  const hired = applications.filter((a) => a.status === "hired");

  // hired candidates ke liye: applied hone se hire hone tak kitne din lage, uska average
  let avgTimeToHire = "—";
  if (hired.length > 0) {
    const totalDays = hired.reduce((sum, a) => {
      const days = (new Date(a.updatedAt) - new Date(a.createdAt)) / (1000 * 60 * 60 * 24);
      return sum + days;
    }, 0);
    avgTimeToHire = `${Math.round(totalDays / hired.length)} days`;
  }

  return (
    <>
      <Hero
        title="Hiring overview"
        subtitle="Manage your job postings and track applicants across all your roles."
        metricValue={String(applications.length)}
        metricLabel="total applicants across all jobs"
      />

      <div className="stats">
        <StatCard label="Open roles" icon={<BriefcaseIcon />} value={jobs.length} />
        <StatCard label="Total applicants" icon={<UsersIcon />} value={applications.length} />
        <StatCard label="Interviews scheduled" icon={<CalendarIcon />} value={interviewCount} />
        <StatCard label="Avg. time to hire" icon={<ClockIcon />} value={avgTimeToHire} />
      </div>

      <div className="panel">
        <h2>Recent applicants</h2>
        <p className="panel-sub">Latest people who applied to your roles</p>
        <table>
          <thead>
            <tr><th>Candidate</th><th>Role</th><th>Applied</th><th>Status</th></tr>
          </thead>
          <tbody>
            {applications.length === 0 && (
              <tr><td colSpan="4">No applicants yet.</td></tr>
            )}
            {applications.slice(0, 6).map((a) => (
              <tr key={a._id}>
                <td className="cell-strong">{a.candidate?.name}</td>
                <td>{a.job?.title}</td>
                <td>{new Date(a.createdAt).toLocaleDateString()}</td>
                <td>{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
