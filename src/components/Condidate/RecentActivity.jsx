import React from "react";

const activities = [
  {
    icon: "✓",
    title: "Application viewed",
    company: "Google viewed your application",
    time: "2 hours ago"
  },
  {
    icon: "↗",
    title: "Application submitted",
    company: "Frontend Developer at Microsoft",
    time: "Yesterday"
  },
  {
    icon: "♡",
    title: "Job saved",
    company: "Frontend Engineer at Amazon",
    time: "2 days ago"
  }
];

const RecentActivity = () => {

  return (
    <section className="activity-section">

      <div className="section-heading">

        <div>
          <span className="section-label">
            ACTIVITY
          </span>

          <h2>
            Recent Activity
          </h2>
        </div>

        <button className="view-all">
          View all →
        </button>

      </div>


      <div className="activity-list">

        {activities.map((activity, index) => (

          <div className="activity-item" key={index}>

            <div className="activity-icon">
              {activity.icon}
            </div>

            <div className="activity-content">

              <strong>
                {activity.title}
              </strong>

              <p>
                {activity.company}
              </p>

            </div>

            <span className="activity-time">
              {activity.time}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
};

export default RecentActivity;