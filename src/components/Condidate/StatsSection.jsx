import React from "react";

const stats = [
  {
    icon: "↗",
    title: "Applications",
    value: "24",
    change: "+12%",
    text: "this month",
    className: "blue"
  },
  {
    icon: "♡",
    title: "Saved Jobs",
    value: "15",
    change: "+4",
    text: "this week",
    className: "purple"
  },
  {
    icon: "✓",
    title: "Interviews",
    value: "05",
    change: "2",
    text: "upcoming",
    className: "green"
  },
  {
    icon: "★",
    title: "Profile Views",
    value: "128",
    change: "+24%",
    text: "this week",
    className: "orange"
  }
];

const StatsSection = () => {

  return (
    <section className="stats-grid">

      {stats.map((stat, index) => (

        <div className="stat-card" key={index}>

          <div className={`stat-icon ${stat.className}`}>
            {stat.icon}
          </div>

          <div className="stat-info">

            <span>
              {stat.title}
            </span>

            <h3>
              {stat.value}
            </h3>

            <p>
              <strong>{stat.change}</strong>{" "}
              {stat.text}
            </p>

          </div>

        </div>

      ))}

    </section>
  );
};

export default StatsSection;