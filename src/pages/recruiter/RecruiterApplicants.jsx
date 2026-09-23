import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const authHeader = () => ({ headers: { authorization: localStorage.getItem("token") } });

export default function RecruiterApplicants() {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:6100/jobs/my", authHeader())
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));

    axios.get("http://localhost:6100/applications/recruiter", authHeader())
      .then((res) => setApplications(res.data))
      .catch((err) => console.log(err));
  }, []);

  const countFor = (jobId) => applications.filter((a) => a.job?._id === jobId).length;

  return (
    <div className="panel">
      <h2>Applicants by job</h2>
      <p className="panel-sub">Choose a job to see and manage its applicants</p>
      <table>
        <thead>
          <tr><th>Role</th><th>Applicants</th><th></th></tr>
        </thead>
        <tbody>
          {jobs.length === 0 && (
            <tr><td colSpan="3">No jobs posted yet.</td></tr>
          )}
          {jobs.map((job) => (
            <tr key={job._id}>
              <td className="cell-strong">{job.title}</td>
              <td>{countFor(job._id)}</td>
              <td>
                <Link to={`/RecruiterDashboard/applicants/${job._id}`} className="btn-mini">
                  View applicants
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
