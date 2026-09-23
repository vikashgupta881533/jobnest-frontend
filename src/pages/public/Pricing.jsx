import React from "react";
import { Link } from "react-router-dom";
import "../../components/site.css";

const plans = [
  {
    name: "Starter", price: "Free", tag: "For occasional hiring",
    features: ["1 active job listing", "Basic applicant tracking", "Email support"],
  },
  {
    name: "Growth", price: "₹4,999/mo", tag: "For growing teams", highlight: true,
    features: ["10 active job listings", "Full pipeline + messaging", "Priority listing approval", "Priority support"],
  },
  {
    name: "Enterprise", price: "Talk to us", tag: "For high-volume hiring",
    features: ["Unlimited job listings", "Dedicated account manager", "Custom integrations", "SLA-backed support"],
  },
];

export default function Pricing() {
  return (
    <div className="section">
      <div className="section-head">
        <div className="kicker">Pricing</div>
        <h2>Simple pricing for every hiring team</h2>
        <p>No hidden fees. Cancel anytime.</p>
      </div>

      <div className="cat-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {plans.map((p) => (
          <div
            className="cat-card"
            key={p.name}
            style={p.highlight ? { borderColor: "var(--s-gold)", boxShadow: "0 10px 30px rgba(169,130,62,0.12)" } : {}}
          >
            <div style={{ fontSize: 12.5, color: "var(--s-gold)", fontWeight: 600, marginBottom: 10 }}>{p.tag}</div>
            <div className="name" style={{ fontSize: 20, marginBottom: 4 }}>{p.name}</div>
            <div style={{ fontFamily: "var(--s-serif)", fontSize: 26, marginBottom: 18 }}>{p.price}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
              {p.features.map((f) => (
                <li key={f} style={{ fontSize: 13.5, color: "var(--s-muted)", marginBottom: 10 }}>✓ {f}</li>
              ))}
            </ul>
            <Link
              to="/signup"
              state={{ role: "recruiter" }}
              className={p.highlight ? "mbtn mbtn-solid mbtn-full" : "mbtn mbtn-full"}
            >
              Get started
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
