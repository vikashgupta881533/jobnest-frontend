import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import api from "../../api/axios";

export default function PostJobForm({ onPosted }) {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    salaryMin: "",
    salaryMax: "",
    skillsRequired: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    api
      .post("/jobs", form, {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then(() => {
        toast.success("Job posted!");
        onPosted();
      })
      .catch((err) => {
        toast.error(err.response?.data || "Failed to post job, please try again");
        console.log(err);
      });
  };

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <h2>Post a new job</h2>

      <input
        name="title"
        placeholder="Job title (e.g. Backend Engineer)"
        value={form.title}
        onChange={handleChange}
        required
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      <input
        name="company"
        placeholder="Company name"
        value={form.company}
        onChange={handleChange}
        required
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      <input
        name="location"
        placeholder="Location (e.g. Bengaluru / Remote)"
        value={form.location}
        onChange={handleChange}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      >
        <option>Full-time</option>
        <option>Part-time</option>
        <option>Hybrid</option>
        <option>Remote</option>
      </select>

      <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
        <input
          name="salaryMin"
          type="number"
          placeholder="Min salary (₹ LPA)"
          value={form.salaryMin}
          onChange={handleChange}
          style={{ flex: 1, padding: 10 }}
        />
        <input
          name="salaryMax"
          type="number"
          placeholder="Max salary (₹ LPA)"
          value={form.salaryMax}
          onChange={handleChange}
          style={{ flex: 1, padding: 10 }}
        />
      </div>

      <input
        name="skillsRequired"
        placeholder="Skills required (comma separated)"
        value={form.skillsRequired}
        onChange={handleChange}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />

      <textarea
        name="description"
        placeholder="Job description"
        value={form.description}
        onChange={handleChange}
        rows={4}
        style={{ width: "100%", padding: 10, marginBottom: 12 }}
      />

      <button type="submit" className="btn-mini">Post job</button>
    </form>
  );
}
