import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CandidateResume() {
  const [profile, setProfile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);

  const fetchProfile = () => {
    axios.get("http://localhost:6100/profile", {
      headers: { authorization: localStorage.getItem("token") },
    })
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleUpload = () => {
    if (!resumeFile) {
      alert("Please choose a file first");
      return;
    }
    const formData = new FormData();
    formData.append("resume", resumeFile);

    axios.post("http://localhost:6100/profile/resume", formData, {
      headers: {
        authorization: localStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        alert("Resume uploaded!");
        setProfile(res.data);
      })
      .catch((err) => {
        alert(err.response?.data || "Upload failed");
        console.log(err);
      });
  };

  return (
    <div className="panel">
      <h2>Resume</h2>
      <p className="panel-sub">PDF, DOC ya DOCX — max 5MB</p>

      {profile?.resume && (
        <p>
          Current resume:{" "}
          <a href={`http://localhost:6100${profile.resume}`} target="_blank" rel="noreferrer">
            View uploaded resume
          </a>
        </p>
      )}

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => setResumeFile(e.target.files[0])}
        style={{ marginBottom: 12 }}
      />
      <br />
      <button className="btn-mini" onClick={handleUpload}>Upload resume</button>
    </div>
  );
}
