import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./site.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [devLink, setDevLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    axios.post("http://localhost:6100/forgot-password", { email })
      .then((res) => {
        setLoading(false);
        setSent(true);
        // NOTE: dev-mode only — real email service isn't wired up yet,
        // so the backend hands back the reset link directly for testing.
        if (res.data.resetLink) setDevLink(res.data.resetLink);
      })
      .catch(() => {
        setLoading(false);
        setError("Something went wrong, please try again");
      });
  };

  return (
    <div className="auth-wrap">
      <div className="auth-left">
        <div className="sring r1 spin"></div>
        <div className="sring r2 spin"></div>
        <Link to="/" className="brand">Meridian<span>.</span></Link>
        <div className="auth-quote">
          <h2>"Forgot your password? Happens to the best of us."</h2>
          <p>We'll get you back in within a minute.</p>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form">
          <Link to="/login" className="auth-back">← Back to login</Link>
          <h1>Reset your password</h1>
          <p className="sub">Enter the email you signed up with and we'll send you a reset link.</p>

          {error && <div className="form-error">{error}</div>}

          {sent ? (
            <div style={{ background: "var(--s-teal-soft)", color: "var(--s-teal)", padding: "12px 16px", borderRadius: "var(--s-radius-s)", fontSize: 13.5 }}>
              If that email exists, a reset link has been sent.
              {devLink && (
                <>
                  <br /><br />
                  <span style={{ fontSize: 12, opacity: 0.8 }}>
                    Dev mode (no email service configured yet) — use this link directly:
                  </span>
                  <br />
                  <a href={devLink} style={{ color: "var(--s-teal)", fontWeight: 600, wordBreak: "break-all" }}>{devLink}</a>
                </>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
              </div>
              <button type="submit" className="mbtn mbtn-solid mbtn-full" disabled={loading}>
                {loading ? "Sending..." : "Send reset link"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
