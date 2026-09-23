import React, { useState, useEffect } from "react";
import axios from "axios";

const authHeader = () => ({ headers: { authorization: localStorage.getItem("token") } });

export default function RecruiterProfile() {
  const [profile, setProfile] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);

  const [form, setForm] = useState({
    companyName: "", headline: "", location: "", bio: "",
  });

  const fetchProfile = () => {
    axios.get("http://localhost:6100/profile", authHeader())
      .then((res) => {
        setProfile(res.data);
        setForm({
          companyName: res.data.companyName || "",
          headline: res.data.headline || "",
          location: res.data.location || "",
          bio: res.data.bio || "",
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = (e) => {
    e.preventDefault();
    axios.patch("http://localhost:6100/profile", form, authHeader())
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

    axios.post("http://localhost:6100/profile/photo", formData, {
      headers: {
        authorization: localStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => { alert("Photo updated!"); setProfile(res.data); })
      .catch((err) => { alert(err.response?.data || "Upload failed"); console.log(err); });
  };

  return (
    <>
      <div className="panel" style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 20 }}>
        {profile?.profilePhoto ? (
          <img src={`http://localhost:6100${profile.profilePhoto}`} alt="profile" className="avatar-large" />
        ) : (
          <div className="avatar-large-placeholder">
            {profile?.name ? profile.name[0].toUpperCase() : "R"}
          </div>
        )}

        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 20, marginBottom: 4 }}>
            {profile?.name || "Loading..."}
          </div>
          <div style={{ color: "var(--muted)", fontSize: 13, marginBottom: 12 }}>
            {profile?.email} {profile?.isApproved ? "· Approved recruiter" : "· Pending approval"}
          </div>

          <input type="file" accept=".jpg,.jpeg,.png" onChange={(e) => setPhotoFile(e.target.files[0])} style={{ marginBottom: 8 }} />
          <br />
          <button className="btn-mini" onClick={handlePhotoUpload}>Update photo</button>
        </div>
      </div>

      <form className="panel" onSubmit={handleSave}>
        <h2>Company profile</h2>
        <p className="panel-sub">Candidates see this when they view your job postings</p>

        <input
          name="companyName"
          placeholder="Company name"
          value={form.companyName}
          onChange={handleChange}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />
        <input
          name="headline"
          placeholder="Your role (e.g. Talent Acquisition Lead)"
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
        <textarea
          name="bio"
          placeholder="About the company"
          value={form.bio}
          onChange={handleChange}
          rows={4}
          style={{ width: "100%", padding: 10, marginBottom: 12 }}
        />

        <button type="submit" className="btn-mini">Save profile</button>
      </form>
    </>
  );
}
