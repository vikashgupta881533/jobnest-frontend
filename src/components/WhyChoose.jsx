import React from "react";
import useReveal from "../hooks/useReveal";
import "./site.css";

const items = [
  { icon: "✓", title: "Verified employers only", text: "Every company is reviewed by our team before they can post — no fake listings, no ghosting." },
  { icon: "⚡", title: "Apply in one click", text: "Your profile and resume are saved once — apply to dozens of roles without re-typing anything." },
  { icon: "💬", title: "Talk directly to recruiters", text: "Message hiring managers directly once you apply — no black-hole applications." },
];

export default function WhyChoose() {
  const [ref, inView] = useReveal();

  return (
    <section className="section" style={{ background: "var(--panel)" }}>
      <div className="section-head">
        <div className="kicker">Why Meridian</div>
        <h2>Built for people who are serious about their next move</h2>
      </div>

      <div ref={ref} className={`why-grid reveal-stagger ${inView ? "in-view" : ""}`}>
        {items.map((item) => (
          <div className="why-item" key={item.title}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
