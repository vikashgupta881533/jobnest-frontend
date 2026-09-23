import React from "react";
import { Link } from "react-router-dom";
import "./site.css";

export default function Footer() {
  return (
    <>
      <div className="cta-band">
        <div className="sring r2" style={{ right: -60, top: -60 }}></div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2>Ready to find your next role?</h2>
          <p>Join thousands of candidates already using Meridian.</p>
        </div>
        <Link to="/signup" className="mbtn mbtn-solid" style={{ position: "relative", zIndex: 1 }}>
          Create free account
        </Link>
      </div>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Meridian<span style={{ color: "var(--s-gold)" }}>.</span></div>
            <p style={{ color: "var(--s-muted)", fontSize: 13.5, maxWidth: 280, lineHeight: 1.6 }}>
              The job platform built for people who want their next move to actually be a good one.
            </p>
          </div>
          <div className="footer-col">
            <h4>For candidates</h4>
            <Link to="/jobs">Browse jobs</Link>
            <Link to="/career-advice">Career advice</Link>
            <Link to="/salary-guide">Salary guide</Link>
          </div>
          <div className="footer-col">
            <h4>For employers</h4>
            <Link to="/for-employers">Post a job</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/login">Recruiter login</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Meridian. All rights reserved.</span>
          <span>Made for people, not algorithms.</span>
        </div>
      </footer>
    </>
  );
}
