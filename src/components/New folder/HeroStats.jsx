function HeroStats() {
  return (
    <div className="hero-stats">

      <div className="floating-card card-one">

        <div className="stat-icon">
          💼
        </div>

        <div>
          <h3>10K+</h3>
          <p>Active Jobs</p>
        </div>

      </div>


      <div className="floating-card card-two">

        <div className="stat-icon">
          🏢
        </div>

        <div>
          <h3>2.5K+</h3>
          <p>Companies</p>
        </div>

      </div>


      <div className="floating-card card-three">

        <div className="stat-icon">
          👨‍💻
        </div>

        <div>
          <h3>50K+</h3>
          <p>Job Seekers</p>
        </div>

      </div>


      <div className="hero-circle">
        <span>🚀</span>
      </div>

    </div>
  );
}

export default HeroStats;