import React from "react";
import {
  FaHeart,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaChevronRight
} from "react-icons/fa";

const savedJobs = [
  {
    company: "Google",
    role: "Frontend Developer",
    location: "Bangalore",
    salary: "18 - 22 LPA",
    logo: "G"
  },
  {
    company: "Adobe",
    role: "UI/UX Designer",
    location: "Remote",
    salary: "14 - 18 LPA",
    logo: "A"
  }
];

const SavedJobs = () => {
  return (
    <section className="sideCard savedCard">

      <div className="savedHeader">

        <h3>Saved Jobs</h3>

        <button>
          View All →
        </button>

      </div>

      <div className="savedList">

        {savedJobs.map((job, index) => (

          <div
            className="savedJob"
            key={index}
          >

            <div className="savedLogo">
              {job.logo}
            </div>

            <div className="savedInfo">

              <h4>{job.role}</h4>

              <p>
                {job.company} • {job.location}
              </p>

              <span>
                <FaRupeeSign />
                {job.salary}
              </span>

            </div>

            <div className="savedArrow">
              <FaHeart />
              <FaChevronRight />
            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default SavedJobs;