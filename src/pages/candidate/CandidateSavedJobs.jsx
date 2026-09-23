import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const authHeader = () => ({ headers: { authorization: localStorage.getItem("token") } });

export default function CandidateSavedJobs() {
  const [savedJobs, setSavedJobs] = useState([]);

  const fetchSavedJobs = () => {
    axios.get("http://localhost:6100/jobs/saved", authHeader())
      .then((res) => setSavedJobs(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchSavedJobs();
  }, []);

  const handleRemove = (jobId) => {
    axios.post(`http://localhost:6100/jobs/${jobId}/save`, {}, authHeader())
      .then(() => fetchSavedJobs())
      .catch((err) => console.log(err));
  };

  return (
    <div className="panel">
      <h2>Saved jobs</h2>
      <p className="panel-sub">Jobs you bookmarked for later</p>
      {savedJobs.length === 0 && <p>You haven't saved any jobs yet.</p>}
      {savedJobs.map((job) => (
        <div className="job-card" key={job._id}>
          <div className="top">
            <div>
              <div className="role">{job.title}</div>
              <div className="co">{job.company} · {job.location || "Location N/A"}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
            <Link to={`/CandidateDashboard/job/${job._id}`} className="btn-mini">View details</Link>
            <button className="btn-mini" onClick={() => handleRemove(job._id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
