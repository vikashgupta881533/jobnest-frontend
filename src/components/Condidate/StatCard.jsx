import React from "react";

const StatCard = ({
  title,
  number,
  color,
  icon,
  change
}) => {
  return (
    <div className="statCard">

      <div
        className="statIcon"
        style={{ background: color }}
      >
        {icon}
      </div>

      <div className="statContent">

        <span>{title}</span>

        <div className="statNumber">
          <strong>{number}</strong>

          <small>
            ↑ {change}
          </small>
        </div>

        <p>vs last 7 days</p>

      </div>

    </div>
  );
};

export default StatCard;