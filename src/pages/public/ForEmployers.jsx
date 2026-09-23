import React from "react";
import { Link } from "react-router-dom";
import "../../components/site.css";

export default function ForEmployers() {
  return (
    <>
      <section className="hero-wrap">
        <div className="sring r1 spin"></div>
        <div className="sring r2 spin"></div>
        <div className="hero-inner">
          <div className="eyebrow"><span className="pulse-dot"></span>For employers</div>
          <h1>Hire people who actually want the job.</h1>
          <p>Post a role in minutes, review verified candidates, and message them directly — no recruiter spam, no fake profiles.</p>
          <Link to="/signup" state={{ role: "recruiter" }} className="mbtn mbtn-solid" style={{ padding: "14px 28px", fontSize: 14.5 }}>
            Create a recruiter account
          </Link>

          <div className="hero-stats">
            <div className="hstat"><div className="num">2,140</div><div className="lbl">companies hiring</div></div>
            <div className="hstat"><div className="num">18d</div><div className="lbl">avg. time to hire</div></div>
            <div className="hstat"><div className="num">84,210</div><div className="lbl">active candidates</div></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="kicker">Why recruiters choose Meridian</div>
          <h2>Everything you need to hire, in one place</h2>
        </div>
        <div className="why-grid">
          <div className="why-item">
            <div className="icon">⚡</div>
            <h3>Post a job in minutes</h3>
            <p>Simple form, no long approval wait once your account is verified.</p>
          </div>
          <div className="why-item">
            <div className="icon">🎯</div>
            <h3>See real applicants</h3>
            <p>Track every candidate through your pipeline — applied to hired.</p>
          </div>
          <div className="why-item">
            <div className="icon">💬</div>
            <h3>Message directly</h3>
            <p>No waiting on email — talk to candidates right inside your dashboard.</p>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="sring r2" style={{ right: -60, top: -60 }}></div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2>Ready to start hiring?</h2>
          <p>Free to post — your first job goes live after a quick verification.</p>
        </div>
        <Link to="/signup" state={{ role: "recruiter" }} className="mbtn mbtn-solid" style={{ position: "relative", zIndex: 1 }}>
          Get started
        </Link>
      </div>
    </>
  );
}
