import React from "react";

const Skills = () => {

  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "MongoDB"
  ];

  return (
    <section className="skills-section">

      <div className="side-section-title">
        Your Skills
      </div>

      <div className="skills-list">

        {skills.map((skill, index) => (

          <span className="skill-tag" key={index}>
            {skill}
          </span>

        ))}

      </div>

    </section>
  );
};

export default Skills;