import React from "react";
import useReveal from "../hooks/useReveal";
import "./site.css";

const companies = [
  { code: "SA", name: "Solace Analytics" },
  { code: "NF", name: "Northbridge Foods" },
  { code: "KL", name: "Kestrel Logistics" },
  { code: "FH", name: "Farrow & Hale" },
  { code: "VR", name: "Vantage Retail" },
  { code: "AH", name: "Aster Health" },
];

export default function TopCompanies() {
  const [ref, inView] = useReveal();

  return (
    <section className="section">
      <div className="section-head">
        <div className="kicker">Top companies</div>
        <h2>Hiring on Meridian right now</h2>
      </div>

      <div ref={ref} className={`company-grid reveal-stagger ${inView ? "in-view" : ""}`}>
        {companies.map((c) => (
          <div className="company-tile" key={c.code}>
            <div className="mark">{c.code}</div>
            <div className="cname">{c.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
