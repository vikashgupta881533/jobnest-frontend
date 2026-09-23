import React from "react";
import { Link } from "react-router-dom";
import "../../components/site.css";

export default function About() {
  return (
    <>
      <section className="hero-wrap">
        <div className="sring r1 spin"></div>
        <div className="sring r2 spin"></div>
        <div className="hero-inner">
          <div className="eyebrow"><span className="pulse-dot"></span>About Meridian</div>
          <h1>Built for people who are serious about their next move.</h1>
          <p>Meridian started with a simple idea — job hunting shouldn't feel like shouting into a void. Every listing here is reviewed, every recruiter is verified, and every application actually gets seen.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="kicker">What we believe</div>
          <h2>Three things we won't compromise on</h2>
        </div>
        <div className="why-grid">
          <div className="why-item">
            <div className="icon">✓</div>
            <h3>No fake listings</h3>
            <p>Every recruiter is manually verified before they can post a job. No ghost jobs, no bait-and-switch.</p>
          </div>
          <div className="why-item">
            <div className="icon">🤝</div>
            <h3>Real conversations</h3>
            <p>Candidates and recruiters message each other directly — no black-hole applications.</p>
          </div>
          <div className="why-item">
            <div className="icon">🎯</div>
            <h3>Built for outcomes</h3>
            <p>We measure ourselves by how many people actually get hired, not how many resumes get uploaded.</p>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="sring r2" style={{ right: -60, top: -60 }}></div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2>Come find your next role.</h2>
          <p>Thousands of candidates already have.</p>
        </div>
        <Link to="/signup" className="mbtn mbtn-solid" style={{ position: "relative", zIndex: 1 }}>
          Create free account
        </Link>
      </div>
    </>
  );
}
