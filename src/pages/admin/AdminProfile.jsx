import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../../api/axios";

const authHeader = () => ({ headers: { authorization: localStorage.getItem("token") } });

export default function AdminProfile() {
  const [profile, setProfile] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);

  const fetchProfile = () => {
    api.get("/profile", authHeader())
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handlePhotoUpload = () => {
    if (!photoFile) {
      alert("Please choose a photo first");
      return;
    }
    const formData = new FormData();
    formData.append("photo", photoFile);

    api.post("/profile/photo", formData, {
      headers: {
        authorization: localStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => { alert("Photo updated!"); setProfile(res.data); })
      .catch((err) => { alert(err.response?.data || "Upload failed"); console.log(err); });
  };

  return (
    <div className="panel" style={{ display: "flex", alignItems: "center", gap: 20 }}>
      {profile?.profilePhoto ? (
        <img src={`${api.defaults.baseURL}${profile.profilePhoto}`} alt="profile" className="avatar-large" />
      ) : (
        <div className="avatar-large-placeholder">
          {profile?.name ? profile.name[0].toUpperCase() : "A"}
        </div>
      )}

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "var(--serif)", fontSize: 20, marginBottom: 4 }}>
          {profile?.name || "Loading..."}
        </div>
        <div style={{ color: "var(--muted)", fontSize: 13, marginBottom: 12 }}>
          {profile?.email} · Platform admin
        </div>

        <input type="file" accept=".jpg,.jpeg,.png" onChange={(e) => setPhotoFile(e.target.files[0])} style={{ marginBottom: 8, maxWidth: "100%" }} />
        <br />
        <button className="btn-mini" onClick={handlePhotoUpload}>Update photo</button>
      </div>
    </div>
  );
}
