import React, { useEffect, useRef } from "react";
import "./site.css";

function useCountUp(targetRef, target, duration = 1600) {
  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString("en-IN");
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString("en-IN");
    }
    requestAnimationFrame(tick);
  }, [target, duration]);
}

export default function HeroSection() {
  const stat1 = useRef(null);
  const stat2 = useRef(null);
  const stat3 = useRef(null);

  useCountUp(stat1, 84210);
  useCountUp(stat2, 9430);
  useCountUp(stat3, 2140);

  return (
    <section className="hero-wrap">
      <div className="sring r1 spin"></div>
      <div className="sring r2 spin"></div>

      <div className="hero-inner">
        <div className="eyebrow"><span className="pulse-dot"></span>Trusted by 2,000+ companies</div>
        <h1>Find work that fits the life you actually want.</h1>
        <p>Meridian connects ambitious people with companies that are hiring right now — no noise, no spam, just roles worth applying to.</p>

        <div className="search-bar">
          <input placeholder="Job title or keyword" />
          <div className="divider"></div>
          <input placeholder="Location" />
          <button>Search</button>
        </div>

        <div className="hero-stats">
          <div className="hstat"><div className="num" ref={stat1}>0</div><div className="lbl">active candidates</div></div>
          <div className="hstat"><div className="num" ref={stat2}>0</div><div className="lbl">live job listings</div></div>
          <div className="hstat"><div className="num" ref={stat3}>0</div><div className="lbl">verified companies</div></div>
        </div>

        <div className="outcomes-strip">
          <div className="avatars">
            <div className="av" style={{ background: "#A9823E" }}>RS</div>
            <div className="av" style={{ background: "#2F6E62" }}>AV</div>
            <div className="av" style={{ background: "#A6462F" }}>KN</div>
            <div className="av" style={{ background: "#6B5B95" }}>IK</div>
          </div>
          <div className="txt">Rhea, Arjun, Karthik &amp; 40 others got hired this month</div>
        </div>
      </div>

      <div className="hero-visual">
        <svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <circle cx="100" cy="100" r="78" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 6" />
          <circle cx="100" cy="100" r="64" fill="none" stroke="#D4A666" strokeWidth="2.5"
                  strokeLinecap="round" strokeDasharray="402" strokeDashoffset="42"
                  transform="rotate(-90 100 100)" />
        </svg>
        <div className="hero-visual-center">
          <div className="pct">94%</div>
          <div className="lbl">Average match score</div>
        </div>
        <div className="orbit-chip c1">Product Design</div>
        <div className="orbit-chip c2">React</div>
        <div className="orbit-chip c3">Figma</div>
      </div>
    </section>
  );
}
