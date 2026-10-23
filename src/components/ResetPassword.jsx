import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./site.css";
import api from "../api/axios";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Passwords don't match");
      return;
    }
    if (!token) {
      setError("Reset link is missing a token — please request a new one");
      return;
    }

    setLoading(true);
    api.post("/reset-password", { token, newPassword: password })
      .then(() => {
        alert("Password updated — please log in");
        navigate("/login");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response?.data || "Something went wrong");
      });
  };

  return (
    <div className="auth-wrap">
      <div className="auth-left">
        <div className="sring r1 spin"></div>
        <div className="sring r2 spin"></div>
        <Link to="/" className="brand">Meridian<span>.</span></Link>
        <div className="auth-quote">
          <h2>"Almost there — pick a new password and you're back in."</h2>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form">
          <Link to="/login" className="auth-back">← Back to login</Link>
          <h1>Set a new password</h1>
          <p className="sub">Choose something you'll remember this time.</p>

          {error && <div className="form-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>New password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
            </div>
            <div className="field">
              <label>Confirm password</label>
              <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="••••••••" required />
            </div>
            <button type="submit" className="mbtn mbtn-solid mbtn-full" disabled={loading}>
              {loading ? "Updating..." : "Update password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
