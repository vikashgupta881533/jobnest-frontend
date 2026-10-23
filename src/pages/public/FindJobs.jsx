import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../components/site.css";
import "../../components/FeaturedJobs.css";
import api from "../../api/axios";

export default function FindJobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleApply = (jobId) => {
    const token = localStorage.getItem("token");
    const destination = `/CandidateDashboard/job/${jobId}`;
    if (!token) {
      navigate("/login", { state: { from: destination } });
    } else {
      navigate(destination);
    }
  };

  const filtered = jobs.filter((job) => {
    const q = search.toLowerCase();
    return (
      job.title.toLowerCase().includes(q) ||
      job.company.toLowerCase().includes(q) ||
      (job.location || "").toLowerCase().includes(q)
    );
  });

  return (
    <div className="section">
      <div className="section-head">
        <div className="kicker">Find Jobs</div>
        <h2>{jobs.length} live roles right now</h2>
        <p>Search by title, company, or location — every listing here is verified.</p>
      </div>

      <input
        placeholder="Search by title, company, location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%", maxWidth: 480, padding: 13, marginBottom: 36,
          border: "1px solid var(--s-line)", borderRadius: "var(--s-radius-s)", fontSize: 14,
        }}
      />

      {filtered.length === 0 && <p style={{ color: "var(--s-muted)" }}>No jobs match your search.</p>}

      <div className="job-grid">
        {filtered.map((job) => (
          <div className="fj-card" key={job._id}>
            <div className="fj-card-top">
              <div className="fj-logo">{job.company.slice(0, 2).toUpperCase()}</div>
              <span className="fj-tag">{job.type}</span>
            </div>
            <div className="fj-role">{job.title}</div>
            <div className="fj-co">{job.company} · {job.location || "Remote"}</div>
            {job.salaryMin && job.salaryMax && <div className="fj-salary">₹{job.salaryMin}–{job.salaryMax}L</div>}
            <button className="fj-apply-btn" onClick={() => handleApply(job._id)}>Apply now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
