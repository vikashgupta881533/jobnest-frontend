import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Badge from "../../components/dashboard/Badge";

const statusMap = {
  live: { type: "approved", text: "Live" },
  pending: { type: "pending", text: "Under review" },
  rejected: { type: "rejected", text: "Rejected" },
};

function timeAgo(dateString) {
  const days = Math.floor((Date.now() - new Date(dateString)) / (1000 * 60 * 60 * 24));
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
}

export default function RecruiterListings() {
  const [listings, setListings] = useState([]);

  const fetchMyJobs = () => {
    axios.get("http://localhost:6100/jobs/my", {
      headers: { authorization: localStorage.getItem("token") },
    })
      .then((res) => setListings(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMyJobs();
  }, []);

  return (
    <div className="panel">
      <h2>Your active listings</h2>
      <p className="panel-sub">Roles currently open for applications</p>
      <table>
        <thead>
          <tr><th>Role</th><th>Location</th><th>Posted</th><th>Status</th><th></th></tr>
        </thead>
        <tbody>
          {listings.length === 0 && (
            <tr><td colSpan="5">No jobs posted yet.</td></tr>
          )}
          {listings.map((job) => (
            <tr key={job._id}>
              <td className="cell-strong">{job.title}</td>
              <td>{job.location || "—"}</td>
              <td>{timeAgo(job.createdAt)}</td>
              <td>
                <Badge type={statusMap[job.status]?.type || "pending"}>
                  {statusMap[job.status]?.text || job.status}
                </Badge>
              </td>
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
