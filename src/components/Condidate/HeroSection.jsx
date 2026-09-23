import React from "react";

const HeroSection = () => {

  return (
    <section className="hero-section">

      <div className="hero-content">

        <div className="greeting">
          ✦ &nbsp; Good Morning, Dhruv
        </div>

        <h1>
          Your next opportunity
          <br />
          is waiting.
        </h1>

        <p>
          Discover roles that match your skills, experience and career goals.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Explore Jobs &nbsp; →
          </button>

          <button className="secondary-btn">
            Complete Profile
          </button>

        </div>

      </div>


      {/* Hero Visual */}
      <div className="hero-visual">

        <div className="circle circle-one"></div>
        <div className="circle circle-two"></div>
        <div className="circle circle-three"></div>

        <div className="person-head">
          DG
        </div>

        <div className="person-body"></div>


        <div className="profile-view-card">

          <div className="mini-icon">
            ✓
          </div>

          <div>
            <strong>Profile viewed</strong>
            <small>Google viewed your profile</small>
          </div>

        </div>


        <div className="match-card">

          <div className="mini-icon">
            ↗
          </div>

          <div>
            <strong>95% Match</strong>
            <small>Frontend Developer</small>
          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;