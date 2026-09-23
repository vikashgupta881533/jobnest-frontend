import React from "react";
import useReveal from "../hooks/useReveal";
import "./site.css";

const categories = [
  { icon: "💻", name: "Engineering", count: "2,140 open roles" },
  { icon: "🎨", name: "Design", count: "640 open roles" },
  { icon: "📈", name: "Marketing", count: "910 open roles" },
  { icon: "💼", name: "Sales", count: "1,280 open roles" },
];

export default function CategorySection() {
  const [ref, inView] = useReveal();

  return (
    <section className="section">
      <div className="section-head">
        <div className="kicker">Browse by category</div>
        <h2>Whatever you're looking for, it's here</h2>
        <p>From engineering to design to operations — explore roles across every discipline.</p>
      </div>

      <div ref={ref} className={`cat-grid reveal-stagger ${inView ? "in-view" : ""}`}>
        {categories.map((c) => (
          <div className="cat-card" key={c.name}>
            <div className="icon">{c.icon}</div>
            <div className="name">{c.name}</div>
            <div className="count">{c.count}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
