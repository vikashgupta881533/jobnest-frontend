import React from "react";
import "../../components/site.css";

const rows = [
  { role: "Product Designer", junior: "₹6–10L", mid: "₹14–22L", senior: "₹28–40L" },
  { role: "Backend Engineer", junior: "₹7–12L", mid: "₹16–26L", senior: "₹30–48L" },
  { role: "Frontend Engineer", junior: "₹6–11L", mid: "₹15–24L", senior: "₹28–42L" },
  { role: "Product Manager", junior: "₹9–14L", mid: "₹20–32L", senior: "₹38–60L" },
  { role: "Growth Marketer", junior: "₹5–9L", mid: "₹12–20L", senior: "₹24–36L" },
  { role: "Data Analyst", junior: "₹5–8L", mid: "₹11–18L", senior: "₹22–32L" },
  { role: "QA Engineer", junior: "₹4–7L", mid: "₹9–15L", senior: "₹18–26L" },
];

export default function SalaryGuide() {
  return (
    <div className="section">
      <div className="section-head">
        <div className="kicker">Salary guide</div>
        <h2>What roles are actually paying in 2026</h2>
        <p>Based on live listings across Meridian. Actuals vary by city, company size, and stage.</p>
      </div>

      <div className="panel-table-wrap" style={{ border: "1px solid var(--s-line)", borderRadius: "var(--s-radius-m)", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ background: "var(--s-panel)", borderBottom: "1px solid var(--s-line)" }}>
              <th style={{ textAlign: "left", padding: "16px 20px", color: "var(--s-muted)", fontSize: 12.5, fontWeight: 600 }}>Role</th>
              <th style={{ textAlign: "left", padding: "16px 20px", color: "var(--s-muted)", fontSize: 12.5, fontWeight: 600 }}>Junior (0–2 yrs)</th>
              <th style={{ textAlign: "left", padding: "16px 20px", color: "var(--s-muted)", fontSize: 12.5, fontWeight: 600 }}>Mid (3–6 yrs)</th>
              <th style={{ textAlign: "left", padding: "16px 20px", color: "var(--s-muted)", fontSize: 12.5, fontWeight: 600 }}>Senior (7+ yrs)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.role} style={{ borderBottom: "1px solid var(--s-line)", background: "#fff" }}>
                <td style={{ padding: "16px 20px", fontWeight: 600 }}>{r.role}</td>
                <td style={{ padding: "16px 20px", color: "var(--s-muted)" }}>{r.junior}</td>
                <td style={{ padding: "16px 20px", color: "var(--s-muted)" }}>{r.mid}</td>
                <td style={{ padding: "16px 20px", color: "var(--s-gold)", fontWeight: 600 }}>{r.senior}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
