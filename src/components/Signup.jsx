import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./site.css";

export default function Signup() {
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({
    name: "", email: "", phone: "", password: "", role: location.state?.role || "candidate",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // sirf digits allow karo, max 10
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm({ ...form, phone: digitsOnly });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (form.phone.length !== 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    setLoading(true);

    axios.post("http://localhost:6100/usersign", form)
      .then(() => {
        setLoading(false);
        // account created — send them to login with a small success hint
        navigate("/login", { state: { justSignedUp: true } });
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response?.data || "Something went wrong, please try again");
        console.log(err);
      });
  };

  return (
    <div className="auth-wrap">
      <div className="auth-left">
        <div className="sring r1 spin"></div>
        <div className="sring r2 spin"></div>
        <Link to="/" className="brand">Meridian<span>.</span></Link>

        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="auth-visual">
            <svg viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <circle cx="100" cy="100" r="78" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 6" />
              <circle cx="100" cy="100" r="64" fill="none" stroke="#D4A666" strokeWidth="2.5"
                      strokeLinecap="round" strokeDasharray="402" strokeDashoffset="120"
                      transform="rotate(-90 100 100)" />
            </svg>
            <div className="auth-visual-center">
              <div className="pct">2 min</div>
              <div className="lbl">to build a profile recruiters actually notice</div>
            </div>
            <div className="auth-chip a1">128 jobs added today</div>
            <div className="auth-chip a2">Verified companies only</div>
          </div>

          <div className="auth-trust">
            <div className="t-item"><div className="t-num">84,210</div><div className="t-lbl">candidates</div></div>
            <div className="t-item"><div className="t-num">3,204</div><div className="t-lbl">applications/wk</div></div>
            <div className="t-item"><div className="t-num">4.8★</div><div className="t-lbl">avg. rating</div></div>
          </div>
        </div>

        <div className="auth-quote" style={{ position: "relative", zIndex: 1 }}>
          <h2>"We filled two senior roles in under three weeks — candidates here are actually serious."</h2>
          <p>— Tara Mehta, Talent Lead, Meridian Corp</p>
        </div>
      </div>

      <div className="auth-right">
        <form className="auth-form" onSubmit={handleSubmit}>
          <Link to="/" className="auth-back">← Back to home</Link>
          <h1>Create your account</h1>
          <p className="sub">Takes less than a minute.</p>

          {error && <div className="auth-error">{error}</div>}

          <div className="field">
            <label>I am a</label>
            <div className="role-pick">
              <label className={form.role === "candidate" ? "active" : ""}>
                <input type="radio" name="role" value="candidate" checked={form.role === "candidate"} onChange={handleChange} />
                <span>Candidate</span>
              </label>
              <label className={form.role === "recruiter" ? "active" : ""}>
                <input type="radio" name="role" value="recruiter" checked={form.role === "recruiter"} onChange={handleChange} />
                <span>Recruiter</span>
              </label>
            </div>
          </div>

          <div className="field">
            <label>Full name</label>
            <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="field">
            <label>Email</label>
            <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
          </div>
          <div className="field">
            <label>Phone number</label>
            <input
              name="phone"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              placeholder="98765 43210"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input name="password" type="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
          </div>

          <button type="submit" className="mbtn mbtn-solid mbtn-full" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </button>

          <div className="auth-switch">
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
