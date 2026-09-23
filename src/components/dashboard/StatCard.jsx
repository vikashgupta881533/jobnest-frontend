import React from "react";

/**
 * Standard stat card:
 *   <StatCard label="Active job seekers" icon={<UsersIcon/>} value="84,210"
 *              delta="▲ 3.2%" deltaType="up" spark="0,18 10,15 20,16 30,10 40,12 50,5 60,3" />
 *
 * Ring variant (used once, for "profile strength"):
 *   <StatCard label="Profile strength" ring percent={82} ringSub="3 items left" />
 */
export default function StatCard({
  label,
  icon,
  value,
  delta,
  deltaType = "up",
  spark,
  ring = false,
  percent = 0,
  ringSub,
}) {
  if (ring) {
    const r = 26;
    const circumference = 2 * Math.PI * r;
    const offset = circumference * (1 - percent / 100);
    return (
      <div className="stat">
        <div className="stat-top">
          <div className="label">{label}</div>
        </div>
        <div className="ring-wrap">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r={r} fill="none" stroke="var(--line)" strokeWidth="6" />
            <circle
              cx="30"
              cy="30"
              r={r}
              fill="none"
              stroke="var(--gold)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform="rotate(-90 30 30)"
            />
          </svg>
          <div>
            <div className="ring-num">{percent}%</div>
            <div className="ring-label">{ringSub}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="stat">
      <div className="stat-top">
        <div className="label">{label}</div>
        {icon && <div className="stat-icon">{icon}</div>}
      </div>
      <div className="value">{value}</div>
      <div className="stat-foot">
        {delta && <span className={`delta ${deltaType}`}>{delta}</span>}
        {spark && (
          <svg className="spark" width="60" height="22" viewBox="0 0 60 22">
            <polyline
              points={spark}
              fill="none"
              stroke={deltaType === "down" ? "var(--rust)" : "var(--teal)"}
              strokeWidth="2"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
