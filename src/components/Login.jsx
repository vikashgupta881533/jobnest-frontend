import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./site.css";
import toast from 'react-hot-toast'
import api from "../api/axios";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    api.post("/userlogin", form)
      .then((res) => {
        setLoading(false);

        // backend sends back a plain string on failure ("user not found" / "wrong password")
        if (typeof res.data === "string") {
          setError(res.data);
          return;
        }

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("name", res.data.name);

        // if the user was sent here from somewhere specific (e.g. "Apply now"
        // on a job card), send them back there. Otherwise go to their dashboard.
        const redirectTo = location.state?.from;
        if (redirectTo) {
          navigate(redirectTo);
        } else if (res.data.role === "admin") {
          toast.success("Login SuccessFully")
          navigate("/AdminDashboard");
        } else if (res.data.role === "recruiter") {
          toast.success("Login SuccessFully")
          navigate("/RecruiterDashboard");
        } else {
          toast.success("Login SuccessFully")
          navigate("/CandidateDashboard");
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong, please try again");
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
                      strokeLinecap="round" strokeDasharray="402" strokeDashoffset="42"
                      transform="rotate(-90 100 100)" />
            </svg>
            <div className="auth-visual-center">
              <div className="pct">94%</div>
              <div className="lbl">Average match score for returning candidates</div>
            </div>
            <div className="auth-chip a1">2 new messages</div>
            <div className="auth-chip a2">Interview at 3pm</div>
          </div>

          <div className="auth-trust">
            <div className="t-item"><div className="t-num">9,430</div><div className="t-lbl">live jobs</div></div>
            <div className="t-item"><div className="t-num">2,140</div><div className="t-lbl">companies</div></div>
            <div className="t-item"><div className="t-num">18d</div><div className="t-lbl">avg. time to hire</div></div>
          </div>
        </div>

        <div className="auth-quote" style={{ position: "relative", zIndex: 1 }}>
          <h2>"Meridian got me three interviews in my first week. I wasn't expecting that."</h2>
          <p>— Rhea Sharma, Product Designer, hired at Aster Health</p>
        </div>
      </div>

      <div className="auth-right">
        <form className="auth-form" onSubmit={handleSubmit}>
          <Link to="/" className="auth-back">← Back to home</Link>
          <h1>Welcome back</h1>
          <p className="sub">Log in to continue your search.</p>

          {error && <div className="auth-error">{error}</div>}

          <div className="field">
            <label>Email</label>
            <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
          </div>
          <div className="field">
            <label>Password</label>
            <input name="password" type="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
          </div>
          <div style={{ textAlign: "right", marginTop: -10, marginBottom: 18 }}>
            <Link to="/forgot-password" style={{ fontSize: 12.5, color: "var(--s-gold)", fontWeight: 600 }}>Forgot password?</Link>
          </div>

          <button type="submit" className="mbtn mbtn-solid mbtn-full" disabled={loading}>
            {loading ? "Logging in..." : "Log in"}
          </button>

          <div className="auth-switch">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
