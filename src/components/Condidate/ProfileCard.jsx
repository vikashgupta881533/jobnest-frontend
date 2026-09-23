import React from "react";

const ProfileCard = () => {

  return (
    <section className="profile-card">

      <div className="profile-header">

        <div className="profile-avatar">
          DG
        </div>

        <div className="profile-info">

          <h3>
            Dhruv Gupta
          </h3>

          <p>
            Frontend Developer
          </p>

        </div>

        <button className="edit-profile">
          ✎
        </button>

      </div>


      <div className="profile-strength">

        <div className="strength-top">

          <span>
            Profile strength
          </span>

          <strong>
            82%
          </strong>

        </div>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <p>
          Great! You're almost there.
        </p>

      </div>


      <div className="profile-completion">

        <div>
          <span>Resume</span>
          <strong>✓</strong>
        </div>

        <div>
          <span>Skills</span>
          <strong>✓</strong>
        </div>

        <div>
          <span>Experience</span>
          <strong>+</strong>
        </div>

      </div>

    </section>
  );
};

export default ProfileCard;