import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const authHeader = () => ({ headers: { authorization: localStorage.getItem("token") } });

export default function CandidateJobDetails() {
  const { jobId } = useParams();

  const [job, setJob] = useState(null);
  const [myApplications, setMyApplications] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);

  const fetchJob = () => {
    axios.get(`http://localhost:6100/jobs/${jobId}`)
      .then((res) => setJob(res.data))
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
    fetchJob();
    fetchMyApplications();
    fetchSavedJobs();
  }, [jobId]);

  const handleApply = () => {
    axios.post("http://localhost:6100/applications", { jobId }, authHeader())
      .then(() => { alert("Applied!"); fetchMyApplications(); })
      .catch((err) => { alert(err.response?.data || "Failed to apply, please try again"); console.log(err); });
  };

  const handleToggleSave = () => {
    axios.post(`http://localhost:6100/jobs/${jobId}/save`, {}, authHeader())
      .then(() => fetchSavedJobs())
      .catch((err) => console.log(err));
  };

  const isSaved = savedJobs.some((j) => j._id === jobId);
  const alreadyApplied = myApplications.some((a) => a.job && a.job._id === jobId);

  if (!job) {
    return <div className="panel">Loading...</div>;
  }

  return (
    <div className="panel">
      <Link to="/CandidateDashboard" className="btn-mini" style={{ marginBottom: 20, display: "inline-block" }}>
        ← Back to jobs
      </Link>

      <h2 style={{ fontSize: 24 }}>{job.title}</h2>
      <p className="panel-sub" style={{ fontSize: 14 }}>
        {job.company} · {job.location || "Location N/A"}
      </p>

      <div className="meta" style={{ marginBottom: 20 }}>
        <span>{job.type}</span>
        {job.salaryMin && job.salaryMax && <span>₹{job.salaryMin}–{job.salaryMax}</span>}
        {job.postedBy?.name && <span>Posted by {job.postedBy.name}</span>}
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        <button className="btn-mini" disabled={alreadyApplied} onClick={handleApply}>
          {alreadyApplied ? "Applied" : "Apply now"}
        </button>
        <button className="btn-mini" onClick={handleToggleSave}>
          {isSaved ? "★ Saved" : "☆ Save"}
        </button>
      </div>

      <h2>Job description</h2>
      <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
        {job.description || "The recruiter hasn't added a description yet."}
      </p>

      {job.skillsRequired && (
        <>
          <h2 style={{ marginTop: 20 }}>Skills required</h2>
          <p>{job.skillsRequired}</p>
        </>
      )}
    </div>
  );
}
