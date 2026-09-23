import React, { useState, useEffect } from "react";
import axios from "axios";

const authHeader = () => ({ headers: { authorization: localStorage.getItem("token") } });

const stages = [
  { key: "applied", label: "New" },
  { key: "shortlisted", label: "Shortlisted" },
  { key: "interview", label: "Interview" },
  { key: "offer", label: "Offer" },
  { key: "hired", label: "Hired" },
];

export default function RecruiterPipeline() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:6100/applications/recruiter", authHeader())
      .then((res) => setApplications(res.data))
      .catch((err) => console.log(err));
  }, []);

  const forStage = (key) => applications.filter((a) => a.status === key);
  const maxCount = Math.max(1, ...stages.map((s) => forStage(s.key).length));

  return (
    <div className="pipeline">
      {stages.map((stage) => {
        const list = forStage(stage.key);
        return (
          <div className="stage" key={stage.key}>
            <div className="stage-head">
              <div className="name">{stage.label}</div>
              <div className="count">{list.length}</div>
            </div>
            <div className="stage-bar">
              <i style={{ width: `${(list.length / maxCount) * 100}%` }}></i>
            </div>
            {list.length === 0 && <p className="panel-sub">None</p>}
            {list.map((a) => (
              <div className="cand-card" key={a._id}>
                <div className="cn">{a.candidate?.name}</div>
                <div className="cr">{a.job?.title}</div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
