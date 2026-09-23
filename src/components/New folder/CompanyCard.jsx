function CompanyCard({
  logo,
  name,
  industry,
  rating,
  jobs,
  location
}) {
  return (
    <div className="company-card">

      <div className="company-card-top">
        <div className="company-logo-circle">
          {logo}
        </div>

        <span className="company-rating">
          ⭐ {rating}
        </span>
      </div>

      <div className="company-content">
        <h3>{name}</h3>
        <p className="industry">{industry}</p>

        <div className="company-meta">
          <span>📍 {location}</span>
          <span>💼 {jobs} Jobs</span>
        </div>
      </div>

      <button className="company-btn">
        View Company →
      </button>

    </div>
  );
}

export default CompanyCard;