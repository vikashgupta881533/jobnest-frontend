import React from "react";

const QuickActions = () => {

  return (
    <section className="quick-actions">

      <div className="side-section-title">
        Quick Actions
      </div>

      <button className="quick-action">
        <span>＋</span>
        <div>
          <strong>Upload Resume</strong>
          <small>Keep your resume updated</small>
        </div>
        <b>→</b>
      </button>


      <button className="quick-action">
        <span>♢</span>
        <div>
          <strong>Set Job Alerts</strong>
          <small>Get notified about new jobs</small>
        </div>
        <b>→</b>
      </button>


      <button className="quick-action">
        <span>♙</span>
        <div>
          <strong>Update Profile</strong>
          <small>Improve your profile</small>
        </div>
        <b>→</b>
      </button>

    </section>
  );
};

export default QuickActions;