import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./FeaturedJobs.css";
import api from "../api/axios";

export default function FeaturedJobs() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/jobs")
      .then((res) => setJobs(res.data.slice(0, 6))) // homepage par sirf top 6 dikhao
      .catch((err) => console.log(err));
  }, []);

  const handleApply = (jobId) => {
    const token = localStorage.getItem("token");
    const destination = `/CandidateDashboard/job/${jobId}`;

    if (!token) {
      // not logged in -> send to login, remember where to come back
      navigate("/login", { state: { from: destination } });
      return;
    }

    // already logged in -> straight to the job/apply page
    navigate(destination);
  };

  return (
    <section className="fj-section">
      <div className="fj-head">
        <div className="fj-kicker">Featured roles</div>
        <h2>Handpicked jobs, updated daily</h2>
        <p>A small selection of live roles worth a look this week.</p>
      </div>

      {jobs.length === 0 && <p className="fj-empty">No live jobs right now — check back soon.</p>}

      <div className="fj-grid">
        {jobs.map((job) => (
          <div className="fj-card" key={job._id}>
            <div className="fj-card-top">
              <div className="fj-logo">{job.company ? job.company.slice(0, 2).toUpperCase() : "JB"}</div>
              <span className="fj-tag">{job.type}</span>
            </div>

            <div className="fj-role">{job.title}</div>
            <div className="fj-co">{job.company} · {job.location || "Remote"}</div>

            {job.salaryMin && job.salaryMax && (
              <div className="fj-salary">₹{job.salaryMin}–{job.salaryMax}</div>
            )}

            <button className="fj-apply-btn" onClick={() => handleApply(job._id)}>
              Apply now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
