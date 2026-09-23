import React from "react";
import "../../components/site.css";
import "../../components/FeaturedJobs.css";

const articles = [
  { title: "How to write a resume recruiters actually read", tag: "Resume", read: "5 min read" },
  { title: "The STAR method: answering behavioral interview questions", tag: "Interviews", read: "7 min read" },
  { title: "When to negotiate salary (and when not to)", tag: "Salary", read: "4 min read" },
  { title: "Switching careers at 30: a practical guide", tag: "Career change", read: "8 min read" },
  { title: "Remote work etiquette nobody tells you about", tag: "Remote work", read: "6 min read" },
  { title: "How to follow up after an interview without sounding desperate", tag: "Interviews", read: "3 min read" },
];

export default function CareerAdvice() {
  return (
    <div className="section">
      <div className="section-head">
        <div className="kicker">Career advice</div>
        <h2>Practical, no-fluff advice for your job search</h2>
        <p>Short reads from people who've actually hired and been hired.</p>
      </div>

      <div className="cat-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {articles.map((a) => (
          <div className="cat-card" key={a.title}>
            <span className="fj-tag" style={{ marginBottom: 14, display: "inline-block" }}>{a.tag}</span>
            <div className="name" style={{ fontSize: 16, marginBottom: 8, lineHeight: 1.4 }}>{a.title}</div>
            <div className="count">{a.read}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
