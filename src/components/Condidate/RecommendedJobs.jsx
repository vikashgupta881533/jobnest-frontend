import React from "react";

const jobs = [
  {
    company: "Google",
    role: "Frontend Developer",
    location: "Bangalore, India",
    type: "Full Time",
    salary: "₹12L - ₹20L",
    match: "95%",
    logo: "G"
  },
  {
    company: "Microsoft",
    role: "React Developer",
    location: "Hyderabad, India",
    type: "Full Time",
    salary: "₹10L - ₹18L",
    match: "91%",
    logo: "M"
  },
  {
    company: "Amazon",
    role: "Frontend Engineer",
    location: "Bangalore, India",
    type: "Full Time",
    salary: "₹11L - ₹19L",
    match: "88%",
    logo: "A"
  }
];

const RecommendedJobs = () => {

  return (
    <section className="jobs-section">

      <div className="section-heading">

        <div>
          <span className="section-label">
            FOR YOU
          </span>

          <h2>
            Recommended Jobs
          </h2>

          <p>
            Roles selected based on your profile
          </p>
        </div>

        <button className="view-all">
          View all →
        </button>

      </div>


      <div className="jobs-list">

        {jobs.map((job, index) => (

          <div className="job-card" key={index}>

            <div className="company-logo">
              {job.logo}
            </div>

            <div className="job-main">

              <h3>
                {job.role}
              </h3>

              <strong>
                {job.company}
              </strong>

              <div className="job-details">
                <span>⌖ {job.location}</span>
                <span>◷ {job.type}</span>
                <span>₹ {job.salary}</span>
              </div>

            </div>

            <div className="job-match">
              {job.match} match
            </div>

            <button className="save-job">
              ♡
            </button>

          </div>

        ))}

      </div>

    </section>
  );
};

export default RecommendedJobs;