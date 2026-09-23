import React, { useState, useEffect } from "react";
import axios from "axios";
import Badge from "../../components/dashboard/Badge";

const authHeader = () => ({ headers: { authorization: localStorage.getItem("token") } });

const statusMap = {
  live: { type: "approved", text: "Live" },
  pending: { type: "pending", text: "Pending review" },
  rejected: { type: "rejected", text: "Rejected" },
};

export default function AdminJobs() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = () => {
    axios.get("http://localhost:6100/admin/jobs", authHeader())
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleStatusChange = (id, status) => {
    axios.patch(`http://localhost:6100/admin/jobs/${id}/status`, { status }, authHeader())
      .then(() => fetchJobs())
      .catch((err) => console.log(err));
  };

  return (
    <div className="panel">
      <h2>Job listings</h2>
      <p className="panel-sub">Review and moderate every job posted on the platform</p>
      <table>
        <thead>
          <tr><th>Role</th><th>Posted by</th><th>Location</th><th>Status</th><th>Action</th></tr>
        </thead>
        <tbody>
          {jobs.length === 0 && (
            <tr><td colSpan="5">No jobs have been posted yet.</td></tr>
          )}
          {jobs.map((job) => (
            <tr key={job._id}>
              <td className="cell-strong">{job.title}</td>
              <td>{job.postedBy?.name || "—"}</td>
              <td>{job.location || "—"}</td>
              <td>
                <Badge type={statusMap[job.status]?.type || "pending"}>
                  {statusMap[job.status]?.text || job.status}
                </Badge>
              </td>
              <td style={{ display: "flex", gap: 6 }}>
                {job.status !== "live" && (
                  <button className="btn-mini" onClick={() => handleStatusChange(job._id, "live")}>Approve</button>
                )}
                {job.status !== "rejected" && (
                  <button className="btn-mini" onClick={() => handleStatusChange(job._id, "rejected")}>Reject</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
