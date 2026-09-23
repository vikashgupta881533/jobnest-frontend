import React from "react";

export default function Hero({ title, subtitle, metricValue, metricLabel }) {
  return (
    <div className="hero">
      <div className="hero-ring r2"></div>
      <div className="hero-ring"></div>
      <div className="hero-ring r3"></div>
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="hero-metric">
        <div className="n">{metricValue}</div>
        <div className="l">{metricLabel}</div>
      </div>
    </div>
  );
}
