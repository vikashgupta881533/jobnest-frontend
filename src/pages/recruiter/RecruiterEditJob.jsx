import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axios";

const authHeader = () => ({ headers: { authorization: localStorage.getItem("token") } });

export default function RecruiterEditJob() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "", company: "", location: "", type: "Full-time",
    salaryMin: "", salaryMax: "", skillsRequired: "", description: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/jobs/${jobId}`)
      .then((res) => {
        const job = res.data;
        setForm({
          title: job.title || "", company: job.company || "", location: job.location || "",
          type: job.type || "Full-time", salaryMin: job.salaryMin || "", salaryMax: job.salaryMax || "",
          skillsRequired: job.skillsRequired || "", description: job.description || "",
        });
        setLoading(false);
      })
      .catch((err) => { console.log(err); setLoading(false); });
  }, [jobId]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    api.patch(`/jobs/${jobId}`, form, authHeader())
      .then(() => {
        alert("Job updated — it will need admin re-approval before going live again");
        navigate("/RecruiterDashboard/listings");
      })
      .catch((err) => {
        alert(err.response?.data || "Update failed, please try again");
        console.log(err);
      });
  };

  if (loading) return <div className="panel">Loading...</div>;

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <h2>Edit job</h2>
      <p className="panel-sub">Editing an approved job sends it back for admin review.</p>

      <input name="title" placeholder="Job title" value={form.title} onChange={handleChange} required
        style={{ width: "100%", padding: 10, marginBottom: 10 }} />
      <input name="company" placeholder="Company name" value={form.company} onChange={handleChange} required
        style={{ width: "100%", padding: 10, marginBottom: 10 }} />
      <input name="location" placeholder="Location" value={form.location} onChange={handleChange}
        style={{ width: "100%", padding: 10, marginBottom: 10 }} />

      <select name="type" value={form.type} onChange={handleChange} style={{ width: "100%", padding: 10, marginBottom: 10 }}>
        <option>Full-time</option>
        <option>Part-time</option>
        <option>Hybrid</option>
        <option>Remote</option>
      </select>

      <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
        <input name="salaryMin" type="number" placeholder="Min salary" value={form.salaryMin} onChange={handleChange} style={{ flex: 1, padding: 10 }} />
        <input name="salaryMax" type="number" placeholder="Max salary" value={form.salaryMax} onChange={handleChange} style={{ flex: 1, padding: 10 }} />
      </div>

      <input name="skillsRequired" placeholder="Skills required" value={form.skillsRequired} onChange={handleChange}
        style={{ width: "100%", padding: 10, marginBottom: 10 }} />
      <textarea name="description" placeholder="Job description" value={form.description} onChange={handleChange} rows={4}
        style={{ width: "100%", padding: 10, marginBottom: 12 }} />

      <button type="submit" className="btn-mini">Save changes</button>
    </form>
  );
}
