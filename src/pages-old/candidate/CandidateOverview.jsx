import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Hero from "../../components/dashboard/Hero";
import StatCard from "../../components/dashboard/StatCard";
import { EyeIcon, SendIcon, CalendarIcon } from "../../components/dashboard/icons";

const authHeader = () => ({ headers: { authorization: localStorage.getItem("token") } });

export default function CandidateOverview() {
  const [jobs, setJobs] = useState([]);
  const [myApplications, setMyApplications] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [search, setSearch] = useState("");

  const fetchJobs = () => {
    axios.get("http://localhost:6100/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));
  };

  const fetchMyApplications = () => {
    axios.get("http://localhost:6100/applications/my", authHeader())
      .then((res) => setMyApplications(res.data))
      .catch((err) => console.log(err));
  };

  const fetchSavedJobs = () => {
    axios.get("http://localhost:6100/jobs/saved", authHeader())
      .then((res) => setSavedJobs(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchJobs();
    fetchMyApplications();
    fetchSavedJobs();
  }, []);

  const handleApply = (jobId) => {
    axios.post("http://localhost:6100/applications", { jobId }, authHeader())
      .then(() => { alert("Applied!"); fetchMyApplications(); })
      .catch((err) => { alert("Failed to apply, please try again"); console.log(err); });
  };

  const handleToggleSave = (jobId) => {
    axios.post(`http://localhost:6100/jobs/${jobId}/save`, {}, authHeader())
      .then(() => fetchSavedJobs())
      .catch((err) => console.log(err));
  };

  const isSaved = (jobId) => savedJobs.some((j) => j._id === jobId);
  const alreadyApplied = (jobId) => myApplications.some((a) => a.job && a.job._id === jobId);
  const interviewCount = myApplications.filter((a) => a.status === "interview").length;

  const filteredJobs = jobs.filter((job) => {
    const q = search.toLowerCase();
    return (
      job.title.toLowerCase().includes(q) ||
      job.company.toLowerCase().includes(q) ||
      (job.location || "").toLowerCase().includes(q)
    );
  });

  return (
    <>
      <Hero
        title="Welcome back"
        subtitle="Browse open roles and keep track of every application you send."
        metricValue={String(interviewCount)}
        metricLabel="interviews in progress"
      />

      <div className="stats">
        <StatCard label="Jobs available" icon={<EyeIcon />} value={jobs.length} />
        <StatCard label="Applications sent" icon={<SendIcon />} value={myApplications.length} />
        <StatCard label="Interviews scheduled" icon={<CalendarIcon />} value={interviewCount} />
      </div>

      <div className="panel">
        <h2>Browse open jobs</h2>
        <input
          placeholder="Search by title, company, location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 16 }}
        />
        {filteredJobs.length === 0 && <p>No jobs found.</p>}
        {filteredJobs.map((job) => (
          <div className="job-card" key={job._id}>
            <div className="top">
              <div>
                <div className="role">{job.title}</div>
                <div className="co">{job.company} · {job.location || "Location N/A"}</div>
              </div>
            </div>
            <div className="meta">
              <span>{job.type}</span>
              {job.salaryMin && job.salaryMax && <span>₹{job.salaryMin}–{job.salaryMax}</span>}
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
              <Link to={`/CandidateDashboard/job/${job._id}`} className="btn-mini">View details</Link>
              <button
                className="btn-mini"
                disabled={alreadyApplied(job._id)}
                onClick={() => handleApply(job._id)}
              >
                {alreadyApplied(job._id) ? "Applied" : "Apply"}
              </button>
              <button className="btn-mini" onClick={() => handleToggleSave(job._id)}>
                {isSaved(job._id) ? "★ Saved" : "☆ Save"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
