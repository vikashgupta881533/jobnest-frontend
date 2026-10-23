import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../components/site.css";
import api from "../../api/axios";

export default function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    api.get("/companies")
      .then((res) => setCompanies(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="section">
      <div className="section-head">
        <div className="kicker">Companies</div>
        <h2>Hiring on Meridian right now</h2>
        <p>Every company here has at least one live, verified job listing.</p>
      </div>

      {companies.length === 0 && <p style={{ color: "var(--s-muted)" }}>No companies are hiring right now — check back soon.</p>}

      <div className="company-grid">
        {companies.map((c) => (
          <Link to="/jobs" className="company-tile" key={c._id} style={{ display: "block" }}>
            <div className="mark">{c._id ? c._id.slice(0, 2).toUpperCase() : "??"}</div>
            <div className="cname">{c._id || "Unknown"}</div>
            <div style={{ fontSize: 11, color: "var(--s-muted-2)", marginTop: 4 }}>
              {c.openRoles} open role{c.openRoles !== 1 ? "s" : ""}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
