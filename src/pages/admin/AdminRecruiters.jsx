import React, { useState, useEffect } from "react";
import axios from "axios";
import Badge from "../../components/dashboard/Badge";
import api from "../../api/axios";

const authHeader = () => ({ headers: { authorization: localStorage.getItem("token") } });

export default function AdminRecruiters() {
  const [recruiters, setRecruiters] = useState([]);

  const fetchRecruiters = () => {
    api.get("/admin/recruiters", authHeader())
      .then((res) => setRecruiters(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRecruiters();
  }, []);

  const handleApprovalChange = (id, isApproved) => {
    api.patch(`/admin/recruiters/${id}/approve`, { isApproved }, authHeader())
      .then(() => fetchRecruiters())
      .catch((err) => console.log(err));
  };

  return (
    <div className="panel">
      <h2>Recruiter approvals</h2>
      <p className="panel-sub">Companies awaiting or already granted posting access</p>
      <table>
        <thead>
          <tr><th>Name</th><th>Email</th><th>Company</th><th>Status</th><th>Action</th></tr>
        </thead>
        <tbody>
          {recruiters.length === 0 && (
            <tr><td colSpan="5">No recruiters have signed up yet.</td></tr>
          )}
          {recruiters.map((r) => (
            <tr key={r._id}>
              <td className="cell-strong">{r.name}</td>
              <td>{r.email}</td>
              <td>{r.companyName || "—"}</td>
              <td>
                {r.isApproved
                  ? <Badge type="approved">Approved</Badge>
                  : <Badge type="pending">Pending review</Badge>}
              </td>
              <td>
                {r.isApproved ? (
                  <button className="btn-mini" onClick={() => handleApprovalChange(r._id, false)}>Suspend</button>
                ) : (
                  <button className="btn-mini" onClick={() => handleApprovalChange(r._id, true)}>Approve</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
