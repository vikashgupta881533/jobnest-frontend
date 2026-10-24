import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../../api/axios";

const authHeader = () => ({ headers: { authorization: localStorage.getItem("token") } });

export default function CandidateProfile() {
  const [profile, setProfile] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);

  const [form, setForm] = useState({
    headline: "", location: "", skills: "", experience: "",
  });

  const fetchProfile = () => {
    api.get("/profile", authHeader())
      .then((res) => {
        setProfile(res.data);
        setForm({
          headline: res.data.headline || "",
          location: res.data.location || "",
          skills: res.data.skills || "",
          experience: res.data.experience || "",
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    api.patch("/profile", form, authHeader())
      .then(() => alert("Profile updated!"))
      .catch((err) => { alert("Update failed, please try again"); console.log(err); });
  };

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
      .then((res) => {
        alert("Photo updated!");
        setProfile(res.data);
      })
      .catch((err) => {
        alert(err.response?.data || "Upload failed");
        console.log(err);
      });
  };

  return (
    <>
      {/* ---------- Name + DP ---------- */}
      <div className="panel" style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 20 }}>
        {profile?.profilePhoto ? (
          <img
            src={`${api.defaults.baseURL}${profile.profilePhoto}`}
            alt="profile"
            className="avatar-large"
          />
        ) : (
          <div className="avatar-large-placeholder">
            {profile?.name ? profile.name[0].toUpperCase() : "C"}
          </div>
        )}

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 20, marginBottom: 4 }}>
            {profile?.name || "Loading..."}
          </div>
          <div style={{ color: "var(--muted)", fontSize: 13, marginBottom: 12 }}>
            {profile?.email}
          </div>

          <input
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={(e) => setPhotoFile(e.target.files[0])}
            style={{ marginBottom: 8, maxWidth: "100%" }}
          />
          <br />
          <button className="btn-mini" onClick={handlePhotoUpload}>Update photo</button>
        </div>
      </div>

      {/* ---------- Editable profile fields ---------- */}
      <form className="panel" onSubmit={handleSave}>
        <h2>Your profile</h2>
        <p className="panel-sub">Recruiters see this when they view your application</p>

        <input
          name="headline"
          placeholder="Headline (e.g. Product Designer)"
          value={form.headline}
          onChange={handleChange}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />
        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />
        <input
          name="skills"
          placeholder="Skills (comma separated)"
          value={form.skills}
          onChange={handleChange}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />
        <input
          name="experience"
          type="number"
          placeholder="Years of experience"
          value={form.experience}
          onChange={handleChange}
          style={{ width: "100%", padding: 10, marginBottom: 12 }}
        />

        <button type="submit" className="btn-mini">Save profile</button>
      </form>
    </>
  );
}
