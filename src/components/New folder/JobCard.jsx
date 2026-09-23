function JobCard({
  logo,
  title,
  company,
  location,
  salary,
  type,
  experience,
  skills,
  posted
}) {
  return (
    <div className="job-card">

      {/* Top */}

      <div className="job-card-top">

        <div className="company-logo">
          {logo}
        </div>

        <button className="save-job">
          ♡
        </button>

      </div>


      {/* Job Info */}

      <div className="job-info">

        <h3>{title}</h3>

        <p className="company-name">
          {company}
        </p>


        {/* Details */}

        <div className="job-details">

          <span>
            📍 {location}
          </span>

          <span>
            💰 {salary}
          </span>

        </div>


        {/* Skills */}

        <div className="job-skills">

          {skills.map((skill, index) => (
            <span key={index}>
              {skill}
            </span>
          ))}

        </div>

      </div>


      {/* Bottom */}

      <div className="job-card-bottom">

        <div>

          <span className="job-type">
            {type}
          </span>

          <span className="job-experience">
            {experience}
          </span>

        </div>

        <small>
          {posted}
        </small>

      </div>


      <button className="view-job-btn">
        View Job →
      </button>

    </div>
  );
}

export default JobCard;