import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaRupeeSign,
  FaHeart,
  FaCheckCircle
} from "react-icons/fa";

const jobs = [
  {
    company: "Google",
    role: "Frontend Developer",
    location: "Bangalore",
    type: "Full Time",
    salary: "18 - 22 LPA",
    match: "95%",
    skills: ["React", "JavaScript", "TypeScript"],
    logo: "G"
  },
  {
    company: "Microsoft",
    role: "React Developer",
    location: "Hyderabad",
    type: "Full Time",
    salary: "15 - 20 LPA",
    match: "92%",
    skills: ["React", "Node.js", "MongoDB"],
    logo: "M"
  },
  {
    company: "Amazon",
    role: "UI/UX Designer",
    location: "Pune",
    type: "Hybrid",
    salary: "12 - 18 LPA",
    match: "88%",
    skills: ["Figma", "Adobe XD", "UI/UX"],
    logo: "A"
  }
];

const JobCard = () => {

  return (
    <section className="jobsSection">

      <div className="sectionHeader">

        <div className="sectionHeading">

          <div className="sectionIcon">
            ✦
          </div>

          <div>
            <h2>Recommended Jobs</h2>
            <p>
              Jobs based on your skills and profile
            </p>
          </div>

        </div>

        <button className="viewAllBtn">
          View All →
        </button>

      </div>

      <div className="jobsGrid">

        {jobs.map((job, index) => (

          <article
            className="jobCard"
            key={index}
          >

            <div className="jobTop">

              <div className="companyLogo">
                {job.logo}
              </div>

              <button className="heartBtn">
                <FaHeart />
              </button>

            </div>

            <div className="jobTitle">

              <h3>{job.company}</h3>

              <FaCheckCircle />

              <p>{job.role}</p>

            </div>

            <div className="jobMeta">

              <span>
                <FaMapMarkerAlt />
                {job.location}
              </span>

              <span>
                <FaClock />
                {job.type}
              </span>

            </div>

            <div className="jobSalary">
              <FaRupeeSign />
              {job.salary}
            </div>

            <div className="skills">

              {job.skills.map((skill, i) => (
                <span key={i}>
                  {skill}
                </span>
              ))}

            </div>

            <div className="jobBottom">

              <span className="matchBadge">
                {job.match} Match
              </span>

              <button className="applyButton">
                Apply Now →
              </button>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
};

export default JobCard;