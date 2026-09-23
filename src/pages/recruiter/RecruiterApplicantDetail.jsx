import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Badge from "../../components/dashboard/Badge";

const authHeader = () => ({ headers: { authorization: localStorage.getItem("token") } });

const statusMap = {
  applied: { type: "applied", text: "Applied" },
  shortlisted: { type: "shortlisted", text: "Shortlisted" },
  interview: { type: "interview", text: "Interview" },
  offer: { type: "offer", text: "Offer" },
  rejected: { type: "rejected", text: "Not selected" },
  hired: { type: "hired", text: "Hired" },
};

const statusOptions = ["applied", "shortlisted", "interview", "offer", "rejected", "hired"];

export default function RecruiterApplicantDetail() {
  const { jobId } = useParams();
  const [applicants, setApplicants] = useState([]);

  const fetchApplicants = () => {
    axios.get(`http://localhost:6100/applications/job/${jobId}`, authHeader())
      .then((res) => setApplicants(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchApplicants();
  }, [jobId]);

  const handleStatusChange = (applicationId, status) => {
    axios.patch(`http://localhost:6100/applications/${applicationId}/status`, { status }, authHeader())
      .then(() => fetchApplicants())
      .catch((err) => console.log(err));
  };

  return (
    <div className="panel">
      <Link to="/RecruiterDashboard/applicants" className="btn-mini" style={{ marginBottom: 20, display: "inline-block" }}>
        ← Back to jobs
      </Link>

      <h2>Applicants</h2>
      <p className="panel-sub">Change their status as they move through your hiring process</p>

      <table>
        <thead>
          <tr><th>Candidate</th><th>Skills</th><th>Experience</th><th>Status</th><th>Change status</th></tr>
        </thead>
        <tbody>
          {applicants.length === 0 && (
            <tr><td colSpan="5">No one has applied to this job yet.</td></tr>
          )}
          {applicants.map((a) => (
            <tr key={a._id}>
              <td className="cell-strong">{a.candidate?.name}</td>
              <td>{a.candidate?.skills || "—"}</td>
              <td>{a.candidate?.experience ? `${a.candidate.experience} yrs` : "—"}</td>
              <td><Badge type={statusMap[a.status]?.type || "applied"}>{statusMap[a.status]?.text || a.status}</Badge></td>
              <td>
                <select
                  value={a.status}
                  onChange={(e) => handleStatusChange(a._id, e.target.value)}
                  style={{ padding: 6 }}
                >
                  {statusOptions.map((s) => (
                    <option key={s} value={s}>{statusMap[s].text}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
