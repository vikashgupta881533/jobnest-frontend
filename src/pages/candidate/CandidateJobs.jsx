import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import api from "../../api/axios";

const authHeader = () => ({ headers: { authorization: localStorage.getItem("token") } });

export default function CandidateJobs() {
  const [jobs, setJobs] = useState([]);
  const [myApplications, setMyApplications] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("all");
  const [type, setType] = useState("all");

  const fetchJobs = () => {
    api.get("/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));
  };

  const fetchMyApplications = () => {
    api.get("/applications/my", authHeader())
      .then((res) => setMyApplications(res.data))
      .catch((err) => console.log(err));
  };

  const fetchSavedJobs = () => {
    api.get("/jobs/saved", authHeader())
      .then((res) => setSavedJobs(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchJobs();
    fetchMyApplications();
    fetchSavedJobs();
  }, []);

  const handleApply = (jobId) => {
    api.post("/applications", { jobId }, authHeader())
      .then(() => { alert("Applied!"); fetchMyApplications(); })
      .catch((err) => { alert(err.response?.data || "Failed to apply, please try again"); console.log(err); });
  };

  const handleToggleSave = (jobId) => {
    api.post(`/jobs/${jobId}/save`, {}, authHeader())
      .then(() => fetchSavedJobs())
      .catch((err) => console.log(err));
  };

  const isSaved = (jobId) => savedJobs.some((j) => j._id === jobId);
  const alreadyApplied = (jobId) => myApplications.some((a) => a.job && a.job._id === jobId);

  // filter dropdowns ke liye unique locations/types jobs data se nikal lo
  const locations = ["all", ...new Set(jobs.map((j) => j.location).filter(Boolean))];
  const types = ["all", ...new Set(jobs.map((j) => j.type).filter(Boolean))];

  const filteredJobs = jobs.filter((job) => {
    const q = search.toLowerCase();
    const matchesSearch =
      job.title.toLowerCase().includes(q) ||
      job.company.toLowerCase().includes(q) ||
      (job.skillsRequired || "").toLowerCase().includes(q);
    const matchesLocation = location === "all" || job.location === location;
    const matchesType = type === "all" || job.type === type;
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="panel">
      <h2>All jobs</h2>
      <p className="panel-sub">{filteredJobs.length} of {jobs.length} live listings</p>

      <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
        <input
          placeholder="Search by title, company, or skill..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: "1 1 220px", padding: 10 }}
        />
        <select value={location} onChange={(e) => setLocation(e.target.value)} style={{ padding: 10 }}>
          {locations.map((l) => (
            <option key={l} value={l}>{l === "all" ? "All locations" : l}</option>
          ))}
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)} style={{ padding: 10 }}>
          {types.map((t) => (
            <option key={t} value={t}>{t === "all" ? "All types" : t}</option>
          ))}
        </select>
      </div>

      {filteredJobs.length === 0 && <p>No jobs match your filters.</p>}

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
  );
}
