import React, { useState } from "react";
import axios from "axios";
import "../../components/site.css";
import api from "../../api/axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    api.post("/contact", form)
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setLoading(false);
        alert("Something went wrong, please try again");
        console.log(err);
      });
  };

  return (
    <div className="section">
      <div className="section-head">
        <div className="kicker">Contact</div>
        <h2>Get in touch</h2>
        <p>Questions, feedback, or partnership ideas — we read everything.</p>
      </div>

      <form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
        {sent && (
          <div style={{ background: "var(--s-teal-soft)", color: "var(--s-teal)", padding: "12px 16px", borderRadius: "var(--s-radius-s)", marginBottom: 20, fontSize: 13.5 }}>
            Thanks — we've received your message and will get back to you soon.
          </div>
        )}

        <div className="field">
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
        </div>
        <div className="field">
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
        </div>
        <div className="field">
          <label>Message</label>
          <textarea
            name="message" value={form.message} onChange={handleChange}
            placeholder="How can we help?" rows={5} required
            style={{ width: "100%", padding: 13, border: "1px solid var(--s-line)", borderRadius: "var(--s-radius-s)", fontSize: 14, fontFamily: "inherit" }}
          />
        </div>

        <button type="submit" className="mbtn mbtn-solid" disabled={loading}>
          {loading ? "Sending..." : "Send message"}
        </button>
      </form>
    </div>
  );
}
